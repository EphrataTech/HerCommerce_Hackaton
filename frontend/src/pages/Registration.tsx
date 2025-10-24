import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Facebook, Instagram, ShoppingBag } from "lucide-react";

type SocialAccounts = {
  facebook: string;
  instagram: string;
  tiktok: string;
  telegram: string;
};

type EcommerceAccounts = {
  jumia: string;
  other: string;
};

type FormState = {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  businessType: string;
  socialAccounts: SocialAccounts;
  ecommerceAccounts: EcommerceAccounts;
};

const DRAFT_KEY = "adeybiz_registration_draft";

const initialState: FormState = {
  businessName: "",
  ownerName: "",
  email: "",
  phone: "",
  businessType: "",
  socialAccounts: {
    facebook: "",
    instagram: "",
    tiktok: "",
    telegram: "",
  },
  ecommerceAccounts: {
    jumia: "",
    other: "",
  },
};

const emailRegex = /^\S+@\S+\.\S+$/;

const SOCIAL_GUIDES: Record<keyof SocialAccounts, string> = {
  facebook: "https://www.facebook.com/pages/create/",
  instagram: "https://www.instagram.com/accounts/signup/",
  tiktok: "https://www.tiktok.com/signup",
  telegram: "https://telegram.org/",
};

const ECOMMERCE_GUIDES: Record<keyof EcommerceAccounts, string> = {
  jumia: "https://sellercenter.jumia.com/",
  other:
    "https://www.shopify.com/ or https://www.etsy.com/ or https://www.bigcommerce.com/",
};

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState | string, string>>
  >({});

  useEffect(() => {
    // load draft if exists
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<FormState>;
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    // auto-save draft whenever formData changes
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSocialChange = (
    platform: keyof SocialAccounts,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      socialAccounts: { ...prev.socialAccounts, [platform]: value },
    }));
    setErrors((prev) => ({ ...prev, [platform]: undefined }));
  };

  const handleEcommerceChange = (
    platform: keyof EcommerceAccounts,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      ecommerceAccounts: { ...prev.ecommerceAccounts, [platform]: value },
    }));
    setErrors((prev) => ({ ...prev, [platform]: undefined }));
  };

  const openExternal = (url: string) => {
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      // fallback
      window.location.href = url;
    }
  };

  const validateUrl = (value: string) => {
    if (!value) return true;
    try {
      // require protocol for external links
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const validateStep = (currentStep = step): boolean => {
    const newErrors: Partial<Record<string, string>> = {};

    if (currentStep === 1) {
      if (!formData.businessName.trim())
        newErrors.businessName = "Business name is required";
      if (!formData.ownerName.trim())
        newErrors.ownerName = "Owner name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!emailRegex.test(formData.email))
        newErrors.email = "Enter a valid email";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^[\d+\-\s()]{7,}$/.test(formData.phone))
        newErrors.phone = "Enter a valid phone number";
      if (!formData.businessType)
        newErrors.businessType = "Please select a business type";
    }

    if (currentStep === 2) {
      const socials = formData.socialAccounts;
      Object.keys(socials).forEach((k) => {
        const v = (socials as any)[k] as string;
        if (v && !validateUrl(v))
          newErrors[k] = "Enter a valid URL (include https://)";
      });
    }

    if (currentStep === 3) {
      const ecommerce = formData.ecommerceAccounts;
      Object.keys(ecommerce).forEach((k) => {
        const v = (ecommerce as any)[k] as string;
        if (v && !validateUrl(v))
          newErrors[k] = "Enter a valid URL (include https://)";
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (validateStep(step)) setStep((prev) => Math.min(prev + 1, 3));
  };

  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const clearDraft = () => {
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-secondary-lightGray">
      {/* Header */}
      <header className="bg-secondary-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="AdeyBiz" className="h-10 w-auto" />
              <span className="ml-3 text-2xl font-bold text-primary-black">
                AdeyBiz
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center text-secondary-mediumGray hover:text-primary-black"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-primary-black">
              Step {step} of 3
            </span>
            <span className="text-sm text-secondary-mediumGray">
              {Math.round((step / 3) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-orange h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-secondary-white rounded-lg shadow-lg p-8">
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-black mb-2">
                Business Information
              </h2>
              <p className="text-secondary-mediumGray mb-8">
                Tell us about your business
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) =>
                      handleInputChange("businessName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="Enter your business name"
                    aria-invalid={!!errors.businessName}
                    aria-describedby={
                      errors.businessName ? "err-businessName" : undefined
                    }
                  />
                  {errors.businessName && (
                    <p
                      id="err-businessName"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.businessName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) =>
                      handleInputChange("ownerName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="Enter your full name"
                    aria-invalid={!!errors.ownerName}
                    aria-describedby={
                      errors.ownerName ? "err-ownerName" : undefined
                    }
                  />
                  {errors.ownerName && (
                    <p id="err-ownerName" className="mt-1 text-sm text-red-600">
                      {errors.ownerName}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-email" : undefined}
                    />
                    {errors.email && (
                      <p id="err-email" className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-black mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="+251 9XX XXX XXX"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "err-phone" : undefined}
                    />
                    {errors.phone && (
                      <p id="err-phone" className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Business Type *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) =>
                      handleInputChange("businessType", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    aria-invalid={!!errors.businessType}
                    aria-describedby={
                      errors.businessType ? "err-businessType" : undefined
                    }
                  >
                    <option value="">Select business type</option>
                    <option value="fashion">Fashion & Clothing</option>
                    <option value="food">Food & Beverages</option>
                    <option value="beauty">Beauty & Cosmetics</option>
                    <option value="crafts">Handicrafts & Art</option>
                    <option value="services">Services</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && (
                    <p
                      id="err-businessType"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.businessType}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={goNext}
                className="w-full mt-8 bg-primary-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-black mb-2">
                Connect Social Media
              </h2>
              <p className="text-secondary-mediumGray mb-8">
                Link your existing social media accounts
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2 flex items-center">
                    <Facebook className="h-5 w-5 mr-2 text-blue-600" />
                    Facebook Page
                  </label>
                  <input
                    type="url"
                    value={formData.socialAccounts.facebook}
                    onChange={(e) =>
                      handleSocialChange("facebook", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://facebook.com/your-page"
                    aria-invalid={!!errors.facebook}
                    aria-describedby={
                      errors.facebook ? "err-facebook" : undefined
                    }
                  />
                  {errors.facebook && (
                    <p id="err-facebook" className="mt-1 text-sm text-red-600">
                      {errors.facebook}
                    </p>
                  )}

                  {/* helper: redirect to create page if user doesn't have one */}
                  {!formData.socialAccounts.facebook && (
                    <p className="mt-2 text-sm text-secondary-mediumGray">
                      Don't have a Facebook page?{" "}
                      <button
                        type="button"
                        onClick={() => openExternal(SOCIAL_GUIDES.facebook)}
                        className="text-primary-orange hover:underline"
                      >
                        Create one
                      </button>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2 flex items-center">
                    <Instagram className="h-5 w-5 mr-2 text-pink-600" />
                    Instagram
                  </label>
                  <input
                    type="url"
                    value={formData.socialAccounts.instagram}
                    onChange={(e) =>
                      handleSocialChange("instagram", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://instagram.com/your-account"
                    aria-invalid={!!errors.instagram}
                    aria-describedby={
                      errors.instagram ? "err-instagram" : undefined
                    }
                  />
                  {errors.instagram && (
                    <p id="err-instagram" className="mt-1 text-sm text-red-600">
                      {errors.instagram}
                    </p>
                  )}

                  {!formData.socialAccounts.instagram && (
                    <p className="mt-2 text-sm text-secondary-mediumGray">
                      Don't have an Instagram account?{" "}
                      <button
                        type="button"
                        onClick={() => openExternal(SOCIAL_GUIDES.instagram)}
                        className="text-primary-orange hover:underline"
                      >
                        Create one
                      </button>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    TikTok
                  </label>
                  <input
                    type="url"
                    value={formData.socialAccounts.tiktok}
                    onChange={(e) =>
                      handleSocialChange("tiktok", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://tiktok.com/@your-account"
                    aria-invalid={!!errors.tiktok}
                    aria-describedby={errors.tiktok ? "err-tiktok" : undefined}
                  />
                  {errors.tiktok && (
                    <p id="err-tiktok" className="mt-1 text-sm text-red-600">
                      {errors.tiktok}
                    </p>
                  )}

                  {!formData.socialAccounts.tiktok && (
                    <p className="mt-2 text-sm text-secondary-mediumGray">
                      Don't have a TikTok account?{" "}
                      <button
                        type="button"
                        onClick={() => openExternal(SOCIAL_GUIDES.tiktok)}
                        className="text-primary-orange hover:underline"
                      >
                        Create one
                      </button>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Telegram Channel
                  </label>
                  <input
                    type="url"
                    value={formData.socialAccounts.telegram}
                    onChange={(e) =>
                      handleSocialChange("telegram", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://t.me/your-channel"
                    aria-invalid={!!errors.telegram}
                    aria-describedby={
                      errors.telegram ? "err-telegram" : undefined
                    }
                  />
                  {errors.telegram && (
                    <p id="err-telegram" className="mt-1 text-sm text-red-600">
                      {errors.telegram}
                    </p>
                  )}

                  {!formData.socialAccounts.telegram && (
                    <p className="mt-2 text-sm text-secondary-mediumGray">
                      Don't have a Telegram channel?{" "}
                      <button
                        type="button"
                        onClick={() => openExternal(SOCIAL_GUIDES.telegram)}
                        className="text-primary-orange hover:underline"
                      >
                        Create one / Learn more
                      </button>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={goBack}
                  className="flex-1 border-2 border-primary-orange text-primary-orange py-3 rounded-lg font-semibold hover:bg-primary-orange hover:text-white transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={goNext}
                  className="flex-1 bg-primary-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-black mb-2">
                E-commerce Integration
              </h2>
              <p className="text-secondary-mediumGray mb-8">
                Connect your online stores
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2 flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2 text-green-600" />
                    Jumia Store
                  </label>
                  <input
                    type="url"
                    value={formData.ecommerceAccounts.jumia}
                    onChange={(e) =>
                      handleEcommerceChange("jumia", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://jumia.com.et/your-store"
                    aria-invalid={!!errors.jumia}
                    aria-describedby={errors.jumia ? "err-jumia" : undefined}
                  />
                  {errors.jumia && (
                    <p id="err-jumia" className="mt-1 text-sm text-red-600">
                      {errors.jumia}
                    </p>
                  )}

                  {!formData.ecommerceAccounts.jumia && (
                    <p className="mt-2 text-sm text-secondary-mediumGray">
                      Don't have a Jumia seller account?{" "}
                      <button
                        type="button"
                        onClick={() => openExternal(ECOMMERCE_GUIDES.jumia)}
                        className="text-primary-orange hover:underline"
                      >
                        Create seller account
                      </button>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Other E-commerce Platform
                  </label>
                  <input
                    type="url"
                    value={formData.ecommerceAccounts.other}
                    onChange={(e) =>
                      handleEcommerceChange("other", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="Your online store URL"
                    aria-invalid={!!errors.other}
                    aria-describedby={errors.other ? "err-other" : undefined}
                  />
                  {errors.other && (
                    <p id="err-other" className="mt-1 text-sm text-red-600">
                      {errors.other}
                    </p>
                  )}

                  {!formData.ecommerceAccounts.other && (
                    <p className="mt-2 text-sm text-secondary-mediumGray">
                      Need to create an online store?{" "}
                      <button
                        type="button"
                        onClick={() => openExternal(ECOMMERCE_GUIDES.other)}
                        className="text-primary-orange hover:underline"
                      >
                        See options (Shopify / Etsy / BigCommerce)
                      </button>
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-4 mt-6">
                <p className="text-sm text-accent-brown">
                  <strong>Note:</strong> You can skip this step and add
                  e-commerce accounts later from your dashboard.
                </p>
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={goBack}
                  className="flex-1 border-2 border-primary-orange text-primary-orange py-3 rounded-lg font-semibold hover:bg-primary-orange hover:text-white transition-colors"
                >
                  Back
                </button>
                <Link
                  to="/dashboard"
                  onClick={clearDraft}
                  className="flex-1 bg-primary-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Complete Registration
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;

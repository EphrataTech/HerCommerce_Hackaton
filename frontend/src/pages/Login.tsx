import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

type FormData = {
  displayName: string;
  email: string;
  password: string;
};

const STORAGE_KEY = "adeybiz_remember";
const DISPLAY_NAME_KEY = "adeybiz_displayName";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    displayName: "",
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setFormData((prev) => ({
          ...prev,
          displayName: parsed.displayName || "",
          email: parsed.email || "",
        }));
        setRememberMe(true);
      } else {
        const dn = localStorage.getItem(DISPLAY_NAME_KEY);
        if (dn) setFormData((prev) => ({ ...prev, displayName: dn }));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  const handleInputChange = (
    field: keyof FormData | "remember",
    value: string | boolean
  ) => {
    if (field === "remember") {
      setRememberMe(Boolean(value));
      return;
    }
    setFormData((prev) => ({ ...prev, [field]: String(value) }));
    setErrors((prev) => ({ ...prev, [field as keyof FormData]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.displayName && formData.displayName.trim().length < 2)
      newErrors.displayName = "Display name is too short";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setErrors({});

    try {
      // replace with real API call
      await new Promise((res) => setTimeout(res, 800));

      if (rememberMe) {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            displayName: formData.displayName,
            email: formData.email,
          })
        );
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }

      if (formData.displayName) {
        localStorage.setItem(DISPLAY_NAME_KEY, formData.displayName);
      }

      navigate("/dashboard");
    } catch (err) {
      setErrors({
        password: "Login failed. Please check your credentials and try again.",
      });
    } finally {
      setSubmitting(false);
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

      <div className="flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-secondary-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-primary-black mb-1">
                Welcome Back
              </h2>
              <p className="text-secondary-mediumGray">
                Sign in to your AdeyBiz account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Display name - uses group to color label only when input is focused */}
              <div className="group">
                <label
                  htmlFor="displayName"
                  className="block text-sm font-medium text-primary-black mb-2 group-focus-within:text-primary-orange transition-colors"
                >
                  Display name (optional)
                </label>
                <input
                  id="displayName"
                  type="text"
                  value={formData.displayName}
                  onChange={(e) =>
                    handleInputChange("displayName", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange ${
                    errors.displayName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="How should we call you?"
                  aria-label="Display name"
                />
                {errors.displayName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.displayName}
                  </p>
                )}
                <p className="mt-1 text-xs text-secondary-mediumGray">
                  If remembered, this name will be shown across the app.
                </p>
              </div>

              {/* Email */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-black mb-2 group-focus-within:text-primary-orange transition-colors"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="you@company.com"
                  required
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="group">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-primary-black mb-2 group-focus-within:text-primary-orange transition-colors"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange pr-12 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="At least 8 characters"
                    required
                    aria-invalid={!!errors.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-mediumGray hover:text-primary-black"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      handleInputChange("remember", e.target.checked)
                    }
                    className="h-4 w-4 text-primary-orange focus:ring-primary-orange border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-secondary-mediumGray">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary-orange hover:text-orange-600"
                >
                  Forgot password?
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-primary-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center ${
                    submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-secondary-mediumGray">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary-orange hover:text-orange-600 font-semibold"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-secondary-white text-secondary-mediumGray">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  aria-label="Continue with Google"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="ml-2">Google</span>
                </button>

                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  aria-label="Continue with Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

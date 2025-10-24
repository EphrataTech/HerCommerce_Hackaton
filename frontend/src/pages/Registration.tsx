import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Facebook, Instagram, ShoppingBag } from 'lucide-react'

const Registration = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    businessType: '',
    socialAccounts: {
      facebook: '',
      instagram: '',
      tiktok: '',
      telegram: ''
    },
    ecommerceAccounts: {
      jumia: '',
      other: ''
    }
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSocialChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialAccounts: { ...prev.socialAccounts, [platform]: value }
    }))
  }

  const handleEcommerceChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      ecommerceAccounts: { ...prev.ecommerceAccounts, [platform]: value }
    }))
  }

  return (
    <div className="min-h-screen bg-secondary-lightGray">
      {/* Header */}
      <header className="bg-secondary-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="AdeyBiz" className="h-10 w-auto" />
              <span className="ml-3 text-2xl font-bold text-primary-black">AdeyBiz</span>
            </Link>
            <Link to="/" className="flex items-center text-secondary-mediumGray hover:text-primary-black">
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
            <span className="text-sm font-medium text-primary-black">Step {step} of 3</span>
            <span className="text-sm text-secondary-mediumGray">{Math.round((step / 3) * 100)}% Complete</span>
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
              <h2 className="text-3xl font-bold text-primary-black mb-2">Business Information</h2>
              <p className="text-secondary-mediumGray mb-8">Tell us about your business</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="Enter your business name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-black mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                      placeholder="+251 9XX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Business Type *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  >
                    <option value="">Select business type</option>
                    <option value="fashion">Fashion & Clothing</option>
                    <option value="food">Food & Beverages</option>
                    <option value="beauty">Beauty & Cosmetics</option>
                    <option value="crafts">Handicrafts & Art</option>
                    <option value="services">Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <button
                onClick={() => setStep(2)}
                className="w-full mt-8 bg-primary-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-black mb-2">Connect Social Media</h2>
              <p className="text-secondary-mediumGray mb-8">Link your existing social media accounts</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2 flex items-center">
                    <Facebook className="h-5 w-5 mr-2 text-blue-600" />
                    Facebook Page
                  </label>
                  <input
                    type="url"
                    value={formData.socialAccounts.facebook}
                    onChange={(e) => handleSocialChange('facebook', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://facebook.com/your-page"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2 flex items-center">
                    <Instagram className="h-5 w-5 mr-2 text-pink-600" />
                    Instagram
                  </label>
                  <input
                    type="url"
                    value={formData.socialAccounts.instagram}
                    onChange={(e) => handleSocialChange('instagram', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://instagram.com/your-account"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    TikTok
                  </label>
                  <input
                    type="url"
                    value={formData.socialAccounts.tiktok}
                    onChange={(e) => handleSocialChange('tiktok', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://tiktok.com/@your-account"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Telegram Channel
                  </label>
                  <input
                    type="url"
                    value={formData.socialAccounts.telegram}
                    onChange={(e) => handleSocialChange('telegram', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://t.me/your-channel"
                  />
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-primary-orange text-primary-orange py-3 rounded-lg font-semibold hover:bg-primary-orange hover:text-white transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-primary-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-primary-black mb-2">E-commerce Integration</h2>
              <p className="text-secondary-mediumGray mb-8">Connect your online stores</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2 flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2 text-green-600" />
                    Jumia Store
                  </label>
                  <input
                    type="url"
                    value={formData.ecommerceAccounts.jumia}
                    onChange={(e) => handleEcommerceChange('jumia', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="https://jumia.com.et/your-store"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Other E-commerce Platform
                  </label>
                  <input
                    type="url"
                    value={formData.ecommerceAccounts.other}
                    onChange={(e) => handleEcommerceChange('other', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    placeholder="Your online store URL"
                  />
                </div>
              </div>
              
              <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-4 mt-6">
                <p className="text-sm text-accent-brown">
                  <strong>Note:</strong> You can skip this step and add e-commerce accounts later from your dashboard.
                </p>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border-2 border-primary-orange text-primary-orange py-3 rounded-lg font-semibold hover:bg-primary-orange hover:text-white transition-colors"
                >
                  Back
                </button>
                <Link
                  to="/dashboard"
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
  )
}

export default Registration
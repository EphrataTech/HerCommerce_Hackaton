import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Facebook, Instagram, ShoppingBag } from 'lucide-react'
import { useUser } from '../context/UserContext'

const Registration = () => {
  const [step, setStep] = useState(1)
  const { setUserName } = useUser()
  const navigate = useNavigate()
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
      <header className="shadow-sm bg-secondary-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="AdeyBiz" className="w-auto h-10" />
              <span className="ml-3 text-2xl font-bold text-primary-black">AdeyBiz</span>
            </Link>
            <Link to="/" className="flex items-center text-secondary-mediumGray hover:text-primary-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-2xl px-4 py-12 mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-primary-black">Step {step} of 3</span>
            <span className="text-sm text-secondary-mediumGray">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 transition-all duration-300 rounded-full bg-primary-orange"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-8 rounded-lg shadow-lg bg-secondary-white">
          {step === 1 && (
            <div>
              <h2 className="mb-2 text-3xl font-bold text-primary-black">Business Information</h2>
              <p className="mb-8 text-secondary-mediumGray">Tell us about your business</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-primary-black">
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
                  <label className="block mb-2 text-sm font-medium text-primary-black">
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
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-primary-black">
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
                    <label className="block mb-2 text-sm font-medium text-primary-black">
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
                  <label className="block mb-2 text-sm font-medium text-primary-black">
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
                className="w-full py-3 mt-8 font-semibold text-white transition-colors rounded-lg bg-primary-orange hover:bg-orange-600"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="mb-2 text-3xl font-bold text-primary-black">Connect Social Media</h2>
              <p className="mb-8 text-secondary-mediumGray">Link your existing social media accounts</p>
              
              <div className="space-y-6">
                <div>
                  <label className="flex items-center block mb-2 text-sm font-medium text-primary-black">
                    <Facebook className="w-5 h-5 mr-2 text-blue-600" />
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
                  <label className="flex items-center block mb-2 text-sm font-medium text-primary-black">
                    <Instagram className="w-5 h-5 mr-2 text-pink-600" />
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
                  <label className="block mb-2 text-sm font-medium text-primary-black">
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
                  <label className="block mb-2 text-sm font-medium text-primary-black">
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
              
              <div className="flex mt-8 space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 font-semibold transition-colors border-2 rounded-lg border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 font-semibold text-white transition-colors rounded-lg bg-primary-orange hover:bg-orange-600"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="mb-2 text-3xl font-bold text-primary-black">E-commerce Integration</h2>
              <p className="mb-8 text-secondary-mediumGray">Connect your online stores</p>
              
              <div className="space-y-6">
                <div>
                  <label className="flex items-center block mb-2 text-sm font-medium text-primary-black">
                    <ShoppingBag className="w-5 h-5 mr-2 text-green-600" />
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
                  <label className="block mb-2 text-sm font-medium text-primary-black">
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
              
              <div className="p-4 mt-6 border rounded-lg bg-accent-gold/10 border-accent-gold/20">
                <p className="text-sm text-accent-brown">
                  <strong>Note:</strong> You can skip this step and add e-commerce accounts later from your dashboard.
                </p>
              </div>
              
              <div className="flex mt-8 space-x-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 font-semibold transition-colors border-2 rounded-lg border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    setUserName(formData.ownerName)
                    navigate('/dashboard')
                  }}
                  className="flex-1 py-3 font-semibold text-center text-white transition-colors rounded-lg bg-primary-orange hover:bg-orange-600"
                >
                  Complete Registration
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Registration
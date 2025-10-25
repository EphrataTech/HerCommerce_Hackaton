import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useUser } from '../context/UserContext'
import Logo from '../components/Logo'

const Registration = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: ''
  })
  const { setUserName } = useUser()
  const navigate = useNavigate()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-secondary-lightGray">
      <header className="bg-secondary-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <Logo size="lg" />
            </Link>
            <Link to="/" className="flex items-center text-secondary-mediumGray hover:text-primary-black">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-secondary-white rounded-lg shadow-lg p-8">
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
          
          <button
            onClick={() => {
              setUserName(formData.ownerName)
              navigate('/dashboard')
            }}
            className="w-full mt-8 bg-primary-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Complete Registration
          </button>
        </div>
      </div>
    </div>
  )
}

export default Registration
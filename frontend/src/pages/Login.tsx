import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useUser } from '../context/UserContext'
import Logo from '../components/Logo'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { setUserName } = useUser()
  const navigate = useNavigate()

  const handleLogin = () => {
    // Extract name from email (simple approach for demo)
    const emailName = formData.email.split('@')[0]
    const capitalizedName = emailName.charAt(0).toUpperCase() + emailName.slice(1)
    setUserName(capitalizedName)
    navigate('/dashboard')
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

      <div className="flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-secondary-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary-black mb-2">Welcome Back</h2>
              <p className="text-secondary-mediumGray">Sign in to your AdeyBiz account</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div>
                <label className="block text-sm font-medium text-primary-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-black mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-secondary-mediumGray">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary-orange hover:text-orange-600 font-semibold">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
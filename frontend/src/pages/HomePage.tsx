import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="relative">
                <Logo size="lg" className="drop-shadow-lg" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-secondary-mediumGray hover:text-primary-orange transition-colors font-medium">
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-primary-orange to-orange-600 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-primary-black mb-8 leading-tight">
              Transform Your Business,<br />
              <span className="bg-gradient-to-r from-primary-orange via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Amplify Your Impact
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-mediumGray mb-12 max-w-4xl mx-auto leading-relaxed">
              AdeyBiz empowers Ethiopian women entrepreneurs with AI-powered marketing, credibility scoring, and funding access.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-primary-orange to-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                Start Your Journey 
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo size="lg" />
            </div>
            <p className="text-secondary-mediumGray">
              © 2024 AdeyBiz. Empowering women entrepreneurs across Ethiopia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
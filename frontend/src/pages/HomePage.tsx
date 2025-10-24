import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, TrendingUp, Shield, Sparkles, Globe, Award, Zap } from 'lucide-react'
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
                <Logo width={96} height={32} className="h-12 w-auto drop-shadow-lg" />
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
      <section
        className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/habesha.png')" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-orange-300 to-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        {/* dark overlay to keep text readable on top of the background image */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-2 rounded-full border border-orange-200">
                <span className="text-primary-orange font-semibold flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Empowering Ethiopian Women Entrepreneurs
                </span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-primary-black mb-8 leading-tight">
              Transform Your Business,<br />
              <span className="bg-gradient-to-r from-primary-orange via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Amplify Your Impact
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-mediumGray mb-12 max-w-4xl mx-auto leading-relaxed">
              AdeyBiz is the revolutionary meta-platform that supercharges your existing social media and e-commerce presence with 
              <span className="text-primary-orange font-semibold"> AI-powered marketing</span>, 
              <span className="text-primary-orange font-semibold"> credibility scoring</span>, and 
              <span className="text-primary-orange font-semibold"> instant funding access</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-primary-orange to-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                Start Your Journey 
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-3 border-primary-orange text-primary-orange px-10 py-5 rounded-full text-xl font-bold hover:bg-primary-orange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
                <div className="text-3xl font-bold text-primary-orange mb-2">10,000+</div>
                <div className="text-secondary-mediumGray">Women Entrepreneurs</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
                <div className="text-3xl font-bold text-primary-orange mb-2">500M ETB</div>
                <div className="text-secondary-mediumGray">Funding Facilitated</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg">
                <div className="text-3xl font-bold text-primary-orange mb-2">95%</div>
                <div className="text-secondary-mediumGray">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full border border-orange-200">
                <span className="text-primary-orange font-semibold text-sm">POWERFUL FEATURES</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-primary-black mb-6">
              Everything You Need to <span className="text-primary-orange">Dominate</span>
            </h2>
            <p className="text-xl text-secondary-mediumGray max-w-3xl mx-auto">
              Leverage existing platforms while gaining powerful insights, credibility, and unprecedented growth opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-primary-orange to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-3 text-center">AI Marketing</h3>
                <p className="text-secondary-mediumGray text-center leading-relaxed">
                  Get AI-powered post suggestions in Amharic and English for all your social platforms with optimal timing
                </p>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-primary-orange to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-3 text-center">Credibility Score</h3>
                <p className="text-secondary-mediumGray text-center leading-relaxed">
                  Build unshakeable trust with customers through verified business scoring and reputation management
                </p>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-primary-orange to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-3 text-center">Instant Funding</h3>
                <p className="text-secondary-mediumGray text-center leading-relaxed">
                  Connect with microfinance and investors instantly based on your credibility score and performance
                </p>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-r from-primary-orange to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-3 text-center">Unified Dashboard</h3>
                <p className="text-secondary-mediumGray text-center leading-relaxed">
                  Track all your social media and e-commerce performance in one powerful, intuitive dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-black mb-4">
              Success Stories from <span className="text-primary-orange">Amazing Women</span>
            </h2>
            <p className="text-xl text-secondary-mediumGray">
              See how AdeyBiz is transforming businesses across Ethiopia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">A</div>
                <div className="ml-4">
                  <h4 className="font-bold text-primary-black">Almaz Tadesse</h4>
                  <p className="text-secondary-mediumGray text-sm">Fashion Designer, Addis Ababa</p>
                </div>
              </div>
              <p className="text-secondary-mediumGray italic mb-4">
                "AdeyBiz helped me increase my Instagram engagement by 300% and secure funding for my new collection. The AI suggestions are incredible!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
                <div className="ml-4">
                  <h4 className="font-bold text-primary-black">Meron Haile</h4>
                  <p className="text-secondary-mediumGray text-sm">Food Business, Bahir Dar</p>
                </div>
              </div>
              <p className="text-secondary-mediumGray italic mb-4">
                "My credibility score opened doors I never imagined. I got a 200,000 ETB loan within 48 hours!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">S</div>
                <div className="ml-4">
                  <h4 className="font-bold text-primary-black">Sara Bekele</h4>
                  <p className="text-secondary-mediumGray text-sm">Handicrafts, Hawassa</p>
                </div>
              </div>
              <p className="text-secondary-mediumGray italic mb-4">
                "The unified dashboard saved me 10 hours per week. Now I can focus on creating beautiful products instead of managing social media!"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-gray-900 to-primary-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-primary-orange to-amber-400 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join over 10,000 women entrepreneurs already growing with AdeyBiz. Your success story starts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-primary-orange to-orange-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 inline-flex items-center justify-center group"
            >
              Get Started Today 
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border-2 border-white text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white hover:text-primary-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Logo width={120} height={40} className="h-10 w-auto" />
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-primary-orange to-amber-600 bg-clip-text text-transparent">AdeyBiz</span>
              </div>
              <p className="text-secondary-mediumGray mb-6 max-w-md">
                Empowering Ethiopian women entrepreneurs with AI-powered tools, credibility scoring, and instant access to funding opportunities.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">f</div>
                <div className="w-10 h-10 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">t</div>
                <div className="w-10 h-10 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform">i</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-primary-black mb-4">Platform</h4>
              <ul className="space-y-2 text-secondary-mediumGray">
                <li><a href="#" className="hover:text-primary-orange transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-primary-black mb-4">Support</h4>
              <ul className="space-y-2 text-secondary-mediumGray">
                <li><a href="#" className="hover:text-primary-orange transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors">Training</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-orange-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-mediumGray mb-4 md:mb-0">
              © 2024 AdeyBiz. Empowering women entrepreneurs across Ethiopia.
            </p>
            <div className="flex space-x-6 text-secondary-mediumGray">
              <a href="#" className="hover:text-primary-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-orange transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
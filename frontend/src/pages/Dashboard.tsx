import { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Star, 
  Bell, 
  Settings, 
  LogOut,
  Plus,
  Eye,
  MessageSquare,
  Heart,
  Share2
} from 'lucide-react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const credibilityScore = 85
  const aiSuggestions = [
    {
      platform: 'Instagram',
      content: 'ለዛሬ ልዩ ቅናሽ! 30% off on all traditional dresses. #EthiopianFashion #TraditionalWear',
      engagement: 'High',
      bestTime: '6:00 PM'
    },
    {
      platform: 'Facebook',
      content: 'New collection of handmade jewelry now available! Perfect for special occasions.',
      engagement: 'Medium',
      bestTime: '2:00 PM'
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-lightGray">
      {/* Header */}
      <header className="bg-secondary-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="AdeyBiz" className="h-10 w-auto" />
              <span className="ml-3 text-2xl font-bold text-primary-black">AdeyBiz</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-secondary-mediumGray hover:text-primary-black">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-secondary-mediumGray hover:text-primary-black">
                <Settings className="h-6 w-6" />
              </button>
              <button className="p-2 text-secondary-mediumGray hover:text-primary-black">
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-black mb-2">Welcome back, Almaz!</h1>
          <p className="text-secondary-mediumGray">Here's what's happening with your business today.</p>
        </div>

        {/* Credibility Score Card */}
        <div className="bg-gradient-to-r from-primary-orange to-orange-600 rounded-lg p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your AdeyBiz Score</h2>
              <p className="opacity-90">Your business credibility rating</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{credibilityScore}</div>
              <div className="flex items-center mt-2">
                <Star className="h-5 w-5 mr-1" />
                <span>Excellent</span>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${credibilityScore}%` }}
            ></div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-secondary-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Total Views</p>
                <p className="text-2xl font-bold text-primary-black">12.5K</p>
              </div>
              <Eye className="h-8 w-8 text-primary-orange" />
            </div>
            <p className="text-green-600 text-sm mt-2">+15% from last week</p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Engagement</p>
                <p className="text-2xl font-bold text-primary-black">3.2K</p>
              </div>
              <Heart className="h-8 w-8 text-primary-orange" />
            </div>
            <p className="text-green-600 text-sm mt-2">+8% from last week</p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Messages</p>
                <p className="text-2xl font-bold text-primary-black">47</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary-orange" />
            </div>
            <p className="text-blue-600 text-sm mt-2">5 new today</p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Shares</p>
                <p className="text-2xl font-bold text-primary-black">892</p>
              </div>
              <Share2 className="h-8 w-8 text-primary-orange" />
            </div>
            <p className="text-green-600 text-sm mt-2">+22% from last week</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Suggestions */}
          <div className="lg:col-span-2">
            <div className="bg-secondary-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary-black">AI Marketing Suggestions</h3>
                <button className="bg-primary-orange text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                  Generate More
                </button>
              </div>
              
              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                        {suggestion.platform}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        suggestion.engagement === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {suggestion.engagement} Engagement
                      </span>
                    </div>
                    <p className="text-primary-black mb-3">{suggestion.content}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary-mediumGray">
                        Best time: {suggestion.bestTime}
                      </span>
                      <div className="flex space-x-2">
                        <button className="bg-primary-orange text-white px-3 py-1 rounded text-sm hover:bg-orange-600 transition-colors">
                          Use This
                        </button>
                        <button className="border border-primary-orange text-primary-orange px-3 py-1 rounded text-sm hover:bg-primary-orange hover:text-white transition-colors">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-secondary-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary-black mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center bg-primary-orange text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  <Plus className="h-5 w-5 mr-2" />
                  Create Post
                </button>
                <button className="w-full flex items-center justify-center border-2 border-primary-orange text-primary-orange py-3 rounded-lg hover:bg-primary-orange hover:text-white transition-colors">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Analytics
                </button>
                <button className="w-full flex items-center justify-center border-2 border-primary-orange text-primary-orange py-3 rounded-lg hover:bg-primary-orange hover:text-white transition-colors">
                  <Users className="h-5 w-5 mr-2" />
                  Find Investors
                </button>
              </div>
            </div>

            {/* Connected Accounts */}
            <div className="bg-secondary-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary-black mb-4">Connected Accounts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Facebook</span>
                  <span className="text-xs text-green-600">Connected</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                  <span className="text-sm font-medium">Instagram</span>
                  <span className="text-xs text-green-600">Connected</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">TikTok</span>
                  <span className="text-xs text-gray-500">Not Connected</span>
                </div>
                <button className="w-full text-primary-orange text-sm hover:text-orange-600 transition-colors">
                  + Add More Accounts
                </button>
              </div>
            </div>

            {/* Funding Opportunities */}
            <div className="bg-secondary-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary-black mb-4">Funding Opportunities</h3>
              <div className="space-y-3">
                <div className="p-3 border border-accent-gold/20 bg-accent-gold/5 rounded-lg">
                  <p className="text-sm font-medium text-primary-black">Micro Loan Available</p>
                  <p className="text-xs text-secondary-mediumGray mt-1">Up to 50,000 ETB</p>
                  <button className="text-xs text-primary-orange hover:text-orange-600 mt-2">
                    Learn More →
                  </button>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                  <p className="text-sm font-medium text-primary-black">Angel Investor Match</p>
                  <p className="text-xs text-secondary-mediumGray mt-1">Based on your score</p>
                  <button className="text-xs text-primary-orange hover:text-orange-600 mt-2">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
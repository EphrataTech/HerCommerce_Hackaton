import { useState, useEffect } from 'react'
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
  Share2,
  RefreshCw,
  Copy,
  ExternalLink,
  DollarSign,
  Calendar,
  Clock
} from 'lucide-react'
import { useUser } from '../context/UserContext'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [notifications, setNotifications] = useState(3)
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [showFunding, setShowFunding] = useState(false)
  const { userName } = useUser()
  const [isGeneratingAI, setIsGeneratingAI] = useState(false)

  // Dynamic stats that update
  const [stats, setStats] = useState({
    views: 12500,
    engagement: 3200,
    messages: 47,
    shares: 892
  })

  const [credibilityScore, setCredibilityScore] = useState(85)
  const [aiSuggestions, setAiSuggestions] = useState([
    {
      id: 1,
      platform: 'Instagram',
      content: 'ለዛሬ ልዩ ቅናሽ! 30% off on all traditional dresses. #EthiopianFashion #TraditionalWear',
      engagement: 'High',
      bestTime: '6:00 PM',
      isUsed: false
    },
    {
      id: 2,
      platform: 'Facebook',
      content: 'New collection of handmade jewelry now available! Perfect for special occasions.',
      engagement: 'Medium',
      bestTime: '2:00 PM',
      isUsed: false
    }
  ])

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // Simulate real-time stats updates
  useEffect(() => {
    const statsTimer = setInterval(() => {
      setStats(prev => ({
        views: prev.views + Math.floor(Math.random() * 10),
        engagement: prev.engagement + Math.floor(Math.random() * 5),
        messages: prev.messages + (Math.random() > 0.8 ? 1 : 0),
        shares: prev.shares + (Math.random() > 0.9 ? 1 : 0)
      }))
    }, 5000)
    return () => clearInterval(statsTimer)
  }, [])

  const generateNewSuggestions = () => {
    setIsGeneratingAI(true)
    setTimeout(() => {
      const newSuggestions = [
        {
          id: Date.now(),
          platform: 'TikTok',
          content: 'የእጅ ስራ ውበት! Check out this amazing handcraft process 🎨 #HandmadeEthiopia #ArtisanLife',
          engagement: 'Very High',
          bestTime: '8:00 PM',
          isUsed: false
        },
        {
          id: Date.now() + 1,
          platform: 'Telegram',
          content: 'ዛሬ ብቻ! Special discount for our loyal customers. Message us for exclusive deals! 💫',
          engagement: 'High',
          bestTime: '12:00 PM',
          isUsed: false
        }
      ]
      setAiSuggestions(newSuggestions)
      setIsGeneratingAI(false)
    }, 2000)
  }

  const useSuggestion = (id) => {
    setAiSuggestions(prev => 
      prev.map(suggestion => 
        suggestion.id === id ? { ...suggestion, isUsed: true } : suggestion
      )
    )
  }

  const copySuggestion = (content) => {
    navigator.clipboard.writeText(content)
    // You could add a toast notification here
  }

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
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-primary-black mb-2">
                Welcome back, {userName}! 
                <span className="text-2xl">👋</span>
              </h1>
              <p className="text-secondary-mediumGray flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {currentTime.toLocaleDateString('en-ET', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} - {currentTime.toLocaleTimeString('en-ET', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                ● Online
              </div>
              <button 
                onClick={() => setNotifications(0)}
                className="relative p-2 text-secondary-mediumGray hover:text-primary-black"
              >
                <Bell className="h-6 w-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Credibility Score Card */}
        <div className="bg-gradient-to-r from-primary-orange to-orange-600 rounded-lg p-6 text-white mb-8 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your AdeyBiz Score</h2>
              <p className="opacity-90">Your business credibility rating</p>
              <div className="mt-2 text-sm opacity-75">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold animate-pulse">{credibilityScore}</div>
              <div className="flex items-center mt-2 justify-end">
                <Star className="h-5 w-5 mr-1 fill-current" />
                <span>{credibilityScore >= 80 ? 'Excellent' : credibilityScore >= 60 ? 'Good' : 'Fair'}</span>
              </div>
              <div className="text-sm opacity-75 mt-1">
                +2 points this week
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-1000 shadow-lg"
              style={{ width: `${credibilityScore}%` }}
            ></div>
          </div>
          <div className="mt-2 text-sm opacity-75">
            Next milestone: {credibilityScore < 90 ? '90 points (Premium tier)' : '100 points (Elite tier)'}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-secondary-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Total Views</p>
                <p className="text-2xl font-bold text-primary-black">{stats.views.toLocaleString()}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +15% from last week
            </p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Engagement</p>
                <p className="text-2xl font-bold text-primary-black">{stats.engagement.toLocaleString()}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% from last week
            </p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Messages</p>
                <p className="text-2xl font-bold text-primary-black">{stats.messages}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full relative">
                <MessageSquare className="h-6 w-6 text-green-600" />
                {stats.messages > 47 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
            <p className="text-blue-600 text-sm mt-2">
              {stats.messages - 47 > 0 ? `${stats.messages - 47} new today` : '5 new today'}
            </p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Shares</p>
                <p className="text-2xl font-bold text-primary-black">{stats.shares}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Share2 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +22% from last week
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Suggestions */}
          <div className="lg:col-span-2">
            <div className="bg-secondary-white rounded-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary-black">AI Marketing Suggestions</h3>
                <button 
                  onClick={generateNewSuggestions}
                  disabled={isGeneratingAI}
                  className="bg-primary-orange text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors flex items-center disabled:opacity-50"
                >
                  {isGeneratingAI ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Generate More
                    </>
                  )}
                </button>
              </div>
              
              <div className="space-y-4">
                {aiSuggestions.map((suggestion) => (
                  <div key={suggestion.id} className={`border rounded-lg p-4 transition-all duration-300 ${
                    suggestion.isUsed ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-orange-200'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-primary-orange/10 text-primary-orange px-3 py-1 rounded-full text-sm font-medium">
                        {suggestion.platform}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          suggestion.engagement === 'Very High' ? 'bg-purple-100 text-purple-800' :
                          suggestion.engagement === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {suggestion.engagement} Engagement
                        </span>
                        {suggestion.isUsed && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            ✓ Used
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-primary-black mb-3 leading-relaxed">{suggestion.content}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary-mediumGray flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Best time: {suggestion.bestTime}
                      </span>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => copySuggestion(suggestion.content)}
                          className="border border-gray-300 text-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors flex items-center"
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </button>
                        <button 
                          onClick={() => useSuggestion(suggestion.id)}
                          disabled={suggestion.isUsed}
                          className={`px-3 py-1 rounded text-sm transition-colors flex items-center ${
                            suggestion.isUsed 
                              ? 'bg-green-100 text-green-800 cursor-not-allowed'
                              : 'bg-primary-orange text-white hover:bg-orange-600'
                          }`}
                        >
                          {suggestion.isUsed ? (
                            <>✓ Used</>
                          ) : (
                            <>
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Use This
                            </>
                          )}
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
            <div className="bg-secondary-white rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-primary-black mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setShowCreatePost(!showCreatePost)}
                  className="w-full flex items-center justify-center bg-primary-orange text-white py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Create Post
                </button>
                <button 
                  onClick={() => setShowAnalytics(!showAnalytics)}
                  className="w-full flex items-center justify-center border-2 border-primary-orange text-primary-orange py-3 rounded-lg hover:bg-primary-orange hover:text-white transition-colors"
                >
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Analytics
                </button>
                <button 
                  onClick={() => setShowFunding(!showFunding)}
                  className="w-full flex items-center justify-center border-2 border-primary-orange text-primary-orange py-3 rounded-lg hover:bg-primary-orange hover:text-white transition-colors"
                >
                  <DollarSign className="h-5 w-5 mr-2" />
                  Find Funding
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

        {/* Modal/Overlay Content */}
        {showCreatePost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-primary-black mb-4">Create New Post</h3>
              <textarea 
                className="w-full h-32 border border-gray-300 rounded-lg p-3 mb-4" 
                placeholder="What's on your mind?"
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button 
                  onClick={() => setShowCreatePost(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-primary-orange text-white rounded-lg hover:bg-orange-600">
                  Post Now
                </button>
              </div>
            </div>
          </div>
        )}

        {showAnalytics && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
              <h3 className="text-xl font-bold text-primary-black mb-4">Analytics Overview</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Top Platform</h4>
                  <p className="text-2xl font-bold text-blue-600">Instagram</p>
                  <p className="text-sm text-blue-600">65% of total engagement</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Best Post Time</h4>
                  <p className="text-2xl font-bold text-green-600">6-8 PM</p>
                  <p className="text-sm text-green-600">Peak engagement hours</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAnalytics(false)}
                className="w-full bg-primary-orange text-white py-2 rounded-lg hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showFunding && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-primary-black mb-4">Funding Opportunities</h3>
              <div className="space-y-3">
                <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">✅ Pre-approved Loan</h4>
                  <p className="text-green-600">Up to 75,000 ETB</p>
                  <p className="text-sm text-green-600">Based on your score of {credibilityScore}</p>
                </div>
                <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">💼 Investor Match</h4>
                  <p className="text-blue-600">3 interested investors</p>
                  <p className="text-sm text-blue-600">Fashion & retail focused</p>
                </div>
              </div>
              <button 
                onClick={() => setShowFunding(false)}
                className="w-full mt-4 bg-primary-orange text-white py-2 rounded-lg hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
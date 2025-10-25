import { useState, useEffect } from 'react'
import { 
  BarChart3, 
  Star, 
  Bell, 
  Settings, 
  LogOut,
  Plus,
  Eye,
  MessageSquare,
  Heart,
  Share2,
  DollarSign,
  Clock
} from 'lucide-react'
import { useUser } from '../context/UserContext'
import Logo from '../components/Logo'

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [notifications, setNotifications] = useState(3)
  const [showCreatePost, setShowCreatePost] = useState(false)
  const { userName } = useUser()

  const [stats] = useState({
    views: 12500,
    engagement: 3200,
    messages: 47,
    shares: 892
  })

  const credibilityScore = 85

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-secondary-lightGray">
      <header className="bg-secondary-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Logo size="lg" />
            </div>
            <div className="flex items-center space-x-4">
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-black mb-2">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-secondary-mediumGray flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {currentTime.toLocaleDateString('en-ET', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary-orange to-orange-600 rounded-lg p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your AdeyBiz Score</h2>
              <p className="opacity-90">Your business credibility rating</p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold">{credibilityScore}</div>
              <div className="flex items-center mt-2 justify-end">
                <Star className="h-5 w-5 mr-1 fill-current" />
                <span>Excellent</span>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-1000"
              style={{ width: `${credibilityScore}%` }}
            ></div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-secondary-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Total Views</p>
                <p className="text-2xl font-bold text-primary-black">{stats.views.toLocaleString()}</p>
              </div>
              <Eye className="h-8 w-8 text-primary-orange" />
            </div>
            <p className="text-green-600 text-sm mt-2">+15% from last week</p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Engagement</p>
                <p className="text-2xl font-bold text-primary-black">{stats.engagement.toLocaleString()}</p>
              </div>
              <Heart className="h-8 w-8 text-primary-orange" />
            </div>
            <p className="text-green-600 text-sm mt-2">+8% from last week</p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Messages</p>
                <p className="text-2xl font-bold text-primary-black">{stats.messages}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary-orange" />
            </div>
            <p className="text-blue-600 text-sm mt-2">5 new today</p>
          </div>

          <div className="bg-secondary-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-mediumGray text-sm">Shares</p>
                <p className="text-2xl font-bold text-primary-black">{stats.shares}</p>
              </div>
              <Share2 className="h-8 w-8 text-primary-orange" />
            </div>
            <p className="text-green-600 text-sm mt-2">+22% from last week</p>
          </div>
        </div>

        <div className="bg-secondary-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-primary-black mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button 
              onClick={() => setShowCreatePost(!showCreatePost)}
              className="w-full flex items-center justify-center bg-primary-orange text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create Post
            </button>
            <button className="w-full flex items-center justify-center border-2 border-primary-orange text-primary-orange py-3 rounded-lg hover:bg-primary-orange hover:text-white transition-colors">
              <BarChart3 className="h-5 w-5 mr-2" />
              View Analytics
            </button>
            <button className="w-full flex items-center justify-center border-2 border-primary-orange text-primary-orange py-3 rounded-lg hover:bg-primary-orange hover:text-white transition-colors">
              <DollarSign className="h-5 w-5 mr-2" />
              Find Funding
            </button>
          </div>
        </div>

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
      </div>
    </div>
  )
}

export default Dashboard
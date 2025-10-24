import { Link } from 'react-router-dom'
import Logo from './Logo'

interface HeaderProps {
  showAuthButtons?: boolean
}

const Header = ({ showAuthButtons = true }: HeaderProps) => {
  return (
    <header className="bg-secondary-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <Logo width={120} height={32} className="h-10 w-auto" />
          </Link>
          
          {showAuthButtons && (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-secondary-mediumGray hover:text-primary-black">
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-primary-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
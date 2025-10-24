import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import Registration from './pages/Registration'
import Login from './pages/Login'

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-secondary-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
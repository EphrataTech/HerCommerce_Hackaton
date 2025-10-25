import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface UserContextType {
  userName: string
  setUserName: (name: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState(() => {
    // Get name from localStorage on initial load
    return localStorage.getItem('adeyBizUserName') || 'Guest'
  })

  // Save to localStorage whenever userName changes
  useEffect(() => {
    if (userName !== 'Guest') {
      localStorage.setItem('adeyBizUserName', userName)
    }
  }, [userName])

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
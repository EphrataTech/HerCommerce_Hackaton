"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import { useUser } from "../context/UserContext"

export default function LoginPage({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { setUserName } = useUser()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      // Validate against registered user in localStorage
      const raw = localStorage.getItem('adeyBizRegisteredUser')
      if (!raw) {
        alert('No registered user found. Please register first.')
        return
      }
      try {
        const reg = JSON.parse(raw) as { email?: string; password?: string; name?: string }
        if (reg.email !== email || reg.password !== password) {
          alert('Invalid credentials. Please check your email and password or register first.')
          return
        }
        // success
        setUserName(reg.name || email.split('@')[0])
        setIsAuthenticated(true)
        navigate('/dashboard')
      } catch (err) {
        alert('Error reading registration data. Please register again.')
      }
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#e7d8c9] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#b2967d] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-bold text-[#333333]">AdeyBiz</span>
          </Link>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-[#b2967d] hover:text-[#333333]">
              Leverage
            </a>
            <a href="#" className="text-[#b2967d] hover:text-[#333333]">
              Credibility
            </a>
            <a href="#" className="text-[#b2967d] hover:text-[#333333]">
              Growth
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Decorative shapes */}
          <div className="mb-12 h-48 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#e7d8c9] to-[#b2967d] opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b2967d] rounded-full opacity-30"></div>
          </div>

          <h1 className="text-3xl font-bold text-[#333333] text-center mb-2">Welcome back</h1>
          <p className="text-center text-[#b2967d] mb-8">Sign in to your AdeyBiz account</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Phone number / Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your phone number or email"
                className="w-full px-4 py-3 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948] bg-white text-[#333333]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948] bg-white text-[#333333]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[#b2967d]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 border-[#e7d8c9] rounded" />
              <label htmlFor="remember" className="ml-2 text-sm text-[#333333]">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f7c948] text-[#333333] py-3 rounded-lg font-medium hover:bg-[#e6b835] transition"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p>
              <a href="#" className="text-[#f7c948] hover:text-[#e6b835] text-sm">
                Forgot password?
              </a>
            </p>
            <p className="text-sm text-[#b2967d]">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#f7c948] hover:text-[#e6b835] font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

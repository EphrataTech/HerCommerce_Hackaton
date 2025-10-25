"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../context/UserContext"
import { Eye, EyeOff } from "lucide-react"
import Logo from '../components/Logo'

export default function RegisterPage({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    agreeToTerms: false,
  })
  const navigate = useNavigate()
  const { setUserName } = useUser()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.password && formData.agreeToTerms) {
      // persist registered user locally (demo only)
      const stored = { name: formData.name, email: formData.email, password: formData.password, businessName: formData.businessName }
      localStorage.setItem('adeyBizRegisteredUser', JSON.stringify(stored))
      // set user context for display
      setUserName(formData.name)
      setIsAuthenticated(true)
      navigate("/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-[#e7d8c9] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="md" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-[#333333] text-center mb-2">Create Account</h1>
          <p className="text-center text-[#b2967d] mb-8">Join AdeyBiz and start growing your business</p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948] bg-white text-[#333333]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter your business name"
                className="w-full px-4 py-3 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948] bg-white text-[#333333]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948] bg-white text-[#333333]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
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

            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948] bg-white text-[#333333]"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="w-4 h-4 border-[#e7d8c9] rounded mt-1"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-[#333333]">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f7c948] text-[#333333] py-3 rounded-lg font-medium hover:bg-[#e6b835] transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#b2967d]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#f7c948] hover:text-[#e6b835] font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { Menu, X, LogOut, Settings, Home, Package, Zap, Award, DollarSign } from "lucide-react"
import { useUser } from "../context/UserContext"

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: Package, label: "Products", path: "/dashboard/products" },
    { icon: Zap, label: "Marketing", path: "/dashboard/marketing" },
    { icon: Award, label: "Credibility", path: "/dashboard/credibility" },
    { icon: DollarSign, label: "Funding", path: "/dashboard/funding" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ]

  const isActive = (path: string) => location.pathname === path
  const { userName } = useUser()
  const registeredRaw = typeof window !== 'undefined' ? localStorage.getItem('adeyBizRegisteredUser') : null
  let businessName: string | undefined = undefined
  if (registeredRaw) {
    try {
      const parsed = JSON.parse(registeredRaw)
      businessName = parsed.businessName
    } catch (e) {
      businessName = undefined
    }
  }

  const initials = userName
    ? userName
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U"

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-[#e7d8c9] transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-[#e7d8c9] flex items-center justify-between">
          {sidebarOpen && (
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#b2967d] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-[#333333]">AdeyBiz</span>
            </Link>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-[#b2967d] hover:text-[#333333]">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-[#e7d8c9]">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#333333] font-bold">{initials}</span>
            </div>
            {sidebarOpen && (
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#333333] truncate">{userName}</p>
                <p className="text-xs text-[#b2967d] truncate">{businessName || "Seller"}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive(item.path) ? "bg-[var(--primary)] text-[#333333]" : "text-[#b2967d] hover:bg-[#e7d8c9]"
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#e7d8c9]">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-[#b2967d] hover:bg-[#e7d8c9] rounded-lg transition">
            <LogOut size={20} />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-[#e7d8c9] px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#333333]">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-[#333333] font-bold">
              SC
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Save, Bell, Lock } from "lucide-react"
import { useUser } from "../../context/UserContext"

export default function SettingsPage() {
  const { userName } = useUser()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "Fashion & Retail",
    website: "",
    bio: "",
  })

  useEffect(() => {
    // Load data from localStorage registration
    const registeredUser = localStorage.getItem('adeyBizRegisteredUser')
    if (registeredUser) {
      try {
        const userData = JSON.parse(registeredUser)
        const nameParts = (userData.name || userName || '').split(' ')
        setFormData({
          firstName: nameParts[0] || '',
          lastName: nameParts.slice(1).join(' ') || '',
          email: userData.email || '',
          phone: userData.phone || '',
          businessName: userData.businessName || '',
          businessType: "Fashion & Retail",
          website: "",
          bio: "",
        })
      } catch (error) {
        console.error('Error loading user data:', error)
      }
    }
  }, [userName])

  type NotificationKey = "emailNotifications" | "marketingEmails" | "weeklyReport" | "fundingAlerts"

  type NotificationsState = Record<NotificationKey, boolean>

  const [notifications, setNotifications] = useState<NotificationsState>({
    emailNotifications: true,
    marketingEmails: false,
    weeklyReport: true,
    fundingAlerts: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (key: NotificationKey) => {
    setNotifications((prev) => {
      const next = { ...prev }
      next[key] = !prev[key]
      return next
    })
  }

  const notificationOptions: { key: NotificationKey; label: string }[] = [
    { key: "emailNotifications", label: "Email Notifications" },
    { key: "marketingEmails", label: "Marketing Emails" },
    { key: "weeklyReport", label: "Weekly Report" },
    { key: "fundingAlerts", label: "Funding Alerts" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#333333]">Settings</h2>
        <p className="text-[#b2967d]">Manage your account and preferences</p>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
          />
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Business Information</h3>
        <div className="space-y-4">
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
          />
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
          >
            <option>Fashion & Retail</option>
            <option>E-commerce</option>
            <option>Services</option>
            <option>Digital Products</option>
          </select>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
          />
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Business Bio"
            rows={4}
            className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
          />
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="text-[var(--primary)]" size={20} />
          <h3 className="text-lg font-bold text-[#333333]">Notification Preferences</h3>
        </div>
        <div className="space-y-3">
          {notificationOptions.map((notif) => {
            const isOn = notifications[notif.key]
            return (
              <div key={notif.key} className="flex items-center justify-between p-3 border border-[#e7d8c9] rounded-lg">
                <label className="text-[#333333]">{notif.label}</label>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isOn}
                  onClick={() => handleNotificationChange(notif.key)}
                  className={`w-12 h-7 flex items-center rounded-full p-1 transition-focus focus:outline-none ${
                    isOn ? "bg-[var(--primary)]" : "bg-[#f3ede8]"
                  }`}
                >
                  <span
                    className={`bg-white w-5 h-5 rounded-full shadow transform transition ${isOn ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lock className="text-[var(--primary)]" size={20} />
          <h3 className="text-lg font-bold text-[#333333]">Security</h3>
        </div>
        <button className="px-6 py-2 border border-[#b2967d] text-[#b2967d] rounded-lg hover:bg-[#e7d8c9] transition font-medium">
          Change Password
        </button>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
  <button className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[#333333] rounded-lg hover:bg-[var(--primary-dark)] transition font-medium">
          <Save size={20} />
          Save Changes
        </button>
      </div>
    </div>
  )
}

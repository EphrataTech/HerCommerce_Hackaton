import { useState, useEffect } from 'react'
import { Save, Link as LinkIcon, Instagram } from 'lucide-react'

export default function IntegrationsPage() {
  const [formData, setFormData] = useState({
    instagram: '',
    facebook: '',
    twitter: '',
    tiktok: '',
    telegram: '',
    whatsapp: '',
    tinamart: '',
    zemengebeya: '',
    jiji: '',
    qefira: '',
    website: ''
  })

  useEffect(() => {
    const saved = localStorage.getItem('adeyBizIntegrations')
    if (saved) {
      try {
        setFormData(JSON.parse(saved))
      } catch (error) {
        console.error('Error loading integrations:', error)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    localStorage.setItem('adeyBizIntegrations', JSON.stringify(formData))
    alert('Integrations saved successfully!')
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#333333]">Integrations</h2>
        <p className="text-[#b2967d]">Connect your social media and e-commerce accounts</p>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4 flex items-center gap-2">
          <Instagram size={20} className="text-pink-500" />
          Social Media Accounts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Instagram</label>
            <input
              type="url"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="https://instagram.com/yourusername"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Facebook</label>
            <input
              type="url"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="https://facebook.com/yourpage"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Twitter/X</label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="https://twitter.com/yourusername"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">TikTok</label>
            <input
              type="url"
              name="tiktok"
              value={formData.tiktok}
              onChange={handleChange}
              placeholder="https://tiktok.com/@yourusername"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Telegram</label>
            <input
              type="url"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="https://t.me/yourchannel"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">WhatsApp Business</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+251912345678"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
        </div>
      </div>

      {/* E-commerce */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4 flex items-center gap-2">
          <LinkIcon size={20} className="text-blue-500" />
          E-commerce Platforms
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">TinaMart Store</label>
            <input
              type="url"
              name="tinamart"
              value={formData.tinamart}
              onChange={handleChange}
              placeholder="https://tinamart.com/shop/yourstore"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Zemen Gebeya</label>
            <input
              type="url"
              name="zemengebeya"
              value={formData.zemengebeya}
              onChange={handleChange}
              placeholder="https://zemengebeya.com/seller/yourshop"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Jiji Ethiopia</label>
            <input
              type="url"
              name="jiji"
              value={formData.jiji}
              onChange={handleChange}
              placeholder="https://jiji.et/profile/yourprofile"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Qefira Market</label>
            <input
              type="url"
              name="qefira"
              value={formData.qefira}
              onChange={handleChange}
              placeholder="https://qefira.com/store/yourstore"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#333333] mb-2">Personal Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
              className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button 
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[#333333] rounded-lg hover:bg-[var(--primary-dark)] transition font-medium"
        >
          <Save size={20} />
          Save Integrations
        </button>
      </div>
    </div>
  )
}
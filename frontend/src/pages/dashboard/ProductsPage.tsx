"use client"

import { useState } from "react"
import { AlertCircle } from "lucide-react"

const initialProducts = [
  { id: 1, name: "Handmade Habesha Dress", quantity: 10, platform: "Tina Mart", status: "In Stock" },
  { id: 2, name: "Traditional Habesha Coffee Set", quantity: 5, platform: "Zemen Gebeya", status: "Low Stock" },
  { id: 3, name: "Habesha Cultural Art Print", quantity: 20, platform: "Tina Mart", status: "In Stock" },
  { id: 4, name: "Handwoven Habesha Basket", quantity: 3, platform: "Zemen Gebeya", status: "Low Stock" },
  { id: 5, name: "Habesha Incense and Burner Set", quantity: 15, platform: "Tina Mart", status: "In Stock" },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", quantity: "", platform: "", status: "" })
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)

  const handleAddProduct = () => {
    setEditingId(null)
    setFormData({ name: "", quantity: "", platform: "", status: "" })
    setShowModal(true)
  }

  const handleSaveProduct = () => {
    if (editingId) {
      setProducts(
        products.map((p) =>
          p.id === editingId ? { ...p, ...formData, quantity: Number.parseInt(formData.quantity) } : p,
        ),
      )
    } else {
      setProducts([...products, { id: Date.now(), ...formData, quantity: Number.parseInt(formData.quantity) }])
    }
    setShowModal(false)
  }

  // deletion and editing in-row removed in this simplified UI

  const lowStockCount = products.filter((p) => p.status === "Low Stock").length
  const platforms = Array.from(new Set(products.map((p) => p.platform)))

  const displayed = selectedPlatform ? products.filter((p) => p.platform === selectedPlatform) : products

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#333333]">AdeyBiz My Stock</h2>
            <p className="text-[#b2967d]">Manage your inventory across all platforms</p>
          </div>
        </div>

        {/* Platform chips */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setSelectedPlatform(null)}
            className={`px-3 py-1 rounded-lg text-sm ${selectedPlatform === null ? "bg-[#efe7df] text-[#6b4f33]" : "bg-[#f3ede8] text-[#6b4f33]"}`}
          >
            All
          </button>
          {platforms.map((plat) => (
            <button
              key={plat}
              onClick={() => setSelectedPlatform(plat)}
              className={`px-3 py-1 rounded-lg text-sm ${selectedPlatform === plat ? "bg-[#efe7df] text-[#6b4f33]" : "bg-[#f3ede8] text-[#6b4f33]"}`}
            >
              {plat}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts */}
      {lowStockCount > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="text-red-600" size={20} />
          <p className="text-red-700">{lowStockCount} product(s) running low on stock</p>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] overflow-hidden mt-4 relative">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#fffaf7] border-b border-[#efe7df]">
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Product Image</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Name</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Quantity</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Platform</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Status</th>
              </tr>
            </thead>
            <tbody>
              {displayed.map((product) => (
                <tr key={product.id} className={`border-b border-[#efe7df] hover:bg-[#fffaf8] transition`}> 
                  <td className="py-4 px-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#d9e8dd] to-[#bfe6c9] flex items-center justify-center">
                      <span className="text-sm text-[#2d5235]">{product.name.split(" ").slice(0,2).map(s=>s[0]).join("")}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#333333]">{product.name}</td>
                  <td className="py-4 px-6 text-[#6b4f33] font-medium">{product.quantity}</td>
                  <td className="py-4 px-6 text-[#b2967d]">{product.platform}</td>
                  <td className="py-4 px-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium bg-[#f3ede8] text-[#6b4f33]`}>{product.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add New Product - floating bottom-right */}
        <div className="absolute right-6 bottom-6">
          <button
            onClick={handleAddProduct}
            className="px-4 py-2 bg-[#d97318] text-white rounded-md shadow-md hover:bg-[#c35f11] transition"
          >
            Add New Product
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">{editingId ? "Edit Product" : "Add New Product"}</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
              />
              <input
                type="text"
                placeholder="Platform"
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[var(--primary)]"
              >
                <option value="">Select Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
              </select>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-[#b2967d] text-[#b2967d] rounded-lg hover:bg-[#e7d8c9] transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProduct}
                className="px-4 py-2 bg-[#d97318] text-white rounded-md shadow-md hover:bg-[#c35f11] transition"
              >
                {editingId ? "Save Changes" : "Add New Product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

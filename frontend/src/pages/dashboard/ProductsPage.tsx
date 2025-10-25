"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, AlertCircle } from "lucide-react"

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

  const handleAddProduct = () => {
    setEditingId(null)
    setFormData({ name: "", quantity: "", platform: "", status: "" })
    setShowModal(true)
  }

  const handleEditProduct = (product: (typeof initialProducts)[0]) => {
    setEditingId(product.id)
    setFormData({
      name: product.name,
      quantity: product.quantity.toString(),
      platform: product.platform,
      status: product.status,
    })
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

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const lowStockCount = products.filter((p) => p.status === "Low Stock").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#333333]">My Stock</h2>
          <p className="text-[#b2967d]">Manage your inventory across all platforms</p>
        </div>
        <button
          onClick={handleAddProduct}
          className="flex items-center gap-2 px-6 py-3 bg-[#f7c948] text-[#333333] rounded-lg hover:bg-[#e6b835] transition font-medium"
        >
          <Plus size={20} />
          Add New Product
        </button>
      </div>

      {/* Alerts */}
      {lowStockCount > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="text-red-600" size={20} />
          <p className="text-red-700">{lowStockCount} product(s) running low on stock</p>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f8f4f0] border-b border-[#e7d8c9]">
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Product Name</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Quantity</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Platform</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-[#b2967d]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-[#e7d8c9] hover:bg-[#f8f4f0] transition">
                  <td className="py-4 px-6 text-[#333333] font-medium">{product.name}</td>
                  <td className="py-4 px-6 text-[#f7c948] font-medium">{product.quantity}</td>
                  <td className="py-4 px-6 text-[#b2967d]">{product.platform}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.status === "In Stock" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 flex gap-2">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="p-2 text-[#b2967d] hover:bg-[#e7d8c9] rounded transition"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948]"
              />
              <input
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948]"
              />
              <input
                type="text"
                placeholder="Platform"
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948]"
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-[#e7d8c9] rounded-lg focus:outline-none focus:border-[#f7c948]"
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
                className="flex-1 px-4 py-2 bg-[#f7c948] text-[#333333] rounded-lg hover:bg-[#e6b835] transition font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

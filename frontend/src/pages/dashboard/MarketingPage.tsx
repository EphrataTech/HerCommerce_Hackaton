import { Zap } from "lucide-react"
import { useState } from "react"

type Generated = { id: number; title: string; body: string; image: string }

export default function MarketingPage() {
  const [productName, setProductName] = useState("")
  const [audience, setAudience] = useState("")
  const [tone, setTone] = useState("")
  const [length, setLength] = useState("")
  const [platform, setPlatform] = useState("")
  const [files, setFiles] = useState<File[] | null>(null)
  const [generated, setGenerated] = useState<Generated[]>([
    {
      id: 1,
      title: "Captivating Caption",
      body: "Introducing the new 'Luxe Glow' serum, designed to illuminate your skin with a natural, radiant glow. Perfect for all skin types, this serum is your secret to a flawless complexion.",
      image: "https://picsum.photos/seed/skincare-serum/1200/400",
    },
    {
      id: 2,
      title: "Relevant Hashtags",
      body: "#LuxeGlow #Skincare #Beauty #RadiantSkin #FlawlessComplexion #Serum #BeautyRoutine",
      image: "https://picsum.photos/seed/cosmetics-hashtag/1200/400",
    },
  ])

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    setFiles(e.target.files ? Array.from(e.target.files) : null)
  }

  function generateContent() {
    // push a simple generated card — in real app we'd call the API
    const next: Generated = {
      id: Date.now(),
      title: productName ? `${productName} — Short Caption` : "New Caption",
      body: `Generated for ${productName || "your product"} — ${audience || "target audience"}`,
      // choose a cosmetic-themed placeholder seed to make images feel like skincare/cosmetics
      image: (() => {
        const seeds = [
          "skincare-serum",
          "face-cream",
          "moisturizer",
          "lipstick",
          "cosmetics-palette",
          "beauty-oil",
          "skincare-bottle",
        ]
        const idx = Math.abs(Date.now()) % seeds.length
        return `https://picsum.photos/seed/${seeds[idx]}/1200/400`
      })(),
    }
    setGenerated([next, ...generated])
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-[#111827] flex items-center gap-3"><Zap className="w-6 h-6 text-[#6b4f33]" /> AI Content Generator</h2>
        <p className="text-[#6b4f33] mt-1">Create captions, hashtags and content variations for your listings</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#efe7df] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="text-sm font-medium text-[#6b4f33]">Product Name</label>
            <input value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" className="w-full px-4 py-3 border border-[#efe7df] rounded-md focus:outline-none" />

            <label className="text-sm font-medium text-[#6b4f33]">Target Audience</label>
            <input value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="Describe your ideal customer" className="w-full px-4 py-3 border border-[#efe7df] rounded-md focus:outline-none" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[#6b4f33]">Tone</label>
                <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full px-4 py-3 border border-[#efe7df] rounded-md focus:outline-none">
                  <option value="">Select tone</option>
                  <option>Friendly</option>
                  <option>Professional</option>
                  <option>Playful</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-[#6b4f33]">Length</label>
                <select value={length} onChange={(e) => setLength(e.target.value)} className="w-full px-4 py-3 border border-[#efe7df] rounded-md focus:outline-none">
                  <option value="">Select length</option>
                  <option>Short</option>
                  <option>Medium</option>
                  <option>Long</option>
                </select>
              </div>
            </div>

            <label className="text-sm font-medium text-[#6b4f33]">Platform</label>
            <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="w-full px-4 py-3 border border-[#efe7df] rounded-md focus:outline-none">
              <option value="">Select platform</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Twitter</option>
              <option>TikTok</option>
            </select>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <label className="text-sm font-medium text-[#6b4f33]">Upload Image/Video</label>
              <div className="mt-3 border-2 border-dashed border-[#efe7df] rounded-md h-44 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-[#a58f74]">Drag and drop or browse to upload media</p>
                  <input type="file" multiple onChange={handleFiles} className="mt-3" />
                  {files && files.length > 0 && (
                    <p className="text-xs text-[#6b4f33] mt-2">{files.length} file(s) selected</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button onClick={generateContent} className="px-6 py-2 bg-[var(--primary)] text-[#111827] rounded-md font-medium">Generate Content</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#111827] mb-4">Generated Content</h3>
        <div className="space-y-6">
          {generated.map((g) => (
            <div key={g.id} className="rounded-md overflow-hidden shadow-sm bg-gray-50">
              <div className="relative h-44 md:h-56 bg-gray-200">
                <img src={g.image} alt="generated" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute left-6 top-6 bg-white/20 backdrop-blur-sm rounded-md p-4 max-w-md">
                  <h4 className="text-lg font-semibold text-white">{g.title}</h4>
                  <p className="text-sm text-white/90 mt-2">{g.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

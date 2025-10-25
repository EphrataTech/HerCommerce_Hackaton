import { useState, useEffect } from "react"

type Opportunity = {
  id: string
  title: string
  subtitle?: string
  amount?: string
  conditions?: string
  image?: string
}

export default function FundingPage() {
  const [tab, setTab] = useState<"micro" | "investor">("micro")

  const opportunities: Opportunity[] = [
    {
      id: "fund1",
      title: "Funding for Women Entrepreneurs",
      subtitle: "Microfinance Opportunity",
      amount: "$5,000 - $20,000",
      conditions: "Low interest rates, flexible repayment plans",
      image: "https://picsum.photos/seed/fund1/600/300",
    },
    {
      id: "fund2",
      title: "Small Business Loans",
      subtitle: "Microfinance Opportunity",
      amount: "$10,000 - $50,000",
      conditions: "Competitive interest rates, business plan required",
      image: "https://picsum.photos/seed/fund2/600/300",
    },
  ]

  const [applications, setApplications] = useState<{ id: string; title: string; appliedOn: string }[]>([])

  useEffect(() => {
    const raw = localStorage.getItem("adeyBizApplications")
    if (raw) {
      try {
        setApplications(JSON.parse(raw))
      } catch (e) {
        setApplications([])
      }
    }
  }, [])

  function apply(op: Opportunity) {
    const existing = applications.find((a) => a.id === op.id)
    if (existing) return
    const entry = { id: op.id, title: op.title, appliedOn: new Date().toISOString().slice(0, 10) }
    const next = [entry, ...applications]
    setApplications(next)
    localStorage.setItem("adeyBizApplications", JSON.stringify(next))
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-[#111827]">Funding & Investors</h2>
        <p className="text-[#6b4f33] mt-1">Explore funding opportunities and connect with investors to grow your business.</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#efe7df] p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setTab("micro")} className={`pb-3 ${tab === "micro" ? "border-b-2 border-[var(--primary)] text-[#111827]" : "text-[#b2967d]"}`}>
              Microfinance Opportunities
            </button>
              <button onClick={() => setTab("investor")} className={`pb-3 ${tab === "investor" ? "border-b-2 border-[var(--primary)] text-[#111827]" : "text-[#b2967d]"}`}>
              Investor Offers
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {opportunities.map((op) => (
              <div key={op.id} className="p-4 border border-[#efe7df] rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#b2967d]">{op.subtitle}</p>
                  <h4 className="font-semibold text-[#111827]">{op.title}</h4>
                  <p className="text-sm text-[#b2967d]">Amount: {op.amount} Conditions: {op.conditions}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button onClick={() => apply(op)} className="px-4 py-2 bg-[#efe7df] text-[#111827] rounded-md">Apply</button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 space-y-6">
            {opportunities.map((op) => (
              <div key={op.id} className="rounded-lg overflow-hidden">
                <img src={op.image} alt={op.title} className="w-full h-32 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#efe7df] p-6">
        <h3 className="text-lg font-bold text-[#111827] mb-4">Application Tracking</h3>
        <div className="space-y-4">
          {applications.length === 0 && <p className="text-sm text-[#b2967d]">No applications yet</p>}
          {applications.map((app) => (
            <div key={app.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#111827]">{app.title}</p>
                <p className="text-sm text-[#b2967d]">Applied on {app.appliedOn}</p>
              </div>
              <div className="w-4 h-4 bg-green-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#efe7df] p-6">
        <h3 className="text-lg font-bold text-[#111827] mb-4">How your score affects funding</h3>
        <p className="text-sm text-[#6b4f33]">Your score is a key factor in determining your eligibility for funding. A higher score increases your chances of approval and may qualify you for better terms, such as lower interest rates and higher loan amounts. Regularly review and improve your score to maximize your funding opportunities.</p>
      </div>
    </div>
  )
}

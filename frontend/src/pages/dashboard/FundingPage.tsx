import { DollarSign, TrendingUp, Users } from "lucide-react"

export default function FundingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#333333]">Funding & Investors</h2>
        <p className="text-[#b2967d]">Access funding opportunities and connect with investors</p>
      </div>

      {/* Funding Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: DollarSign, label: "Available Funding", value: "$50,000", color: "text-[#f7c948]" },
          { icon: Users, label: "Interested Investors", value: "12", color: "text-[#b2967d]" },
          { icon: TrendingUp, label: "Match Score", value: "85%", color: "text-[#f7c948]" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e7d8c9]">
            <stat.icon className={`${stat.color} w-8 h-8 mb-4`} />
            <p className="text-[#b2967d] text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-[#333333]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Funding Opportunities */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Available Opportunities</h3>
        <div className="space-y-4">
          {[
            {
              name: "Women Entrepreneurs Fund",
              amount: "$25,000",
              matchScore: "92%",
              deadline: "30 days",
              status: "Recommended",
            },
            {
              name: "Tech Innovation Grant",
              amount: "$15,000",
              matchScore: "78%",
              deadline: "45 days",
              status: "Available",
            },
            {
              name: "Small Business Loan",
              amount: "$50,000",
              matchScore: "85%",
              deadline: "60 days",
              status: "Available",
            },
          ].map((opportunity, idx) => (
            <div key={idx} className="p-4 border border-[#e7d8c9] rounded-lg hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-[#333333]">{opportunity.name}</h4>
                  <p className="text-sm text-[#b2967d]">Amount: {opportunity.amount}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    opportunity.status === "Recommended" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {opportunity.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <span className="text-[#f7c948] font-medium">Match: {opportunity.matchScore}</span>
                  <span className="text-[#b2967d]">Deadline: {opportunity.deadline}</span>
                </div>
                <button className="px-4 py-2 bg-[#f7c948] text-[#333333] rounded-lg hover:bg-[#e6b835] transition font-medium text-sm">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investor Network */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Investor Network</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Sarah Johnson", focus: "Fashion & Retail", invested: "$2M+" },
            { name: "Amara Okafor", focus: "Tech & E-commerce", invested: "$5M+" },
            { name: "Zainab Hassan", focus: "Social Impact", invested: "$1M+" },
            { name: "Fatima Ahmed", focus: "Women Entrepreneurs", invested: "$3M+" },
          ].map((investor, idx) => (
            <div key={idx} className="p-4 border border-[#e7d8c9] rounded-lg hover:bg-[#f8f4f0] transition">
              <p className="font-bold text-[#333333]">{investor.name}</p>
              <p className="text-sm text-[#b2967d] mb-2">{investor.focus}</p>
              <p className="text-sm text-[#f7c948] font-medium mb-3">Invested: {investor.invested}</p>
              <button className="w-full px-3 py-2 border border-[#b2967d] text-[#b2967d] rounded-lg hover:bg-[#e7d8c9] transition text-sm font-medium">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

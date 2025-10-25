import { Zap } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const campaignData = [
  { week: "Week 1", impressions: 4000, clicks: 240, conversions: 24 },
  { week: "Week 2", impressions: 3000, clicks: 221, conversions: 22 },
  { week: "Week 3", impressions: 2000, clicks: 229, conversions: 20 },
  { week: "Week 4", impressions: 2780, clicks: 200, conversions: 21 },
]

export default function MarketingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#333333]">Marketing Hub</h2>
        <p className="text-[#b2967d]">AI-powered marketing strategies and campaign management</p>
      </div>

      {/* AI Assistant Card */}
      <div className="bg-gradient-to-r from-[#f7c948] to-[#e6b835] rounded-2xl p-8 text-[#333333]">
        <div className="flex items-start gap-4">
          <Zap className="w-8 h-8 flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold mb-2">AI Marketing Assistant</h3>
            <p className="mb-4 opacity-90">Get personalized marketing strategies based on your business data</p>
            <button className="px-6 py-2 bg-[#333333] text-[#f7c948] rounded-lg hover:bg-opacity-90 transition font-medium">
              Get Recommendations
            </button>
          </div>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Campaign Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={campaignData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7d8c9" />
            <XAxis dataKey="week" stroke="#b2967d" />
            <YAxis stroke="#b2967d" />
            <Tooltip contentStyle={{ backgroundColor: "#f8f4f0", border: "1px solid #e7d8c9" }} />
            <Legend />
            <Line type="monotone" dataKey="impressions" stroke="#f7c948" strokeWidth={2} />
            <Line type="monotone" dataKey="clicks" stroke="#b2967d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Active Campaigns */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Active Campaigns</h3>
        <div className="space-y-4">
          {[
            { name: "Summer Collection Launch", status: "Active", roi: "+45%", budget: "$500" },
            { name: "Social Media Boost", status: "Active", roi: "+32%", budget: "$300" },
            { name: "Email Campaign", status: "Scheduled", roi: "Pending", budget: "$200" },
          ].map((campaign, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 border border-[#e7d8c9] rounded-lg hover:bg-[#f8f4f0] transition"
            >
              <div>
                <p className="font-medium text-[#333333]">{campaign.name}</p>
                <p className="text-sm text-[#b2967d]">Budget: {campaign.budget}</p>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                    campaign.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {campaign.status}
                </span>
                <p className="text-[#f7c948] font-medium">{campaign.roi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { TrendingUp, Users, Award, ShoppingCart } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 2000 },
  { month: "Apr", revenue: 2780 },
  { month: "May", revenue: 1890 },
  { month: "Jun", revenue: 2390 },
]

const credibilityData = [
  { factor: "Social Proof", value: 85 },
  { factor: "Reviews", value: 90 },
  { factor: "Engagement", value: 75 },
  { factor: "Verification", value: 80 },
  { factor: "Activity", value: 88 },
]

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold text-[#333333] mb-2">Welcome back, Sophia</h2>
        <p className="text-[#b2967d]">Here's your business overview for today</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: TrendingUp,
            label: "Total Sales",
            value: "$12,500",
            change: "+12%",
            color: "text-[#f7c948]",
          },
          {
            icon: ShoppingCart,
            label: "Orders",
            value: "320",
            change: "-5%",
            color: "text-[#b2967d]",
          },
          {
            icon: Users,
            label: "Customers",
            value: "1,240",
            change: "+8%",
            color: "text-[#f7c948]",
          },
          {
            icon: Award,
            label: "Credibility Score",
            value: "75%",
            change: "+3%",
            color: "text-[#b2967d]",
          },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-[#e7d8c9] hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`${stat.color} w-8 h-8`} />
              <span
                className={`text-sm font-medium ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-[#b2967d] text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-[#333333]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-2xl border border-[#e7d8c9]">
          <h3 className="text-lg font-bold text-[#333333] mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7d8c9" />
              <XAxis dataKey="month" stroke="#b2967d" />
              <YAxis stroke="#b2967d" />
              <Tooltip contentStyle={{ backgroundColor: "#f8f4f0", border: "1px solid #e7d8c9" }} />
              <Line type="monotone" dataKey="revenue" stroke="#f7c948" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Credibility Radar */}
        <div className="bg-white p-6 rounded-2xl border border-[#e7d8c9]">
          <h3 className="text-lg font-bold text-[#333333] mb-4">Credibility Factors</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={credibilityData}>
              <PolarGrid stroke="#e7d8c9" />
              <PolarAngleAxis dataKey="factor" stroke="#b2967d" />
              <PolarRadiusAxis stroke="#b2967d" />
              <Radar name="Score" dataKey="value" stroke="#f7c948" fill="#f7c948" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sales Channels */}
      <div className="bg-white p-6 rounded-2xl border border-[#e7d8c9]">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Sales Channels</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e7d8c9]">
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2967d]">Channel</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2967d]">Sales</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2967d]">Orders</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-[#b2967d]">AOV</th>
              </tr>
            </thead>
            <tbody>
              {[
                { channel: "Online Store", sales: "$6,250", orders: "160", aov: "$38.06" },
                { channel: "Social Media", sales: "$2,750", orders: "80", aov: "$45.88" },
                { channel: "Marketplace", sales: "$2,500", orders: "80", aov: "$31.25" },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-[#e7d8c9] hover:bg-[#f8f4f0]">
                  <td className="py-3 px-4 text-[#333333]">{row.channel}</td>
                  <td className="py-3 px-4 text-[#f7c948] font-medium">{row.sales}</td>
                  <td className="py-3 px-4 text-[#333333]">{row.orders}</td>
                  <td className="py-3 px-4 text-[#b2967d]">{row.aov}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

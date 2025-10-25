import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 2000 },
  { month: "Apr", revenue: 2780 },
  { month: "May", revenue: 1890 },
  { month: "Jun", revenue: 2390 },
]

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">Welcome back, Selam</h2>
          <p className="text-[#b2967d]">Here's a quick snapshot of your business</p>
        </div>
      </div>

      {/* Total Sales banner */}
      <div className="bg-[#f3ede8] rounded-2xl p-6 border border-[#efe7df] shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#6b4f33]">Total Sales</p>
            <div className="text-3xl md:text-4xl font-extrabold text-[#111827] mt-2">12,500 ETB</div>
          </div>
          <div className="text-sm text-[#6b4f33]">&nbsp;</div>
        </div>
      </div>

      {/* Engagement Trends */}
      <div className="bg-white p-6 rounded-2xl border border-[#e7d8c9]">
        <h3 className="text-xl font-bold text-[#111827] mb-4">Engagement Trends</h3>
        <div className="text-sm text-[#6b4f33] mb-6">Engagement Trends</div>
        <div style={{ height: 220 }} className="w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1e9e2" />
              <XAxis dataKey="month" stroke="#b2967d" />
              <YAxis hide />
              <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #efe7df" }} />
              <Line type="monotone" dataKey="revenue" stroke="#A16207" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sales Channels */}
      <div className="bg-white p-6 rounded-2xl border border-[#e7d8c9]">
        <h3 className="text-lg font-bold text-[#111827] mb-4">Sales Channels</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left text-sm text-[#b2967d] border-b border-[#efe7df]">
                <th className="py-4 px-4">Channel</th>
                <th className="py-4 px-4">Sales</th>
                <th className="py-4 px-4">Orders</th>
                <th className="py-4 px-4">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {[
                { channel: "Social Media", sales: "500", orders: "100", revenue: "2,500 ETB" },
                { channel: "E-commerce Platform", sales: "1,000", orders: "200", revenue: "5,000 ETB" },
                { channel: "Direct Sales", sales: "200", orders: "50", revenue: "1,000 ETB" },
                { channel: "Affiliate Marketing", sales: "300", orders: "75", revenue: "1,500 ETB" },
                { channel: "Email Marketing", sales: "500", orders: "125", revenue: "2,500 ETB" },
              ].map((row, idx) => (
                <tr key={idx} className={`border-b border-[#f1e9e2] ${idx % 2 === 0 ? "bg-white" : "bg-[transparent]"}`}>
                  <td className="py-4 px-4 text-[#111827] font-medium">{row.channel}</td>
                  <td className="py-4 px-4 text-[#6b4f33]">{row.sales}</td>
                  <td className="py-4 px-4 text-[#111827]">{row.orders}</td>
                  <td className="py-4 px-4 text-[#6b4f33] font-semibold">{row.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AdeyBiz Score */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#111827]">AdeyBiz Score</span>
            <span className="text-sm text-[#6b4f33]">60%</span>
          </div>
          <div className="w-full bg-[#f1e9e2] rounded-full h-3">
            <div className="bg-[#f7c948] h-3 rounded-full" style={{ width: '60%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

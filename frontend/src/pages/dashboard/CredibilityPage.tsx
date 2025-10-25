import { Award, CheckCircle, AlertCircle } from "lucide-react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const credibilityFactors = [
  { factor: "Social Proof", value: 85 },
  { factor: "Reviews", value: 90 },
  { factor: "Engagement", value: 75 },
  { factor: "Verification", value: 80 },
  { factor: "Activity", value: 88 },
]

const scoreHistory = [
  { month: "Jan", score: 65 },
  { month: "Feb", score: 68 },
  { month: "Mar", score: 70 },
  { month: "Apr", score: 72 },
  { month: "May", score: 74 },
  { month: "Jun", score: 75 },
]

export default function CredibilityPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#333333]">Credibility Score</h2>
        <p className="text-[#b2967d]">Build and track your business credibility</p>
      </div>

      {/* Main Score Card */}
      <div className="bg-gradient-to-br from-[#f7c948] to-[#e6b835] rounded-2xl p-8 text-[#333333]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg opacity-90 mb-2">Your Credibility Score</p>
            <p className="text-5xl font-bold">75%</p>
            <p className="text-sm opacity-75 mt-2">Good - Keep improving!</p>
          </div>
          <Award className="w-24 h-24 opacity-20" />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
          <h3 className="text-lg font-bold text-[#333333] mb-4">Credibility Factors</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={credibilityFactors}>
              <PolarGrid stroke="#e7d8c9" />
              <PolarAngleAxis dataKey="factor" stroke="#b2967d" />
              <PolarRadiusAxis stroke="#b2967d" />
              <Radar name="Score" dataKey="value" stroke="#f7c948" fill="#f7c948" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Score History */}
        <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
          <h3 className="text-lg font-bold text-[#333333] mb-4">Score History</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={scoreHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7d8c9" />
              <XAxis dataKey="month" stroke="#b2967d" />
              <YAxis stroke="#b2967d" />
              <Tooltip contentStyle={{ backgroundColor: "#f8f4f0", border: "1px solid #e7d8c9" }} />
              <Line type="monotone" dataKey="score" stroke="#f7c948" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Verification Status */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Verification Status</h3>
        <div className="space-y-3">
          {[
            { item: "Email Verified", verified: true },
            { item: "Phone Verified", verified: true },
            { item: "Business License", verified: false },
            { item: "Tax ID", verified: true },
            { item: "Social Media Connected", verified: true },
          ].map((verification, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 border border-[#e7d8c9] rounded-lg">
              <span className="text-[#333333]">{verification.item}</span>
              {verification.verified ? (
                <CheckCircle className="text-green-600" size={20} />
              ) : (
                <AlertCircle className="text-yellow-600" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-2xl border border-[#e7d8c9] p-6">
        <h3 className="text-lg font-bold text-[#333333] mb-4">Recommendations to Improve</h3>
        <div className="space-y-3">
          {[
            "Upload your business license to increase verification score",
            "Encourage more customer reviews on your social media",
            "Post regularly to maintain high engagement",
            "Complete your business profile information",
          ].map((rec, idx) => (
            <div key={idx} className="flex gap-3 p-3 bg-[#f8f4f0] rounded-lg">
              <CheckCircle className="text-[#f7c948] flex-shrink-0" size={20} />
              <p className="text-[#333333] text-sm">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

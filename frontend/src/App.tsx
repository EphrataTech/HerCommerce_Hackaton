import { Suspense, lazy, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"))
import DashboardHome from "./pages/dashboard/DashboardHome"
import ProductsPage from "./pages/dashboard/ProductsPage"
import MarketingPage from "./pages/dashboard/MarketingPage"
import CredibilityPage from "./pages/dashboard/CredibilityPage"
import FundingPage from "./pages/dashboard/FundingPage"
import SettingsPage from "./pages/dashboard/SettingsPage"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        path="/register"
        element={<RegisterPage setIsAuthenticated={setIsAuthenticated} />}
      />

      {/* Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <Suspense fallback={<div>Loading dashboard...</div>}>
              <DashboardLayout />
            </Suspense>
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="marketing" element={<MarketingPage />} />
        <Route path="credibility" element={<CredibilityPage />} />
        <Route path="funding" element={<FundingPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App

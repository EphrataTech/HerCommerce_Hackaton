"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Star, Users, TrendingUp, Zap, ArrowRight, CheckCircle } from "lucide-react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#e7d8c9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-8 h-8 bg-[#b2967d] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl text-[#333333]">AdeyBiz</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-[#333333] hover:text-[#b2967d] transition">
                Features
              </a>
              <a href="#how-it-works" className="text-[#333333] hover:text-[#b2967d] transition">
                How It Works
              </a>
              <a href="#testimonials" className="text-[#333333] hover:text-[#b2967d] transition">
                Testimonials
              </a>
              <a href="#pricing" className="text-[#333333] hover:text-[#b2967d] transition">
                Pricing
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="px-6 py-2 text-[#333333] hover:text-[#b2967d] transition">
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 bg-[#f7c948] text-[#333333] rounded-lg hover:bg-[#e6b835] transition font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#features" className="block px-4 py-2 text-[#333333] hover:bg-[#e7d8c9] rounded">
                Features
              </a>
              <a href="#how-it-works" className="block px-4 py-2 text-[#333333] hover:bg-[#e7d8c9] rounded">
                How It Works
              </a>
              <a href="#testimonials" className="block px-4 py-2 text-[#333333] hover:bg-[#e7d8c9] rounded">
                Testimonials
              </a>
              <Link to="/login" className="block px-4 py-2 text-[#333333] hover:bg-[#e7d8c9] rounded">
                Login
              </Link>
              <Link to="/register" className="block px-4 py-2 bg-[#f7c948] text-[#333333] rounded">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6 leading-tight">
                Empower Your Business with AdeyBiz
              </h1>
              <p className="text-lg text-[#b2967d] mb-8 leading-relaxed">
                Connect your social media and e-commerce accounts, build credibility, get AI-powered marketing
                assistance, and access funding opportunities all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="px-8 py-3 bg-[#f7c948] text-[#333333] rounded-lg hover:bg-[#e6b835] transition font-medium text-center flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="px-8 py-3 border-2 border-[#b2967d] text-[#b2967d] rounded-lg hover:bg-[#e7d8c9] transition font-medium">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e7d8c9] to-[#b2967d] rounded-3xl opacity-20"></div>
              <div className="absolute top-10 right-10 w-40 h-40 bg-[#f7c948] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#b2967d] rounded-full opacity-20 blur-3xl"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-[#b2967d] font-medium">Your Business Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#e7d8c9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Powerful Features for Women Entrepreneurs
            </h2>
            <p className="text-lg text-[#b2967d] max-w-2xl mx-auto">
              Everything you need to grow your business and reach your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Credibility Score",
                description: "Build and showcase your business credibility with our AI-powered scoring system",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "AI Marketing",
                description: "Get personalized marketing strategies powered by artificial intelligence",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Social Integration",
                description: "Connect all your social media accounts in one unified dashboard",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Funding Access",
                description: "Connect with investors and funding opportunities tailored to your business",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#e7d8c9] hover:shadow-lg transition">
                <div className="text-[#f7c948] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#333333] mb-3">{feature.title}</h3>
                <p className="text-[#b2967d]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">How AdeyBiz Works</h2>
            <p className="text-lg text-[#b2967d] max-w-2xl mx-auto">
              Get started in minutes and begin growing your business
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your account and set up your business profile in minutes",
              },
              {
                step: "2",
                title: "Connect Accounts",
                description: "Link your social media and e-commerce platforms",
              },
              {
                step: "3",
                title: "Build Credibility",
                description: "Watch your credibility score grow as you engage",
              },
              {
                step: "4",
                title: "Access Funding",
                description: "Get matched with investors and funding opportunities",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#f7c948] text-[#333333] rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2">{item.title}</h3>
                  <p className="text-[#b2967d] text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-[#f7c948] opacity-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#e7d8c9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Loved by Women Entrepreneurs</h2>
            <p className="text-lg text-[#b2967d]">See what our users are saying about AdeyBiz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophia Carter",
                role: "Fashion Designer",
                text: "AdeyBiz transformed how I manage my business. The credibility score helped me secure my first investor!",
                rating: 5,
              },
              {
                name: "Amara Okonkwo",
                role: "E-commerce Owner",
                text: "The AI marketing assistance is incredible. My sales increased by 40% in just three months.",
                rating: 5,
              },
              {
                name: "Zainab Hassan",
                role: "Content Creator",
                text: "Finally, a platform built for women entrepreneurs. The funding connections are game-changing!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#e7d8c9]">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f7c948] text-[#f7c948]" />
                  ))}
                </div>
                <p className="text-[#b2967d] mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#333333]">{testimonial.name}</p>
                  <p className="text-sm text-[#b2967d]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-[#b2967d] max-w-2xl mx-auto">
              Choose the plan that works best for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for getting started",
                features: ["Basic dashboard", "1 social media account", "Credibility score", "Email support"],
              },
              {
                name: "Professional",
                price: "$29",
                period: "/month",
                description: "For growing businesses",
                features: [
                  "Everything in Starter",
                  "Unlimited social accounts",
                  "AI marketing assistant",
                  "Advanced analytics",
                  "Priority support",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: [
                  "Everything in Professional",
                  "Dedicated account manager",
                  "Custom integrations",
                  "API access",
                  "24/7 phone support",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition ${
                  plan.highlighted
                    ? "border-[#f7c948] bg-[#f7c948] bg-opacity-5 shadow-lg scale-105"
                    : "border-[#e7d8c9] bg-white hover:shadow-lg"
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">{plan.name}</h3>
                  <p className="text-[#b2967d] text-sm mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#333333]">{plan.price}</span>
                    {plan.period && <span className="text-[#b2967d]">{plan.period}</span>}
                  </div>

                  <button
                    className={`w-full py-2 rounded-lg font-medium mb-6 transition ${
                      plan.highlighted
                        ? "bg-[#f7c948] text-[#333333] hover:bg-[#e6b835]"
                        : "border-2 border-[#b2967d] text-[#b2967d] hover:bg-[#e7d8c9]"
                    }`}
                  >
                    Get Started
                  </button>

                  <div className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#f7c948] flex-shrink-0" />
                        <span className="text-[#333333] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#b2967d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Empower Your Business?</h2>
          <p className="text-lg text-white mb-8 opacity-90">
            Join thousands of women entrepreneurs already using AdeyBiz to grow their businesses
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-[#f7c948] text-[#333333] rounded-lg hover:bg-[#e6b835] transition font-medium"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#f7c948] rounded-lg flex items-center justify-center">
                  <span className="text-[#333333] font-bold">A</span>
                </div>
                <span className="font-bold text-lg">AdeyBiz</span>
              </div>
              <p className="text-sm opacity-75">Empowering women entrepreneurs worldwide</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#features" className="hover:opacity-100 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:opacity-100 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#b2967d] pt-8 text-center text-sm opacity-75">
            <p>&copy; 2025 AdeyBiz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

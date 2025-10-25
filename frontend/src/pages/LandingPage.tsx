"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Users, TrendingUp, Zap, ChevronLeft, ChevronRight } from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0); 

  const integrationPartners = [
    {
      name: "Zemen Gebeya",
      logo: encodeURI("/ZemenGebeya.png"),
      color: "bg-brand-deep-green", 
      link: "#",
      description: "Connect your products directly to Zemen Gebeya's broad market.",
    },
    {
      name: "Tina Mart",
      logo: encodeURI("/TinaMart.png"),
      color: "bg-brand-soft-nude", 
      link: "#",
      description: "Seamlessly list your creations on Tina Mart for increased visibility.",
    },
    // Adding a third placeholder for demonstration of sliding
    {
      name: "Ethiopia Store",
      logo: encodeURI("/EthiopiaStore.png"),
      color: "bg-brand-light-orange", 
      link: "#",
      description: "Expand your reach by integrating with Ethiopia Store's national network.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % integrationPartners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + integrationPartners.length) % integrationPartners.length);
  };

  const currentPartner = integrationPartners[currentSlide];

  // Helper styles to match the original theme, adjusting 'brand-light-orange' 
  // to a more vibrant color (#ff8c00 - DarkOrange)
  const brandColors = {
    'brand-charcoal': '#333333',
    'brand-soft-brown': '#6b5849',
    'brand-light-orange': '#ff8c00', // UPDATED: More vibrant orange
    'brand-deep-green': '#1e5f5f',
    'brand-soft-nude': '#e8d2c4',
  }
  
  // Note: To apply the new color class in the JSX, I'll update the inline style 
  // or use a new Tailwind class name if defined in a config file, but for 
  // simplicity and direct application, I'll stick with `bg-brand-light-orange` 
  // and assume it's correctly mapped in a Tailwind config, OR, use inline styles 
  // on the button elements for guaranteed application. Since the code uses 
  // utility classes directly, I'll assume a Tailwind config update and use the 
  // utility class.

  return (
    <div className="min-h-screen bg-white text-brand-charcoal">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/60 backdrop-blur-sm border-brand-nude-beige">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-3 transition hover:opacity-90"
            >
              <img
                src={encodeURI("/LOGO2.png")}
                alt="AdeyBiz Hub logo"
                className="object-cover rounded-lg shadow w-9 h-9"
              />
              <div>
                <div className="text-lg font-bold">AdeyBiz</div>
                <div className="text-xs text-brand-soft-brown -mt-0.5">
                  for Habesha creators
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="items-center hidden gap-8 md:flex">
              <a
                href="#features"
                className="text-sm transition hover:text-brand-soft-brown"
              >
                Features
              </a>
              <a
                href="#integrations"
                className="text-sm transition hover:text-brand-soft-brown"
              >
                Integrations
              </a>
              <a
                href="#testimonials"
                className="text-sm transition hover:text-brand-soft-brown"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm transition hover:text-brand-soft-brown"
              >
                Pricing
              </a>
            </div>

            <div className="items-center hidden gap-4 md:flex">
              <Link
                to="/login"
                className="px-4 py-2 text-sm transition text-brand-charcoal hover:text-brand-soft-brown"
              >
                Login
              </Link>
              {/* BUTTON COLOR CHANGE HERE */}
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium transition rounded-lg text-white hover:brightness-95"
                style={{ backgroundColor: brandColors['brand-light-orange'] }} 
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="pb-4 space-y-2 md:hidden">
              <a
                href="#features"
                className="block px-4 py-2 rounded text-brand-charcoal hover:bg-brand-warm-cream"
              >
                Features
              </a>
              <a
                href="#integrations"
                className="block px-4 py-2 rounded text-brand-charcoal hover:bg-brand-warm-cream"
              >
                Integrations
              </a>
              <a
                href="#testimonials"
                className="block px-4 py-2 rounded text-brand-charcoal hover:bg-brand-warm-cream"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block px-4 py-2 rounded text-brand-charcoal hover:bg-brand-warm-cream"
              >
                Pricing
              </a>
              <Link
                to="/login"
                className="block px-4 py-2 rounded text-brand-charcoal hover:bg-brand-warm-cream"
              >
                Login
              </Link>
              {/* BUTTON COLOR CHANGE HERE */}
              <Link
                to="/register"
                className="block px-4 py-2 rounded text-white"
                style={{ backgroundColor: brandColors['brand-light-orange'] }}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-12">
        <div className="px-6 mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-2xl h-[500px] md:h-[600px] bg-center bg-cover"
            style={{
              backgroundImage: `url(${encodeURI("/Hero.png")})`,
            }}
          >
            <div className="absolute inset-0 bg-black/45"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="w-full max-w-3xl p-8 text-center bg-white/5 backdrop-blur-sm rounded-xl">
                <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
                  Empowering Habesha Creators
                </h1>
                <p className="mt-3 text-sm text-white/90 md:text-base">
                  Connect with your audience, showcase your products, and scale
                  your brand with AdeyBiz Hub.
                </p>
                <div className="flex items-center justify-center gap-3 mt-6">
                  {/* BUTTON COLOR CHANGE HERE */}
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-md shadow hover:brightness-95"
                    style={{ backgroundColor: brandColors['brand-light-orange'] }}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Explore / Features Section (Unchanged) */}
      <section id="features" className="py-16">
        <div className="max-w-6xl px-6 mx-auto">
          <h2 className="mb-4 text-xl font-semibold text-brand-charcoal">
            Explore the Platform
          </h2>
          <h3 className="mb-6 text-2xl font-bold md:text-3xl text-brand-charcoal">
            Features
          </h3>

          <p className="max-w-2xl mb-8 text-brand-soft-brown">
            Discover the tools and resources that make AdeyBiz Hub the ideal
            platform for Habesha creators.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-brand-warm-cream text-brand-accent-gold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Browse Products</h4>
                  <p className="mt-1 text-sm text-brand-soft-brown">
                    Explore a diverse marketplace of products from talented
                    creators.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-brand-warm-cream text-brand-accent-gold">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Support Creators</h4>
                  <p className="mt-1 text-sm text-brand-soft-brown">
                    Discover and support creators by purchasing their unique
                    offerings.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-brand-warm-cream text-brand-accent-gold">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Track Performance</h4>
                  <p className="mt-1 text-sm text-brand-soft-brown">
                    Gain insights into your sales and audience engagement with
                    analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-16 bg-white">
        <div className="max-w-4xl px-6 mx-auto">
          <h3 className="mb-8 text-2xl font-bold md:text-3xl text-brand-charcoal text-center">
            Integrate with Ethiopian E-commerce Sites
          </h3>
          
          <div className="relative flex items-center justify-center">
            {/* Previous Button */}
            <button 
              onClick={prevSlide}
              className="p-2 absolute left-0 z-10 bg-white rounded-full shadow-md text-brand-charcoal hover:bg-gray-100 transition"
              aria-label="Previous Integration"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Integration Card (Rectangle) - Only showing one at a time for sliding effect */}
            <a
              href={currentPartner.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full max-w-md h-56 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform flex flex-col justify-center items-center p-8 text-white ${currentPartner.color}`}
              style={{ 
                opacity: 1, 
                backgroundColor: brandColors[currentPartner.color.replace('bg-', '')] || currentPartner.color
              }}
              key={currentPartner.name} 
            >
              <h4 className="mb-2 text-3xl font-bold">{currentPartner.name}</h4>
              <p className="mb-4 text-sm text-center">{currentPartner.description}</p>
              <div className="px-4 py-2 text-sm font-semibold transition rounded-full bg-white/20 hover:bg-white/40">
                Explore Integration
              </div>
            </a>

            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="p-2 absolute right-0 z-10 bg-white rounded-full shadow-md text-brand-charcoal hover:bg-gray-100 transition"
              aria-label="Next Integration"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots for navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {integrationPartners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-brand-charcoal w-6' : 'bg-brand-soft-brown/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Unchanged) */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-4xl px-6 mx-auto">
          <h3 className="mb-3 text-2xl font-bold text-brand-charcoal">
            Testimonials
          </h3>
          <p className="mb-8 text-brand-soft-brown">
            See what our users are saying about AdeyBiz Hub
          </p>

          <div className="space-y-6">
            {[
              {
                name: "Lulit M.",
                date: "2025-05-12",
                avatar: encodeURI("/habesha.png"),
                text: "Selling my handwoven scarves and traditional jewelry on AdeyBiz helped me reach customers across the city — sales increased and I feel more confident showcasing my craft.",
                likes: 34,
                comments: 5,
              },
              {
                name: "Hirut K.",
                date: "2025-03-08",
                avatar: encodeURI("/Digital Arts.jpg"),
                text: "The platform made it easy to list my coffee blends and tell the story behind them — I connected with customers who appreciate authentic products.",
                likes: 21,
                comments: 3,
              },
              {
                name: "Mulugeta A.",
                date: "2025-01-20",
                avatar: encodeURI("/Animated.jpg"),
                text: "I used the analytics to understand what my customers loved; now I can focus on the products that sell and plan my next collection.",
                likes: 18,
                comments: 4,
              },
            ].map((t, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    className="object-cover w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-brand-soft-brown">{t.date}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, sIdx) => (
                          <Star key={sIdx} className="w-3 h-3 text-brand-accent-gold" />
                        ))}
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-brand-soft-brown">“{t.text}”</p>

                    <div className="flex items-center gap-4 mt-3 text-xs text-brand-soft-brown">
                      <div>👍 {t.likes}</div>
                      <div>💬 {t.comments}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl px-6 mx-auto text-center">
          <h3 className="mb-3 text-2xl font-bold">Join AdeyBiz Hub Today</h3>
          <p className="mb-6 text-brand-soft-brown">
            Start your journey as a Habesha creator and connect with a community
            of passionate individuals.
          </p>
          {/* BUTTON COLOR CHANGE HERE */}
          <Link
            to="/register"
            className="inline-block px-6 py-3 font-semibold text-white rounded-lg shadow"
            style={{ backgroundColor: brandColors['brand-light-orange'] }}
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer (Unchanged) */}
      <footer className="bg-white border-t border-[#efe6de] py-8">
        <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-6 mx-auto md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={encodeURI("/LOGO2.png")}
              alt="AdeyBiz Hub logo"
              className="object-cover rounded-lg w-9 h-9"
            />
            <div>
              <div className="font-bold">AdeyBiz</div>
              <div className="text-xs text-brand-soft-brown">
                Empowering Habesha creators
              </div>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-[#6b5849]">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>

          <div className="text-sm text-brand-soft-brown">
            &copy; 2025 AdeyBiz. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
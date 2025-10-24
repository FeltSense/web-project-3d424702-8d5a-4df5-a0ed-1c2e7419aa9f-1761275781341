'use client'

import React, { useState, FormEvent } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white/80 backdrop-blur-md border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex items-center justify-between transition-all duration-500 ease-in-out py-6 group-[.scrolled]:py-3">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md">
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <span className="text-xl font-semibold text-slate-800 tracking-tight">Imaginary Space</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a href="#home" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          Home
        </a>
        <a href="#services" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          Services
        </a>
        <a href="#about" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          About
        </a>
        <a href="#pricing" className="px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
          Pricing
        </a>
        <a href="#contact" className="ml-2 px-5 py-2 bg-slate-800 text-white hover:bg-slate-900 rounded-lg transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-all duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
    <div className="px-6 py-4 space-y-1">
      <a href="#home" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 text-sm font-medium">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 bg-slate-800 text-white hover:bg-slate-900 rounded-lg transition-all duration-300 text-sm font-medium text-center shadow-sm mt-2">
        Contact
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
  {/* Animated Gradient Orbs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
    <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
  </div>

  {/* Floating Grid Lines */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{ 
      backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
      backgroundSize: '100px 100px'
    }}></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
    <div className="text-center space-y-12">
      
      {/* Floating Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-sm border border-purple-500/20 rounded-full shadow-sm animate-float">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <span className="text-sm text-slate-300 font-light tracking-wide">Marketing Reimagined</span>
      </div>

      {/* Main Headline with Floating Words */}
      <div className="space-y-6">
        <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight">
          <span className="block mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Where <span className="font-semibold bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Brands</span>
          </span>
          <span className="block mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Transcend <span className="font-semibold bg-gradient-to-r from-indigo-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">Reality</span>
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <span className="text-purple-200">Imaginary Space</span> crafts marketing campaigns that exist beyond conventional boundaries—where data meets imagination and strategy becomes art.
        </p>
      </div>

      {/* Floating Stats */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16 py-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <div className="text-center group">
          <div className="text-4xl lg:text-5xl font-light text-white mb-2 transition-all duration-300 group-hover:scale-110">
            <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">500+</span>
          </div>
          <div className="text-sm text-slate-400 tracking-wide">Campaigns Launched</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl lg:text-5xl font-light text-white mb-2 transition-all duration-300 group-hover:scale-110">
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">98%</span>
          </div>
          <div className="text-sm text-slate-400 tracking-wide">Client Satisfaction</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl lg:text-5xl font-light text-white mb-2 transition-all duration-300 group-hover:scale-110">
            <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">3.2B</span>
          </div>
          <div className="text-sm text-slate-400 tracking-wide">Impressions Generated</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
        <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 font-light tracking-wide">
          <span className="flex items-center gap-2">
            Explore Our Universe
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
        <button className="px-8 py-4 bg-slate-800/40 backdrop-blur-sm text-slate-200 border border-purple-500/30 rounded-lg hover:bg-slate-800/60 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 font-light tracking-wide">
          View Case Studies
        </button>
      </div>

      {/* Floating Elements Indicator */}
      <div className="pt-16 animate-bounce-slow">
        <div className="inline-flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs tracking-widest uppercase">Scroll to Discover</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

    </div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
      opacity: 0;
    }
    .animate-bounce-slow {
      animation: bounce-slow 2s ease-in-out infinite;
    }
  `}</style>
</section>
      
      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-light text-slate-900 mb-4">
        Creative Excellence
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        Imaginary Space delivers award-winning creative solutions that transform brands and drive measurable results across industries.
      </p>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
      {/* Large Feature Card - Award-Winning Portfolio */}
      <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-2xl p-10 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 ease-in-out group">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors duration-300">
              <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-slate-900 mb-3">
              Award-Winning Portfolio
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our creative work spans multiple industries, earning recognition for innovation and impact. From startups to Fortune 500s, Imaginary Space crafts compelling brand experiences.
            </p>
          </div>
          <div className="flex items-center text-sm text-slate-500 mt-6">
            <span className="px-3 py-1 bg-slate-50 rounded-full">Strategy</span>
            <span className="px-3 py-1 bg-slate-50 rounded-full ml-2">Design</span>
            <span className="px-3 py-1 bg-slate-50 rounded-full ml-2">Execution</span>
          </div>
        </div>
      </div>

      {/* Medium Card - Full-Service Capabilities */}
      <div className="col-span-12 md:col-span-5 row-span-2 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 ease-in-out group">
        <div className="h-full flex flex-col">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:shadow-sm transition-shadow duration-300">
            <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
            </svg>
          </div>
          <h3 className="text-xl font-light text-slate-900 mb-3">
            Full-Service Creative
          </h3>
          <p className="text-slate-600 leading-relaxed flex-grow">
            From initial strategy to final execution, Imaginary Space provides comprehensive creative capabilities under one roof.
          </p>
        </div>
      </div>

      {/* Wide Card - Experienced Team */}
      <div className="col-span-12 md:col-span-8 row-span-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 ease-in-out group">
        <div className="flex items-start h-full">
          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-slate-100 transition-colors duration-300">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-light text-slate-900 mb-2">
              Expert Creative Team
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our designers, strategists, and creative directors bring decades of combined experience to every Imaginary Space project.
            </p>
          </div>
        </div>
      </div>

      {/* Small Card - Measurable Results */}
      <div className="col-span-12 md:col-span-4 row-span-1 bg-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 ease-in-out group">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:shadow-sm transition-shadow duration-300">
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-light text-slate-900 mb-2">
          Proven Results
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Measurable business impact through data-driven creativity.
        </p>
      </div>

      {/* Medium Card - Collaborative Process */}
      <div className="col-span-12 md:col-span-6 row-span-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 ease-in-out group">
        <div className="flex items-start h-full">
          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-slate-100 transition-colors duration-300">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-light text-slate-900 mb-2">
              Client Partnership
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Imaginary Space values collaboration, working closely with clients throughout the creative journey.
            </p>
          </div>
        </div>
      </div>

      {/* Medium Card - Innovation */}
      <div className="col-span-12 md:col-span-6 row-span-1 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 ease-in-out group">
        <div className="flex items-start h-full">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:shadow-sm transition-shadow duration-300">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-light text-slate-900 mb-2">
              Innovative Solutions
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Fresh approaches to creative problem-solving that set your brand apart in the marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light text-slate-900 mb-4">
        Trusted by Marketing Leaders
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        See how Imaginary Space transforms marketing strategies
      </p>
    </div>

    {/* Video Testimonials Grid */}
    <div className="grid lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 */}
      <div className="group">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-6">
          <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700">
              2:34
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
            alt="Sarah Chen"
            className="w-12 h-12 rounded-full object-cover shadow-sm"
          />
          <div className="flex-1">
            <p className="text-slate-700 leading-relaxed mb-4">
              "Imaginary Space revolutionized our content strategy. We've seen a 340% increase in engagement across all channels."
            </p>
            <div>
              <p className="font-medium text-slate-900">Sarah Chen</p>
              <p className="text-sm text-slate-500">CMO, Velocity Digital</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-6">
          <div className="aspect-video bg-gradient-to-br from-indigo-50 to-slate-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700">
              3:12
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
            alt="Marcus Rodriguez"
            className="w-12 h-12 rounded-full object-cover shadow-sm"
          />
          <div className="flex-1">
            <p className="text-slate-700 leading-relaxed mb-4">
              "The analytics dashboard from Imaginary Space gives us insights we never had before. It's a game-changer for ROI tracking."
            </p>
            <div>
              <p className="font-medium text-slate-900">Marcus Rodriguez</p>
              <p className="text-sm text-slate-500">Director of Marketing, Nexus Brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-6">
          <div className="aspect-video bg-gradient-to-br from-slate-100 to-blue-50 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700">
              1:58
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
            alt="Emily Thompson"
            className="w-12 h-12 rounded-full object-cover shadow-sm"
          />
          <div className="flex-1">
            <p className="text-slate-700 leading-relaxed mb-4">
              "Our team's productivity doubled after implementing Imaginary Space. The automation features alone saved us 20 hours per week."
            </p>
            <div>
              <p className="font-medium text-slate-900">Emily Thompson</p>
              <p className="text-sm text-slate-500">VP of Growth, Catalyst Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center pt-8">
      <p className="text-slate-600 mb-6">Join over 2,000 marketing teams using Imaginary Space</p>
      <button className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow">
        Watch More Stories
      </button>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-4xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-light text-slate-800 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Everything you need to elevate your marketing presence with Imaginary Space
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-md mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-10">
        {/* Price */}
        <div className="text-center mb-8 pb-8 border-b border-gray-100">
          <div className="inline-block px-4 py-1 bg-slate-50 rounded-full mb-4">
            <span className="text-sm font-medium text-slate-600">Professional Plan</span>
          </div>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-5xl font-light text-slate-900">$49</span>
            <span className="text-slate-500">/month</span>
          </div>
          <p className="text-sm text-slate-500">Billed monthly, cancel anytime</p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-10">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">Unlimited campaign creation and management</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">Advanced analytics and performance insights</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">Multi-channel integration (social, email, web)</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">AI-powered content suggestions and optimization</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">Priority support and dedicated account manager</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-700">White-label reporting for client presentations</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-md mb-6"
        >
          Get Started with Imaginary Space
        </button>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="w-px h-4 bg-gray-200"></div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>

      {/* Additional Trust Badge */}
      <div className="text-center mt-6">
        <p className="text-sm text-slate-500">
          Powered by Stripe • 256-bit SSL Encryption
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-2xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-light text-slate-900 mb-4">
        Let's Create Something Extraordinary
      </h2>
      <p className="text-lg text-slate-600 max-w-xl mx-auto">
        Ready to elevate your brand? Share your vision with Imaginary Space and we'll craft a marketing strategy that resonates.
      </p>
    </div>

    {/* Card Container */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 transition-all duration-300 hover:shadow-md">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
          const messageDiv = form.querySelector('#form-message') as HTMLDivElement;
          
          // Disable button
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';
          
          // Get form data
          const formData = new FormData(form);
          const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            budget: formData.get('budget'),
            services: formData.get('services'),
            message: formData.get('message'),
            industry: 'marketing',
            source: 'Imaginary Space Contact Form'
          };

          try {
            const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              messageDiv.className = 'mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center';
              messageDiv.textContent = '✓ Thank you! We\'ll be in touch within 24 hours.';
              form.reset();
            } else {
              throw new Error('Submission failed');
            }
          } catch (error) {
            messageDiv.className = 'mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center';
            messageDiv.textContent = 'Something went wrong. Please try again or email us directly.';
          } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
          }
        }}
        className="space-y-6"
      >
        {/* Name & Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
              placeholder="john@company.com"
            />
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
              placeholder="Your Company"
            />
          </div>
        </div>

        {/* Services & Budget Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="services" className="block text-sm font-medium text-slate-700 mb-2">
              Services Interested In
            </label>
            <select
              id="services"
              name="services"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
            >
              <option value="">Select a service</option>
              <option value="brand-strategy">Brand Strategy</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="content-creation">Content Creation</option>
              <option value="social-media">Social Media Management</option>
              <option value="seo-sem">SEO & SEM</option>
              <option value="full-service">Full-Service Marketing</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
              Monthly Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200"
            >
              <option value="">Select budget</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 transition-all duration-200 resize-none"
            placeholder="Share your goals, challenges, and what success looks like for your brand..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-4 px-8 rounded-lg font-medium hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow"
        >
          Send Message
        </button>

        {/* Message Container */}
        <div id="form-message" className="hidden"></div>

        {/* Privacy Note */}
        <p className="text-xs text-slate-500 text-center mt-4">
          By submitting this form, you agree to Imaginary Space's privacy policy. We respect your data and will never share it with third parties.
        </p>
      </form>
    </div>

    {/* Additional Contact Info */}
    <div className="mt-12 text-center">
      <p className="text-slate-600 mb-4">Prefer to reach out directly?</p>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <a href="mailto:hello@imaginaryspace.com" className="text-slate-700 hover:text-slate-900 transition-colors duration-200">
          hello@imaginaryspace.com
        </a>
        <span className="text-slate-300">|</span>
        <a href="tel:+15550000000" className="text-slate-700 hover:text-slate-900 transition-colors duration-200">
          +1 (555) 000-0000
        </a>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 overflow-hidden">
  {/* Gradient Wave SVG */}
  <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" 
        className="fill-white"
      />
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-12">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      {/* Company Info */}
      <div className="lg:col-span-1">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4">Imaginary Space</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Crafting compelling brand narratives and innovative marketing solutions for the modern era.
        </p>
        <div className="flex gap-3">
          <a 
            href="#" 
            className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-sm transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="#" 
            className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-sm transition-all duration-300"
            aria-label="Twitter"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a 
            href="#" 
            className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-sm transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">Services</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Brand Strategy</a></li>
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Digital Marketing</a></li>
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Content Creation</a></li>
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Social Media</a></li>
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Analytics</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">Company</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">About Us</a></li>
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Our Team</a></li>
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Careers</a></li>
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Case Studies</a></li>
          <li><a href="#" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">Blog</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">Contact</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <a href="mailto:hello@imaginaryspace.com" className="text-slate-600 text-sm hover:text-indigo-600 transition-colors duration-300">hello@imaginaryspace.com</a>
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span className="text-slate-600 text-sm">+1 (555) 123-4567</span>
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span className="text-slate-600 text-sm">123 Marketing Ave<br/>New York, NY 10001</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Imaginary Space. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors duration-300">Terms of Service</a>
          <a href="#" className="text-slate-500 text-sm hover:text-indigo-600 transition-colors duration-300">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}
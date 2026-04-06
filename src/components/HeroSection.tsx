import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const splineRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient dot-grid">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="section-badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI-Powered Platform
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6">
              Transform Your
              <br />
              Business with{' '}
              <span className="gradient-text">AI & Automation</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-8">
              We build intelligent automation systems, AI-powered solutions, and
              world-class websites that drive real results for your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 no-underline"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} className="relative z-10" />
              </a>
              <a
                href="#portfolio"
                className="btn-secondary flex items-center gap-2 no-underline"
              >
                <Play size={16} className="text-blue-400" fill="currentColor" />
                View Our Work
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['bg-blue-500', 'bg-violet-500', 'bg-pink-500', 'bg-cyan-500'].map((color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-[#020617] flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-white font-semibold">50+</span>
                  <span className="text-slate-400"> Happy Clients</span>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-sm">
                <span className="text-white font-semibold">4.9★</span>
                <span className="text-slate-400"> Client Rating</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-sm">
                <span className="text-white font-semibold">100+</span>
                <span className="text-slate-400"> Projects Done</span>
              </div>
            </div>
          </div>

          {/* Right — Spline 3D */}
          <div
            ref={splineRef}
            className={`relative transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full h-[560px] lg:h-[640px]">
              {/* Glow behind canvas */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 rounded-3xl blur-2xl scale-95" />

              {/* Spline iframe embed */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {React.createElement('spline-viewer' as any, {
                  url: '/interactive_robot_arm_by_gleb_124.spline',
                  style: { width: '100%', height: '100%' },
                })}
              </div>

              {/* Floating info cards */}
              <div className="absolute -left-4 top-12 glass-card rounded-2xl p-4 flex items-center gap-3 shadow-xl animate-float">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-lg">
                  🤖
                </div>
                <div>
                  <div className="text-xs text-slate-400">AI Models Active</div>
                  <div className="text-sm font-bold text-white">24 Deployed</div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-16 glass-card rounded-2xl p-4 flex items-center gap-3 shadow-xl" style={{ animation: 'float 6s ease-in-out infinite 2s' }}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-lg">
                  ⚡
                </div>
                <div>
                  <div className="text-xs text-slate-400">Automation Rate</div>
                  <div className="text-sm font-bold text-white">98.7% Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>

    </section>
  )
}

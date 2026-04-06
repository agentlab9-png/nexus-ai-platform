import { useEffect, useRef, useState } from 'react'
import { Shield, Zap, Clock, BarChart3, Headphones, Lock, Rocket, Star } from 'lucide-react'

const features = [
  {
    icon: <Zap size={20} className="text-yellow-400" />,
    bg: 'bg-yellow-500/10',
    title: 'Lightning Fast',
    desc: 'Optimized for performance. Our solutions load in milliseconds and scale effortlessly.',
  },
  {
    icon: <Shield size={20} className="text-green-400" />,
    bg: 'bg-green-500/10',
    title: 'Enterprise Security',
    desc: 'Bank-level security with end-to-end encryption and compliance with global standards.',
  },
  {
    icon: <BarChart3 size={20} className="text-blue-400" />,
    bg: 'bg-blue-500/10',
    title: 'Data-Driven',
    desc: 'Real-time analytics and insights to help you make smarter business decisions.',
  },
  {
    icon: <Clock size={20} className="text-violet-400" />,
    bg: 'bg-violet-500/10',
    title: '24/7 Uptime',
    desc: '99.9% guaranteed uptime with automated monitoring and instant incident response.',
  },
  {
    icon: <Headphones size={20} className="text-pink-400" />,
    bg: 'bg-pink-500/10',
    title: 'Dedicated Support',
    desc: 'Expert team available around the clock to support your operations and growth.',
  },
  {
    icon: <Rocket size={20} className="text-orange-400" />,
    bg: 'bg-orange-500/10',
    title: 'Rapid Deployment',
    desc: 'From concept to production in weeks, not months. Fast iteration, real results.',
  },
  {
    icon: <Lock size={20} className="text-cyan-400" />,
    bg: 'bg-cyan-500/10',
    title: 'Full Ownership',
    desc: 'You own your code, data, and infrastructure. Complete transparency, no lock-in.',
  },
  {
    icon: <Star size={20} className="text-amber-400" />,
    bg: 'bg-amber-500/10',
    title: 'Premium Quality',
    desc: 'We deliver nothing but world-class quality. Every pixel, every line of code counts.',
  },
]

export default function FeaturesSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="features" className="py-24 lg:py-32 relative bg-[#050d1a]" ref={ref}>
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-badge mx-auto">
            <Star size={12} />
            Why Nexus AI
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-5">
            Built for the Future,{' '}
            <span className="gradient-text">Delivered Today</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every feature is designed to give your business a competitive edge
            in the digital economy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

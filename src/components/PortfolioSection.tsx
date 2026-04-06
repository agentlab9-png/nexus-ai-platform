import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Briefcase } from 'lucide-react'

const projects = [
  {
    tag: 'AI Automation',
    tagColor: 'text-blue-400 bg-blue-400/10',
    title: 'Smart CRM Automation',
    desc: 'Fully automated customer relationship management system with AI-powered lead scoring and follow-up workflows.',
    result: '70% time saved',
    resultColor: 'text-green-400',
    gradient: 'from-blue-900/40 to-violet-900/40',
    border: 'hover:border-blue-500/40',
    emoji: '🤖',
  },
  {
    tag: 'Web Development',
    tagColor: 'text-cyan-400 bg-cyan-400/10',
    title: 'E-Commerce Platform',
    desc: 'High-performance online store with real-time inventory, AI recommendations, and seamless checkout experience.',
    result: '3x conversion rate',
    resultColor: 'text-yellow-400',
    gradient: 'from-cyan-900/40 to-blue-900/40',
    border: 'hover:border-cyan-500/40',
    emoji: '🛒',
  },
  {
    tag: 'AI Chatbot',
    tagColor: 'text-violet-400 bg-violet-400/10',
    title: 'AI Customer Support',
    desc: 'Intelligent chatbot that handles 80% of customer queries automatically with human-like responses in Arabic and English.',
    result: '80% queries resolved',
    resultColor: 'text-blue-400',
    gradient: 'from-violet-900/40 to-pink-900/40',
    border: 'hover:border-violet-500/40',
    emoji: '💬',
  },
  {
    tag: 'Process Automation',
    tagColor: 'text-green-400 bg-green-400/10',
    title: 'Invoicing & Reporting',
    desc: 'Automated financial reporting and invoicing system integrated with accounting software and bank APIs.',
    result: '90% manual work eliminated',
    resultColor: 'text-green-400',
    gradient: 'from-green-900/40 to-cyan-900/40',
    border: 'hover:border-green-500/40',
    emoji: '📊',
  },
  {
    tag: 'Web Development',
    tagColor: 'text-pink-400 bg-pink-400/10',
    title: 'SaaS Dashboard',
    desc: 'Beautiful, interactive analytics dashboard for a SaaS platform with real-time data visualization and AI insights.',
    result: 'Launched in 3 weeks',
    resultColor: 'text-pink-400',
    gradient: 'from-pink-900/40 to-violet-900/40',
    border: 'hover:border-pink-500/40',
    emoji: '📈',
  },
  {
    tag: 'AI Automation',
    tagColor: 'text-orange-400 bg-orange-400/10',
    title: 'Inventory Management AI',
    desc: 'Predictive inventory system using machine learning to prevent stockouts and optimize ordering schedules.',
    result: '40% cost reduction',
    resultColor: 'text-orange-400',
    gradient: 'from-orange-900/40 to-red-900/40',
    border: 'hover:border-orange-500/40',
    emoji: '📦',
  },
]

export default function PortfolioSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-badge mx-auto">
            <Briefcase size={12} />
            Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-5">
            Projects That{' '}
            <span className="gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real solutions, real results. Here's a glimpse of the transformations we've delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${p.border} ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card Top */}
              <div className={`h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                <span className="text-5xl">{p.emoji}</span>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${p.tagColor} mb-3`}>
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Result:</span>
                  <span className={`text-xs font-semibold ${p.resultColor}`}>{p.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Start Your Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { MessageSquare, Search, Code2, Rocket, Settings } from 'lucide-react'

const steps = [
  {
    icon: <MessageSquare size={22} />,
    num: '01',
    title: 'Discovery Call',
    desc: 'We start by deeply understanding your business, goals, challenges, and the outcomes you need.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: <Search size={22} />,
    num: '02',
    title: 'Strategy & Planning',
    desc: 'Our team designs a tailored solution with a clear roadmap, timeline, and milestones.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    icon: <Code2 size={22} />,
    num: '03',
    title: 'Build & Iterate',
    desc: 'We develop your solution using agile sprints, with regular demos and your feedback at every step.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: <Settings size={22} />,
    num: '04',
    title: 'Test & Refine',
    desc: 'Rigorous testing, performance optimization, and fine-tuning before any release.',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    icon: <Rocket size={22} />,
    num: '05',
    title: 'Launch & Support',
    desc: 'We deploy your solution and stay by your side with ongoing support, monitoring, and updates.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
]

export default function ProcessSection() {
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
    <section id="process" className="py-24 lg:py-32 relative bg-[#050d1a]" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-badge mx-auto">
            <Rocket size={12} />
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-5">
            How We{' '}
            <span className="gradient-text">Deliver Excellence</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A proven, transparent process that keeps you informed and in control at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-2xl border ${s.bg} flex items-center justify-center ${s.color} mb-4 relative z-10 bg-[#050d1a]`}>
                  {s.icon}
                </div>

                <div className="text-xs font-mono text-slate-600 mb-2">{s.num}</div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

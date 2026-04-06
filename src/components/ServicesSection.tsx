import { useEffect, useRef, useState } from 'react'
import { Bot, Globe, Cpu, ArrowRight, BrainCircuit } from 'lucide-react'

const services = [
  {
    icon: <Bot size={28} className="text-blue-400" />,
    gradient: 'from-blue-500/20 to-blue-600/5',
    border: 'hover:border-blue-500/40',
    glow: 'group-hover:shadow-blue-500/20',
    tag: 'Automation',
    title: 'Business Automation',
    description:
      'Automate repetitive tasks, streamline workflows, and eliminate bottlenecks. We integrate smart automation into your existing systems to save time and reduce errors.',
    features: ['Workflow Automation', 'RPA Solutions', 'API Integration', 'Process Optimization'],
  },
  {
    icon: <BrainCircuit size={28} className="text-violet-400" />,
    gradient: 'from-violet-500/20 to-violet-600/5',
    border: 'hover:border-violet-500/40',
    glow: 'group-hover:shadow-violet-500/20',
    tag: 'Artificial Intelligence',
    title: 'AI Solutions',
    description:
      'Harness the power of artificial intelligence for your business. From chatbots and recommendation engines to predictive analytics and computer vision.',
    features: ['AI Chatbots', 'Machine Learning', 'Data Analytics', 'NLP Solutions'],
  },
  {
    icon: <Globe size={28} className="text-cyan-400" />,
    gradient: 'from-cyan-500/20 to-cyan-600/5',
    border: 'hover:border-cyan-500/40',
    glow: 'group-hover:shadow-cyan-500/20',
    tag: 'Web Development',
    title: 'Professional Websites',
    description:
      'We design and develop stunning, high-performance websites and web applications that convert visitors into customers and grow your online presence.',
    features: ['React / Next.js', 'E-Commerce', 'CMS Solutions', 'Mobile-First Design'],
  },
]

export default function ServicesSection() {
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
    <section id="services" className="py-24 lg:py-32 relative" ref={ref}>
      {/* BG Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-badge mx-auto">
            <Cpu size={12} />
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-5">
            Services That Drive{' '}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge technology with strategic thinking to deliver solutions
            that transform how your business operates.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group glass-card rounded-2xl p-8 cursor-pointer transition-all duration-700 delay-${i * 100} ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${s.border}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>

              {/* Tag */}
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                {s.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-2 mb-3">{s.title}</h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed text-sm mb-6">{s.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
              >
                Learn More
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '100+', label: 'Projects Delivered', sub: 'Across 15+ industries' },
  { value: '50+', label: 'Happy Clients', sub: 'Worldwide partnerships' },
  { value: '98%', label: 'Success Rate', sub: 'On-time delivery' },
  { value: '24/7', label: 'Support', sub: 'Always available' },
]

export default function StatsSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-blue-600/10" />
      <div className="absolute inset-0 border-y border-white/5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-black gradient-text mb-2">
                {s.value}
              </div>
              <div className="text-white font-semibold text-sm lg:text-base mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

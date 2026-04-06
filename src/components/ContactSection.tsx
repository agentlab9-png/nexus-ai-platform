import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you'd connect to your backend/Supabase
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-badge mx-auto">
            <MessageCircle size={12} />
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-5">
            Ready to{' '}
            <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">Let's Build Something Great</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you have a clear vision or just an idea, our team is here to help you
              turn it into a reality. Book a free discovery call today.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'hello@nexus-ai.com' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+966 50 000 0000' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Saudi Arabia' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-sm font-medium text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why choose us */}
            <div className="glass-card rounded-2xl p-6">
              <div className="text-sm font-semibold text-white mb-3">Why companies choose us:</div>
              {[
                'Free initial consultation',
                'Fixed-price projects, no surprises',
                'Dedicated project manager',
                'Post-launch support included',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-400 py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-green-400">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Service Needed
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                >
                  <option value="">Select a service...</option>
                  <option value="automation">Business Automation</option>
                  <option value="ai">AI Solutions</option>
                  <option value="web">Web Development</option>
                  <option value="all">Full Package (All Services)</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {sent ? (
                  <span>Message Sent! We'll be in touch soon ✓</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="relative z-10" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                We typically respond within a few hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

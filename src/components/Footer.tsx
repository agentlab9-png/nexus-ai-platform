import { Zap } from 'lucide-react'

const links = {
  Services: ['Automation', 'AI Solutions', 'Web Development', 'Consulting'],
  Company: ['About', 'Portfolio', 'Process', 'Blog'],
  Support: ['Contact Us', 'FAQ', 'Documentation', 'Status'],
}

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Nexus</span>
                <span className="gradient-text-blue"> AI</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Your partner in digital transformation. We build automation, AI, and
              web solutions that scale your business.
            </p>
            <div className="flex items-center gap-3">
              {['X', 'in', 'ig', 'gh'].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Nexus AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

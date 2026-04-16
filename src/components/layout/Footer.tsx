import { Building2, Phone, MapPin, MessageCircle, Sparkles, Heart } from 'lucide-react';

const OWNER_PHONE = '7091075142';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-slate-950 to-slate-900 text-slate-300 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-black text-white text-lg">DS Prime Homes</p>
                <p className="text-cyan-300 text-xs tracking-widest uppercase font-semibold">ORMANJHI, RANCHI</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Premium residential flats for rent in Ormanjhi, Ranchi. Zero brokerage, direct owner contact for hassle-free renting.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with love for Ranchi</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: '#properties', label: 'Properties' },
                { href: '#location', label: 'Location' },
                { href: '#contact', label: 'Contact' }
              ].map((link, i) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-base font-medium hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-400" />
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:+91${OWNER_PHONE}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Call Now</div>
                    <div className="text-xs text-slate-400">+91 {OWNER_PHONE}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/91${OWNER_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">WhatsApp</div>
                    <div className="text-xs text-slate-400">Quick Response</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">Location</div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    Ormanjhi, Ranchi<br />Jharkhand – 835219
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} DS Prime Homes. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Zero Brokerage
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Direct Owner
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Premium Quality
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

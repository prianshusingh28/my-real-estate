import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Building2 } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const navLinks = [
  { href: '#properties', label: 'Properties' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'glass shadow-2xl shadow-slate-900/20'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 transition-shadow duration-300">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-white leading-none block">DS Prime Homes</span>
              <span className="text-[10px] text-cyan-300 font-medium tracking-widest uppercase">ORMANJHI, RANCHI</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="relative text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="btn-gradient px-6 py-2.5 text-sm font-bold shadow-lg"
            >
              Book Visit
            </button>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 glass flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-400" />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 glass flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-400" />}
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="w-10 h-10 glass flex items-center justify-center rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden glass-dark border-t border-white/10 py-6 space-y-4 animate-slide-up">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-semibold text-white hover:text-cyan-300 transition-colors duration-300 rounded-xl hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <button
                onClick={() => handleNav('#contact')}
                className="w-full btn-gradient py-3 text-sm font-bold shadow-lg"
              >
                Book Visit
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

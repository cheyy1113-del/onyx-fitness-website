import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { OnyxLogo } from './OnyxLogo';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Visuals', href: '#gallery', id: 'gallery' },
    { name: 'Training & Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled state
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);

      // 2. Scroll percentage calculation
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const progress = (currentScrollY / totalScrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // 3. Active section tracking based on scroll position
      const sectionElements = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#1F1F1F] py-2 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
          : 'bg-gradient-to-b from-[#050505] via-[#050505]/85 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a href="#hero" className="flex items-center group py-0.5 flex-shrink-0">
          <OnyxLogo size="md" showSubtitle={true} />
        </a>

        {/* Center: HIIT Style Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-xs font-black tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1.5 transition-colors duration-200 group ${
                  isActive ? 'text-white font-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {/* Active Indicator Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#E50914] transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_8px_#E50914]' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Exploration Tracker Pill & Actions Cluster */}
        <div className="hidden lg:flex items-center space-x-3.5 flex-shrink-0">
          {/* Unique Active Section & Exploration Percentage Tracker Pill */}
          <div className="inline-flex items-center space-x-2 bg-[#0D0D0D] border border-[#E50914]/40 px-3 py-1.5 rounded-full backdrop-blur-md shadow-red-glow">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-white font-mono">
              {Math.round(scrollProgress)}% • {activeSection}
            </span>
          </div>

          <a
            href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'd%20like%20to%20know%20more%20about%20your%20training%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#0D0D0D] border border-[#1F1F1F] hover:border-[#25D366] text-zinc-300 hover:text-white rounded-full transition-all duration-300 flex items-center justify-center shadow-md"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
          </a>

          <button
            onClick={onBookClick}
            className="px-5 py-2.5 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-full btn-red-glow transition-all duration-300 flex items-center space-x-2 shadow-red-glow"
          >
            <span>BOOK A SESSION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Scroll Indicator Pill */}
        <div className="lg:hidden flex items-center space-x-2.5">
          <div className="inline-flex items-center space-x-1 bg-[#0D0D0D] border border-[#E50914]/40 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-zinc-200">
            <span className="text-[#E50914] font-black">{Math.round(scrollProgress)}%</span>
          </div>

          <button
            onClick={onBookClick}
            className="px-3.5 py-1.5 bg-[#E50914] text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-red-glow"
          >
            Book
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#E50914] p-2 rounded-xl bg-[#0D0D0D] border border-[#1F1F1F]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Unique Crimson Energy Scroll Progress Line along Header Bottom Edge */}
      <div className="w-full bg-[#1F1F1F]/50 h-[2.5px] overflow-hidden relative mt-1">
        <div
          className="bg-gradient-to-r from-[#E50914] via-[#FF3B47] to-[#E50914] h-full transition-all duration-150 shadow-[0_0_10px_#E50914]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#050505]/98 border-b border-[#1F1F1F] backdrop-blur-2xl p-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-3.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-black tracking-wider uppercase py-2 border-b border-[#121212] flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#E50914]' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />}
                    <span>{link.name}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                </a>
              );
            })}

            <div className="pt-3 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3.5 bg-[#E50914] hover:bg-[#C1070F] text-white text-xs font-black uppercase tracking-wider rounded-xl btn-red-glow text-center shadow-red-glow"
              >
                BOOK A SESSION NOW
              </button>

              <a
                href="https://wa.me/917989289409?text=Hi%20ONYX,%20I'd%20like%20to%20know%20more%20about%20your%20training%20programs."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#0D0D0D] border border-[#1F1F1F] text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>CHAT ON WHATSAPP (7989289409)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

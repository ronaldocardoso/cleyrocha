import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Dr. Cley', href: '#dr-cley' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Endocrinologia Integrada', href: '#integrada' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-obsidian/95 backdrop-blur-md border-b border-gold-champagne/15 shadow-2xl'
          : 'py-5 bg-obsidian/60 backdrop-blur-sm border-b border-gold-champagne/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="flex flex-col">
            <span className="font-editorial text-lg tracking-[0.18em] font-semibold text-white leading-tight">
              CLEY ROCHA
            </span>
            <span className="text-[10px] tracking-[0.22em] font-medium text-gold-champagne uppercase">
              ENDOCRINOLOGIA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-white relative py-1 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-gradient hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Nav Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full border border-gold-champagne/40 text-white bg-gold-champagne/5 hover:bg-gold-champagne/15 hover:border-gold-champagne hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Agendar consulta</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-champagne" />
          </button>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gold-champagne hover:text-white transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-obsidian/95 backdrop-blur-xl border-t border-gold-champagne/15 p-8 flex flex-col justify-between z-40">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-editorial tracking-wider text-slate-200 hover:text-gold-champagne border-b border-white/5 pb-3 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-gold-gradient text-obsidian font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <span>Agendar consulta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

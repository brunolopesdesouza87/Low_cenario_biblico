import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, ShieldCheck, Zap, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: (plan: 'premium' | 'basico') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 52);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cenários', href: '#cenarios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Bônus', href: '#bonus' },
    { label: 'Para Quem É', href: '#para-quem' },
    { label: 'Planos', href: '#COMPRA' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Urgency Top Bar */}
      <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white text-xs sm:text-sm font-semibold py-2 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="bg-amber-400/20 text-amber-200 border border-amber-300/30 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider font-bold">
              Oferta Especial
            </span>
            <span className="hidden sm:inline">Desconto de 75% liberado para hoje!</span>
            <span className="sm:hidden">75% OFF hoje!</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sky-200 text-xs flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              Tempo restante:
            </span>
            <div className="font-mono bg-black/30 backdrop-blur-sm px-2.5 py-0.5 rounded border border-white/20 text-amber-300 font-bold tracking-wider">
              {formatTimer(timeLeft)}
            </div>
            <a
              href="#COMPRA"
              className="hidden md:inline-flex items-center gap-1 text-xs bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold px-3 py-1 rounded-full transition-all"
            >
              Aproveitar
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/90 backdrop-blur-sm py-4 border-b border-sky-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-lg sm:text-xl text-slate-800 tracking-tight font-montserrat">
                  Cenários da <span className="text-sky-600">Fé Kids</span>
                </span>
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
              </div>
              <p className="text-[11px] font-medium text-slate-500 leading-tight">
                35 Cenários Bíblicos 3D
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-sky-600 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#COMPRA"
              className="bg-gradient-to-r from-[#FF2A53] to-[#e61e47] hover:from-[#e61e47] hover:to-[#c81237] text-white font-extrabold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-rose-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Quero Acessar Agora</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-800 font-semibold hover:bg-sky-50 hover:text-sky-600 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#COMPRA"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#FF2A53] hover:bg-[#e61e47] text-white font-bold py-3 rounded-xl shadow-md text-sm"
              >
                QUERO O PLANO PREMIUM - R$ 11,99
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

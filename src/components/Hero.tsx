import React from 'react';
import { ArrowDown, CheckCircle2, Sparkles, Shield, Printer, Scissors, Heart } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-[#67A7DD] via-[#7AB4E4] to-[#8EC6E0] pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden text-white">
      {/* Decorative background clouds / blur circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-300/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Playful Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wider text-yellow-200 uppercase shadow-sm mb-4 animate-bounce-subtle">
          <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
          <span>QUE TAL DAR VIDA À BÍBLIA?</span>
          <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
        </div>

        {/* Main H1 Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-sm font-montserrat uppercase leading-tight max-w-4xl">
          35 CENÁRIOS BÍBLICOS <span className="text-amber-300 underline decoration-wavy decoration-white/60">3D</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-sky-50 font-medium max-w-3xl leading-relaxed">
          Tenha acesso imediato a Histórias bíblicas para imprimir, montar e ensinar de um jeito que encanta as crianças.
        </p>

        {/* Hero Mockup Image */}
        <div className="mt-8 sm:mt-10 relative max-w-3xl w-full mx-auto group">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/25 border-4 border-white/80 bg-white/10 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]">
            <img
              src="/images/hero.png"
              alt="35 Cenários Bíblicos 3D Cenários da Fé Kids"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* Floating badge over image */}
          <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 bg-amber-400 text-blue-950 px-4 sm:px-6 py-2 rounded-full font-black text-xs sm:text-sm shadow-xl border-2 border-white flex items-center gap-2 whitespace-nowrap">
            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
            <span>O material mais amado do Ministério Infantil!</span>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="mt-12 sm:mt-14 flex flex-col items-center w-full max-w-md">
          <a
            href="#COMPRA"
            onClick={onCtaClick}
            className="w-full text-center bg-[#FF2A53] hover:bg-[#e41842] text-white font-black text-lg sm:text-2xl py-4 sm:py-5 px-6 sm:px-8 rounded-2xl shadow-xl shadow-rose-600/40 uppercase tracking-wide transition-all transform hover:-translate-y-1 active:translate-y-0.5 animate-pulse-cta cursor-pointer block border-2 border-white/30"
          >
            QUERO ADQUIRIR OS CENÁRIOS
          </a>

          <p className="mt-3 text-xs sm:text-sm text-sky-100 font-medium flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-300" />
            <span>Acesso vitalício por apenas R$ 11,99 • Sem mensalidade</span>
          </p>
        </div>

        {/* Benefit Badges */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl text-left">
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-3 flex items-center gap-2.5">
            <div className="p-2 bg-white/20 rounded-lg text-amber-300">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-sky-100 font-normal">Impressão</div>
              <div className="text-xs sm:text-sm font-bold">Folha A4 Comum</div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-3 flex items-center gap-2.5">
            <div className="p-2 bg-white/20 rounded-lg text-emerald-300">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-sky-100 font-normal">Montagem</div>
              <div className="text-xs sm:text-sm font-bold">Fácil e Segura</div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-3 flex items-center gap-2.5">
            <div className="p-2 bg-white/20 rounded-lg text-yellow-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-sky-100 font-normal">Entrega</div>
              <div className="text-xs sm:text-sm font-bold">100% Imediata</div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-3 flex items-center gap-2.5">
            <div className="p-2 bg-white/20 rounded-lg text-rose-300">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-sky-100 font-normal">Garantia</div>
              <div className="text-xs sm:text-sm font-bold">7 Dias Total</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#cenarios"
          className="mt-8 text-white/80 hover:text-white transition-colors flex flex-col items-center gap-1 group"
        >
          <span className="text-xs font-semibold uppercase tracking-wider">Ver os Cenários</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Wave bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-14 text-[#FFFAEE] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

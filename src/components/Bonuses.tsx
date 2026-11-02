import React from 'react';
import { BONUSES } from '../data/siteData';
import { Gift, Sparkles, Check, ArrowRight } from 'lucide-react';

interface BonusesProps {
  onCtaClick?: () => void;
}

export const Bonuses: React.FC<BonusesProps> = ({ onCtaClick }) => {
  return (
    <section id="bonus" className="py-16 sm:py-24 bg-gradient-to-b from-[#8EC6E0] via-[#7AB4E4] to-[#67A7DD] text-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-blue-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase shadow-md mb-4 animate-bounce-subtle">
            <Gift className="w-4 h-4" />
            PRESENTES ESPECIAIS
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-montserrat uppercase tracking-tight drop-shadow-sm leading-tight">
            E NÃO PARA POR AÍ... <span className="text-amber-300">AINDA TEM MAIS!</span>
          </h2>

          <p className="mt-3 text-lg sm:text-2xl text-sky-100 font-semibold">
            Você também vai receber 4 Bônus Exclusivos no Plano Premium:
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {BONUSES.map((bonus, index) => (
            <div
              key={bonus.id}
              className="bg-white text-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl border-4 border-white/80 flex flex-col sm:flex-row gap-5 items-center group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Cover Image */}
              <div className="w-full sm:w-44 flex-shrink-0 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-md relative group-hover:shadow-lg transition-shadow">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-[#1FBE00] text-white text-[11px] font-black px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-white" />
                  {bonus.badge}
                </div>
              </div>

              {/* Bonus Content */}
              <div className="flex-1 text-center sm:text-left flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                    <span className="text-xs font-extrabold text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full">
                      BÔNUS #{index + 1}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {bonus.originalPrice}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-800 font-montserrat leading-snug">
                    {bonus.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Incluso no Kit Premium
                  </span>
                  <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                    R$ 0,00
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center max-w-xl mx-auto">
          <a
            href="#COMPRA"
            onClick={onCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FF2A53] hover:bg-[#e41842] text-white font-black text-lg sm:text-2xl py-4 sm:py-5 px-8 rounded-2xl shadow-2xl shadow-rose-600/40 uppercase tracking-wide transition-all transform hover:scale-105 active:scale-95 animate-pulse-cta cursor-pointer border-2 border-white/30"
          >
            <span>QUERO GARANTIR TODOS OS BÔNUS</span>
            <ArrowRight className="w-6 h-6" />
          </a>
          <p className="mt-3 text-xs sm:text-sm text-sky-100 font-medium">
            Todos os 4 bônus são liberados gratuitamente hoje junto com os 35 Cenários
          </p>
        </div>
      </div>
    </section>
  );
};

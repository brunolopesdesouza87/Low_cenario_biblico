import React from 'react';
import { Check, X, Sparkles, Shield, ArrowRight, Zap, Star } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: 'premium' | 'basico') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="COMPRA" className="py-16 sm:py-24 bg-gradient-to-b from-sky-50 via-slate-50 to-white relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-[#FF2A53] text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 fill-[#FF2A53]" />
            CONDIÇÃO PROMOCIONAL HOJE
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-800 font-montserrat uppercase tracking-tight">
            Preparamos duas ofertas especiais para você.
          </h2>

          <p className="mt-3 text-base sm:text-xl text-slate-600 font-medium">
            Compare e escolha a opção que melhor te atende.
          </p>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* PLANO PREMIUM (Featured / Most Popular) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#1863A3] via-[#15568f] to-[#0f4474] text-white p-6 sm:p-9 shadow-2xl border-4 border-amber-400 flex flex-col justify-between transform lg:-translate-y-2 hover:scale-[1.01] transition-all duration-300">
            {/* Top Ribbon Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 px-6 py-1.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-4 h-4 fill-blue-950" />
              <span>MAIS VENDIDO • 75% DE DESCONTO</span>
              <Star className="w-4 h-4 fill-blue-950" />
            </div>

            <div>
              {/* Plan Title & Tag */}
              <div className="text-center pt-2 mb-6">
                <span className="text-amber-300 text-xs font-black tracking-widest uppercase block mb-1">
                  PACOTE COMPLETO VITALÍCIO
                </span>
                <h3 className="text-3xl sm:text-4xl font-black font-montserrat tracking-tight uppercase">
                  PLANO PREMIUM
                </h3>
                <p className="text-sky-200 text-xs sm:text-sm mt-1">
                  Acesso total para sempre a todo o material + 4 super bônus
                </p>
              </div>

              {/* Mockup Preview Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 bg-black/10 mb-6">
                <img
                  src="/images/mockup-premium.png"
                  alt="Plano Premium 35 Cenários Bíblicos"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Features List */}
              <div className="space-y-3.5 my-6 text-sm sm:text-base">
                <div className="flex items-center gap-3 bg-white/10 p-2.5 rounded-xl border border-white/15">
                  <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center flex-shrink-0 font-bold">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="font-extrabold text-amber-200 text-base sm:text-lg">
                    35 CENÁRIOS BÍBLICOS 3D
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sky-50 font-medium">
                    Bônus: <strong>Pequeno Dicionário Bíblico</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sky-50 font-medium">
                    Bônus: <strong>Pequenos Exploradores da Bíblia</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sky-50 font-medium">
                    Bônus: <strong>Pôsteres Bíblicos Decorativos</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sky-50 font-medium">
                    Bônus: <strong>Perguntas sobre Deus e a Bíblia</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sky-50 font-medium">
                    Bônus: <strong>Certificado Oficial para Crianças</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-amber-400/20 p-2.5 rounded-xl border border-amber-300/30">
                  <div className="w-6 h-6 rounded-full bg-amber-400 text-blue-950 flex items-center justify-center flex-shrink-0 font-bold">
                    <Star className="w-4 h-4 fill-blue-950" />
                  </div>
                  <span className="font-extrabold text-amber-300 text-sm sm:text-base">
                    ACESSO VITALÍCIO (Pague uma única vez)
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="pt-6 border-t border-white/15 text-center">
              <div className="text-sky-200 line-through text-sm sm:text-base font-semibold">
                DE R$ 47,90
              </div>
              <div className="text-amber-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider mt-0.5">
                POR APENAS
              </div>
              <div className="text-4xl sm:text-6xl font-black font-montserrat text-white my-1 tracking-tight drop-shadow-md">
                R$ 11,99
              </div>
              <div className="text-xs text-sky-200 font-medium mb-6">
                Pagamento único via PIX ou Cartão • Sem mensalidades
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href="https://pay.cakto.com.br/3b8rq9x_1271739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF2A53] hover:bg-[#e41842] text-white font-black text-lg sm:text-xl py-4 px-6 rounded-2xl shadow-xl shadow-rose-600/50 uppercase tracking-wide transition-all transform hover:scale-105 active:scale-95 animate-pulse-cta cursor-pointer border-2 border-white/30"
                >
                  <span>QUERO O PLANO PREMIUM</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <button
                  type="button"
                  onClick={() => onSelectPlan('premium')}
                  className="text-xs text-sky-200 hover:text-white underline underline-offset-4 font-semibold py-1 transition-colors"
                >
                  Ver opções de pagamento instantâneo (PIX / Cartão)
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-sky-200">
                <Shield className="w-4 h-4 text-emerald-300" />
                <span>Liberação imediata no seu e-mail após a compra</span>
              </div>
            </div>
          </div>

          {/* PLANO BÁSICO */}
          <div className="rounded-3xl bg-white text-slate-800 p-6 sm:p-9 shadow-lg border-2 border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              {/* Plan Title */}
              <div className="text-center mb-6">
                <span className="text-slate-400 text-xs font-black tracking-widest uppercase block mb-1">
                  VERSÃO REDUZIDA
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-montserrat tracking-tight uppercase text-slate-800">
                  PLANO BÁSICO
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Apenas 5 cenários com acesso temporário
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 my-8 text-sm sm:text-base">
                <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="font-bold text-slate-700">
                    05 CENÁRIOS BÍBLICOS
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ⏳
                  </div>
                  <span className="font-semibold text-amber-900">
                    Acesso temporário: <strong>Apenas 1 MÊS</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-slate-500 line-through">
                    Pequeno Dicionário Bíblico
                  </span>
                </div>

                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-slate-500 line-through">
                    Pequenos Exploradores da Bíblia
                  </span>
                </div>

                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-slate-500 line-through">
                    Pôsteres Bíblicos Decorativos
                  </span>
                </div>

                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-slate-500 line-through">
                    Perguntas que as Crianças fazem
                  </span>
                </div>

                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-slate-500 line-through">
                    Certificado de Conclusão
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="pt-6 border-t border-slate-100 text-center">
              <div className="text-slate-400 font-bold text-xs uppercase tracking-wider">
                VALOR ÚNICO
              </div>
              <div className="text-3xl sm:text-5xl font-black font-montserrat text-slate-800 my-2 tracking-tight">
                R$ 4,99
              </div>
              <div className="text-xs text-slate-500 mb-6 font-medium">
                Acesso expira em 30 dias • Sem os 4 bônus
              </div>

              <div className="space-y-2">
                <a
                  href="https://pay.cakto.com.br/jz96xnr_1271720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-white font-bold text-base py-3.5 px-6 rounded-2xl transition-all cursor-pointer"
                >
                  <span>QUERO O PLANO BÁSICO • R$ 4,99</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectPlan('basico')}
                  className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4 font-medium py-1 transition-colors"
                >
                  Ou clique para simular checkout básico
                </button>
              </div>

              <div className="mt-4 text-xs text-amber-700 bg-amber-50 rounded-xl p-2.5 font-medium">
                💡 Dica: Por apenas mais R$ 7 você leva 30 cenários a mais e acesso vitalício no Premium!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

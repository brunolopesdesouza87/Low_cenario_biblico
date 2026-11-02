import React from 'react';
import { Printer, Scissors, Layers, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onCtaClick?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const steps = [
    {
      step: '01',
      title: 'IMPRIMA',
      icon: Printer,
      color: 'from-sky-500 to-blue-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      description: 'Receba os arquivos em PDF em seu e-mail e imprima em qualquer impressora caseira ou gráfica rápida no formato A4.',
    },
    {
      step: '02',
      title: 'RECORTE',
      icon: Scissors,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      description: 'Recorte os personagens e peças com tesoura comum sem ponta. As crianças adoram ajudar nessa etapa tão divertida!',
    },
    {
      step: '03',
      title: 'DOBRE',
      icon: Layers,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      description: 'Dobre nas linhas pontilhadas indicadas para dar sustentação, profundidade e o efeito 3D pop-up que encanta.',
    },
    {
      step: '04',
      title: 'MONTE',
      icon: CheckCircle2,
      color: 'from-rose-500 to-red-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      description: 'Cole as abas com cola bastão ou líquida escolar. O cenário fica em pé sozinho pronto para a hora da história!',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFAEE] via-white to-sky-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Passo a Passo Simples
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-800 font-montserrat uppercase tracking-tight">
            COMO FUNCIONA
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Atividade 100% prática que estimula a coordenação motora, imaginação e o amor pela Palavra de Deus.
          </p>
        </div>

        {/* Featured Visual Illustration */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
            <img
              src="/images/como-funciona.png"
              alt="Como Funciona o Cenários da Fé Kids"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`relative rounded-2xl p-6 bg-white border ${item.borderColor} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between`}
              >
                {/* Step pill */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 font-montserrat">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-800 font-montserrat uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight quote & CTA */}
        <div className="mt-14 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="bg-sky-500/10 border-2 border-dashed border-sky-400 rounded-2xl p-6 sm:p-8 w-full mb-6">
            <h3 className="text-xl sm:text-3xl font-extrabold text-sky-950 font-montserrat leading-snug">
              ✨ Prontinho! A história bíblica ganha vida diante dos pequenos.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-sky-800">
              As crianças não esquecem mais a lição bíblica porque elas mesmas ajudaram a construir!
            </p>
          </div>

          <a
            href="#COMPRA"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2 bg-[#FF2A53] hover:bg-[#e41842] text-white font-black text-lg sm:text-xl py-4 px-8 rounded-2xl shadow-xl shadow-rose-500/30 uppercase tracking-wide transition-all transform hover:scale-105 active:scale-95 animate-pulse-cta cursor-pointer border-2 border-white/20"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

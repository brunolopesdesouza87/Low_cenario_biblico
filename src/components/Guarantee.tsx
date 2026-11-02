import React from 'react';
import { ShieldCheck, Lock, RefreshCw, Sparkles } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-amber-50 via-white to-sky-50 rounded-3xl p-6 sm:p-10 border-2 border-amber-200/80 shadow-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {/* Official 7-day Seal Image */}
          <div className="w-44 sm:w-56 flex-shrink-0">
            <img
              src="/images/selo-7-dias.png"
              alt="Garantia Incondicional de 7 Dias"
              className="w-full h-auto drop-shadow-lg hover:scale-105 transition-transform"
              loading="lazy"
            />
          </div>

          {/* Guarantee Copy */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              RISCO ZERO PARA VOCÊ
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 font-montserrat uppercase tracking-tight">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Você tem 7 dias completos a partir da compra para acessar o material, imprimir os cenários e testar com seus filhos ou com sua turma na igreja.
            </p>

            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Se por qualquer motivo você não ficar 100% encantado com a qualidade pedagógica e visual das histórias bíblicas, basta nos enviar um simples e-mail e <strong>devolvemos todo o seu dinheiro</strong>. Sem perguntas, sem burocracia.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <Lock className="w-4 h-4" /> Compra 100% Criptografada
              </span>
              <span className="flex items-center gap-1.5 text-sky-700">
                <RefreshCw className="w-4 h-4" /> Reembolso Rápido e Fácil
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

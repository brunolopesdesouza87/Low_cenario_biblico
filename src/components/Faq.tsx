import React, { useState } from 'react';
import { FAQS } from '../data/siteData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FFFAEE] relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            Tire Suas Dúvidas
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-800 font-montserrat uppercase tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Respostas rápidas para as principais dúvidas sobre os Cenários da Fé Kids.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-amber-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-sky-600 transition-colors"
                >
                  <span className="text-sm sm:text-base md:text-lg font-montserrat">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-sky-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Callout */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                Ainda ficou com alguma dúvida?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Fale com a nossa equipe no suporte oficial.
              </p>
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20Cen%C3%A1rios%20da%20F%C3%A9%20Kids."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

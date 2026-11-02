import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 500px)
      setIsVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Support Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%2035%20Cen%C3%A1rios%20B%C3%ADblicos%20do%20Cen%C3%A1rios%20da%20F%C3%A9%20Kids."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
        aria-label="Atendimento no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Dúvidas? Fale no WhatsApp
        </span>
      </a>

      {/* Floating Bottom Bar for Mobile/Tablet */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 shadow-2xl sm:hidden animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">
                Plano Premium Vitalício
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs text-slate-400 line-through">R$47,90</span>
                <span className="text-lg font-black text-slate-900 font-montserrat">
                  R$ 11,99
                </span>
              </div>
            </div>

            <a
              href="#COMPRA"
              className="flex-1 max-w-[200px] text-center bg-[#FF2A53] hover:bg-[#e41842] text-white font-black text-xs py-2.5 px-3 rounded-xl shadow-md uppercase tracking-wider flex items-center justify-center gap-1 animate-pulse-cta"
            >
              <span>QUERO O MEU</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

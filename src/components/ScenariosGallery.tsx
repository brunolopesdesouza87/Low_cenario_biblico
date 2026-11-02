import React, { useState } from 'react';
import { SCENARIOS, ScenarioItem } from '../data/siteData';
import { Eye, X, ChevronLeft, ChevronRight, Check, Sparkles, BookOpen } from 'lucide-react';

interface ScenariosGalleryProps {
  onSelectPlan?: () => void;
}

export const ScenariosGallery: React.FC<ScenariosGalleryProps> = ({ onSelectPlan }) => {
  const [filter, setFilter] = useState<'Todos' | 'Antigo' | 'Novo'>('Todos');
  const [activeScenario, setActiveScenario] = useState<ScenarioItem | null>(null);

  const filteredScenarios = SCENARIOS.filter((item) => {
    if (filter === 'Todos') return true;
    return item.testament === filter;
  });

  const handleNext = () => {
    if (!activeScenario) return;
    const currentIndex = SCENARIOS.findIndex((s) => s.id === activeScenario.id);
    const nextIndex = (currentIndex + 1) % SCENARIOS.length;
    setActiveScenario(SCENARIOS[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeScenario) return;
    const currentIndex = SCENARIOS.findIndex((s) => s.id === activeScenario.id);
    const prevIndex = (currentIndex - 1 + SCENARIOS.length) % SCENARIOS.length;
    setActiveScenario(SCENARIOS[prevIndex]);
  };

  return (
    <section id="cenarios" className="py-14 sm:py-20 bg-[#FFFAEE] relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Galeria de Histórias
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 font-montserrat uppercase tracking-tight leading-tight">
            VEJA alguns dos cenários que você terá acesso
          </h2>

          <p className="mt-4 text-sm sm:text-lg text-slate-600">
            Cada história vem acompanhada do cenário de fundo, personagens em camadas 3D, adereços e versículos bíblicos prontos para encantar as crianças.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setFilter('Todos')}
              className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm ${
                filter === 'Todos'
                  ? 'bg-sky-600 text-white shadow-sky-500/20 scale-105'
                  : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
              }`}
            >
              Todos os Cenários (35)
            </button>
            <button
              onClick={() => setFilter('Antigo')}
              className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm ${
                filter === 'Antigo'
                  ? 'bg-sky-600 text-white shadow-sky-500/20 scale-105'
                  : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
              }`}
            >
              Antigo Testamento
            </button>
            <button
              onClick={() => setFilter('Novo')}
              className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm ${
                filter === 'Novo'
                  ? 'bg-sky-600 text-white shadow-sky-500/20 scale-105'
                  : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
              }`}
            >
              Novo Testamento
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredScenarios.map((scenario) => (
            <div
              key={scenario.id}
              onClick={() => setActiveScenario(scenario)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-amber-100/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                <img
                  src={scenario.image}
                  alt={scenario.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Eye className="w-3.5 h-3.5" />
                    Clique para ampliar
                  </span>
                </div>

                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-sky-600/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md shadow-sm">
                    {scenario.testament} Testamento
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider block mb-1">
                    {scenario.category}
                  </span>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base leading-snug group-hover:text-sky-600 transition-colors">
                    {scenario.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <Check className="w-3.5 h-3.5" /> Efeito 3D
                  </span>
                  <span className="font-medium text-slate-400">PDF A4</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-sky-50 via-blue-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-sky-100 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 font-montserrat">
            E isso é apenas uma amostra! São 35 histórias bíblicas completas.
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Você recebe o material em PDF de alta qualidade para imprimir quantas vezes precisar para sua turma ou filhos.
          </p>
          <div className="mt-5">
            <a
              href="#COMPRA"
              className="inline-flex items-center gap-2 bg-[#FF2A53] hover:bg-[#e41842] text-white font-extrabold px-6 py-3.5 rounded-full shadow-lg shadow-rose-500/30 text-sm sm:text-base transition-all hover:scale-105 active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              QUERO TODOS OS 35 CENÁRIOS POR R$ 11,99
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeScenario && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveScenario(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Cenário Bíblico 3D • {activeScenario.testament} Testamento
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-slate-800 font-montserrat">
                  {activeScenario.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveScenario(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body with Image */}
            <div className="relative bg-slate-100 flex-1 overflow-auto flex items-center justify-center p-4">
              <img
                src={activeScenario.image}
                alt={activeScenario.title}
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-md"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg backdrop-blur-sm transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg backdrop-blur-sm transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
                {activeScenario.description}
              </p>
              <a
                href="#COMPRA"
                onClick={() => {
                  setActiveScenario(null);
                  if (onSelectPlan) onSelectPlan();
                }}
                className="w-full sm:w-auto text-center bg-[#FF2A53] hover:bg-[#e41842] text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md whitespace-nowrap transition-transform hover:scale-105"
              >
                Garantir Este e Mais 34 Cenários
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

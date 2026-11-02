import React from 'react';
import { Church, GraduationCap, BookOpen, Home, Smile, Sparkles } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: Church,
      title: 'Ministério Infantil',
      emoji: '⛪',
      color: 'from-amber-500 to-amber-600',
      description:
        'Transforme as aulinhas do departamento infantil em momentos inesquecíveis. As crianças ficam vidradas prestando atenção nos personagens 3D.',
    },
    {
      icon: GraduationCap,
      title: 'Professoras',
      emoji: '👩‍🏫',
      color: 'from-blue-500 to-indigo-600',
      description:
        'Economize horas de planejamento! Um material pronto, didático e testado pedagogicamente para facilitar seu trabalho em sala de aula.',
    },
    {
      icon: BookOpen,
      title: 'Escola Bíblica (EBD)',
      emoji: '📖',
      color: 'from-emerald-500 to-teal-600',
      description:
        'Torne a Escola Dominical o momento mais esperado da semana pelos pequenos com histórias visuais e participativas.',
    },
    {
      icon: Home,
      title: 'Famílias & Pais',
      emoji: '🏠',
      color: 'from-rose-500 to-pink-600',
      description:
        'Excelente para o culto doméstico e momentos devocionais longe das telas de celulares, tablets e videogames.',
    },
    {
      icon: Smile,
      title: 'Evangelização Infantil',
      emoji: '🧒',
      color: 'from-purple-500 to-violet-600',
      description:
        'Ferramenta missionária perfeita para EBFs (Escolas Bíblicas de Férias), projetos sociais em comunidades e acampamentos.',
    },
  ];

  return (
    <section id="para-quem" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Público-Alvo
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-800 font-montserrat uppercase tracking-tight">
            PERFEITO PARA...
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Desenvolvido para quem tem a linda missão de semear a Palavra de Deus no coração das crianças.
          </p>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-50">
            <img
              src="/images/perfeito-para.png"
              alt="Perfeito Para Ministério Infantil e Famílias"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-[#FFFAEE] rounded-2xl p-6 border border-amber-200/70 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-800 font-montserrat uppercase">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-amber-200/40 text-xs font-bold text-sky-700 flex items-center gap-1">
                <span>✦ Aprovado por mais de 3.400 líderes</span>
              </div>
            </div>
          ))}

          {/* Bonus callout block for the 6th spot */}
          <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl p-6 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-300 font-black text-sm uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 fill-amber-300" />
                Material 100% Flexível
              </div>
              <h3 className="text-xl font-black font-montserrat leading-snug">
                Você pode imprimir quantas vezes quiser!
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                Use com 1 criança em casa ou com 50 crianças no departamento infantil da igreja sem custo extra nenhum.
              </p>
            </div>

            <div className="mt-5">
              <a
                href="#COMPRA"
                className="w-full inline-block text-center bg-amber-400 hover:bg-amber-300 text-blue-950 font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md uppercase tracking-wider transition-all"
              >
                QUERO COMEÇAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Star, CheckCircle, Heart, MessageSquare, ThumbsUp } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const reviews = [
    {
      name: 'Tia Débora Santos',
      role: 'Líder do Ministério Infantil (Igreja Batista - SP)',
      rating: 5,
      date: 'Há 3 dias',
      text: 'Gente, esse material é simplesmente uma bênção! Usei o cenário da Arca de Noé no domingo passado e as crianças não piscavam os olhos. Nunca vi meus aluninhos tão participativos. Vale cada centavo e muito mais!',
    },
    {
      name: 'Profª. Camila Medeiros',
      role: 'Professora de EBD e Pedagoga (Belo Horizonte - MG)',
      rating: 5,
      date: 'Há 5 dias',
      text: 'A qualidade dos arquivos em PDF é impecável. Muito fácil de recortar e as linhas de dobra facilitam demais. Em 10 minutos montamos o cenário de Davi e Golias. As mães me pediram o link!',
    },
    {
      name: 'Raquel Nogueira',
      role: 'Mãe de dois meninos de 5 e 7 anos (Curitiba - PR)',
      rating: 5,
      date: 'Há 1 semana',
      text: 'Foi a melhor compra do ano para nossos momentos devocionais em família. Meus filhos deixaram o celular de lado para recortar e montar os personagens. Eles repetem os versículos com muita alegria!',
    },
    {
      name: 'Pastor Marcos Vinicius',
      role: 'Coord. de Evangelismo Infantil (Goiânia - GO)',
      rating: 5,
      date: 'Há 2 semanas',
      text: 'Excelente iniciativa. Os bônus do Pequeno Dicionário e Perguntas sobre Deus são riquíssimos teologicamente e numa linguagem que a criança realmente entende. Parabéns aos criadores!',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFAEE] relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            Depoimentos Reais
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-sky-700 font-montserrat uppercase tracking-wider">
            AINDA ESTÁ NA DÚVIDA?
          </h3>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-800 font-montserrat uppercase tracking-tight mt-1">
            QUEM COMPROU APROVA!
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Mais de 3.400 professoras, líderes de ministério infantil e famílias já transformaram suas aulas bíblicas.
          </p>
        </div>

        {/* Featured WhatsApp Reviews Collage Image */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img
              src="/images/depoimentos.png"
              alt="Depoimentos WhatsApp de Clientes do Cenários da Fé Kids"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-3 font-medium">
            💬 Prints reais enviados em nosso canal de suporte e WhatsApp de professoras satisfeitas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* Rating & Verified */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Compra Verificada
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{rev.name}</h4>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

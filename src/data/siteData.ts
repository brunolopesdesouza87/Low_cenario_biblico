export interface ScenarioItem {
  id: number;
  title: string;
  testament: 'Antigo' | 'Novo';
  category: string;
  image: string;
  description: string;
}

export const SCENARIOS: ScenarioItem[] = [
  {
    id: 1,
    title: 'A Arca de Noé',
    testament: 'Antigo',
    category: 'Fé e Obediência',
    image: '/images/cenario-1.jpg',
    description: 'Cenário 3D completo da Arca flutuando sobre as águas com pares de animais e a família de Noé.',
  },
  {
    id: 2,
    title: 'Davi e Golias',
    testament: 'Antigo',
    category: 'Coragem',
    image: '/images/cenario-2.jpg',
    description: 'O jovem Davi com sua funda enfrentando o gigante filisteu com fé no Deus vivo.',
  },
  {
    id: 3,
    title: 'Daniel na Cova dos Leões',
    testament: 'Antigo',
    category: 'Proteção Divina',
    image: '/images/cenario-3.jpg',
    description: 'Daniel protegido pelo anjo de Deus cercado pelos leões famintos na Babilônia.',
  },
  {
    id: 4,
    title: 'O Nascimento de Jesus',
    testament: 'Novo',
    category: 'Amor de Deus',
    image: '/images/cenario-4.jpg',
    description: 'A manjedoura em Belém com Maria, José, o Menino Jesus, a estrela-guia e os animais.',
  },
  {
    id: 5,
    title: 'A Travessia do Mar Vermelho',
    testament: 'Antigo',
    category: 'Grandes Milagres',
    image: '/images/cenario-5.jpg',
    description: 'Moisés erguendo o cajado e o mar se abrindo em muralhas de água para o povo passar em seco.',
  },
  {
    id: 6,
    title: 'Jonas e o Grande Peixe',
    testament: 'Antigo',
    category: 'Perdão e Graça',
    image: '/images/cenario-6.jpg',
    description: 'Jonas orando dentro do grande peixe e sendo resgatado para pregar em Nínive.',
  },
  {
    id: 7,
    title: 'A Criação do Mundo',
    testament: 'Antigo',
    category: 'Fundamentos',
    image: '/images/cenario-7.jpg',
    description: 'O jardim do Éden com os animais, plantas, luz e a maravilha da obra de Deus.',
  },
  {
    id: 8,
    title: 'O Bom Samaritano',
    testament: 'Novo',
    category: 'Parábolas',
    image: '/images/cenario-8.jpg',
    description: 'O exemplo de compaixão e amor ao próximo socorrendo quem precisava no caminho.',
  },
  {
    id: 9,
    title: 'A Multiplicação dos Pães e Peixes',
    testament: 'Novo',
    category: 'Grandes Milagres',
    image: '/images/cenario-9.jpg',
    description: 'Jesus abençoando o lanche do menino e alimentando a multidão com cestos sobrando.',
  },
  {
    id: 10,
    title: 'A Ressurreição de Jesus',
    testament: 'Novo',
    category: 'Esperança e Salvação',
    image: '/images/cenario-10.jpg',
    description: 'O túmulo vazio com a pedra removida e o anjo anunciando que Ele ressuscitou.',
  },
  {
    id: 11,
    title: 'A Pesca Maravilhosa',
    testament: 'Novo',
    category: 'Grandes Milagres',
    image: '/images/cenario-11.jpg',
    description: 'Pedro e os discípulos puxando as redes cheias de peixes após confiar na palavra do Mestre.',
  },
  {
    id: 12,
    title: 'Zaqueu no Sicômoro',
    testament: 'Novo',
    category: 'Transformação',
    image: '/images/cenario-12.jpg',
    description: 'Zaqueu subindo na árvore para ver Jesus e recebendo a salvação em sua casa.',
  },
  {
    id: 13,
    title: 'Sansão e as Colunas',
    testament: 'Antigo',
    category: 'Fé e Força',
    image: '/images/cenario-13.jpg',
    description: 'A força dada por Deus para libertar o povo e a restauração da fé.',
  },
  {
    id: 14,
    title: 'Moisés no Cesto no Rio Nilo',
    testament: 'Antigo',
    category: 'Cuidado de Deus',
    image: '/images/cenario-14.jpg',
    description: 'O bebezinho Moisés guardado pelas águas e encontrado pela filha do Faraó.',
  },
  {
    id: 15,
    title: 'Jesus Acalma a Tempestade',
    testament: 'Novo',
    category: 'Grandes Milagres',
    image: '/images/cenario-15.jpg',
    description: 'Jesus repreendendo o vento e o mar agitado, trazendo grande bonança aos discípulos.',
  },
  {
    id: 16,
    title: 'A Ovelha Perdida',
    testament: 'Novo',
    category: 'Parábolas',
    image: '/images/cenario-16.jpg',
    description: 'O Bom Pastor deixando as noventa e nove no aprisco para resgatar a ovelhinha.',
  },
  {
    id: 17,
    title: 'A Torre de Babel',
    testament: 'Antigo',
    category: 'Histórias Bíblicas',
    image: '/images/cenario-17.jpg',
    description: 'A lição de humildade e obediência a Deus nas civilizações antigas.',
  },
  {
    id: 18,
    title: 'A Entrada Triunfal em Jerusalém',
    testament: 'Novo',
    category: 'Celebração',
    image: '/images/cenario-18.jpg',
    description: 'As crianças e a multidão acenando ramos de palmeira cantando Hosana ao Rei.',
  },
];

export const BONUSES = [
  {
    id: 'dicionario',
    title: 'Bônus 1 - Pequeno Dicionário Bíblico',
    badge: 'GRÁTIS HOJE',
    originalPrice: 'R$ 27,90',
    image: '/images/bonus-dicionario.png',
    description:
      'Termos bíblicos explicados de forma leve, visual e lúdica para que as crianças compreendam o verdadeiro significado de palavras como Graça, Aliança, Fé e Salvação.',
  },
  {
    id: 'posteres',
    title: 'Bônus 2 - Pôsteres Bíblicos Decorativos',
    badge: 'GRÁTIS HOJE',
    originalPrice: 'R$ 19,90',
    image: '/images/bonus-posteres.png',
    description:
      'Pôsteres em alta definição com versículos marcantes e ilustrações cativantes, perfeitos para decorar o quartinho das crianças, a sala da EBD ou murais infantis.',
  },
  {
    id: 'exploradores',
    title: 'Bônus 3 - Pequenos Exploradores da Bíblia',
    badge: 'GRÁTIS HOJE',
    originalPrice: 'R$ 24,90',
    image: '/images/bonus-exploradores.png',
    description:
      'Caderno de atividades dinâmicas com labirintos, caça-palavras, ligue-os-pontos e desafios bíblicos para fixar o aprendizado enquanto se divertem.',
  },
  {
    id: 'perguntas',
    title: 'Bônus 4 - Perguntas sobre Deus e a Bíblia',
    badge: 'GRÁTIS HOJE',
    originalPrice: 'R$ 29,90',
    image: '/images/bonus-perguntas.png',
    description:
      'Guia prático com as 50 dúvidas mais comuns e curiosas que as crianças fazem, com respostas biblicamente fundamentadas, simples e amorosas.',
  },
];

export const FAQS = [
  {
    question: 'Como vou receber o acesso ao material?',
    answer:
      'Após a confirmação do pagamento, você receberá imediatamente um e-mail com o link de acesso da plataforma para baixar todos os arquivos em PDF prontos para impressão. Você pode baixar no computador, tablet ou celular quantas vezes quiser.',
  },
  {
    question: 'PRECISO SABER FAZER PERSONALIZADOS OU USAR TESOURA PROFISSIONAL?',
    answer:
      'Não! O material foi desenvolvido especialmente para ser simples e intuitivo. Qualquer pessoa com uma tesoura comum sem ponta e cola bastão consegue recortar e montar em poucos minutos. Acompanha orientações e linhas pontilhadas de dobra.',
  },
  {
    question: 'POSSO USAR NA IGREJA E NO MINISTÉRIO INFANTIL?',
    answer:
      'Sim, com certeza! O material é 100% liberado para uso em igrejas, Escola Bíblica Dominical (EBD), cultos infantis, retiros, colônias de férias (EBF) e células infantis.',
  },
  {
    question: 'Qual papel é recomendado para imprimir?',
    answer:
      'Você pode imprimir na folha de sulfite comum (A4 de 75g). Mas se desejar um cenário ainda mais resistente e firme que dure bastante tempo, recomendamos papel Offset 120g a 180g ou papel Couché/Fotográfico fosco.',
  },
  {
    question: 'O pagamento é seguro e como posso pagar?',
    answer:
      'Totalmente seguro com criptografia de ponta a ponta. Aceitamos PIX (com liberação imediata em menos de 1 minuto) e Cartão de Crédito. Sem cobranças recorrentes no Plano Premium.',
  },
  {
    question: 'Como funciona a Garantia de 7 Dias?',
    answer:
      'Você tem 7 dias completos para baixar, imprimir e montar os cenários. Se por qualquer motivo não ficar encantado com o resultado, basta nos enviar um e-mail e devolvemos 100% do valor pago, sem qualquer burocracia.',
  },
];

export const WHATSAPP_NUMBER = "5521973569018"

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type ServiceSlug = "automacao-ia" | "landing-pages" | "trafego-pago"

export interface ServiceStep {
  title: string
  description: string
}

export interface Service {
  slug: ServiceSlug
  title: string
  shortTitle: string
  tagline: string
  description: string
  icon: "bot" | "layout" | "trending-up"
  whatsappMessage: string
  heroHighlight: string
  benefits: string[]
  steps: ServiceStep[]
  faq: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: "automacao-ia",
    title: "Automação com Chatbots de IA",
    shortTitle: "Automação com IA",
    tagline: "Atendimento 24/7 que qualifica leads e vende no automático.",
    description:
      "Desenvolvo chatbots inteligentes que atendem, qualificam leads e se integram às suas ferramentas, reduzindo custos e melhorando a experiência do cliente.",
    icon: "bot",
    whatsappMessage:
      "Olá Michel! Vi seu site e tenho interesse no serviço de Automação com Chatbots de IA. Pode me passar mais detalhes?",
    heroHighlight: "atende, qualifica e vende",
    benefits: [
      "Atendimento automático 24 horas por dia, 7 dias por semana",
      "Qualificação de leads antes de chegar ao seu time",
      "Integração com WhatsApp, site, CRM e suas ferramentas",
      "Redução de custos operacionais com suporte",
      "Respostas instantâneas que aumentam a satisfação do cliente",
      "Relatórios para entender as dúvidas mais comuns do público",
    ],
    steps: [
      { title: "Diagnóstico", description: "Mapeamos seus fluxos de atendimento e as principais dúvidas dos clientes." },
      { title: "Construção", description: "Desenvolvo o chatbot com IA, treinado com o conhecimento do seu negócio." },
      { title: "Integração", description: "Conecto o bot aos seus canais e ferramentas (WhatsApp, site, CRM)." },
      { title: "Otimização", description: "Acompanho os dados e ajusto as respostas para melhorar a conversão." },
    ],
    faq: [
      {
        question: "O chatbot funciona no WhatsApp?",
        answer: "Sim. Posso integrar o atendimento ao WhatsApp, ao seu site e a outros canais que você já utiliza.",
      },
      {
        question: "Ele substitui minha equipe de atendimento?",
        answer:
          "Ele cuida do volume repetitivo e da qualificação inicial, liberando seu time para focar nos casos que realmente precisam de atenção humana.",
      },
      {
        question: "Preciso ter conhecimento técnico?",
        answer: "Não. Eu cuido de toda a parte técnica e entrego a solução pronta para usar.",
      },
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages de Alta Conversão",
    shortTitle: "Landing Pages",
    tagline: "Páginas feitas para transformar visitantes em clientes.",
    description:
      "Construo páginas de captura e vendas com design focado na experiência do usuário e copywriting persuasivo, otimizadas para maximizar suas conversões.",
    icon: "layout",
    whatsappMessage:
      "Olá Michel! Vi seu site e tenho interesse no serviço de Landing Pages de Alta Conversão. Pode me passar mais detalhes?",
    heroHighlight: "converte visitantes em clientes",
    benefits: [
      "Design moderno e responsivo, perfeito no celular e no desktop",
      "Copywriting persuasivo focado em conversão",
      "Carregamento rápido para não perder visitantes",
      "Estrutura otimizada para captura de leads e vendas",
      "Integração com formulários, WhatsApp e ferramentas de e-mail",
      "Páginas prontas para receber tráfego pago",
    ],
    steps: [
      { title: "Briefing", description: "Entendo sua oferta, seu público e o objetivo da página." },
      { title: "Estratégia", description: "Defino a estrutura e o copy com foco na ação que você quer gerar." },
      { title: "Design e build", description: "Crio a página com design profissional e código otimizado." },
      { title: "Publicação", description: "Coloco a página no ar, conectada às suas ferramentas e pronta para converter." },
    ],
    faq: [
      {
        question: "Em quanto tempo a página fica pronta?",
        answer: "Depende da complexidade, mas a maioria das landing pages fica pronta em poucos dias após o briefing.",
      },
      {
        question: "A página funciona bem no celular?",
        answer: "Sim. Todas as páginas são 100% responsivas e otimizadas para a experiência mobile.",
      },
      {
        question: "Vocês integram com meu sistema de e-mail ou CRM?",
        answer: "Sim. Integro a página com as ferramentas que você já usa para capturar e nutrir os leads.",
      },
    ],
  },
  {
    slug: "trafego-pago",
    title: "Gestão de Tráfego Pago",
    shortTitle: "Tráfego Pago",
    tagline: "Anúncios estratégicos que geram leads previsíveis e escaláveis.",
    description:
      "Planejo e gerencio campanhas no Google e Meta Ads com foco em ROI, levando o público certo até sua oferta e escalando os resultados com dados.",
    icon: "trending-up",
    whatsappMessage:
      "Olá Michel! Vi seu site e tenho interesse no serviço de Gestão de Tráfego Pago. Pode me passar mais detalhes?",
    heroHighlight: "leads previsíveis e escaláveis",
    benefits: [
      "Campanhas no Google Ads e Meta Ads (Facebook e Instagram)",
      "Segmentação precisa para alcançar o público certo",
      "Foco em ROI e redução do custo por lead",
      "Acompanhamento e otimização contínua das campanhas",
      "Relatórios claros sobre o retorno do investimento",
      "Estratégia integrada com landing pages e automação",
    ],
    steps: [
      { title: "Planejamento", description: "Defino objetivos, público-alvo e o orçamento ideal para suas campanhas." },
      { title: "Criação", description: "Estruturo anúncios e segmentações alinhados à sua oferta." },
      { title: "Veiculação", description: "Coloco as campanhas no ar nas plataformas certas para o seu negócio." },
      { title: "Otimização", description: "Analiso os dados e ajusto continuamente para escalar os resultados." },
    ],
    faq: [
      {
        question: "Qual orçamento mínimo preciso para anunciar?",
        answer:
          "Definimos isso juntos com base no seu objetivo. O importante é começar com estratégia e escalar conforme os resultados aparecem.",
      },
      {
        question: "Em quanto tempo vejo resultados?",
        answer:
          "As campanhas começam a gerar dados desde o primeiro dia. A otimização para os melhores resultados acontece nas primeiras semanas.",
      },
      {
        question: "Você cuida dos anúncios e da página de destino?",
        answer:
          "Sim. Posso unir tráfego pago, landing page e automação para entregar um funil completo de captação.",
      },
    ],
  },
]

export function getService(slug: ServiceSlug) {
  return services.find((s) => s.slug === slug)
}

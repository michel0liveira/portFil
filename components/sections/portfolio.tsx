import Image from "next/image"

const projects = [
  {
    title: "Chatbot para Academia",
    description: "Automação para agendamento de aulas e suporte a alunos, integrado ao sistema da academia.",
    image: "/projeto-chatbot-academia.png",
    tag: "Automação com IA",
  },
  {
    title: "LP para Lançamento Imobiliário",
    description: "Página de captura de leads para um novo empreendimento, com foco em agendamento de visitas.",
    image: "/projeto-lp-imobiliaria.png",
    tag: "Landing Page",
  },
  {
    title: "Campanha de Tráfego para E-commerce",
    description: "Gestão de anúncios no Google e Meta Ads com escala de vendas e redução do custo por lead.",
    image: "/projeto-trafego-ecommerce.png",
    tag: "Tráfego Pago",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Projetos recentes</h2>
          <p className="mt-2 text-muted-foreground">Alguns exemplos do que podemos construir juntos.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Mockup do projeto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{project.tag}</span>
                <h3 className="mt-2 text-lg font-bold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

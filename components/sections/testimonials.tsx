import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "O chatbot que ele desenvolveu para nossa empresa revolucionou nosso atendimento. Reduzimos o tempo de resposta em 90% e nossos clientes estão mais satisfeitos.",
    name: "João Silva",
    role: "CEO, Tech Solutions",
    initials: "JS",
  },
  {
    quote:
      "A landing page para nosso último lançamento foi um sucesso absoluto. O design ficou incrível e a taxa de conversão superou todas as nossas expectativas.",
    name: "Maria Andrade",
    role: "Diretora de Marketing, Cursos Online",
    initials: "MA",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Feedback de clientes</h2>
          <p className="mt-2 text-muted-foreground">A satisfação de quem confia no meu trabalho.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl border border-border bg-card p-8">
              <Quote className="h-8 w-8 text-primary/40" aria-hidden="true" />
              <blockquote className="mt-4 text-pretty leading-relaxed text-foreground">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
                  {t.initials}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

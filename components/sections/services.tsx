import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/site"
import { ServiceIcon } from "@/components/service-icon"

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">O que eu faço</h2>
          <p className="mt-2 text-muted-foreground">
            Soluções digitais para otimizar sua comunicação e multiplicar resultados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Saiba mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

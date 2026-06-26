import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import type { Service } from "@/lib/site"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceIcon } from "@/components/service-icon"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Cta } from "@/components/sections/cta"

export function ServicePage({ service }: { service: Service }) {
  return (
    <div className="grid-bg min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero do serviço */}
        <section className="px-6 pb-16 pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href="/#servicos"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para serviços
            </Link>
            <div className="mb-6 flex justify-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary glow-ring">
                <ServiceIcon icon={service.icon} className="h-8 w-8" />
              </span>
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">{service.tagline}</p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton message={service.whatsappMessage}>Quero esse serviço</WhatsAppButton>
            </div>
          </div>
        </section>

        {/* Descrição + Benefícios */}
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Uma solução que <span className="text-primary">{service.heroHighlight}</span>
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Cada projeto é feito sob medida para a realidade do seu negócio, sempre com foco em gerar resultado
                real e mensurável.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Como funciona */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Como funciona</h2>
              <p className="mt-2 text-muted-foreground">Um processo claro do primeiro contato à entrega.</p>
            </div>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.steps.map((step, index) => (
                <li key={step.title} className="rounded-xl border border-border bg-card p-6">
                  <span className="text-3xl font-extrabold text-primary/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Perguntas frequentes</h2>
            </div>
            <div className="space-y-4">
              {service.faq.map((item) => (
                <div key={item.question} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Cta
          title={`Pronto para começar com ${service.shortTitle}?`}
          description="Me chame no WhatsApp e vamos montar a melhor estratégia para o seu negócio."
          message={service.whatsappMessage}
          buttonLabel="Falar agora no WhatsApp"
        />
      </main>
      <SiteFooter />
    </div>
  )
}

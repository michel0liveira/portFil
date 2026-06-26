import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <div className="mx-auto max-w-3xl">
        <span className="mb-6 inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          Automação · Conversão · Tráfego
        </span>
        <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-7xl">
          Transformando atendimento com <span className="text-primary text-glow">IA</span> e gerando leads com{" "}
          <span className="text-primary text-glow">estratégia</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Crio chatbots inteligentes, landing pages de alta performance e campanhas de tráfego pago que impulsionam o
          crescimento do seu negócio.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton message="Olá Michel! Vim pelo seu site e gostaria de conversar sobre um projeto.">
            Falar com o Michel
          </WhatsAppButton>
          <Link
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Ver serviços
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

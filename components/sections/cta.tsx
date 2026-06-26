import { WhatsAppButton } from "@/components/whatsapp-button"

interface CtaProps {
  title?: string
  description?: string
  message?: string
  buttonLabel?: string
}

export function Cta({
  title = "Vamos conversar?",
  description = "Me chame no WhatsApp e vamos transformar sua ideia em um projeto que gera resultado.",
  message = "Olá Michel! Vim pelo seu site e gostaria de tirar uma ideia do papel. Podemos conversar?",
  buttonLabel = "Iniciar conversa no WhatsApp",
}: CtaProps) {
  return (
    <section id="contato" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glow-ring rounded-2xl border border-border bg-card px-6 py-14 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">{description}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message={message}>{buttonLabel}</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}

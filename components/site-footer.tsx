import Link from "next/link"
import { services } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-lg font-bold text-foreground">
              Michel Cruz<span className="text-primary">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Automação com IA, landing pages de alta conversão e tráfego pago para fazer seu negócio crescer.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Serviços</h3>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navegação</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/#servicos" className="text-sm text-muted-foreground hover:text-primary">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-sm text-muted-foreground hover:text-primary">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/#depoimentos" className="text-sm text-muted-foreground hover:text-primary">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Michel Cruz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

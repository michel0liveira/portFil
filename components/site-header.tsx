"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { services, whatsappLink } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/#servicos", label: "Serviços" },
    { href: "/#portfolio", label: "Portfólio" },
    { href: "/#depoimentos", label: "Depoimentos" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-foreground">
          Michel Cruz<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Olá Michel! Vim pelo seu site e gostaria de conversar sobre um projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="flex flex-col px-6 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border py-2">
              <p className="py-2 text-xs uppercase tracking-wide text-muted-foreground">Serviços</p>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-foreground hover:text-primary"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

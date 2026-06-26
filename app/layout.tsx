import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Michel Cruz | Automação com IA, Landing Pages e Tráfego Pago",
  description:
    "Especialista em automação de atendimento com chatbots de IA, landing pages de alta conversão e gestão de tráfego pago. Transforme visitantes em clientes.",
  keywords: [
    "automação com IA",
    "chatbots",
    "landing pages",
    "tráfego pago",
    "Michel Cruz",
    "geração de leads",
  ],
  authors: [{ name: "Michel Cruz" }],
  openGraph: {
    title: "Michel Cruz | Automação com IA, Landing Pages e Tráfego Pago",
    description:
      "Especialista em automação de atendimento com chatbots de IA, landing pages de alta conversão e gestão de tráfego pago.",
    type: "website",
    locale: "pt_BR",
  },
}

export const viewport = {
  themeColor: "#0a0f1a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

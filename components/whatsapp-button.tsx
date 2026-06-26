import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/site"

interface WhatsAppButtonProps {
  message: string
  children: React.ReactNode
  variant?: "primary" | "outline"
  className?: string
}

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 glow-ring",
    outline: "border border-border text-foreground hover:border-primary hover:text-primary",
  }

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {children}
    </a>
  )
}

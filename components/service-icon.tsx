import { Bot, LayoutTemplate, TrendingUp } from "lucide-react"
import type { Service } from "@/lib/site"

const map = {
  bot: Bot,
  layout: LayoutTemplate,
  "trending-up": TrendingUp,
} as const

export function ServiceIcon({ icon, className }: { icon: Service["icon"]; className?: string }) {
  const Icon = map[icon]
  return <Icon className={className} aria-hidden="true" />
}

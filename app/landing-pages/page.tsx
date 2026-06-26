import type { Metadata } from "next"
import { ServicePage } from "@/components/service-page"
import { getService } from "@/lib/site"

const service = getService("landing-pages")!

export const metadata: Metadata = {
  title: `${service.title} | Michel Cruz`,
  description: service.description,
}

export default function LandingPagesPage() {
  return <ServicePage service={service} />
}

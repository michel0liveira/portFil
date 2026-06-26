import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { Testimonials } from "@/components/sections/testimonials"
import { Cta } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <div className="grid-bg min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}

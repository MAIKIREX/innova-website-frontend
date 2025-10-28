import { Navbar } from "@/components/navbar/navbar"
import { HeroCarousel } from "@/components/hero/hero-carousel"
import { ServicesGrid } from "@/components/sections/services-grid"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ContactCTA } from "@/components/sections/contact-cta"
import { Footer } from "@/components/footer/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <HeroCarousel />
        <ServicesGrid />
        <WhyChooseUs />
        <ContactCTA />
      </div>
      <Footer />
    </main>
  )
}

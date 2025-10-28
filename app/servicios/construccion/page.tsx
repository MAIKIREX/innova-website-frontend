import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Paintbrush, Hammer, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const subServices = [
  {
    icon: Building2,
    title: "Refacciones y Remodelaciones",
    description: "Ampliaciones, rediseño interior de oficinas, locales y viviendas con acabados profesionales.",
  },
  {
    icon: Paintbrush,
    title: "Acabados y Revestimientos",
    description: "Cielo falso, pintura, yeso, paneles decorativos, pisos flotantes y cerámicos.",
  },
  {
    icon: Hammer,
    title: "Montaje Corporativo",
    description: "Señalética, letreros, divisiones modulares y elementos decorativos personalizados.",
  },
]

const benefits = [
  {
    title: "Cumplimiento Normativo",
    description: "Todos nuestros proyectos cumplen con las normativas locales de construcción y seguridad.",
  },
  {
    title: "Personal Certificado",
    description: "Equipo técnico con experiencia comprobada en proyectos comerciales y residenciales.",
  },
  {
    title: "Garantía y Soporte",
    description: "Entrega con trazabilidad completa y soporte post-proyecto garantizado.",
  },
]

export default function ConstruccionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/construction-site-renovation-modern-building.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Construcción y Obra Liviana</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Refacciones, remodelaciones y acabados profesionales para tu espacio
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              En INNOVA ofrecemos servicios integrales de construcción y obra liviana, especializados en refacciones y
              remodelaciones de oficinas, locales comerciales y viviendas. Nuestro equipo técnico cuenta con amplia
              experiencia en proyectos de ampliación y rediseño interior, garantizando resultados de alta calidad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Realizamos acabados profesionales que incluyen instalación de cielo falso, pintura, aplicación de yeso,
              paneles decorativos y colocación de pisos flotantes o cerámicos. Cada proyecto es ejecutado con atención
              al detalle y cumplimiento de los estándares de calidad más exigentes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Además, brindamos servicios de mantenimiento menor y montaje corporativo, incluyendo instalación de
              letreros, señalética profesional, soportes estructurales y divisiones modulares. Trabajamos con materiales
              de primera calidad y garantizamos la durabilidad de cada instalación.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary text-center mb-12">
            Áreas de Especialización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subServices.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-4 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            ¿Por qué confiar en nosotros para este servicio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">{benefit.title}</h3>
                <p className="text-white/90 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            ¿Listo para iniciar tu proyecto de construcción?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctanos y recibe una propuesta personalizada adaptada a tus necesidades
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link href="/contacto">Solicitar cotización</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

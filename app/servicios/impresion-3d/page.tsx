import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Box, Layers, Ruler, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const subServices = [
  {
    icon: Layers,
    title: "Diseño 3D Personalizado",
    description: "Modelado CAD de piezas funcionales, adaptadores y componentes a medida.",
  },
  {
    icon: Box,
    title: "Fabricación FDM",
    description: "Impresión 3D con materiales PLA, ABS, PETG y filamentos especializados.",
  },
  {
    icon: Ruler,
    title: "Señalética y Decoración",
    description: "Letreros corporativos, elementos decorativos y piezas de exhibición.",
  },
]

const benefits = [
  {
    title: "Alta Precisión",
    description: "Equipos de última generación para fabricación con tolerancias milimétricas.",
  },
  {
    title: "Personalización Total",
    description: "Diseño y fabricación adaptados a tus especificaciones exactas.",
  },
  {
    title: "Aplicaciones Versátiles",
    description: "Soluciones para industria, arquitectura, medicina y proyectos creativos.",
  },
]

export default function Impresion3DPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">

        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/3d-printer-manufacturing-custom-parts-in-action-cl.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Impresión 3D</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Diseño y fabricación de piezas personalizadas con tecnología de vanguardia
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ofrecemos servicios completos de diseño y fabricación mediante impresión 3D con tecnología FDM (Fused
                Deposition Modeling). Desarrollamos piezas funcionales, adaptadores personalizados, componentes de
                reemplazo y elementos decorativos según las especificaciones exactas de cada proyecto.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Trabajamos con diversos materiales incluyendo PLA, ABS, PETG y filamentos especializados para aplicaciones
                técnicas. Nuestros equipos de última generación permiten alcanzar alta precisión dimensional y acabados de
                calidad profesional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Brindamos soluciones para múltiples sectores: fabricación de señalética corporativa, letreros
                tridimensionales, prototipos industriales, piezas de arquitectura, elementos médicos y proyectos
                creativos. Cada pieza es fabricada con control de calidad riguroso y personalización total según tus
                necesidades.
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
              ¿Tienes un proyecto de impresión 3D en mente?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctanos y recibe una propuesta personalizada adaptada a tus necesidades
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Shield, Cpu, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const subServices = [
  {
    icon: Lightbulb,
    title: "Iluminación y Distribución",
    description: "Iluminación interior/exterior, tomas, canalizaciones, tableros y protecciones eléctricas.",
  },
  {
    icon: Shield,
    title: "Sistemas de Protección",
    description: "Puesta a tierra, pararrayos, medición de resistencia y sistemas de seguridad eléctrica.",
  },
  {
    icon: Cpu,
    title: "Control y Automatización",
    description: "Control de motores, variadores de frecuencia, servodrives y automatización PLC/HMI/SCADA.",
  },
]

const benefits = [
  {
    title: "Cumplimiento Normativo",
    description: "Instalaciones certificadas según normativas NEC y estándares internacionales de seguridad.",
  },
  {
    title: "Personal Certificado",
    description: "Técnicos especializados en instalaciones industriales y automatización de procesos.",
  },
  {
    title: "Garantía y Soporte",
    description: "Mantenimiento preventivo y correctivo con respuesta inmediata ante emergencias.",
  },
]

export default function InstalacionesElectricasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">

        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/electrical-panel-industrial-installation-with-cabl.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Instalaciones Eléctricas</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Soluciones eléctricas industriales y comerciales con los más altos estándares de seguridad
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ofrecemos servicios completos de instalaciones eléctricas para proyectos industriales, comerciales y
                residenciales. Nuestro alcance incluye iluminación interior y exterior, instalación de tomas, diseño y
                montaje de canalizaciones, tableros de distribución y sistemas de protección eléctrica certificados.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Implementamos sistemas de puesta a tierra, instalación de pararrayos y medición de resistencia de tierra
                para garantizar la seguridad de las instalaciones. Todos nuestros trabajos cumplen con las normativas NEC
                y estándares internacionales vigentes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nos especializamos en control de motores eléctricos con arranque directo, estrella-triángulo, variadores
                de frecuencia y servodrives. Además, desarrollamos proyectos de automatización industrial utilizando
                PLC/HMI/SCADA para optimizar procesos productivos y mejorar la eficiencia operativa.
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
              ¿Listo para iniciar tu proyecto eléctrico?
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

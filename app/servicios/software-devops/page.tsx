import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Workflow, Server, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const subServices = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Páginas web corporativas, sistemas internos y dashboards personalizados.",
  },
  {
    icon: Code,
    title: "APIs e Integraciones",
    description: "Desarrollo REST/GraphQL, integraciones con servicios externos y automatización.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description: "Flujos de trabajo con n8n/Activepieces, sincronización de datos y procesos.",
  },
  {
    icon: Server,
    title: "DevOps y Despliegue",
    description: "Contenedores Docker/Kubernetes, CI/CD, monitoreo y optimización de infraestructura.",
  },
]

const benefits = [
  {
    title: "Tecnologías Modernas",
    description: "Desarrollo con frameworks actuales y mejores prácticas de la industria.",
  },
  {
    title: "Equipo Especializado",
    description: "Desarrolladores con experiencia en proyectos empresariales y startups.",
  },
  {
    title: "Soporte Incluido",
    description: "20 horas de soporte técnico y mantenimiento garantizado.",
  },
]

export default function SoftwareDevOpsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">

        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/software-developer-coding-on-multiple-monitors-wit.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Software & DevOps</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Soluciones digitales personalizadas para impulsar tu transformación tecnológica
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Desarrollamos soluciones de software a medida incluyendo páginas web corporativas, sistemas internos de
                gestión y dashboards interactivos para visualización de datos. Utilizamos tecnologías modernas como React,
                Next.js, Node.js y bases de datos SQL/NoSQL según las necesidades del proyecto.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Creamos APIs REST y GraphQL para integración con servicios externos, automatización de procesos mediante
                herramientas como n8n y Activepieces, y sincronización de datos entre sistemas empresariales. Nuestras
                soluciones están diseñadas para escalar y adaptarse al crecimiento de tu organización.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos prácticas DevOps con despliegues en contenedores Docker/Kubernetes, pipelines de CI/CD,
                monitoreo de aplicaciones y optimización de infraestructura cloud. Incluimos 20 horas mensuales de soporte
                técnico para garantizar el funcionamiento continuo de tus sistemas.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {subServices.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title} className="h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-primary mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
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
              ¿Listo para digitalizar tu negocio?
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

import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Network, Cable, Video, Settings, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const subServices = [
  {
    icon: Cable,
    title: "Cableado Estructurado",
    description: "Diseño e instalación de canalizaciones, racks, patch panels y certificación de redes.",
  },
  {
    icon: Network,
    title: "Configuración de Redes",
    description: "Routers, switches, VLANs, segmentación de red y optimización de conectividad.",
  },
  {
    icon: Video,
    title: "Seguridad y Vigilancia",
    description: "Sistemas CCTV/IP, control de acceso biométrico y monitoreo remoto.",
  },
  {
    icon: Settings,
    title: "Integración Industrial",
    description: "Protocolos Modbus RTU/TCP, Profinet, Ethernet/IP para automatización.",
  },
]

const benefits = [
  {
    title: "Cumplimiento Normativo",
    description: "Instalaciones certificadas según estándares TIA/EIA para cableado estructurado.",
  },
  {
    title: "Personal Certificado",
    description: "Técnicos especializados en redes empresariales y protocolos industriales.",
  },
  {
    title: "Garantía y Soporte",
    description: "Mantenimiento preventivo de infraestructura crítica y soporte técnico 24/7.",
  },
]

export default function RedesTelecomunicacionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/network-server-room-with-fiber-optic-cables-and-sw.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Redes & Telecomunicaciones</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Infraestructura de red robusta y segura para tu organización
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Diseñamos e implementamos soluciones completas de cableado estructurado para empresas e instituciones.
              Nuestros servicios incluyen diseño de canalizaciones, instalación de racks profesionales, montaje de patch
              panels y certificación de puntos de red según estándares TIA/EIA.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Configuramos y optimizamos equipos de red incluyendo routers empresariales, switches administrables,
              creación de VLANs para segmentación de tráfico, y sistemas de vigilancia CCTV/IP con almacenamiento local
              o en la nube. También implementamos sistemas de control de acceso biométrico integrados con la red
              corporativa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Para entornos industriales, ofrecemos integración de protocolos de comunicación como Modbus RTU/TCP,
              Profinet y Ethernet/IP, permitiendo la conectividad entre sistemas de automatización y redes
              empresariales. Brindamos mantenimiento preventivo de infraestructura crítica y soporte técnico
              especializado.
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
            ¿Listo para modernizar tu infraestructura de red?
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

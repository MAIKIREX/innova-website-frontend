import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock, FileText, MapPin, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/placeholder.svg?height=600&width=1920&query=professional engineering team)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Quiénes somos</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Soluciones integrales en construcción, instalaciones eléctricas, redes, software e impresión 3D
            </p>
          </div>
        </section>

        {/* Presentación y Propósito */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">Nuestra Empresa</h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">INNOVA INGENIERÍA & TECNOLOGÍA</span> es una empresa
                  boliviana orientada a la provisión de{" "}
                  <span className="font-semibold text-foreground">soluciones integrales</span> que abarcan todo el ciclo
                  del proyecto: relevamiento, cotización, ingeniería integral, suministro de materiales/equipos,
                  instalación, configuración de equipos, mantenimiento,{" "}
                  <span className="font-semibold text-foreground">pruebas y puesta en marcha</span>.
                </p>
                <p>
                  Nuestro trabajo se basa en la{" "}
                  <span className="font-semibold text-foreground">planificación rigurosa</span>,{" "}
                  <span className="font-semibold text-foreground">cumplimiento normativo</span>,{" "}
                  <span className="font-semibold text-foreground">seguridad operativa</span> y{" "}
                  <span className="font-semibold text-foreground">acompañamiento postventa</span>, aportando eficiencia y
                  valor a cada proyecto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metodología de Trabajo */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Metodología de Trabajo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un proceso estructurado que garantiza resultados de calidad en cada etapa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Levantamiento Técnico</h3>
                    <p className="text-muted-foreground">
                      Diagnóstico detallado en sitio para entender las necesidades del proyecto
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                      Propuesta Técnico-Económica
                    </h3>
                    <p className="text-muted-foreground">
                      Alcance definido, cronograma detallado y lista completa de materiales
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Ejecución Controlada</h3>
                    <p className="text-muted-foreground">
                      Control de calidad, seguridad y aplicación de buenas prácticas
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Condiciones de Pago</h3>
                    <p className="text-muted-foreground">Modalidades flexibles sujetas a coordinación entre las partes</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-xl font-bold text-primary">5</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Cierre y Postventa</h3>
                    <p className="text-muted-foreground">
                      Pruebas finales, entrega de manuales y recomendaciones de mantenimiento
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Compromisos de Calidad y Seguridad */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Compromisos de Calidad y Seguridad</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Estándares que garantizan la excelencia en cada proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <CheckCircle2 className="h-10 w-10 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">Cumplimiento Normativo</h3>
                <p className="text-white/80">Adherencia estricta a normativas y buenas prácticas de instalación</p>
              </div>

              <div className="text-center">
                <CheckCircle2 className="h-10 w-10 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">Seguridad Operacional</h3>
                <p className="text-white/80">Protección de activos y seguridad ocupacional en todas las operaciones</p>
              </div>

              <div className="text-center">
                <CheckCircle2 className="h-10 w-10 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">Trazabilidad Total</h3>
                <p className="text-white/80">Documentación completa de materiales y cambios relevantes del proyecto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentación y Entregables */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                Documentación y Entregables
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Documentación técnica completa para cada proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-3">Memoria Técnica</h3>
                <p className="text-muted-foreground">
                  Memoria técnica resumida, planos/as-built básicos y lista detallada de materiales
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-3">Certificados y Reportes</h3>
                <p className="text-muted-foreground">
                  Certificados de equipos y reportes de pruebas (medición de puesta a tierra, etc.)
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-3">Manuales de Usuario</h3>
                <p className="text-muted-foreground">
                  Documentación completa para operación y mantenimiento de sistemas instalados
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Modalidades de Trabajo y Horarios */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                  Modalidades de Trabajo y Horarios
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-secondary mb-6">Modalidades de Servicio</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Visitas técnicas <span className="font-semibold text-foreground">sin compromiso</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Cotización oportuna</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Contratación por el servicio /{" "}
                        <span className="font-semibold text-foreground">orden de compra</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">
                        Servicios de <span className="font-semibold text-foreground">ingeniería aplicada</span> al diseño
                        y control de proyectos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Suministro de materiales o equipos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Instalación, configuración de equipos o mantenimiento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Pruebas y puesta en marcha en un tiempo oportuno</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-secondary mb-6">Horarios de Atención</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="h-6 w-6 text-primary" />
                        <h4 className="font-semibold text-lg text-foreground">Horario Regular</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Actividades en{" "}
                        <span className="font-semibold text-foreground">horario de oficina 8:00–17:00 (Lun–Vie)</span>,
                        garantizando disponibilidad del equipo técnico y administrativo.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="h-6 w-6 text-accent" />
                        <h4 className="font-semibold text-lg text-foreground">Horario Extendido</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Posibilidad de atención{" "}
                        <span className="font-semibold text-foreground">fuera de horario y fines de semana</span> con
                        costo adicional, previa coordinación.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cobertura Geográfica */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Cobertura Geográfica</h2>
              </div>

              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div
                      className="w-full h-64 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: "url(/placeholder.svg?height=400&width=600&query=bolivia map)" }}
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-secondary mb-3">Cobertura Nacional</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Cobertura en <span className="font-semibold text-foreground">Bolivia</span>. Sin costos de
                        transporte de material y personal en <span className="font-semibold text-foreground">La Paz</span>
                        .
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-secondary mb-3">Otros Departamentos</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        En otros departamentos: coordinación previa sujeta a gastos de transporte de material y{" "}
                        <span className="font-semibold text-foreground">viáticos</span> del personal.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              ¿Quieres conocer más sobre nuestros procesos y entregables?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda una visita técnica sin compromiso y descubre cómo podemos ayudarte
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contacto">Agendar visita</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

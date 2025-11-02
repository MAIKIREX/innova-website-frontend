"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Clock, MapPin, Building2, Send } from "lucide-react"
import Link from "next/link"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission - ready for backend integration
    console.log("Form submitted:", formData)
    alert("Mensaje enviado correctamente. Nos pondremos en contacto pronto.")
    setFormData({
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    })
  }

  const whatsappMessage = `Hola, soy ${formData.nombre || "[Nombre]"}. Me interesa ${formData.servicio || "[Servicio]"}`
  const whatsappLink = `https://wa.me/59178855457?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/placeholder.svg?height=400&width=1920&query=modern technology city)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Contacto</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Coordinemos una visita técnica o solicita una cotización personalizada
            </p>
          </div>
        </section>

        {/* Datos de Contacto */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Información de Contacto</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos disponibles para atender tus consultas y proyectos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Empresa</h3>
                <p className="text-muted-foreground text-sm">INNOVA INGENIERÍA & TECNOLOGÍA</p>
                <p className="text-muted-foreground text-sm mt-2">NIT: 680646031</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">WhatsApp / Celular</h3>
                <a href="https://wa.me/59178855457" className="text-primary hover:underline font-medium">
                  78855457
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Email</h3>
                <a
                  href="mailto:innova.ingenieriaytecnologia@gmail.com"
                  className="text-primary hover:underline text-sm break-all"
                >
                  innova.ingenieriaytecnologia@gmail.com
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary mb-2">Horario</h3>
                <p className="text-muted-foreground text-sm">Lun–Vie</p>
                <p className="text-muted-foreground text-sm font-medium">8:00–17:00</p>
                <p className="text-muted-foreground text-xs mt-2">Fines de semana con coordinación</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulario de Contacto */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Envíanos un Mensaje</h2>
                <p className="text-lg text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad
                </p>
              </div>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                        Nombre y Apellido <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                        Empresa (opcional)
                      </label>
                      <Input
                        id="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Mi Empresa S.A."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="juan@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="78855457"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-2">
                      Servicio de Interés <span className="text-destructive">*</span>
                    </label>
                    <Select
                      required
                      value={formData.servicio}
                      onValueChange={(value) => setFormData({ ...formData, servicio: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Construcción">Construcción</SelectItem>
                        <SelectItem value="Instalaciones Eléctricas">Instalaciones Eléctricas</SelectItem>
                        <SelectItem value="Redes & Telecomunicaciones">Redes & Telecomunicaciones</SelectItem>
                        <SelectItem value="Distribución de Equipos">Distribución de Equipos</SelectItem>
                        <SelectItem value="Software & DevOps">Software & DevOps</SelectItem>
                        <SelectItem value="Impresión 3D">Impresión 3D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="mensaje"
                      required
                      rows={6}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                      <Send className="h-5 w-5 mr-2" />
                      Enviar mensaje
                    </Button>
                    <Button type="button" size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Phone className="h-5 w-5 mr-2" />
                        Contactar por WhatsApp
                      </a>
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Mapa / Ubicación */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Ubicación y Cobertura</h2>
              </div>

              <Card className="overflow-hidden">
                <div
                  className="w-full h-96 bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/mapa1.png)" }}
                />
                <div className="p-8 bg-muted/30">
                  <p className="text-center text-lg text-muted-foreground leading-relaxed">
                    Atendemos proyectos en todo el país.{" "}
                    <span className="font-semibold text-foreground">Sin costos de transporte en La Paz</span>; otros
                    departamentos sujetos a coordinación y viáticos.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para iniciar tu proyecto con INNOVA?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Obtén una cotización personalizada y descubre cómo podemos ayudarte
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="#formulario">Solicitar cotización</Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

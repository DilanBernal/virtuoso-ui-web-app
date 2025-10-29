"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Music, User, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react"

export default function PerfilUsuarioPage() {
  // Mock user data
  const usuario = {
    nombre: "Carlos Martínez",
    email: "carlos@email.com",
    telefono: "+52 55 1234 5678",
    direccion: "Av. Reforma 123, CDMX",
    fechaRegistro: "15 de Enero, 2024",
    comprasTotales: 5,
    gastTotal: 4546,
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <span className="text-2xl font-serif text-foreground">Virtuoso</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button asChild variant="ghost">
              <Link href="/catalogo">Catálogo</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/usuario/compras">Mis Compras</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Mi Perfil</h1>
          <p className="text-muted-foreground mb-12">Gestiona tu información personal</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-xl font-serif text-foreground mb-1">{usuario.nombre}</h2>
                <p className="text-sm text-muted-foreground mb-4">{usuario.email}</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar Foto
                </Button>
              </div>

              <div className="mt-6 bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Estadísticas</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Compras totales</p>
                    <p className="text-2xl font-bold text-primary">{usuario.comprasTotales}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Gasto total</p>
                    <p className="text-2xl font-bold text-primary">${usuario.gastTotal}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Miembro desde</p>
                    <p className="text-sm text-foreground">{usuario.fechaRegistro}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-serif text-foreground">Información Personal</h3>
                  <Button variant="outline" className="border-border bg-transparent">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        Nombre completo
                      </Label>
                      <Input
                        id="nombre"
                        value={usuario.nombre}
                        disabled
                        className="bg-muted border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        value={usuario.email}
                        disabled
                        className="bg-muted border-border text-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      Teléfono
                    </Label>
                    <Input
                      id="telefono"
                      value={usuario.telefono}
                      disabled
                      className="bg-muted border-border text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="direccion" className="text-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      Dirección
                    </Label>
                    <Input
                      id="direccion"
                      value={usuario.direccion}
                      disabled
                      className="bg-muted border-border text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registro" className="text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      Fecha de registro
                    </Label>
                    <Input
                      id="registro"
                      value={usuario.fechaRegistro}
                      disabled
                      className="bg-muted border-border text-foreground"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-serif text-foreground mb-6">Seguridad</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full border-border bg-transparent justify-start">
                    Cambiar contraseña
                  </Button>
                  <Button variant="outline" className="w-full border-border bg-transparent justify-start">
                    Configurar autenticación de dos factores
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-destructive text-destructive hover:bg-destructive/10 justify-start bg-transparent"
                  >
                    Eliminar cuenta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload } from "lucide-react"
import { AdminNav } from "@/components/admin-nav"

export default function CrearProductoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    stock: "",
    descripcion: "",
    marca: "",
    modelo: "",
    // Estadísticas
    durabilidad: 5,
    brillo: 5,
    sustain: 5,
    versatilidad: 5,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Crear producto:", formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/admin/productos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a productos
            </Link>
          </Button>

          <h1 className="font-serif text-4xl text-foreground mb-8">Crear Nuevo Producto</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Información Básica */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-serif text-2xl text-foreground mb-6">Información Básica</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-foreground">
                    Nombre del producto
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Ej: Fender Stratocaster"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categoria" className="text-foreground">
                    Categoría
                  </Label>
                  <Input
                    id="categoria"
                    type="text"
                    placeholder="Ej: Guitarras Eléctricas"
                    value={formData.categoria}
                    onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marca" className="text-foreground">
                    Marca
                  </Label>
                  <Input
                    id="marca"
                    type="text"
                    placeholder="Ej: Fender"
                    value={formData.marca}
                    onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modelo" className="text-foreground">
                    Modelo
                  </Label>
                  <Input
                    id="modelo"
                    type="text"
                    placeholder="Ej: American Professional II"
                    value={formData.modelo}
                    onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="precio" className="text-foreground">
                    Precio (USD)
                  </Label>
                  <Input
                    id="precio"
                    type="number"
                    placeholder="1299"
                    value={formData.precio}
                    onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stock" className="text-foreground">
                    Stock
                  </Label>
                  <Input
                    id="stock"
                    type="number"
                    placeholder="15"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mt-6">
                <Label htmlFor="descripcion" className="text-foreground">
                  Descripción
                </Label>
                <Textarea
                  id="descripcion"
                  placeholder="Describe las características del producto..."
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  className="bg-background border-border text-foreground min-h-32"
                  required
                />
              </div>
            </div>

            {/* Multimedia */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-serif text-2xl text-foreground mb-6">Multimedia</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-foreground">Imágenes del producto</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Arrastra imágenes aquí o haz clic para seleccionar</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG hasta 10MB</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground">Modelo 3D (.glb, .gltf)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Sube el modelo 3D del producto</p>
                    <p className="text-sm text-muted-foreground">GLB, GLTF hasta 50MB</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground">Muestras de audio (.mp3, .wav)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Sube pruebas de sonido del producto</p>
                    <p className="text-sm text-muted-foreground">MP3, WAV hasta 20MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-serif text-2xl text-foreground mb-6">Estadísticas Técnicas</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="durabilidad" className="text-foreground">
                      Durabilidad
                    </Label>
                    <span className="text-primary font-semibold">{formData.durabilidad}/10</span>
                  </div>
                  <input
                    id="durabilidad"
                    type="range"
                    min="1"
                    max="10"
                    value={formData.durabilidad}
                    onChange={(e) => setFormData({ ...formData, durabilidad: Number.parseInt(e.target.value) })}
                    className="w-full accent-primary"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="brillo" className="text-foreground">
                      Brillo
                    </Label>
                    <span className="text-primary font-semibold">{formData.brillo}/10</span>
                  </div>
                  <input
                    id="brillo"
                    type="range"
                    min="1"
                    max="10"
                    value={formData.brillo}
                    onChange={(e) => setFormData({ ...formData, brillo: Number.parseInt(e.target.value) })}
                    className="w-full accent-primary"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sustain" className="text-foreground">
                      Sustain
                    </Label>
                    <span className="text-primary font-semibold">{formData.sustain}/10</span>
                  </div>
                  <input
                    id="sustain"
                    type="range"
                    min="1"
                    max="10"
                    value={formData.sustain}
                    onChange={(e) => setFormData({ ...formData, sustain: Number.parseInt(e.target.value) })}
                    className="w-full accent-primary"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="versatilidad" className="text-foreground">
                      Versatilidad
                    </Label>
                    <span className="text-primary font-semibold">{formData.versatilidad}/10</span>
                  </div>
                  <input
                    id="versatilidad"
                    type="range"
                    min="1"
                    max="10"
                    value={formData.versatilidad}
                    onChange={(e) => setFormData({ ...formData, versatilidad: Number.parseInt(e.target.value) })}
                    className="w-full accent-primary"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Crear Producto
              </Button>
              <Button type="button" variant="outline" asChild className="border-border bg-transparent">
                <Link href="/admin/productos">Cancelar</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

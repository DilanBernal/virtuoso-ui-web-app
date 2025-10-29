"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, ShoppingCart, Heart, Share2, Play, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { getProductoById } from "@/lib/productos"
import { notFound } from "next/navigation"

export default function ProductoPage({ params }: { params: { id: string } }) {
  const producto = getProductoById(Number.parseInt(params.id))

  if (!producto) {
    notFound()
  }

  const estadisticasArray = Object.entries(producto.estadisticas)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <span className="text-2xl font-serif text-foreground">Virtuoso</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button asChild variant="ghost">
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Button asChild variant="ghost" className="mb-6 -ml-4">
            <Link href="/catalogo">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al catálogo
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            layoutId={`product-image-${producto.id}`}
            className="bg-card rounded-lg overflow-hidden border border-border"
          >
            <div className="aspect-square bg-muted relative">
              <img
                src={`/.jpg?height=800&width=800&query=${producto.imagen}`}
                alt={producto.nombre}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* 3D Viewer Placeholder */}
            <div className="p-6 border-t border-border">
              <div className="bg-muted rounded-lg p-8 text-center">
                <Music className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Visor 3D Interactivo</p>
                <p className="text-sm text-muted-foreground">Próximamente disponible</p>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm text-muted-foreground mb-2">{producto.categoria}</p>
              <motion.h1
                layoutId={`product-title-${producto.id}`}
                className="font-serif text-4xl md:text-5xl text-foreground mb-4"
              >
                {producto.nombre}
              </motion.h1>
              <p className="text-lg text-muted-foreground mb-6">
                {producto.marca} - {producto.modelo}
              </p>

              <motion.div layoutId={`product-price-${producto.id}`} className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-primary">${producto.precio}</span>
                <span className="text-muted-foreground">USD</span>
              </motion.div>

              <div className="flex gap-4 mb-12">
                <Button size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Añadir al carrito
                </Button>
                <Button size="lg" variant="outline" className="border-border bg-transparent">
                  Comprar ahora
                </Button>
              </div>

              {/* Stock */}
              <div className="mb-8 p-4 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Disponibilidad</p>
                <p className="text-foreground font-medium">
                  {producto.stock > 10 ? "En stock" : `Solo quedan ${producto.stock} unidades`}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl text-foreground mb-4">Descripción</h2>
                <p className="text-muted-foreground leading-relaxed">{producto.descripcion}</p>
              </div>

              {/* Audio Samples */}
              <div className="mb-8 p-6 bg-card border border-border rounded-lg">
                <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-primary" />
                  Pruebas de Sonido
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                    <Button size="icon" variant="ghost">
                      <Play className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">Sonido limpio</p>
                      <div className="h-1 bg-background rounded-full mt-2">
                        <div className="h-full w-0 bg-primary rounded-full" />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">0:00</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                    <Button size="icon" variant="ghost">
                      <Play className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">Con distorsión</p>
                      <div className="h-1 bg-background rounded-full mt-2">
                        <div className="h-full w-0 bg-primary rounded-full" />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">0:00</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-serif text-xl text-foreground mb-6">Estadísticas Técnicas</h3>
                <div className="space-y-4">
                  {estadisticasArray.map(([key, value]) => (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-foreground capitalize">{key}</span>
                        <span className="text-sm font-semibold text-primary">{value}/10</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value * 10}%` }}
                          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

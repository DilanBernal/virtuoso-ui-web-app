"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Search, SlidersHorizontal, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { productos } from "@/lib/productos"

const categorias = [
  "Todas",
  "Guitarras Eléctricas",
  "Guitarras Acústicas",
  "Bajos",
  "Teclados",
  "Baterías",
  "Amplificadores",
  "Micrófonos",
  "Cuerdas",
]

export default function CatalogoPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")
  const [busqueda, setBusqueda] = useState("")

  const productosFiltrados = productos.filter((p) => {
    const matchCategoria = categoriaSeleccionada === "Todas" || p.categoria === categoriaSeleccionada
    const matchBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    return matchCategoria && matchBusqueda
  })

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">Catálogo de productos</h1>
          <p className="text-lg text-muted-foreground">Explora nuestra colección de instrumentos musicales premium</p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar instrumentos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="pl-10 bg-card border-border text-foreground"
              />
            </div>
            <Button variant="outline" className="border-border bg-transparent">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categorias.map((cat) => (
              <Button
                key={cat}
                variant={categoriaSeleccionada === cat ? "default" : "outline"}
                onClick={() => setCategoriaSeleccionada(cat)}
                className={categoriaSeleccionada === cat ? "bg-primary text-primary-foreground" : "border-border"}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosFiltrados.map((producto, index) => (
            <motion.div
              key={producto.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/producto/${producto.id}`} className="group block">
                <motion.div
                  layoutId={`product-${producto.id}`}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300"
                >
                  <motion.div
                    layoutId={`product-image-${producto.id}`}
                    className="aspect-square bg-muted relative overflow-hidden"
                  >
                    <img
                      src={producto.imagen || "/placeholder.svg"}
                      alt={producto.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                  {/* </CHANGE> */}
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{producto.categoria}</p>
                    <motion.h3
                      layoutId={`product-title-${producto.id}`}
                      className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors"
                    >
                      {producto.nombre}
                    </motion.h3>
                    <div className="flex items-center justify-between">
                      <motion.span layoutId={`product-price-${producto.id}`} className="text-xl font-bold text-primary">
                        ${producto.precio}
                      </motion.span>
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Ver
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {productosFiltrados.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-muted-foreground text-lg">No se encontraron productos</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

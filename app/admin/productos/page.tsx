"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import { AdminNav } from "@/components/admin-nav"

const productosData = [
  {
    id: 1,
    nombre: "Fender Stratocaster",
    categoria: "Guitarras Eléctricas",
    precio: 1299,
    stock: 15,
    estado: "Activo",
  },
  { id: 2, nombre: "Gibson Les Paul", categoria: "Guitarras Eléctricas", precio: 2499, stock: 8, estado: "Activo" },
  { id: 3, nombre: "Yamaha P-125", categoria: "Teclados", precio: 649, stock: 22, estado: "Activo" },
  { id: 4, nombre: "Pearl Export", categoria: "Baterías", precio: 899, stock: 5, estado: "Activo" },
  { id: 5, nombre: "Fender Jazz Bass", categoria: "Bajos", precio: 1099, stock: 12, estado: "Activo" },
]

export default function AdminProductosPage() {
  const [busqueda, setBusqueda] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl text-foreground mb-2">Gestión de Productos</h1>
            <p className="text-muted-foreground">Administra el catálogo de instrumentos</p>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/admin/productos/crear">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Producto
            </Link>
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="pl-10 bg-card border-border text-foreground"
            />
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Producto</th>
                  <th className="text-left p-4 text-foreground font-semibold">Categoría</th>
                  <th className="text-left p-4 text-foreground font-semibold">Precio</th>
                  <th className="text-left p-4 text-foreground font-semibold">Stock</th>
                  <th className="text-left p-4 text-foreground font-semibold">Estado</th>
                  <th className="text-right p-4 text-foreground font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productosData.map((producto) => (
                  <tr key={producto.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 text-foreground font-medium">{producto.nombre}</td>
                    <td className="p-4 text-muted-foreground">{producto.categoria}</td>
                    <td className="p-4 text-foreground">${producto.precio}</td>
                    <td className="p-4 text-muted-foreground">{producto.stock} unidades</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {producto.estado}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-muted">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-muted">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-destructive/10 hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

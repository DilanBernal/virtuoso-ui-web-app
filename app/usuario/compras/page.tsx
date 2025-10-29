"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Package, Clock, CheckCircle } from "lucide-react"

const comprasData = [
  {
    id: 1,
    fecha: "2024-03-15",
    total: 1299,
    estado: "Entregado",
    productos: [{ nombre: "Fender Stratocaster", precio: 1299, cantidad: 1 }],
  },
  {
    id: 2,
    fecha: "2024-02-28",
    total: 748,
    estado: "En tránsito",
    productos: [
      { nombre: "Yamaha P-125", precio: 649, cantidad: 1 },
      { nombre: "Shure SM58", precio: 99, cantidad: 1 },
    ],
  },
  {
    id: 3,
    fecha: "2024-01-10",
    total: 2499,
    estado: "Entregado",
    productos: [{ nombre: "Gibson Les Paul", precio: 2499, cantidad: 1 }],
  },
]

export default function ComprasUsuarioPage() {
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
              <Link href="/usuario/perfil">Mi Perfil</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2">Mis Compras</h1>
          <p className="text-muted-foreground mb-12">Historial de pedidos y seguimiento</p>

          <div className="space-y-6">
            {comprasData.map((compra) => (
              <div key={compra.id} className="bg-card border border-border rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-muted p-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Pedido</p>
                      <p className="text-foreground font-semibold">#{compra.id.toString().padStart(6, "0")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Fecha</p>
                      <p className="text-foreground">{compra.fecha}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Total</p>
                      <p className="text-foreground font-semibold">${compra.total}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {compra.estado === "Entregado" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : compra.estado === "En tránsito" ? (
                      <Package className="w-5 h-5 text-primary" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-500" />
                    )}
                    <span
                      className={`font-medium ${
                        compra.estado === "Entregado"
                          ? "text-green-500"
                          : compra.estado === "En tránsito"
                            ? "text-primary"
                            : "text-yellow-500"
                      }`}
                    >
                      {compra.estado}
                    </span>
                  </div>
                </div>

                {/* Products */}
                <div className="p-6 space-y-4">
                  {compra.productos.map((producto, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted rounded-lg" />
                        <div>
                          <p className="text-foreground font-medium">{producto.nombre}</p>
                          <p className="text-sm text-muted-foreground">Cantidad: {producto.cantidad}</p>
                        </div>
                      </div>
                      <p className="text-foreground font-semibold">${producto.precio}</p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="border-t border-border p-4 flex gap-3">
                  <Button variant="outline" className="border-border bg-transparent">
                    Ver detalles
                  </Button>
                  {compra.estado === "Entregado" && (
                    <Button variant="outline" className="border-border bg-transparent">
                      Comprar de nuevo
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

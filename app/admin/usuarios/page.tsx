"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit, Trash2, Shield, User } from "lucide-react"
import { AdminNav } from "@/components/admin-nav"

const usuariosData = [
  { id: 1, nombre: "Carlos Martínez", email: "carlos@email.com", rol: "Cliente", compras: 5, registro: "2024-01-15" },
  { id: 2, nombre: "Ana García", email: "ana@email.com", rol: "Cliente", compras: 12, registro: "2023-11-20" },
  { id: 3, nombre: "Luis Rodríguez", email: "luis@email.com", rol: "Admin", compras: 0, registro: "2023-06-10" },
  { id: 4, nombre: "María López", email: "maria@email.com", rol: "Cliente", compras: 3, registro: "2024-02-05" },
  { id: 5, nombre: "Pedro Sánchez", email: "pedro@email.com", rol: "Cliente", compras: 8, registro: "2023-09-12" },
]

export default function AdminUsuariosPage() {
  const [busqueda, setBusqueda] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-4xl text-foreground mb-2">Gestión de Usuarios</h1>
          <p className="text-muted-foreground">Administra los usuarios de la plataforma</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar usuarios..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="pl-10 bg-card border-border text-foreground"
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 text-foreground font-semibold">Usuario</th>
                  <th className="text-left p-4 text-foreground font-semibold">Email</th>
                  <th className="text-left p-4 text-foreground font-semibold">Rol</th>
                  <th className="text-left p-4 text-foreground font-semibold">Compras</th>
                  <th className="text-left p-4 text-foreground font-semibold">Registro</th>
                  <th className="text-right p-4 text-foreground font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuariosData.map((usuario) => (
                  <tr key={usuario.id} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {usuario.rol === "Admin" ? (
                            <Shield className="w-5 h-5 text-primary" />
                          ) : (
                            <User className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <span className="text-foreground font-medium">{usuario.nombre}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{usuario.email}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          usuario.rol === "Admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {usuario.rol}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">{usuario.compras} pedidos</td>
                    <td className="p-4 text-muted-foreground">{usuario.registro}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
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

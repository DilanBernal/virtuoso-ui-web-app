import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Package, Users, BarChart3, Settings } from "lucide-react"

export function AdminNav() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <span className="text-2xl font-serif text-foreground">Virtuoso</span>
            <span className="ml-2 text-sm text-muted-foreground">Admin</span>
          </Link>

          <Button asChild variant="outline" className="border-border bg-transparent">
            <Link href="/">Ver tienda</Link>
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button asChild variant="ghost" className="hover:bg-muted">
            <Link href="/admin/productos" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Productos
            </Link>
          </Button>
          <Button asChild variant="ghost" className="hover:bg-muted">
            <Link href="/admin/usuarios" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Usuarios
            </Link>
          </Button>
          <Button asChild variant="ghost" className="hover:bg-muted">
            <Link href="/admin/estadisticas" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Estadísticas
            </Link>
          </Button>
          <Button asChild variant="ghost" className="hover:bg-muted">
            <Link href="/admin/configuracion" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Configuración
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <Music className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="font-serif text-4xl text-foreground mb-4">Producto no encontrado</h1>
        <p className="text-muted-foreground mb-8">El producto que buscas no existe o ha sido eliminado</p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/catalogo">Volver al catálogo</Link>
        </Button>
      </div>
    </div>
  )
}

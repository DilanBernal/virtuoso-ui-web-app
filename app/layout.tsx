import type React from "react"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata = {
  title: "Virtuoso - Tienda Interactiva de Instrumentos Musicales",
  description: "Explora instrumentos musicales con modelos 3D, pruebas de sonido y estadísticas detalladas",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={geistSans.className}>{children}</body>
    </html>
  )
}

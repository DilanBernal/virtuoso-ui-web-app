"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Music } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", { email, password })
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <Music className="w-8 h-8 text-primary" />
            <span className="text-2xl font-serif text-foreground">Virtuoso</span>
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Bienvenido de vuelta</h1>
          <p className="text-muted-foreground mb-8">Inicia sesión para continuar tu experiencia musical</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border text-foreground"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-foreground">
                  Contraseña
                </Label>
                <Link href="/recuperacion" className="text-sm text-primary hover:text-primary/80">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-card border-border text-foreground"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Iniciar sesión
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              ¿No tienes cuenta?{" "}
              <Link href="/registro" className="text-primary hover:text-primary/80 font-medium">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/80 z-10" />
        <img src="/musician-playing-guitar-studio-artistic.jpg" alt="Musician" className="w-full h-full object-cover" />
        <div className="absolute bottom-12 left-12 right-12 z-20">
          <p className="font-serif text-3xl text-foreground text-balance">
            "La mejor plataforma para encontrar instrumentos de calidad"
          </p>
          <p className="text-muted-foreground mt-4">— Carlos Martínez, Guitarrista</p>
        </div>
      </div>
    </div>
  )
}

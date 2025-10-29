"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Music, ArrowLeft } from "lucide-react"

export default function RecuperacionPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Recuperación:", email)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <Music className="w-8 h-8 text-primary" />
          <span className="text-2xl font-serif text-foreground">Virtuoso</span>
        </Link>

        {!submitted ? (
          <>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Recupera tu cuenta</h1>
            <p className="text-muted-foreground mb-8">
              Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña
            </p>

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

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Enviar instrucciones
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Music className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-serif text-3xl text-foreground mb-4">Revisa tu correo</h1>
            <p className="text-muted-foreground mb-8">
              Hemos enviado las instrucciones de recuperación a <strong className="text-foreground">{email}</strong>
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="/login">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio de sesión
              </Link>
            </Button>
          </div>
        )}

        {!submitted && (
          <div className="mt-8 text-center">
            <Link href="/login" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio de sesión
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

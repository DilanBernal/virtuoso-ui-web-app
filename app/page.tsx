"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Play, TrendingUp, Award, Sparkles, Zap } from "lucide-react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { productos } from "@/lib/productos"

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  )
}
// </CHANGE>

export default function HomePage() {
  const featuredProducts = productos.slice(0, 3)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  // </CHANGE>

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Music className="w-8 h-8 text-primary" />
            <span className="text-2xl font-serif text-foreground">Virtuoso</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/catalogo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Catálogo
            </Link>
            <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Iniciar Sesión
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/registro">Registrarse</Link>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <motion.div style={{ scale: heroScale, opacity: 0.3 }} className="absolute inset-0">
          <img
            src="/elegant-guitar-studio-dark-moody.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl z-10"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl z-10"
        />
        {/* </CHANGE> */}

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 text-balance leading-tight"
          >
            Encuentra tu
            <span className="block text-primary italic">sonido perfecto</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty"
          >
            Explora instrumentos musicales con modelos 3D interactivos, pruebas de sonido de alta fidelidad y
            estadísticas técnicas detalladas
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              <Link href="/catalogo">Explorar Catálogo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="#features">
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-card relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        {/* </CHANGE> */}

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h2 className="font-serif text-5xl md:text-6xl text-center text-foreground mb-20 text-balance">
              Una experiencia de compra
              <span className="block text-primary italic">revolucionaria</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <Music className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-serif text-foreground mb-4">Modelos 3D Interactivos</h3>
                <p className="text-muted-foreground text-pretty">
                  Rota, amplía y explora cada detalle del instrumento desde cualquier ángulo
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <Play className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-serif text-foreground mb-4">Pruebas de Sonido</h3>
                <p className="text-muted-foreground text-pretty">
                  Escucha muestras de audio de alta fidelidad antes de comprar
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <TrendingUp className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-serif text-foreground mb-4">Estadísticas Técnicas</h3>
                <p className="text-muted-foreground text-pretty">
                  Analiza características detalladas con gráficos visuales intuitivos
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ParallaxSection>
              <div>
                <Zap className="w-12 h-12 text-primary mb-6" />
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
                  Tecnología que transforma la experiencia
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Cada instrumento cuenta con visualización 3D de alta calidad, permitiéndote explorar cada detalle como
                  si lo tuvieras en tus manos. Escucha samples profesionales y analiza especificaciones técnicas antes
                  de tomar tu decisión.
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/catalogo">Descubre más</Link>
                </Button>
              </div>
            </ParallaxSection>

            <ParallaxSection>
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="bg-card border border-border rounded-lg p-8"
                >
                  <div className="aspect-square bg-muted rounded-lg mb-4" />
                  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </motion.div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* Featured Products */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">Productos destacados</h2>
              <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
                <Link href="/catalogo">Ver todos →</Link>
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((producto, i) => (
              <AnimatedSection key={producto.id} delay={i * 0.1}>
                <Link href={`/producto/${producto.id}`} className="group block">
                  <motion.div
                    layoutId={`product-${producto.id}`}
                    className="bg-background rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Nuevo
                        </span>
                      </div>
                    </motion.div>
                    <div className="p-6">
                      <motion.h3
                        layoutId={`product-title-${producto.id}`}
                        className="text-xl font-serif text-foreground mb-2"
                      >
                        {producto.nombre}
                      </motion.h3>
                      <p className="text-muted-foreground text-sm mb-4">{producto.marca}</p>
                      <div className="flex items-center justify-between">
                        <motion.span
                          layoutId={`product-price-${producto.id}`}
                          className="text-2xl font-bold text-primary"
                        >
                          ${producto.precio}
                        </motion.span>
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
        />
        {/* </CHANGE> */}

        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <Award className="w-16 h-16 text-primary" />
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Únete a la comunidad de músicos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              Comparte tus experiencias, lee reseñas de otros músicos y encuentra el instrumento perfecto para tu estilo
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
              <Link href="/registro">Crear cuenta gratis</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-6 h-6 text-primary" />
                <span className="text-xl font-serif text-foreground">Virtuoso</span>
              </div>
              <p className="text-sm text-muted-foreground">
                La tienda interactiva de instrumentos musicales más innovadora
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Tienda</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/catalogo" className="hover:text-foreground transition-colors">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link href="/ofertas" className="hover:text-foreground transition-colors">
                    Ofertas
                  </Link>
                </li>
                <li>
                  <Link href="/novedades" className="hover:text-foreground transition-colors">
                    Novedades
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contacto" className="hover:text-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/ayuda" className="hover:text-foreground transition-colors">
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/envios" className="hover:text-foreground transition-colors">
                    Envíos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacidad" className="hover:text-foreground transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="hover:text-foreground transition-colors">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Virtuoso. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Cepillado correcto: técnica y frecuencia",
      excerpt:
        "Aprende la técnica adecuada para un cepillado efectivo que elimine la placa bacteriana y prevenga problemas dentales.",
      image: "/placeholder.svg?height=400&width=600",
      date: "15 de marzo, 2025",
      author: "Dra. Fabiana Zelpo",
    },
    {
      id: 2,
      title: "La importancia del hilo dental en tu rutina diaria",
      excerpt:
        "El hilo dental es esencial para limpiar las áreas donde el cepillo no llega. Descubre cómo usarlo correctamente y sus beneficios.",
      image: "/placeholder.svg?height=400&width=600",
      date: "2 de marzo, 2025",
      author: "Dra. Nadia Pérez",
    },
    {
      id: 3,
      title: "Alimentación saludable para dientes fuertes",
      excerpt:
        "Conoce qué alimentos son beneficiosos para mantener tus dientes fuertes y sanos, y cuáles deberías evitar.",
      image: "/placeholder.svg?height=400&width=600",
      date: "20 de febrero, 2025",
      author: "Dra. Florencia Fernandez",
    },
    {
      id: 4,
      title: "Blanqueamiento dental: mitos y realidades",
      excerpt:
        "Aclaramos las dudas más frecuentes sobre los tratamientos de blanqueamiento dental y te explicamos qué puedes esperar realmente.",
      image: "/placeholder.svg?height=400&width=600",
      date: "5 de febrero, 2025",
      author: "Dra. Fabiana Zelpo",
    },
    {
      id: 5,
      title: "Cómo prevenir la sensibilidad dental",
      excerpt:
        "La sensibilidad dental puede ser muy molesta. Aprende sus causas y cómo prevenirla con estos consejos prácticos.",
      image: "/placeholder.svg?height=400&width=600",
      date: "25 de enero, 2025",
      author: "Dra. Nadia Pérez",
    },
    {
      id: 6,
      title: "Ortodoncia invisible: ventajas y consideraciones",
      excerpt:
        "Los alineadores transparentes son una alternativa estética a los brackets tradicionales. Te explicamos sus ventajas y si son adecuados para ti.",
      image: "/placeholder.svg?height=400&width=600",
      date: "10 de enero, 2025",
      author: "Dra. Nadia Pérez",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <AnimatedSection variant="fadeIn" fullWidth>
        <section className="bg-[#f0f7ff] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-flex items-center text-[#7a9cbf] hover:text-[#5d7a99] mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Tips de Odontología</h1>
              <p className="text-xl text-gray-600">
                Consejos, información y novedades para mantener tu salud bucal en óptimas condiciones.
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Blog Posts */}
      <AnimatedSection variant="slideUp" fullWidth>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post) => (
                <motion.article 
                  key={post.id} 
                  variants={staggerItem}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                >
                  <div className="relative h-48 w-full">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="link" className="text-[#7a9cbf] p-0 hover:text-[#5d7a99]">
                        Leer más →
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Pagination */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Anterior
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-[#7a9cbf]"
                >
                  1
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Siguiente
                </a>
              </nav>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection variant="scale" fullWidth>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Suscríbete a nuestro boletín</h2>
              <p className="text-gray-600 mb-8">
                Recibe consejos de salud bucal, novedades y promociones especiales directamente en tu correo.
              </p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              >
                <Input type="email" placeholder="Tu correo electrónico" className="flex-grow" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#7a9cbf] hover:bg-[#5d7a99] text-white">Suscribirse</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}


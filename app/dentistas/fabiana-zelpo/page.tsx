"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"

export default function FabianaZelpoPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <AnimatedSection variant="fadeIn" fullWidth>
        <section className="bg-[#e6d5a8] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/#especialistas" className="inline-flex items-center text-white hover:text-white/80 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Especialistas
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Dra. Fabiana Zelpo</h1>
                <p className="text-xl text-white/90 mb-8">
                  Especialista en Implantología y Estética Facial con más de 15 años de experiencia. Comprometida con la
                  excelencia y la atención personalizada.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-[#7a9cbf] hover:bg-white/90">Agendar Consulta</Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/Fabi-removebg-preview.png"
                  alt="Dra. Fabiana Zelpo"
                  fill
                  className="object-contain bg-[#e6d5a8]/50"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Biografía y Carrera */}
      <AnimatedSection variant="slideUp" fullWidth>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-8"
              >
                Biografía y Carrera Profesional
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <motion.p variants={staggerItem}>
                  La Dra. Fabiana Zelpo se graduó con honores de la Facultad de Odontología de la Universidad de la
                  República en 2005. Desde entonces, ha dedicado su carrera a perfeccionar sus habilidades en
                  implantología y estética facial.
                </motion.p>

                <motion.p variants={staggerItem}>
                  Realizó su especialización en Implantología en la Universidad de Buenos Aires y posteriormente
                  completó un máster en Estética Facial en la Universidad Complutense de Madrid. Ha participado en
                  numerosos congresos internacionales y es miembro activo de la Asociación Latinoamericana de
                  Implantología Oral.
                </motion.p>

                <motion.p variants={staggerItem}>
                  Su enfoque se centra en proporcionar tratamientos personalizados que no solo mejoran la función
                  dental, sino también la estética y la confianza de sus pacientes. La Dra. Zelpo es conocida por su
                  meticulosa atención al detalle y su capacidad para crear soluciones adaptadas a las necesidades
                  específicas de cada persona.
                </motion.p>

                <motion.p variants={staggerItem}>
                  Además de su práctica clínica, la Dra. Zelpo participa regularmente en programas de educación continua
                  y ha impartido conferencias sobre implantología y estética facial en diversos foros profesionales.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Galería de Imágenes */}
      <AnimatedSection variant="scale" fullWidth>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-800 mb-12"
            >
              Galería de Imágenes
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    transition: { duration: 0.3 },
                  }}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={`Galería ${item}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Reseñas */}
      <AnimatedSection variant="slideLeft" fullWidth>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-800 mb-12"
            >
              Lo que dicen nuestros pacientes
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  name: "María González",
                  rating: 5,
                  comment:
                    "La Dra. Fabiana es excelente profesional. Me realizó un implante dental y quedé muy satisfecha con los resultados. Su atención es muy cálida y personalizada.",
                },
                {
                  name: "Carlos Rodríguez",
                  rating: 5,
                  comment:
                    "Increíble experiencia con la Dra. Zelpo. Su conocimiento y profesionalismo son evidentes en cada consulta. Recomiendo totalmente sus servicios de estética facial.",
                },
                {
                  name: "Laura Martínez",
                  rating: 5,
                  comment:
                    "Gracias a la Dra. Fabiana recuperé mi sonrisa. El tratamiento de implantes fue mucho menos traumático de lo que esperaba y los resultados son perfectos.",
                },
              ].map((review, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.comment}"</p>
                  <p className="font-semibold">{review.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection variant="bounce" fullWidth>
        <section className="py-16 bg-[#7a9cbf] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              ¿Listo para mejorar tu sonrisa?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Agenda una consulta con la Dra. Fabiana Zelpo y descubre cómo podemos ayudarte a lograr la sonrisa que
              siempre has deseado.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-[#7a9cbf] hover:bg-gray-100">
                Agendar Consulta
              </Button>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}


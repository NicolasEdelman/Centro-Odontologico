"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function SpecialistsSection() {
  const specialists = [
    {
      name: "Dra. Gisella Rodriguez",
      role: "Especialista en Cirugía Buco Maxilo Facial",
      image: "/images/2Marron.png",
    },
    {
      name: "Dra. Ana Paula Teske",
      role: "Asesora en Patologia y Laserterapia",
      image: "/images/1Marron.png",
    },
    {
      name: "Dra. Virginia Machado",
      role: "Especialista en Trastornos Temporo Mandibulares y Sueño",
      image: "/images/2Marron.png",
    },
    {
      name: "Dra. Lorena Diaz",
      role: "Especialista en Endodoncia",
      image: "/images/1Marron.png",
    },
    {
      name: "Dra. Patricia Pérez",
      role: "Especialista en Periodoncia",
      image: "/images/2Marron.png",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Nuestros Especialistas</h2>
          <div className="w-20 h-1 bg-co-secondary-beige mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {specialists.map((specialist, index) => (
            <motion.div key={index} variants={item} className="group text-center">
              <div className="relative w-full aspect-square overflow-hidden mb-4 mx-auto max-w-[200px]">
                <Image
                  src={specialist.image || "/placeholder.svg"}
                  alt={specialist.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{specialist.name}</h3>
              <p className="text-co-secondary-beige">{specialist.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


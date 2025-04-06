"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function DentalTips() {
  const tips = [
    {
      id: 1,
      title: "Cepillado correcto",
      description: "Aprende la técnica adecuada para un cepillado efectivo que elimine la placa bacteriana.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Uso del hilo dental",
      description: "El hilo dental es esencial para limpiar las áreas donde el cepillo no llega.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Alimentación saludable",
      description: "Conoce qué alimentos son beneficiosos para mantener tus dientes fuertes y sanos.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="w-full py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Tips de Odontología</h2>
          <div className="w-20 h-1 bg-[#a5c5e5] mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {tips.map((tip) => (
            <motion.div
              key={tip.id}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image src={tip.image || "/placeholder.svg"} alt={tip.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                <Link href="/blog">
                  <Button variant="link" className="text-[#7a9cbf] p-0 hover:text-[#5d7a99]">
                    Leer más →
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/blog">
            <Button variant="outline" className="border-[#7a9cbf] text-[#7a9cbf] hover:bg-[#a5c5e5]/10">
              Ver Todos los Tips
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


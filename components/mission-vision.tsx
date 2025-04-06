"use client"

import { motion } from "framer-motion"

export default function MissionVision() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#f0f7ff] rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Misión
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed"
            >
              Nuestro equipo de profesionales tiene como misión la{" "}
              <span className="font-bold text-[#7a9cbf]">promoción</span>,{" "}
              <span className="font-bold text-[#7a9cbf]">prevención</span> y{" "}
              <span className="font-bold text-[#7a9cbf]">rehabilitación integral</span> de la salud de nuestros
              pacientes. Estamos abocados a <span className="font-bold text-[#7a9cbf]">mejorar el nivel de salud</span>{" "}
              de las personas y a proveer servicios odontológicos de{" "}
              <span className="font-bold text-[#7a9cbf]">alta calidad</span>, dentro de un marco{" "}
              <span className="font-bold text-[#7a9cbf]">ético y humano</span>. El{" "}
              <span className="font-bold text-[#e6d5a8]">respeto</span>, la{" "}
              <span className="font-bold text-[#e6d5a8]">honestidad</span>, y el{" "}
              <span className="font-bold text-[#e6d5a8]">compromiso</span> con cada uno de nuestros pacientes son los
              valores que guían nuestro desempeño.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#f0f7ff] rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Visión
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed"
            >
              Nuestro equipo se dirige al <span className="font-bold text-[#7a9cbf]">cuidado y preservación</span> de la
              salud bucal de nuestros pacientes y busca ser
              <span className="font-bold text-[#7a9cbf]"> líder en la prestación</span> de servicios de salud
              odontológica. Promovemos la <span className="font-bold text-[#7a9cbf]">especialización</span> de cada uno
              de los integrantes de nuestro grupo de trabajo, la{" "}
              <span className="font-bold text-[#e6d5a8]">innovación</span> e{" "}
              <span className="font-bold text-[#e6d5a8]">implementación de técnicas de vanguardia</span>. Integramos un
              grupo de trabajo <span className="font-bold text-[#7a9cbf]">serio y responsable</span>, que busca el{" "}
              <span className="font-bold text-[#7a9cbf]">mejoramiento continuo</span> de la calidad de su servicio.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


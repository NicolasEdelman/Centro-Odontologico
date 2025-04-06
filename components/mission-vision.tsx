"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="w-full py-24 bg-[#fefcf8]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-lg p-10"
          >
            <div className="absolute -top-5 left-6 w-16 h-1 bg-co-primary-blue "></div>
            <h3 className="text-4xl font-bold text-co-primary-blue mb-6">
              Misión
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nuestro equipo de profesionales tiene como misión la{" "}
              <span className="font-bold text-co-primary-blue">promoción</span>,{" "}
              <span className="font-bold text-co-primary-blue">prevención</span>{" "}
              y{" "}
              <span className="font-bold text-co-primary-blue">
                rehabilitación integral
              </span>{" "}
              de la salud bucal. Nos motiva{" "}
              <span className="font-bold text-co-primary-blue">
                mejorar el nivel de salud
              </span>{" "}
              y brindar{" "}
              <span className="font-bold text-co-primary-blue">
                servicios de alta calidad
              </span>{" "}
              en un marco{" "}
              <span className="font-bold text-co-primary-blue">
                ético y humano
              </span>
              . Valoramos el{" "}
              <span className="font-bold text-co-primary-blue">respeto</span>,{" "}
              <span className="font-bold text-co-primary-blue">honestidad</span>{" "}
              y el{" "}
              <span className="font-bold text-co-primary-blue">compromiso</span>{" "}
              con cada paciente.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl shadow-lg p-10"
          >
            <div className="absolute -top-5 left-6 w-16 h-1 bg-co-secondary-beige "></div>
            <h3 className="text-4xl font-bold text-co-secondary-beige mb-6">
              Visión
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Aspiramos a ser{" "}
              <span className="font-bold text-co-secondary-beige">
                líderes en salud bucal
              </span>
              , promoviendo la{" "}
              <span className="font-bold text-co-secondary-beige">
                especialización
              </span>{" "}
              profesional, la{" "}
              <span className="font-bold text-co-secondary-beige">
                innovación
              </span>{" "}
              y el uso de{" "}
              <span className="font-bold text-co-secondary-beige">
                técnicas de vanguardia
              </span>
              . Nos enfocamos en el{" "}
              <span className="font-bold text-co-secondary-beige">
                mejoramiento continuo
              </span>{" "}
              y trabajamos con{" "}
              <span className="font-bold text-co-secondary-beige">
                seriedad y responsabilidad
              </span>{" "}
              para cuidar la salud bucal de nuestros pacientes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

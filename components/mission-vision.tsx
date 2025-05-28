"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section id="mision-vision" className="w-full bg-white pb-10  ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center  mx-auto">
          {/* Imagen a la izquierda */}
          <div className="relative w-full md:h-auto overflow-hidden order-1 md:order-none pt-10 md:pt-0">
            <Image
              src="/images/Nosotras2.png"
              alt="Nosotras"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Misión y Visión a la derecha */}
          <div className="flex flex-col gap-4 md:gap-12 order-2 md:order-none ">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-md px-4 py-8 md:p-8"
            >
              <h3 className="text-lg md:text-4xl font-bold text-co-secondary-beige mb-4">
                Misión
              </h3>
              <p className="text-gray-700 text-xs md:text-base leading-relaxed">
                Nuestro equipo de profesionales tiene como misión la{" "}
                <span className="font-bold text-co-secondary-beige">
                  promoción
                </span>
                ,{" "}
                <span className="font-bold text-co-secondary-beige">
                  prevención
                </span>{" "}
                y{" "}
                <span className="font-bold text-co-secondary-beige">
                  rehabilitación integral
                </span>{" "}
                de la salud bucal. Nos motiva{" "}
                <span className="font-bold text-co-secondary-beige">
                  mejorar el nivel de salud
                </span>{" "}
                y brindar{" "}
                <span className="font-bold text-co-secondary-beige">
                  servicios de alta calidad
                </span>{" "}
                en un marco{" "}
                <span className="font-bold text-co-secondary-beige">
                  ético y humano
                </span>
                . Valoramos el{" "}
                <span className="font-bold text-co-secondary-beige">
                  respeto
                </span>
                ,{" "}
                <span className="font-bold text-co-secondary-beige">
                  honestidad
                </span>{" "}
                y el{" "}
                <span className="font-bold text-co-secondary-beige">
                  compromiso
                </span>{" "}
                con cada paciente.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-md px-4 py-8 md:p-8"
            >
              <h3 className="text-lg md:text-4xl font-bold text-co-secondary-beige mb-4">
                Visión
              </h3>
              <p className="text-gray-700 text-xs md:text-base leading-relaxed">
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
      </div>
    </section>
  );
}

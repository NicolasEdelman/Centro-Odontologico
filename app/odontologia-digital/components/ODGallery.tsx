"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SubTitle } from "@/components/sub-title";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ODMosaicOverlaySimple() {
  const blocks = [
    {
      image: "/OdontologiaDigital2/3.png",
      title: "Más comodidad, menos visitas",
      text: "Gracias a la odontología digital, reducimos el número de sesiones y eliminamos procedimientos incómodos como las pastas para moldes. Todo es más limpio, preciso y rápido. ¡Tu tiempo vale!",
    },
    {
      image: "/OdontologiaDigital2/4.png",
      title: "Visualiza tu sonrisa antes de empezar",
      text: "Con nuestras simulaciones digitales, puedes ver el resultado estimado de tu tratamiento antes de tomar una decisión. Más información, menos dudas.",
    },
    {
      image: "/OdontologiaDigital2/2.png",
      title: "Tu salud en manos especializadas",
      text: "Profesionales capacitados en odontología digital para brindar tratamientos de alta tecnología con máxima precisión.",
    },
    {
      image: "/OdontologiaDigital2/5.png",
      title: "Confianza y precisión en cada detalle",
      text: "La tecnología digital permite diagnósticos más precisos, mayor calidad y resultados predecibles, optimizando cada etapa del tratamiento y minimizando errores.",
    },
    {
      image: "/OdontologiaDigital2/1.png",
      title: "Innovación que marca la diferencia",
      text: "En nuestro consultorio, la odontología digital te abre la puerta a un mundo de posibilidades para cuidar tu salud bucal, con tecnología que hace realidad la sonrisa que deseás.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SubTitle title="Odontología Digital" underlineColor="blue" />
        </div>

        {/* GRID RESPONSIVA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Imagen de fondo */}
              <div className="relative w-full h-[600px]">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay con título y descripción */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{block.title}</h3>
                <p className="text-sm md:text-base opacity-90">{block.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

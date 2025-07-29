"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SubTitle } from "@/components/sub-title";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ODMosaicIrregular() {
  const images = [
    "/OdontologiaDigital2/3.png",
    "/OdontologiaDigital2/4.png",
    "/OdontologiaDigital2/2.png",
    "/OdontologiaDigital2/5.png",
    "/OdontologiaDigital2/1.png",
  ];
  const texts = [
    {
      title: "Más comodidad, menos visitas",
      text: (
        <>
          Gracias a la odontología digital, reducimos el número de sesiones y
          eliminamos procedimientos incómodos como las pastas para moldes. Todo
          es más limpio, preciso y rápido. ¡Tu tiempo vale!
        </>
      ),
    },
    {
      title: "Visualiza tu sonrisa antes de empezar",
      text: (
        <>
          Con nuestras simulaciones digitales, puedes ver el resultado estimado
          de tu tratamiento antes de tomar una decisión. Más información, menos
          dudas.
        </>
      ),
    },
    {
      title: "Tu salud en manos especializadas",
      text: (
        <>
          Profesionales capacitados en odontología digital para brindar
          tratamientos de alta tecnología con máxima precisión.
        </>
      ),
    },
    {
      title: "Confianza y precisión en cada detalle",
      text: (
        <>
          La tecnología digital permite diagnósticos más precisos, mayor calidad
          y resultados predecibles, optimizando cada etapa del tratamiento y
          minimizando errores.
        </>
      ),
    },
    {
      title: "Innovación que marca la diferencia",
      text: (
        <>
          En nuestro consultorio, la odontología digital te abre la puerta a un
          mundo de posibilidades para cuidar tu salud bucal, con tecnología que
          hace realidad la sonrisa que deseás.
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <SubTitle title="Odontología Digital" underlineColor="blue" />
        </div>

        {/* GRID MOSAICO IRREGULAR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {/* Columna 1 */}
          <div className="space-y-6">
            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={images[0] || ""}
                alt="Img1"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-co-primary-blue/20 rounded-xl shadow-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {texts[1].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[1].text}
              </p>
            </motion.div>

            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={images[2] || ""}
                alt="Img2"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-co-primary-blue/20 rounded-xl shadow-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {texts[3].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[3].text}
              </p>
            </motion.div>

            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={images[4] || ""}
                alt="Img5"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Columna 2 (desplazada hacia abajo) */}
          <div className="space-y-6 mt-40">
            <motion.div
              className="bg-co-primary-blue/20 rounded-xl shadow-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {texts[0].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[0].text}
              </p>
            </motion.div>

            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={images[1] || ""}
                alt="Img3"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-co-primary-blue/20 rounded-xl shadow-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {texts[2].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[2].text}
              </p>
            </motion.div>

            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={images[3] || ""}
                alt="Img4"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="bg-co-primary-blue/20 rounded-xl shadow-lg p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {texts[4].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[4].text}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

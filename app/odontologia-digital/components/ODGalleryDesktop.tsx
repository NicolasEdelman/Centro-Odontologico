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
          eliminamos procedimientos incómodos como las pastas para moldes.
          <br />
          <br />
          <strong>Limpio, preciso y rápido. ¡Tu tiempo vale!</strong>
        </>
      ),
    },
    {
      title: "Visualiza tu sonrisa antes de empezar",
      text: (
        <>
          Con nuestras simulaciones digitales, puedes ver el resultado estimado
          de tu tratamiento antes de tomar una decisión.
          <br />
          <br />
          <strong>Más información, menos dudas.</strong>
        </>
      ),
    },
    {
      title: "Tu salud en manos especializadas",
      text: (
        <>
          Somos profesionales capacitados en odontología digital para brindarte
          diagnósticos más exactos, tratamientos más personalizados y con una
          mayor previsibilidad de los resultados.
          <br />
          <br />
          <strong>Comprometidos con tu bienestar.</strong>
        </>
      ),
    },
    {
      title: "Confianza y precisión en cada detalle",
      text: (
        <>
          Gracias al uso de herramientas avanzadas, se alcanza una exactitud
          técnica superior que no solo minimiza errores sino que también
          disminuye la necesidad de ajustes.
          <br />
          <br />
          <strong>Mereces seguridad y tranquilidad.</strong>
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
          <br />
          <br />
          <strong>Viví la experiencia de una atención a otro nivel</strong>
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
              <img
                src={images[0] || ""}
                alt="Img1"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-white p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-3 ">
                {texts[1].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[1].text}
              </p>
              <div className="flex justify-end">
                <span className="text-2xl text-co-primary-blue">→</span>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={images[2] || ""}
                alt="Img2"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-white p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-3 ">
                {texts[3].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[3].text}
              </p>
              <div className="flex justify-end">
                <span className="text-2xl text-co-primary-blue">→</span>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={images[4] || ""}
                alt="Img5"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Columna 2 (desplazada hacia abajo) */}
          <div className="space-y-6 mt-32">
            <motion.div
              className="bg-white p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-3 ">
                {texts[0].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[0].text}
              </p>
              <div className="flex justify-start mt-4">
                <span className="text-2xl text-co-primary-blue">←</span>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={images[1] || ""}
                alt="Img3"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-white p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-3 ">
                {texts[2].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[2].text}
              </p>
              <div className="flex justify-start mt-4">
                <span className="text-2xl text-co-primary-blue">←</span>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[9/14] overflow-hidden rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={images[3] || ""}
                alt="Img4"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="bg-white p-6"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-3 ">
                {texts[4].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {texts[4].text}
              </p>
              <div className="flex justify-start mt-4">
                <span className="text-2xl text-co-primary-blue">←</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

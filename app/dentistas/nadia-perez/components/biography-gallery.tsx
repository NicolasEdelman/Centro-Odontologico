"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { SubTitle } from "@/components/sub-title";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const bioSteps = [
  {
    title: "Formación Académica",
    text: "La Dra. Nadia Pérez Protto es Doctora en Odontología, egresada de la Facultad de Odontología de la Universidad de la República (UdelaR), en Montevideo, Uruguay.",
    image: "/placeholder.svg",
  },
  {
    title: "Especialización en Cirugía",
    text: "Su formación de Posgrado se ha centrado principalmente en Cirugía Menor, incluyendo Implantes Dentales Oseointegrados, Regeneración Ósea, Elevación de Seno Maxilar y Prótesis Implanto Asistidas en la Clínica Ibañez (Córdoba, Argentina). También se ha especializado en Cirugía de Terceros Molares retenidos en la Cátedra de Cirugía de la UdelaR.",
    image: "/placeholder.svg",
  },
  {
    title: "Estudios de Postgrado",
    text: "Actualmente, se encuentra culminando la Especialidad en Rehabilitación Oral Integral en la UdelaR y es Magister en Ciencias Odontológicas por la Universidad de Valencia, España.",
    image: "/placeholder.svg",
  },
  {
    title: "Experiencia Docente",
    text: "En el ámbito docente, se desempeñó durante 14 años como Docente Grado 2 en la Cátedra de Técnica de Operatoria Dental de la UdelaR, desde 2007 hasta 2021.",
    image: "/placeholder.svg",
  },
];

export default function BiographyGallery() {
  return (
    <AnimatedSection variant="slideUp" fullWidth>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <SubTitle
              title="Biografía y Carrera Profesional"
              underlineColor="beige"
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-32"
          >
            {bioSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`flex flex-col lg:flex-row ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                } items-center gap-12`}
              >
                <div className="w-full lg:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="my-24">
            <SubTitle title="Galería de Imágenes" underlineColor="beige" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt={`Galería ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}

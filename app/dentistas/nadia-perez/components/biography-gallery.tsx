"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { SubTitle } from "@/components/sub-title";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BiographyGallery() {
  return (
    <AnimatedSection variant="slideUp" fullWidth>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <SubTitle title="Formación académica" underlineColor="beige" />
          </div>

          <div className="space-y-32">
            {/* Bloques individuales con animación simple al scrollear */}
            {[
              {
                title: "Doctora en Odontología",
                text: (
                  <>
                    La Dra. Nadia Pérez Protto es egresada de la Facultad de
                    Odontología de la Universidad de la República (UdelaR), en
                    Montevideo, Uruguay.
                  </>
                ),
              },
              {
                title: "Especialista en Odontología Restauradora Integral",
                text: (
                  <>
                    Título otorgado también por la Facultad de Odontología,
                    UdelaR. <br />
                    Esta Especialidad se trata del diagnóstico y resolución de
                    casos complejos utilizando todas las herramientas
                    restauradoras disponibles actualmente.
                  </>
                ),
                reverse: true,
              },
              {
                title: "Estudios de Postgrado",
                text: (
                  <>
                    Su formación de <strong>Posgrado</strong> se ha centrado
                    principalmente en Cirugía Menor, incluyendo{" "}
                    <strong>
                      Implantes Dentales Oseointegrados, Regeneración Ósea,
                      Elevación de Seno Maxilar y Prótesis Implanto Asistida
                    </strong>{" "}
                    en la Clínica Ibañez (Córdoba, Argentina). <br />
                    También se ha especializado en Cirugía de{" "}
                    <strong>Terceros Molares retenidos</strong> en la Cátedra de
                    Cirugía de la UdelaR.
                  </>
                ),
              },
              {
                title: "Otras acreditaciones",
                text: (
                  <>
                    La Dra. Nadia cuenta con un{" "}
                    <strong>Máster en Ciencias Odontológicas</strong> de la{" "}
                    <strong>Universidad de Valencia</strong>, España.
                  </>
                ),
                reverse: true,
              },
              {
                title: "Experiencia Docente",
                text: (
                  <>
                    Nadia ha sido <strong>Docente Grado 2</strong> durante 14
                    años en la{" "}
                    <strong>Cátedra de Técnica de Operatoria Dental</strong>{" "}
                    desde el año 2007 al 2021 en la UdelaR.
                  </>
                ),
              },
            ].map((block, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row ${
                  block.reverse ? "lg:flex-row-reverse" : ""
                } items-center gap-12`}
              >
                <div className="w-full lg:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg"
                    alt={block.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                    {block.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {block.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="my-24">
            <SubTitle title="Galería de Imágenes" underlineColor="beige" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

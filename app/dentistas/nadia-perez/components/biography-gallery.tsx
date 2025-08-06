"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SubTitle } from "@/components/sub-title";
import AutoCarousel from "@/components/auto-carrousel";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BiographyGallery() {
  return (
    <section className="md:py-20 bg-white">
      <div className="">
        <div className="max-w-4xl mx-auto mb-12 md:mb-20">
          <SubTitle title="Formación académica" underlineColor="beige" />
        </div>

        <div className="space-y-12 md:space-y-32 container mx-auto">
          {[
            {
              image: "/Biografia/FacultadNadia.png",
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
              image: "/Biografia/OdontologiaRestauradora.png",
              text: (
                <>
                  Su título de Especialista lo a obtenido en la Facultad de
                  Odontología UdelaR. <br />
                  <br />
                  Esta Especialidad se trata del diagnóstico y resolución de
                  casos complejos utilizando todas las herramientas
                  restauradoras disponibles actualmente.
                </>
              ),
              reverse: true,
            },
            {
              title: "Estudios de Postgrado",
              image: "/Biografia/PostgradoNadia.jpg",
              text: (
                <>
                  Su formación de <strong>Posgrado</strong> se ha centrado
                  principalmente en Cirugía Menor, incluyendo{" "}
                  <strong>
                    Implantes Dentales Oseointegrados, Regeneración Ósea y
                    Prótesis Implanto Asistida
                  </strong>{" "}
                  en la Clínica Ibañez (Córdoba, Argentina). <br />
                  <br />
                  También se ha entrenado en Cirugía de{" "}
                  <strong>Terceros Molares retenidos</strong> en la Cátedra de
                  Cirugía de la UdelaR.
                </>
              ),
            },
            {
              title: "Título de Máster",
              image: "/Biografia/Master.png",
              text: (
                <>
                  La Dra. Nadia Pérez cuenta con un{" "}
                  <strong>Máster en Ciencias Odontológicas</strong> otorgado por
                  la <strong>Universidad de Valencia</strong>, España.
                  <br />
                  <br />A través de esta formación de posgrado, ha adquirido una
                  sólida preparación en investigación, pensamiento crítico y
                  habilidades avanzadas para la generación y aplicación de
                  conocimiento científico en el ámbito odontológico.
                </>
              ),
              reverse: true,
            },
            {
              title: "Experiencia Docente",
              image: "/Biografia/ExperienciaDocent.jpg",
              text: (
                <>
                  Nadia ha sido <strong>Docente Grado 2</strong> durante 14 años
                  en la <strong>Cátedra de Técnica de Operatoria Dental</strong>{" "}
                  desde el año 2007 al 2021 en la UdelaR.
                  <br />
                  <br />
                  Fascinada por la Cariología, los diversos recursos
                  preventivos, materiales dentales y técnicas para resolver y
                  restaurar las lesiones de caries, Nadia concursó en la Cátedra
                  con el objetivo de compartir con otros jóvenes sus
                  conocimientos y la pasión por nuestra profesión.
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
              } items-center gap-8 md:gap-12`}
            >
              <div className="w-full lg:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={block.image || "/placeholder.svg"}
                  alt={block.title}
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-4 uppercase tracking-wide">
                  {block.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  {block.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

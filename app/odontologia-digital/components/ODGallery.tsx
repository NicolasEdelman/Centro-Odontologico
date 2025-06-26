"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SubTitle } from "@/components/sub-title";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ODGallery() {
  return (
    <section className="md:py-20 bg-white">
      <div className="">
        <div className="max-w-4xl mx-auto mb-12 md:mb-20">
          <SubTitle title="Odontología Digital" underlineColor="blue" />
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
              image: "/Biografia/PostgradoNadia.jpg",
              text: (
                <>
                  Su formación de <strong>Posgrado</strong> se ha centrado
                  principalmente en Cirugía Menor, incluyendo{" "}
                  <strong>
                    Implantes Dentales Oseointegrados, Regeneración Ósea,
                    Elevación de Seno Maxilar y Prótesis Implanto Asistida
                  </strong>{" "}
                  en la Clínica Ibañez (Córdoba, Argentina). <br />
                  <br />
                  También se ha especializado en Cirugía de{" "}
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
                  La Dra. Nadia cuenta con un{" "}
                  <strong>Máster en Ciencias Odontológicas</strong> de la{" "}
                  <strong>Universidad de Valencia</strong>, España.
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
                <Image
                  src={ "/placeholder.svg"}
                  alt={block.title}
                  fill
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

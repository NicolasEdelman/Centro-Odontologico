"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: "rehabilitacion",
      title: "Rehabilitación",
      description:
        "Restauración de la función dental para una sonrisa saludable y estética.",
      image: "/images/dental-treatment-1.jpeg",
    },
    {
      id: "diseno-de-sonrisa",
      title: "Diseño de Sonrisa",
      description:
        "Transformación estética personalizada para lograr la sonrisa ideal.",
      image: "/images/dental-treatment-2.jpeg",
    },
    {
      id: "ortodoncia-convencional",
      title: "Ortodoncia Convencional",
      description:
        "Corrección de la posición dental mediante brackets metálicos tradicionales.",
      image: "/images/dental-treatment-3.jpeg",
    },
    {
      id: "ortodoncia-invisible",
      title: "Ortodoncia Invisible",
      description:
        "Alineadores transparentes para corregir tu sonrisa de forma discreta.",
      image: "/images/dental-treatment-4.jpeg",
    },
    {
      id: "ortopedia",
      title: "Ortopedia",
      description:
        "Guía del desarrollo óseo y dental en niños para una mordida funcional.",
      image: "/images/dental-treatment-1.jpeg",
    },
    {
      id: "estetica-facial",
      title: "Estética Facial",
      description:
        "Tratamientos no invasivos para realzar la armonía del rostro.",
      image: "/images/dental-treatment-2.jpeg",
    },
    {
      id: "cosmetologia-medica",
      title: "Cosmetología Médica",
      description:
        "Cuidado avanzado de la piel para mejorar su salud y apariencia.",
      image: "/images/dental-treatment-3.jpeg",
    },
    {
      id: "fonoaudiologia",
      title: "Fonoaudiología",
      description:
        "Diagnóstico y tratamiento de trastornos del habla y lenguaje.",
      image: "/images/dental-treatment-4.jpeg",
    },
    {
      id: "implantologia",
      title: "Implantología",
      description:
        "Reemplazo de dientes perdidos con implantes dentales duraderos.",
      image: "/images/dental-treatment-1.jpeg",
    },
    {
      id: "cirugia",
      title: "Cirugía",
      description:
        "Procedimientos quirúrgicos para resolver problemas bucales complejos.",
      image: "/images/dental-treatment-2.jpeg",
    },
    {
      id: "periodoncia",
      title: "Periodoncia",
      description:
        "Tratamiento de encías y estructuras que sostienen los dientes.",
      image: "/images/dental-treatment-3.jpeg",
    },
    {
      id: "endodoncia",
      title: "Endodoncia",
      description:
        "Tratamientos de conducto para salvar dientes dañados o infectados.",
      image: "/images/dental-treatment-4.jpeg",
    },
    {
      id: "patologia-oral",
      title: "Patología Oral",
      description:
        "Diagnóstico y tratamiento de lesiones o enfermedades bucales.",
      image: "/images/dental-treatment-1.jpeg",
    },
    {
      id: "odontopediatria",
      title: "Odontopediatría",
      description: "Atención dental especializada para niños y adolescentes.",
      image: "/images/dental-treatment-2.jpeg",
    },
    {
      id: "tratornos-temporomandibulares-y-sueno",
      title: "Sueño y TTM",
      description:
        "Tratamiento del sueño y disfunciones temporomandibulares.",
      image: "/images/dental-treatment-3.jpeg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="servicios" className="w-full md:py-20 py-10 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Servicios
          </h2>
          <div className="w-20 h-1 bg-[#a5c5e5] mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative md:h-32 h-20 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent"></div>
              </div>

              <div className="md:p-3 p-2 flex flex-col flex-grow">
                <h3 className="md:text-lg text-md font-bold text-brand-blue ">
                  {service.title}
                </h3>
                <p className="text-gray-600  text-xs md:text-xs">
                  {service.description}
                </p>
                <Link href={`/servicios/${service.id}`} className="mt-2">
                  <Button
                    className="bg-co-primary-blue hover:bg-brand-blue text-white w-full"
                    size="sm"
                  >
                    Saber Más
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

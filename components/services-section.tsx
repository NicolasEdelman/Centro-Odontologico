"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: "diseno-de-sonrisa",
      title: "Diseño de Sonrisa",
      description:
        "Transformación estética, emocional y personalizada de la sonrisa.",
      image: "/servicios/sonrisa.png",
    },
    {
      id: "rehabilitacion",
      title: "Rehabilitación",
      description:
        "Restauración de la función dental para una sonrisa saludable y estética.",
      image: "/servicios/rehabilitacion.png",
    },
    {
      id: "implantologia",
      title: "Implantología",
      description:
        "Reemplazo de dientes perdidos mediante estructuras de titanio o zirconio dental.",
      image: "/servicios/implantes.png",
    },
    {
      id: "cirugia",
      title: "Cirugía",
      description:
        "Procedimientos quirúrgicos para resolver problemas bucales complejos.",
      image: "/servicios/cirugia.png",
    },
    {
      id: "patologia-oral",
      title: "Patología Oral",
      description:
        "Diagnóstico y tratamiento de lesiones o enfermedades bucales.",
      image: "/servicios/patologia-oral.png",
    },
    {
      id: "ortopedia",
      title: "Ortopedia",
      description:
        "Guía del crecimiento y desarrollo óseo y de la estructura facial en niños y adolescentes.",
      image: "/servicios/ortopedia.png",
    },
    {
      id: "ortodoncia-convencional",
      title: "Ortodoncia Convencional",
      description:
        "Corrección de la posición dental y ósea con brackets metálicos o estéticos.",
      image: "/servicios/ortodoncia.png",
    },
    {
      id: "ortodoncia-invisible",
      title: "Ortodoncia Invisible",
      description:
        "Corrección de la posición dental y ósea con alineadores transparentes removibles.",
      image: "/servicios/ortodoncia-invisible.png",
    },
    {
      id: "estetica-facial",
      title: "Estética Facial",
      description:
        "Tratamientos mínimamente invasivos para realzar la armonía del rostro y sonrisa.",
      image: "/servicios/estetica.png",
    },
    {
      id: "cosmetologia-medica",
      title: "Cosmetología Médica",
      description:
        "Cuidado avanzado de la piel para mejorar su salud y apariencia.",
      image: "/servicios/cosmetologia.png",
    },
    {
      id: "odontopediatria",
      title: "Odontopediatría",
      description: "Atención dental especializada para niños y adolescentes.",
      image: "/servicios/kids.png",
    },
    {
      id: "fonoaudiologia",
      title: "Fonoaudiología",
      description:
        "Diagnóstico y tratamiento de trastornos del habla y lenguaje.",
      image: "/servicios/fonoaudiologia.png",
    },
    {
      id: "periodoncia",
      title: "Periodoncia",
      description:
        "Tratamiento de encías y tejidos de sostén de dientes e implantes.",
      image: "/servicios/periodoncia.png",
    },
    {
      id: "endodoncia",
      title: "Endodoncia",
      description:
        "Tratamientos de conducto para salvar dientes dañados o infectados.",
      image: "/servicios/endodoncia.png",
    },
    {
      id: "sueno-y-ttm",
      title: "Sueño y TTM",
      description:
        "Tratamiento de trastornos del sueño y disfunciones temporomandibulares.",
      image: "/servicios/sueño.png",
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
          className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 py-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="group bg-white  overflow-hidden  transition-all duration-300 h-full flex flex-col justify-center items-center "
            >
              <div className="relative md:h-24 aspect-square w-24 h-24 overflow-hidden  ">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className=" aspect-square "
                />
              </div>

              <div className="md:p-3 p-2 flex flex-col flex-grow">
                <h3 className="md:text-lg text-md font-bold text-brand-blue text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600  text-xs md:text-xs text-center">
                  {service.description}
                </p>
                {/* <Link href={`/servicios/${service.id}`} className="mt-2">
                  <button className=" text-co-primary-blue text-sm hover:underline w-full rounded-lg">
                    Saber más
                  </button>
                </Link> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

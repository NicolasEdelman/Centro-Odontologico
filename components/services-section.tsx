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
        "Restauración completa de la función y estética dental para devolverte la confianza en tu sonrisa.",
      image: "/images/dental-treatment-1.jpeg",
    },
    {
      id: "ortodoncia",
      title: "Ortodoncia",
      description:
        "Alineación dental perfecta con tratamientos personalizados para todas las edades.",
      image: "/images/dental-treatment-2.jpeg",
    },
    {
      id: "implantologia",
      title: "Implantes",
      description:
        "Soluciones permanentes para dientes perdidos con tecnología de vanguardia y materiales de alta calidad.",
      image: "/images/dental-treatment-3.jpeg",
    },
    {
      id: "estetica-facial",
      title: "Estética facial",
      description:
        "Tratamientos no invasivos para realzar la belleza natural de tu rostro y complementar tu sonrisa.",
      image: "/images/dental-treatment-4.jpeg",
    },
    {
      id: "rehabilitacion2",
      title: "Rehabilitación",
      description:
        "Restauración completa de la función y estética dental para devolverte la confianza en tu sonrisa.",
      image: "/images/dental-treatment-1.jpeg",
    },
    {
      id: "ortodoncia2",
      title: "Ortodoncia",
      description:
        "Alineación dental perfecta con tratamientos personalizados para todas las edades.",
      image: "/images/dental-treatment-2.jpeg",
    },
    {
      id: "implantologia2",
      title: "Implantes",
      description:
        "Soluciones permanentes para dientes perdidos con tecnología de vanguardia y materiales de alta calidad.",
      image: "/images/dental-treatment-3.jpeg",
    },
    {
      id: "estetica-facial2",
      title: "Estética facial",
      description:
        "Tratamientos no invasivos para realzar la belleza natural de tu rostro y complementar tu sonrisa.",
      image: "/images/dental-treatment-4.jpeg",
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
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
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
              <div className="relative md:h-48 h-20 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent"></div>
              </div>

              <div className="md:p-4 p-2 flex flex-col flex-grow">
                <h3 className="md:text-xl text-md font-bold text-brand-blue mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 md:mb-4 text-xs md:text-sm">
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

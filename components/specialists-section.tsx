"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AutoCarousel from "./auto-carrousel";
import { useState, useEffect } from "react";

export default function SpecialistsSection() {
  const [useCarousel, setUseCarousel] = useState(false);

  useEffect(() => {
    setUseCarousel(specialists.length > 6 || window.innerWidth < 768);
  }, []);

  const specialists = [
    {
      name: "Dra. Gissela Rodríguez",
      role: "Especialista en Cirugía Buco Maxilo Facial",
      image: "/images/Staff/GisellaRodriguez.png",
    },
    {
      name: "Dra. Lorena Diaz",
      role: "Especialista en Endodoncia",
      image: "/images/Staff/LorenaDiaz.png",
    },
    {
      name: "Dra. Ana Paula Teske",
      role: "Asesora en Patologia y Laserterapia",
      image: "/images/Staff/PaulaTeske.png",
    },
    {
      name: "Dra. Patricia Pérez",
      role: "Especialista en Periodoncia",
      image: "/images/Staff/PatriciaPerez.png",
    },
    {
      name: "Dra. Virginia Machado",
      role: "Especialista en Trastornos Temporo Mandibulares y Sueño",
      image: "/images/Staff/VirginiaMachado.png",
    },
    {
      name: "Victoria Rodriguez",
      role: "Cosmetóloga médica",
      image: "/images/Staff/EquipoMarron/VictoriaRodriguez.png",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const SpecialistCard = ({
    name,
    role,
    image,
  }: {
    name: string;
    role: string;
    image: string;
  }) => (
    <motion.div
      variants={item}
      className="group text-center flex-shrink-0 w-[150px] md:w-[200px] max-w-[200px]"
    >
      <div className="relative w-full aspect-square overflow-hidden md:mb-4 mx-auto max-w-[200px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className=" mx-auto overflow-hidden">
        <h3 className="text-md md:text-lg font-bold text-gray-800  whitespace-normal">
          {name}
        </h3>
        <p className="text-co-secondary-beige md:text-base text-sm  whitespace-normal">
          {role}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="equipo" className="w-full pt-20 md:py-20 bg-white">
      <div className="md:container md:mx-auto md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Nuestras Especialistas
          </h2>
          <div className="w-20 h-1 bg-co-secondary-beige mx-auto md:mb-12" />
        </motion.div>

        {useCarousel ? (
          <AutoCarousel>
            {[...specialists].map((spec, i) => (
              <SpecialistCard key={i} {...spec} />
            ))}
          </AutoCarousel>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6  mx-auto"
          >
            {specialists.map((spec, i) => (
              <SpecialistCard key={i} {...spec} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

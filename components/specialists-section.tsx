"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AutoCarousel from "./auto-carrousel";

export default function SpecialistsSection() {
  const specialists = [
    {
      name: "Dra. Gisella Rodriguez",
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
      className="group text-center flex-shrink-0 w-[200px]"
    >
      <div className="relative w-full aspect-square overflow-hidden mb-4 mx-auto max-w-[200px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-co-secondary-beige">{role}</p>
    </motion.div>
  );

  const useCarousel = specialists.length > 5;

  return (
    <section id="equipo" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Nuestras Especialistas
          </h2>
          <div className="w-20 h-1 bg-co-secondary-beige mx-auto mb-12" />
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
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

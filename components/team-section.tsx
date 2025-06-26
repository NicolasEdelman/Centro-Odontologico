"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AutoCarousel from "./auto-carrousel";
import { useState, useEffect } from "react";

export default function TeamSection() {
  const [useCarousel, setUseCarousel] = useState(false);

  useEffect(() => {
    setUseCarousel(teamMembers.length > 6 || window.innerWidth < 768);
  }, []);

  const teamMembers = [
    {
      name: "Dra. Florencia Fernandez",
      role: "Odontóloga general",
      image: "/images/Staff/EquipoMarron/FlorenciaFernandez.png",
    },
    {
      name: "Belén Borba",
      role: "Higienista dental",
      image: "/images/Staff/EquipoMarron/BelenBorba.png",
    },
    {
      name: "Yeni Maciel",
      role: "Asistente dental",
      image: "/images/Staff/EquipoMarron/YeniMaciel.png",
    },
    {
      name: "Sebastián Gonzalvez",
      role: "Asistente dental",
      image: "/images/Staff/EquipoMarron/SebastianGonzalvez.png",
    },
    {
      name: "Silvia Acosta",
      role: "Asistente de limpieza",
      image: "/images/Staff/EquipoMarron/SilviaAcosta.png",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const TeamCard = ({
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
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group text-center flex-shrink-0 w-[150px] md:w-[200px]"
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
    <section className="w-full mb-10  md:pt-0 md:pb-20 bg-white">
      <div className=" md:mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Nuestro Equipo
          </h2>
          <div className="w-20 h-1 bg-co-secondary-beige mx-auto md:mb-12"></div>
        </motion.div>

        {useCarousel ? (
          <AutoCarousel>
            {[...teamMembers].map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </AutoCarousel>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 container mx-auto max-w-6xl"
          >
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

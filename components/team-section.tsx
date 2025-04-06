"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Yeni Maciel",
      role: "Asistente dental",
      image: "/images/4Azul.png",
    },
    {
      name: "Sebastian Gonzales",
      role: "Asistente dental",
      image: "/images/3Azul.png",
    },
    {
      name: "Silvia Acosta",
      role: "Asistente de limpieza",
      image: "/images/4Azul.png",
    },
    {
      name: "Belén Borba",
      role: "Higienista dental",
      image: "/images/3Azul.png",
    },
    {
      name: "Dra. Florencia Fernandez",
      role: "Odontóloga general",
      image: "/images/4Azul.png",
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

  return (
    <section className="w-full pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Nuestro Equipo
          </h2>
          <div className="w-20 h-1 bg-co-primary-blue mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group text-center"
            >
              <div className="relative w-full aspect-square overflow-hidden mb-4 mx-auto max-w-[200px]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-co-primary-blue">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

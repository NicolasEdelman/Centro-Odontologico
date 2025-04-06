"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DentistProfiles2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="especialistas"
      className="w-full bg-white overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-co-secondary-beige opacity-20 z-10"></div>
      <div className="container mx-auto px-4 relative h-[600px] md:h-[700px] z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative h-full"
        >
          <div className="grid grid-cols-2 h-full">
            {/* Columna izquierda - Fabiana */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative transition-all duration-500">
              <div className="absolute left-[0%] bottom-0 w-[680px] h-[680px] md:w-[640px] md:h-[640px] bg-co-secondary-beige rounded-full z-0 shadow-2xl"></div>

              <motion.div
                variants={itemVariants}
                className="absolute right-0 bottom-0 h-full w-full z-10 pl-20"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/FabianaSF.png"
                    alt="Dra. Fabiana Zelpo"
                    fill
                    className="object-contain object-left-bottom drop-shadow-2xl transition-all duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="absolute left-0 top-[40%] text-left max-w-[320px] z-20 ml-10"
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  Dra. Fabiana Zelpo
                </h3>
                <p className="text-white text-sm md:text-base mb-4">
                  Especialista en Implantología y Estética Facial con más de 15 años de experiencia.
                </p>
                <Link href="#">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:scale-105 hover:border-white hover:bg-white hover:text-co-secondary-beige transition-all duration-300"
                  >
                    Saber más
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Columna derecha - Nadia */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative transition-all duration-500">
              <div className="absolute right-[0%] bottom-0 w-[680px] h-[680px] md:w-[640px] md:h-[640px] bg-co-secondary-beige rounded-full z-0 shadow-2xl"></div>

              <motion.div
                variants={itemVariants}
                className="absolute left-0 bottom-0 h-full w-full z-10 pr-20"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/NadiaSF.png"
                    alt="Dra. Nadia Pérez"
                    fill
                    className="object-contain object-right-bottom drop-shadow-2xl transition-all duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="absolute right-0 top-[40%] text-right max-w-[320px] z-20 mr-10"
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  Dra. Nadia Pérez
                </h3>
                <p className="text-white text-sm md:text-base mb-4">
                  Especialista en Ortodoncia y Ortopedia con enfoque en tratamientos mínimamente invasivos.
                </p>
                <Link href="/dentistas/nadia-perez">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:scale-105 hover:border-white hover:bg-white hover:text-co-secondary-beige transition-all duration-300"
                  >
                    Saber más
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

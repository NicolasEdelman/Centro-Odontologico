"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DentistProfiles() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="nosotras"
      className="w-full bg-co-secondary-beige text-white overflow-hidden relative"
    >
      <div className="bg-black opacity-50 absolute inset-0 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/Consultorio.jpg"
          alt="Consultorio odontológico"
          fill
          className="object-cover scale-125 translate-x-[-200px]"
        />
      </div>

      {/* Overlay para asegurar legibilidad */}
      <div className="absolute inset-0 bg-co-secondary-beige opacity-70 z-10"></div>

      <div className="container mx-auto px-4 relative h-[600px] md:h-[700px] z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative h-full"
        >
          {/* Contenedor principal con grid */}
          <div className="grid grid-cols-2 h-full">
            {/* Columna izquierda - Fabiana */}
            <div className="relative">
              {/* Imagen de Fabiana */}
              <motion.div
                variants={itemVariants}
                className="absolute right-0 bottom-0 h-full w-full"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/FabianaSF.png"
                    alt="Dra. Fabiana Zelpo"
                    fill
                    className="object-contain object-left-bottom"
                  />
                </div>
              </motion.div>

              {/* Texto de Fabiana */}
              <motion.div
                variants={itemVariants}
                className="absolute left-0 top-[40%] text-left max-w-[320px] "
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  Dra. Fabiana Zelpo
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-4">
                  Especialista en Armonización Orofacial (c) Ortodoncia y
                  Ortopedia
                </p>
                {/* <Link href="/dentistas/fabiana-zelpo"> */}
                <Link href="#">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-co-secondary-beige transition-all duration-300"
                  >
                    Saber más
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Columna derecha - Nadia */}
            <div className="relative">
              {/* Imagen de Nadia */}
              <motion.div
                variants={itemVariants}
                className="absolute left-0 bottom-0 h-full w-full"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/NadiaSF.png"
                    alt="Dra. Nadia Pérez"
                    fill
                    className="object-contain object-right-bottom"
                  />
                </div>
              </motion.div>

              {/* Texto de Nadia */}
              <motion.div
                variants={itemVariants}
                className="absolute right-0 top-[40%] text-right max-w-[320px] "
              >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  Dra. Nadia Pérez
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-4">
                  Especialista en Rehabilitación<br/> Implantología y Cirugía
                </p>
                <Link href="/dentistas/nadia-perez">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-co-secondary-beige transition-all duration-300"
                  >
                    Saber más
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

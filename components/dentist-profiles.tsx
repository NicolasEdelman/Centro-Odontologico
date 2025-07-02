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
      className="w-full bg-co-secondary-beige text-white overflow-hidden relative "
    >
      <div className="bg-black opacity-50 absolute inset-0 z-0"></div>
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover opacity-40"
        style={{ backgroundImage: "url('/images/torreprofesionales.jpg')" }}
      ></div>

      {/* Overlay para asegurar legibilidad */}
      <div className="absolute inset-0 bg-co-secondary-beige opacity-70 z-10"></div>

      <div className="container mx-auto px-4 relative h-[550px] md:h-[700px] z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative h-full"
        >
          {/* Contenedor principal con grid */}
          <div className="grid grid-cols-2 h-full pt-4">
            {/* Columna izquierda - Fabiana */}
            <div className="relative">
              {/* Imagen de Fabiana */}
              <motion.div
                variants={itemVariants}
                className="absolute right-0 bottom-0 h-full w-full"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Imagenes/FabianaSF.png"
                    alt="Dra. Fabiana Zelpo"
                    fill
                    className="object-contain object-left-bottom scale-[1.8] md:scale-[1.2] translate-y-[-130px] md:translate-y-[90px] translate-x-[-70px] md:translate-x-[120px] "
                  />
                </div>
              </motion.div>

              {/* Texto de Fabiana */}
              <motion.div
                variants={itemVariants}
                className="absolute left-0 bottom-1 md:top-[40%] text-left md:max-w-[320px] pb-4"
              >
                <h3 className="text-2xl md:text-5xl font-bold text-white md:mb-3">
                  Dra. Fabiana Zelpo
                </h3>
                <p className="text-white text-xs md:text-base mb-1 md:mb-4">
                  Especialista en Armonización Orofacial (C). Ortodoncia y
                  Ortopedia
                </p>
                {/* <Link href="/dentistas/fabiana-zelpo"> */}
                <Link href="/dentistas/fabiana-zelpo">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent rounded-full border-white text-white hover:bg-white hover:text-co-secondary-beige transition-all duration-300 text-xs md:text-base"
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
                    src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Imagenes/NadiaSF.png"
                    alt="Dra. Nadia Pérez"
                    fill
                    className="object-contain object-right-bottom [transform:scale(1.8)_translateY(-70px)_translateX(30px)_scaleX(-1)] md:[transform:scale(1.2)_translateY(80px)_translateX(160px)_scaleX(-1)]"
                  />
                </div>
              </motion.div>

              {/* Texto de Nadia */}
              <motion.div
                variants={itemVariants}
                className="absolute right-0 bottom-1 md:top-[40%] text-right md:max-w-[320px] pb-4"
              >
                <h3 className="text-2xl md:text-5xl font-bold text-white md:mb-3">
                  Dra. Nadia Pérez
                </h3>
                <p className="text-white text-xs md:text-base mb-1 md:mb-4">
                  Especialista en Odontología Restauradora Integral.
                  Implantología y Cirugía
                </p>
                <Link href="/dentistas/nadia-perez">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent rounded-full border-white text-white hover:bg-white hover:text-co-secondary-beige transition-all duration-300 text-xs md:text-base"
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

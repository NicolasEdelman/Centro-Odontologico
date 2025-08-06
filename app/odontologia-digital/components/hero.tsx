"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";

export default function Hero() {
  return (
    <AnimatedSection variant="fadeIn" fullWidth>
      <section className="bg-co-primary-blue py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-white/80 mb-8 mt-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                ODONTOLOGÍA DIGITAL
              </h1>

              <p className="text-sm md:text-lg text-white/90 mb-4">
                En Centro Odontológico contamos con tecnología de última
                generación.
              </p>
              <p className="text-sm md:text-lg text-white/90 mb-4">
                Utilizamos: Escáneres intraorales, Radiografías digitales (2D y
                3D), Diseño digital de sonrisa (DSD), Planificación 3D de
                tratamientos, Cirugía guiada por computadora, Fotografía clínica
                digital, Ortodoncia digital (alineadores transparentes),
                Sistemas de gestión clínica digitales, Inteligencia artificial
                (IA), y por último Sistemas CAD/CAM (Diseño y Manufactura
                Asistidos por Computadora) e Impresión 3D gracias a nuestros
                Laboratorios de confianza.
              </p>
              <p className="text-sm md:text-lg text-white/90 mb-4">
                Todo… para brindarte una experiencia más cómoda, rápida y
                eficiente.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-co-primary-blue hover:bg-white/90">
                  Agendar Consulta
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative h-[500px] md:h-[500px]  w-[100%] rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/OdontologiaDigital.png"
                alt="Odontología Digital"
                width={1000}
                height={1000}
                className="object-cover bg-[#e6d5a8]/50"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

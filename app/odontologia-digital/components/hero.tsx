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
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Odontología Digital: Revolución Positiva
              </h1>

              <p className="text-md md:text-md text-white/90 mb-8">
                En Centro Odontológico los profesionales podemos realizar
                diagnósticos más exactos, tratamientos más personalizados y con
                una mayor previsibilidad de los resultados.
              </p>
              <p className="text-md md:text-md text-white/90 mb-8">
                Le mostramos a nuestros pacientes imágenes digitales o
                simulaciones de sus tratamientos facilitando la comunicación y
                comprensión de los mismos.
              </p>
              <p className="text-md md:text-md text-white/90 mb-8">
                Los procesos que antes tomaban días, como la confección de una
                corona, ahora pueden resolverse en una sola cita. Esto reduce el
                tiempo de trabajo y mejora la experiencia de nuestros pacientes.
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
              <Image
                src="/images/OdontologiaDigital.png"
                alt="Odontología Digital"
                fill
                className="object-cover bg-[#e6d5a8]/50"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

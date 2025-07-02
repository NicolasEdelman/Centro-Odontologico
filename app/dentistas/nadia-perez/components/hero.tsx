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
      <section className="bg-[#e6d5a8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#especialistas"
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Dra. Nadia Pérez
              </h1>
              <p className="text-md md:text-xl text-white font-bold mb-4">
                Especialista en Odontología Restauradora Integral. Implantología
                y Cirugía
              </p>

              <p className="text-md md:text-xl text-white/90 mb-8 italic">
                "Me dedico a diseñar y concretar proyectos desde sus cimientos
                hasta su expresión, elevando la confianza y el bienestar de cada
                persona."
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-co-secondary-beige hover:bg-white/90 rounded-full">
                  Agendar Consulta
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative h-[500px] md:h-[500px] md:w-[80%] w-[100%] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/nadia-perez.png"
                alt="Dra. Nadia Pérez"
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

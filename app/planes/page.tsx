"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/animated-section";
import Image from "next/image";

export default function PlanesPage() {
  return (
    <main>
      {/* Hero Section */}
      <AnimatedSection variant="fadeIn" fullWidth>
        <section className="bg-co-primary-blue py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#planes"
                className="inline-flex items-center text-white hover:text-[#5d7a99] mb-8 mt-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6">
                Nuestra propuesta
              </h1>
              <p className="text-xl text-white mb-8">
                Ofrecemos diferentes opciones para empresas, individuos y
                familias, diseñadas para brindar acceso a servicios
                odontológicos de calidad con beneficios exclusivos.
              </p>
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#empresas"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#7a9cbf] px-8 text-base font-medium text-white  transition-colors"
                >
                  Planes para Empresas
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#individuales"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-base font-medium text-white  transition-colors"
                >
                  Planes Individuales y Familiares
                </motion.a>
              </motion.div> */}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection variant="bounce" fullWidth>
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="w-full  overflow-hidden shadow-lg">
                <Image
                  src={`/images/MaterialEmpresarial/MaterialEmpresarial${num}.jpg`}
                  alt={`Material Empresarial ${num}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection variant="bounce" fullWidth>
        <section className="py-16 bg-co-primary-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              ¿Necesitas más información sobre nuestros planes?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Contáctanos y un asesor te brindará todos los detalles para elegir
              el plan que mejor se adapte a tus necesidades.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-co-primary-blue hover:bg-gray-100"
              >
                Contactar Asesor
              </Button>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}

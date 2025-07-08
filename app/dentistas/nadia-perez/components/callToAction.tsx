"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";

export default function CallToAction() {
  return (
    <AnimatedSection variant="bounce" fullWidth>
      <section className="py-16 bg-co-secondary-beige text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            ¿Buscás una sonrisa perfecta?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Agenda una consulta con la Dra. Nadia Pérez y descubrí las opciones
            que mejor se adaptan a vos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/#contacto">
              <Button
                size="lg"
                className="bg-white text-co-secondary-beige hover:bg-gray-100 "
              >
                Agendar Consulta
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}

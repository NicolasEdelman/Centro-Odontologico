"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PlansSection() {
  const imagenes = [
    { image: "/images/MaterialEmpresarial/MaterialEmpresarial5.jpeg" },
    { image: "/images/MaterialEmpresarial/MaterialEmpresarial6.jpeg" },
  ];

  return (
    <section id="planes" className="w-full md:pb-10">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            PROGRAMA DE BENEFICIOS PARA EMPRESAS
          </h2>
          <div className="w-20 h-1 bg-[#a5c5e5] mx-auto mb-6" />
        </motion.div>

        {/* Planes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 mb-12"
        >
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {imagenes.map((plan, index) => (
              <Link
                href="/planes"
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={plan.image}
                  alt={`Programa de beneficios para empresas ${index + 1}`}
                  width={1024}
                  height={1536}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-6 items-center justify-center md:mt-4"
        >
          <Button
            href="/planes"
            size="lg"
            className="bg-co-primary-blue hover:bg-co-primary-blue/80 text-white"
          >
            Más información
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

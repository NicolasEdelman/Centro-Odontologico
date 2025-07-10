"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PlansSection() {
  const empresariales = [
    { image: "/images/Planes/plan1.jpeg" },
    { image: "/images/Planes/plan2.jpeg" },
  ];

  const personales = [
    { image: "/images/Planes/plan3.jpeg" },
    { image: "/images/Planes/plan4.jpeg" },
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
            Planes
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
          <div className="grid md:grid-cols-2 gap-20">
            {/* Empresariales */}
            <div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Empresariales
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {empresariales.map((plan, index) => (
                  <Link
                    href="/planes"
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                  >
                    <Image
                      src={plan.image}
                      alt={`Plan Empresarial ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Personales */}
            <div>
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Personales
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {personales.map((plan, index) => (
                  <Link
                    href="/planes"
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                  >
                    <Image
                      src={plan.image}
                      alt={`Plan Personal ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
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

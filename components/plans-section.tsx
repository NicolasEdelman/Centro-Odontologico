"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PlansSection() {
  const plans = [
    { image: "/images/Planes/plan1.jpeg" },
    { image: "/images/Planes/plan2.jpeg" },
    { image: "/images/Planes/plan3.jpeg" },
    { image: "/images/Planes/plan4.jpeg" },
  ];

  return (
    <section id="planes" className="w-full py-20">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4 mb-12"
        >
          {plans.map((plan, index) => (
            <Link
              href="/planes"
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={plan.image}
                alt={`Plan ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300" />
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-6 items-center justify-center mt-4 md:mt-4"
        >
          <Link href="/planes">
            <Button
              size="lg"
              className="bg-co-primary-blue hover:bg-co-primary-blue/80 text-white"
            >
              Más información
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

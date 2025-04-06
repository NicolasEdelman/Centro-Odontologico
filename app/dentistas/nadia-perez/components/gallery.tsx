"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { SubTitle } from "@/components/sub-title";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Gallery() {
  return (
    <AnimatedSection variant="scale" fullWidth>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SubTitle title="Galería de Imágenes" underlineColor="beige" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt={`Galería ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}

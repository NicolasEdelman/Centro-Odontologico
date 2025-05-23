"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CarouselConFlechas from "./carousel-con-flechas";

export default function DentalTips() {
  const tips = [
    {
      id: 1,
      title: "Cepillado correcto",
      description:
        "Aprende la técnica adecuada para un cepillado efectivo que elimine la placa bacteriana.",
      image: "/images/dental-treatment-1.jpeg",
    },
    {
      id: 2,
      title: "Uso del hilo dental",
      description:
        "El hilo dental es esencial para limpiar las áreas donde el cepillo no llega.",
      image: "/images/dental-treatment-2.jpeg",
    },
    {
      id: 3,
      title: "Alimentación saludable",
      description:
        "Conoce qué alimentos son beneficiosos para mantener tus dientes fuertes y sanos.",
      image: "/images/dental-treatment-3.jpeg",
    },
    {
      id: 4,
      title: "Alimentación saludable",
      description:
        "Conoce qué alimentos son beneficiosos para mantener tus dientes fuertes y sanos.",
      image: "/images/dental-treatment-4.jpeg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const useCarousel = tips.length > 3;

  const TipCard = ({
    title,
    description,
    image,
  }: {
    title: string;
    description: string;
    image: string;
  }) => (
    <motion.div
      variants={item}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 },
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg min-w-[280px] max-w-[360px] flex-shrink-0 scroll-snap-align-start"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-co-primary-blue mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Tips de Odontología
          </h2>
          <div className="w-20 h-1 bg-[#a5c5e5] mx-auto mb-12" />
        </motion.div>

        {useCarousel ? (
          <CarouselConFlechas>
            {tips.map((tip) => (
              <TipCard key={tip.id} {...tip} />
            ))}
          </CarouselConFlechas>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {tips.map((tip) => (
              <TipCard key={tip.id} {...tip} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

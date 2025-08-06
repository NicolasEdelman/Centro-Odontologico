"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { SubTitle } from "@/components/sub-title";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const reviews = [
  {
    name: "Santiago Arostegui",
    rating: 5,
    comment:
      "La Dra Fabiana es una excelente profesional, siempre dispuesta a explicarte el diagnóstico y tratamiento lo que te genera total confianza y tranquilidad. La recomiendo sin dudarlo.",
  },
  {
    name: "Pedro Fernández",
    rating: 5,
    comment:
      "Después de años postergando mi tratamiento de ortodoncia, la Dra. Fabiana me ofreció una solución discreta y efectiva. Estoy muy satisfecho con los resultados.",
  },
  {
    name: "Valentina Méndez",
    rating: 5,
    comment:
      "La Dra. Fabiana es excelente. Su atención es muy personalizada y siempre está dispuesta a explicar cada paso del tratamiento. Recomiendo totalmente sus servicios.",
  },
];

export default function Reviews() {
  return (
    <AnimatedSection variant="slideRight" fullWidth>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SubTitle title="Lo que dicen mis pacientes" underlineColor="beige" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-co-secondary-beige text-co-secondary-beige"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.comment}"</p>
                <p className="font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

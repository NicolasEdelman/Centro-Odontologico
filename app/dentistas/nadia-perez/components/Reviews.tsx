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
    name: "Lelio Constantin",
    rating: 5,
    comment:
      "Nadia me colocó 6 implantes y todo se desarrolló de acuerdo a lo planificado, sin ningún contratiempo. Luego de una mala experiencia anterior, ella logró que recuperara la confianza perdida, gracias a una atención súper profesional. Estoy muy conforme con el resultado y recomiendo sus servicios.",
  },
  {
    name: "Paula López",
    rating: 5,
    comment:
      "He recibido una atención excelente por Nadia a lo largo de los años. Es cercana, profesional y transmite mucha confianza desde el primer momento. Me he realizado desde tratamientos sencillos hasta  cirugía de implantes. Valoro muchísimo su capacidad para planificar los cuidados a largo plazo, anticipando lo que puede venir y ayudándome a mantener mi boca sana siempre.",
  },

  {
    name: "Martha Methol",
    rating: 5,
    comment:
      "Estoy muy conforme con el servicio que brinda Nadia y su equipo. La atención es excelente y verdaderamente personalizada, y la coordinación de las consultas fue impecable. He recibido tratamientos de rehabilitación e implantología de su parte, siempre con gran profesionalismo y dedicación. Las odontólogas de Centro Odontológico son, sin duda, de lo mejor.",
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

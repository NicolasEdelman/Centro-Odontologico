"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/animated-section";

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

export default function Biography() {
  return (
    <AnimatedSection variant="slideUp" fullWidth>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-8"
            >
              Biografía y Carrera Profesional
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              {[
                " La Dra. Nadia Pérez se graduó de la Facultad de Odontología de la Universidad de la República en 2008. Posteriormente, realizó su especialización en Ortodoncia y Ortopedia Dentofacial en la Universidad de São Paulo, Brasil.",
                "Con más de 12 años de experiencia, la Dra. Pérez ha desarrollado un enfoque único que combina las técnicas ortodónticas tradicionales con los avances más recientes en ortodoncia invisible y tratamientos mínimamente invasivos. Es certificada en sistemas de alineadores transparentes y ha completado formación avanzada en ortopedia funcional.",
                " Su filosofía de tratamiento se centra en crear planes personalizados que no solo mejoran la alineación dental, sino que también consideran la armonía facial y la función masticatoria. La Dra. Pérez es especialmente reconocida por su trabajo con pacientes jóvenes y adolescentes, donde su enfoque preventivo ha demostrado excelentes resultados.",
                "Además de su práctica clínica, la Dra. Pérez participa activamente en programas de educación continua y es miembro de la Sociedad Uruguaya de Ortodoncia y la Asociación Latinoamericana de Ortodoncia.",
              ].map((text, i) => (
                <motion.p key={i} variants={staggerItem}>
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

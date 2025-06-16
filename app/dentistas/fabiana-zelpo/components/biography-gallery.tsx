"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { SubTitle } from "@/components/sub-title";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BiographyGallery() {
  return (
    <AnimatedSection variant="slideUp" fullWidth>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <SubTitle title="Formación académica" underlineColor="beige" />
          </div>

          <div className="space-y-32">
            {/* Bloques individuales con animación simple al scrollear */}
            {[
              {
                title: "Doctora en Odontología",
                image: "/Biografia/FacultadFabi.png",
                text: (
                  <>
                    La Dra. Fabiana Zelpo es egresada de la Facultad de
                    Odontología de la Universidad de la República (UdelaR), en
                    Montevideo, Uruguay.
                  </>
                ),
              },
              {
                title: "Especialista en Armonización Orofacial",
                image: "/Biografia/ArmonizacionOrofacial.png",
                text: (
                  <>
                    Este título es otorgado por el Instituto Universitario
                    Centro de Estudio y Diagnóstico de las Disgnacias del
                    Uruguay (IUCEDDU). <br />
                    Esta especialidad se trata de prevenir, diagnosticar y
                    tratar, diversas alteraciones morfo-estético-funcionales
                    orofaciales, utilizando técnicas mínimamente invasivas, para
                    promover el equilibrio estético funcional del rostro y la
                    sonrisa.
                  </>
                ),
                reverse: true,
              },
              {
                title: "Estudios de Postgrado",
                image: "/Biografia/PostgradoFabi.png",
                text: (
                  <>
                    Su formación se ha centrado en el área del desarrollo y
                    crecimiento de la cara y maxilares obteniendo un{" "}
                    <strong>Posgrado en Ortopedia Funcional</strong> en la
                    Universidad Católica del Uruguay (UCU) y un{" "}
                    <strong>
                      Posgrado en Ortodoncia para niños, adolescentes y adultos
                    </strong>{" "}
                    en el Centro de Formación y Posgrado en Ortodoncia del Dr.
                    Rubens Demicheri.
                  </>
                ),
              },
              {
                title: "Acreditaciones",
                image: "/Biografia/Acreditaciones.png",
                text: (
                  <>
                    La Dra. Fabiana cuenta con la{" "}
                    <strong>Acreditación de KeepSmiling</strong> lo que es
                    conocido como <strong> "Ortodoncia Invisible"</strong>
                  </>
                ),
                reverse: true,
              },
              {
                title: "Diplomatura",
                image: "/Biografia/DiplomadoInternacional.png",
                text: (
                  <>
                    Fabiana cuenta con un{" "}
                    <strong>"Diplomado Internacional en Ortoperio"</strong> que
                    se trata de Ortodoncia enfocada en pacientes periodontales.
                  </>
                ),
              },
            ].map((block, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row ${
                  block.reverse ? "lg:flex-row-reverse" : ""
                } items-center gap-12`}
              >
                <div className="w-full lg:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={block.image || "/placeholder.svg"}
                    alt={block.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                    {block.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {block.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="my-24">
            <SubTitle title="Galería de Imágenes" underlineColor="beige" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

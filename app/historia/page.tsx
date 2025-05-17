"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HistoriaPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const testimonios = [
    {
      autor: "Nadia",
      texto:
        "Todo surgió un año antes de recibirnos, en el año 2009. Habíamos estado toda la tarde estudiando para un examen. Esperábamos el ómnibus que llevaba a Fabi a su casa en El Prado, nuestro barrio, cuando comenzamos a conversar sobre qué cosas nos parecían importantes a la hora de atender pacientes y gestionar un consultorio. Estábamos totalmente de acuerdo en muchas cosas. Yo ese día supe, que era con ella con quien quería concretar mis proyectos.",
      imagen: "/images/3Azul.png",
    },
    {
      autor: "Fabiana",
      texto:
        "Hicimos casi toda la carrera juntas. Estudiábamos con amigas... pasábamos muchas horas en la Facultad, tanto en clase como en las esperas para entrar a la siguiente... hacíamos comidas con los compañeros de generación... conocimos nuestras familias... compartimos cumpleaños... salidas... el viaje de egresados... mi casamiento... cuando nació mi primer hijo. Nos fuimos descubriendo en muchos aspectos, así como integrando en nuestro día a día.",
      imagen: "/images/4Azul.png",
    },
    {
      autor: "Nadia",
      texto:
        "En el 2010 obtuvimos nuestros Títulos de Doctoras en Odontología. Nuestro primer consultorio se encontraba en 18 de Julio y Alejandro Beisso, en la zona de Tres Cruces. Compartimos 2 años muy intensos, de trabajo y crecimiento. Fabi me regaló para uno de mis cumpleaños un anillo que tiene grabado en su interior: S.A.H 'Socias. Amigas. Hermanas' que hace alusión al lugar que tiene nuestra relación en orden creciente de importancia. En el 2012 viajé a España a estudiar. Fabi me apoyó en mi emprendimiento y se quedó a cargo de todo.",
      imagen: "/images/anillo1.png",
    },
    {
      autor: "Fabiana",
      texto:
        "Cuando Nadia volvió en el 2014, debíamos mudar el consultorio a otro apartamento. En ese momento alquilábamos. Fue así que buscando el lugar para nuestro próximo consultorio surgió la oportunidad de comprar en la Torre de los Profesionales. Esto significó dar un paso más en nuestro crecimiento como equipo y compromiso con los proyectos. Doblar la apuesta. Recuerdo esos días de la mudanza con mucho cariño. Nuestras familias nos ayudaron muchísimo, contamos con un gran apoyo.",
      imagen: "/images/4Azul.png",
    },
    {
      autor: "Nadia",
      texto:
        "Puedo decir, que con Fabi he aprendido y aprendo día a día, que no hay nada que no pueda plantear o soñar con ella, que me impulsa a ser mejor persona y mejor profesional. Que me escucha, me entiende, me acepta tal como soy. Y que por sobre todo me divierte y disfruto cada día.",
      imagen: "/images/3Azul.png",
    },
    {
      autor: "Fabiana",
      texto:
        "En mi opinión no siempre es fácil encontrar en tu camino de vida una persona que te entienda y que tenga tus mismos sueños, que se comprometa con vos y mantenga siempre ese compromiso. Nosotras con tan sólo mirarnos sabíamos que podíamos transitarlo de a dos. Somos 'Socias' desde el momento en el que pensamos el nombre de nuestro Centro. 'Amigas' por entendernos y apoyarnos en todo, tanto en lo personal como en lo laboral. 'Hermanas' porque aunque coincidimos en muchas cosas también tenemos discrepancias pero que se solucionan con el amor de siempre. Yo recibí un anillo también para mi cumpleaños, cuando Nadia se encontraba aún en España. Me lo envió el año antes de volver y lo llevo puesto desde entonces.",
      imagen: "/images/anillo2.png",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      <section>
        {/* Hero azul */}
        <AnimatedSection variant="fadeIn" fullWidth>
          <section className="bg-co-primary-blue py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/#nosotras"
                  className="inline-flex items-center text-white hover:text-[#5d7a99] mb-8 mt-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inicio
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6">
                  Nuestra Historia
                </h1>
                <p className="text-xl text-white mb-8">
                  Conocé nuestra historia y cómo surgió nuestro consultorio de
                  más de 15 años.
                </p>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Sección de testimonios con decoraciones */}
        <div className="relative container mx-auto px-4 max-w-5xl py-20">
          {/* Imagen agua arriba derecha */}

          <div className="space-y-16 relative z-10">
            {testimonios.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Imagen testimonial */}
                {item.imagen && (
                  <div className="w-full md:w-1/3">
                    <div className="relative w-full h-80 rounded-xl overflow-hidden">
                      <Image
                        src={item.imagen}
                        alt={`Imagen de ${item.autor}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Texto testimonial */}
                <div className="w-full md:w-2/3">
                  <p className="italic text-lg mb-2 bg-white/80 p-4 rounded-xl">
                    "{item.texto}"
                  </p>
                  <p className="font-semibold text-co-primary-blue text-right">
                    — {item.autor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <AnimatedSection variant="bounce" fullWidth>
          <section className="py-16 bg-co-primary-blue text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                ¿Qué esperás para modelar tu sonrisa?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl mb-8 max-w-2xl mx-auto"
              >
                Contactanos y un asesor te brindará todos los detalles para
                elegir el plan que mejor se adapte a tus necesidades.
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
                    className="bg-white text-co-primary-blue hover:bg-gray-100"
                  >
                    Contactarnos
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>
      </section>
    </main>
  );
}

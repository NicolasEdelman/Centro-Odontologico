"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OurHistory() {
  return (
    <section
      id="trayectoria"
      className="bg-white text-white mb-20 w-full relative"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-co-primary-blue shadow-lg w-full h-3/4"></div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Texto a la izquierda */}
        <motion.div
          className="md:w-2/3 mr-5"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-start text-white mb-4">
            Más de 15 años de trayectoria
          </h2>
          <div className="w-20 h-1 bg-white mb-4"></div>
          <div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-1/5 ">
                <Image
                  src="/images/NadiaBlanco.png"
                  alt="Nadia"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              <div className="w-full md:w-4/5">
                <p className="italic text-md p-2 rounded-xl">
                  <strong>
                    "Todo surgió un año antes de recibirnos, en el año 2009.
                    Habíamos estado toda la tarde estudiando para un examen.
                  </strong>{" "}
                  Esperábamos el ómnibus que llevaba a Fabi a su casa en El
                  Prado, nuestro barrio, cuando comenzamos a conversar sobre qué
                  cosas nos parecían importantes a la hora de atender pacientes
                  y gestionar un consultorio. <br />
                  <strong>
                    Estábamos totalmente de acuerdo en muchas cosas. Yo ese día
                    supe, que era con ella con quien quería concretar mis
                    proyectos.
                  </strong>
                  "
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center ">
              <div className="w-full md:w-1/5">
                <Image
                  src="/images/FabianaBlanco.png"
                  alt="Fabiana"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              <div className="w-full md:w-4/5 ">
                <p className="italic text-md p-2 rounded-xl">
                  <strong>
                    "Hicimos casi toda la carrera juntas. Estudiábamos con
                    amigas... pasábamos muchas horas en la Facultad,
                  </strong>{" "}
                  tanto en clase como en las esperas para entrar a la
                  siguiente... hacíamos comidas con los compañeros de
                  generación... <strong>conocimos nuestras familias...</strong>{" "}
                  compartimos cumpleaños... salidas... el viaje de egresados...
                  mi casamiento... y cuando nació mi primer hijo.{" "}
                  <strong>
                    Nos fuimos descubriendo en muchos aspectos, así como
                    integrando en nuestro día a día.
                  </strong>
                  "
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/historia"
            className="inline-block bg-white text-co-primary-blue px-4 py-3 rounded-lg  hover:bg-opacity-90 transition-all duration-300 mt-4"
          >
            Conocé más sobre nuestra historia
          </Link>
        </motion.div>

        {/* Video a la derecha */}
        <motion.div
          className="md:w-1/3 flex justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[9/16] w-full  overflow-hidden rounded-xl shadow-lg relative group">
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl"
              src="https://centro-odontologico.s3.us-east-2.amazonaws.com/VideoAniversario.webm"
            >
              <Link
                href="https://www.instagram.com/centroodontologico.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/PortadaVideoInstitucional.png"
                  alt="Centro Odontológico"
                  fill
                  className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OdontologiaDigital() {
  return (
    <section
      id="propósito"
      className="w-full bg-white text-white  px-6 relative"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-co-secondary-beige shadow-lg w-full h-full md:h-[92%]"></div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 py-8 md:py-0">
        {/* Video a la izquierda */}
        <motion.div
          className="md:mr-20 md:w-1/3 aspect-[9/16] max-w-[410px] w-full overflow-hidden rounded-xl shadow-lg relative group"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl"
            src="https://centro-odontologico.s3.us-east-2.amazonaws.com/OdontologiaDigital.webm"
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
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-start text-white">
            ODONTOLOGÍA DIGITAL:
          </h2>
          <h3 className="text-1xl md:text-2xl font-bold text-start text-white/90 mb-4">
            REVOLUCIÓN POSITIVA
          </h3>
          <div className="w-20 h-1 bg-white mb-4 md:mb-8"></div>
          <p className="text-sm md:text-lg mb-4">
            Los procedimientos odontológicos que antes tomaban días, como por
            ejemplo la confección de una corona dental, ahora pueden resolverse
            en una sola cita!
          </p>
          <p className="text-sm md:text-lg mb-4">
            Gracias a los recursos de la odontología digital, como el escáner
            intraoral, hoy los profesionales podemos ofrecer tratamientos más
            cómodos, rápidos y eficientes.
          </p>
          <p className="text-sm md:text-lg mb-4">
            La visita al dentista se ha transformado en un proceso mucho más
            confortable, cambiando radicalmente la experiencia odontológica de
            los pacientes.
          </p>
          <div className="flex gap-4">
            <Button
              href="/#contacto"
              className=" text-sm md:text-base bg-white text-co-secondary-beige px-4 md:px-8 py-1 md:py-3  hover:bg-white/80 transition-all duration-300"
            >
              Agendar una consulta
            </Button>
            <Button
              href="/odontologia-digital"
              className="  text-white md:text-base bg-transparent border-2 border-white px-4 md:px-8 py-1 md:py-3 hover:bg-white/10 transition-all duration-300"
            >
              Conocer más
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

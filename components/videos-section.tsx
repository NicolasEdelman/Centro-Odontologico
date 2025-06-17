"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VideosSection() {
  return (
    <section
      id="propósito"
      className="w-full bg-white text-white  px-6 relative"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-co-secondary-beige shadow-lg w-full h-full md:h-[92%]"></div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 py-8 md:py-0">
        {/* Texto a la izquierda */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-start text-white mb-4">
            Nuestro propósito
          </h2>
          <div className="w-20 h-1 bg-white mb-4 md:mb-12"></div>
          <p className="text-sm md:text-lg mb-6">
            En Centro Odontológico creemos que todas las personas merecen
            sentirse cómodas y felices con su sonrisa.{" "}
            <strong>Reír, comer, tomarse una foto con confianza</strong> son
            experiencias que todos deberíamos disfrutar.
          </p>
          <p className="text-sm md:text-lg mb-6">
            Por esto, nuestro propósito es{" "}
            <strong>
              brindarte un centro donde encuentres un equipo de especialistas,
              que escuchen y entiendan lo que sentís y deseás.
            </strong>{" "}
            Y así idear y conducir tus tratamientos utilizando la última
            tecnología en odontología.
          </p>

          <Link
            href="/#contacto"
            className="inline-block text-sm md:text-base bg-white text-co-secondary-beige px-4 md:px-8 py-1 md:py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Agendar una consulta
          </Link>
        </motion.div>

        {/* Video a la derecha */}
        <motion.div
          className="md:ml-20 md:w-1/3 aspect-[9/16] max-w-[410px] w-full overflow-hidden rounded-xl shadow-lg relative group"
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
            src="https://centro-odontologico.s3.us-east-2.amazonaws.com/VideoInstitucional.webm"
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
      </div>
    </section>
  );
}

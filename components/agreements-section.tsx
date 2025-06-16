"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import AutoCarousel from "./auto-carrousel";

export default function AgreementsSection() {
  const companies = [
    { name: "Anglo", logo: "/convenios/Anglo.jpg" },
    { name: "Bike", logo: "/convenios/Bike.jpg" },
    { name: "Correo Uruguayo", logo: "/convenios/CorreoUruguayo.png" },
    { name: "CGT", logo: "/convenios/CGT.png" },
    { name: "Elese", logo: "/convenios/Elese.jpg" },
    { name: "Little Dancers", logo: "/convenios/LittleDancers.png" },
    { name: "Mi Dinero", logo: "/convenios/MiDinero.png" },
    { name: "Jacaranda", logo: "/convenios/Jacaranda.jpg" },
    { name: "Prosegur", logo: "/convenios/Prosegur.png" },
    { name: "Mi Dinero YA", logo: "/convenios/MiDineroYa.jpg" },
    { name: "Redpagos", logo: "/convenios/Redpagos.png" },
    { name: "River", logo: "/convenios/River.png" },
    { name: "Sinapsis", logo: "/convenios/Sinapsis.png" },
    { name: "Setif", logo: "/convenios/Setif.png" },
  ];

  const allCompanies = useMemo(
    () => [...companies, ...companies, ...companies, ...companies],
    [companies]
  );

  return (
    <section id="convenios" className="w-full py-20">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Convenios
          </h2>
          <div className="w-20 h-1 bg-[#a5c5e5] mx-auto mb-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 md:max-w-3xl mx-auto mb-4 text-sm md:text-base"
        >
          Estas son las empresas que han decidido trabajar con nosotros para
          brindar a sus colaboradores acceso a servicios odontológicos de
          calidad con beneficios exclusivos.
        </motion.p>

        {/* AutoCarousel aquí */}
        <AutoCarousel>
          {allCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 w-[130px] md:w-[140px]">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
}

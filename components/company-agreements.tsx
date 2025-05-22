"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AutoCarousel from "./auto-carrousel";

export default function CompanyAgreements() {
  const companies = [
    { name: "CDM Logistica", logo: "/convenios/CDM.png?height=80&width=160" },
    {
      name: "Costa Oriental",
      logo: "/convenios/CostaOriental.png?height=80&width=160",
    },
    {
      name: "Electro sistemas",
      logo: "/convenios/Electrosistemas.png?height=80&width=160",
    },
    { name: "Elese", logo: "/convenios/Elese.png?height=80&width=160" },
    { name: "FSC", logo: "/convenios/FSC.png?height=80&width=160" },
    { name: "Infoland", logo: "/convenios/Infoland.png?height=80&width=160" },
    { name: "Juan 23", logo: "/convenios/Juan23.png?height=80&width=160" },
    { name: "Red Pagos", logo: "/convenios/RedPagos.png?height=80&width=160" },
    { name: "Sinapsis", logo: "/convenios/Sinapsis.gif?height=80&width=160" },
    { name: "Viva fit", logo: "/convenios/VivaFit.png?height=80&width=160" },
  ];

  // Repetimos el array para efecto infinito
  const allCompanies = useMemo(
    () => [...companies, ...companies, ...companies],
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
          className="text-center text-gray-600 md:max-w-3xl mx-auto mb-8 text-sm md:text-base"
        >
          Estas son las empresas que han decidido trabajar con nosotros para
          brindar a sus colaboradores acceso a servicios odontológicos de
          calidad con beneficios exclusivos.
        </motion.p>

        {/* AutoCarousel aquí */}
        <AutoCarousel>
          {allCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 w-[130px] md:w-[160px]">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-6 items-center justify-center mt-6 md:mt-12"
        >
          <Link href="/planes#empresas">
            <Button
              size="lg"
              className="bg-[#7a9cbf] hover:bg-[#5d7a99] text-white"
            >
              Planes para Empresas
            </Button>
          </Link>
          <Link href="/planes#individuales">
            <Button
              size="lg"
              variant="outline"
              className="border-[#7a9cbf] text-[#7a9cbf] hover:bg-[#a5c5e5]/10"
            >
              Planes Individuales y Familiares
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

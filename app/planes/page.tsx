"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"

export default function PlanesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <AnimatedSection variant="fadeIn" fullWidth>
        <section className="bg-[#f0f7ff] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/#convenios" className="inline-flex items-center text-[#7a9cbf] hover:text-[#5d7a99] mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Convenios
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Nuestros Planes</h1>
              <p className="text-xl text-gray-600 mb-8">
                Ofrecemos diferentes opciones para empresas, individuos y familias, diseñadas para brindar acceso a
                servicios odontológicos de calidad con beneficios exclusivos.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#empresas"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#7a9cbf] px-8 text-base font-medium text-white hover:bg-[#5d7a99] transition-colors"
                >
                  Planes para Empresas
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#individuales"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#7a9cbf] bg-transparent px-8 text-base font-medium text-[#7a9cbf] hover:bg-[#a5c5e5]/10 transition-colors"
                >
                  Planes Individuales y Familiares
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Planes para Empresas */}
      <AnimatedSection variant="slideLeft" fullWidth id="empresas">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Planes para Empresas</h2>
              <div className="w-20 h-1 bg-[#a5c5e5] mx-auto mb-12"></div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {/* Plan CO BASIC */}
              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform"
              >
                <div className="bg-[#a5c5e5] p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Plan CO BASIC</h3>
                  <p className="text-lg opacity-90">Para empresas que buscan beneficios sin cuota mensual</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gray-800 mb-1">Sin cuota mensual</p>
                    <p className="text-gray-600">Beneficios inmediatos sin costo fijo</p>
                  </div>

                  <h4 className="font-bold text-gray-800 mb-4">Beneficios sin costo:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Consulta de diagnóstico y plan de tratamiento</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Una limpieza dental anual</span>
                    </li>
                  </ul>

                  <h4 className="font-bold text-gray-800 mb-4">Descuentos:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>20% de descuento sobre el arancel de la Asociación Odontológica Uruguaya</span>
                    </li>
                    <li className="flex items-start text-gray-500">
                      <span className="mr-7">*</span>
                      <span>No incluye costos de laboratorio</span>
                    </li>
                  </ul>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className="w-full bg-[#7a9cbf] hover:bg-[#5d7a99] text-white">Solicitar Información</Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Plan CO PRO */}
              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform"
              >
                <div className="bg-[#7a9cbf] p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Plan CO PRO</h3>
                  <p className="text-lg opacity-90">Cobertura ampliada para empresas exigentes</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gray-800 mb-1">Con cuota mensual</p>
                    <p className="text-gray-600">Beneficios extendidos para tus colaboradores</p>
                  </div>

                  <h4 className="font-bold text-gray-800 mb-4">Beneficios sin costo:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Urgencias en horario de consulta</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Consulta de diagnóstico y plan de tratamiento</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Una limpieza dental anual</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Radiografías</span>
                    </li>
                  </ul>

                  <h4 className="font-bold text-gray-800 mb-4">Descuentos:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>35% de descuento sobre el arancel de la Asociación Odontológica Uruguaya</span>
                    </li>
                    <li className="flex items-start text-gray-500">
                      <span className="mr-7">*</span>
                      <span>No incluye costos de laboratorio</span>
                    </li>
                  </ul>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className="w-full bg-[#7a9cbf] hover:bg-[#5d7a99] text-white">Solicitar Información</Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Planes Individuales y Familiares */}
      <AnimatedSection variant="slideRight" fullWidth id="individuales">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Planes Individuales y Familiares</h2>
              <div className="w-20 h-1 bg-[#a5c5e5] mx-auto mb-12"></div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {/* Plan CO Me */}
              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform"
              >
                <div className="bg-[#a5c5e5] p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Plan CO Me</h3>
                  <p className="text-lg opacity-90">Cobertura individual completa</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gray-800 mb-1">Con cuota mensual</p>
                    <p className="text-gray-600">Beneficios exclusivos para ti</p>
                  </div>

                  <h4 className="font-bold text-gray-800 mb-4">Beneficios sin costo:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Urgencias en horario de consulta</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Consulta y diagnóstico y plan de tratamiento</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Una limpieza dental anual</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Radiografías</span>
                    </li>
                  </ul>

                  <h4 className="font-bold text-gray-800 mb-4">Descuentos:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>35% de descuento sobre el arancel de la Asociación Odontológica Uruguaya</span>
                    </li>
                    <li className="flex items-start text-gray-500">
                      <span className="mr-7">*</span>
                      <span>No incluye costos de laboratorio</span>
                    </li>
                  </ul>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className="w-full bg-[#7a9cbf] hover:bg-[#5d7a99] text-white">Solicitar Información</Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Plan CO Family */}
              <motion.div
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform"
              >
                <div className="bg-[#7a9cbf] p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Plan CO Family</h3>
                  <p className="text-lg opacity-90">Cobertura completa para toda la familia</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gray-800 mb-1">Con cuota mensual</p>
                    <p className="text-gray-600">Beneficios extendidos para todos</p>
                  </div>

                  <h4 className="font-bold text-gray-800 mb-4">Beneficios sin costo:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Urgencias en horario de consulta</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Consulta y diagnóstico y plan de tratamiento</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Una limpieza dental anual</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Radiografías</span>
                    </li>
                  </ul>

                  <h4 className="font-bold text-gray-800 mb-4">Descuentos:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#7a9cbf] mr-2 flex-shrink-0 mt-0.5" />
                      <span>35% de descuento sobre el arancel de la Asociación Odontológica Uruguaya</span>
                    </li>
                    <li className="flex items-start text-gray-500">
                      <span className="mr-7">*</span>
                      <span>No incluye costos de laboratorio</span>
                    </li>
                  </ul>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button className="w-full bg-[#7a9cbf] hover:bg-[#5d7a99] text-white">Solicitar Información</Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection variant="bounce" fullWidth>
        <section className="py-16 bg-[#7a9cbf] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              ¿Necesitas más información sobre nuestros planes?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Contáctanos y un asesor te brindará todos los detalles para elegir el plan que mejor se adapte a tus
              necesidades.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-[#7a9cbf] hover:bg-gray-100">
                Contactar Asesor
              </Button>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}


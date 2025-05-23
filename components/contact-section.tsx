"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ModalAgenda from "@/components/modal-agenda";
import { useState } from "react";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="contacto"
      className="w-full py-20 relative bg-co-primary-blue/10 bg-fixed"
      style={{
        backgroundImage: "url(/images/torreprofesionales.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/90 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-co-primary-blue mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a programar tu
            consulta. Contáctanos por cualquiera de estos medios.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Información de contacto - 6 columnas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white text-gray-800 rounded-2xl shadow-xl p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold mb-8 text-co-primary-blue">
              Información de Contacto
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin
                  className="text-co-primary-blue mr-4 flex-shrink-0 mt-1"
                  size={22}
                />
                <div>
                  <h4 className="font-bold mb-1">Dirección</h4>
                  <p>
                    Yaguarón 1407 of 803, Torre de los Profesionales,
                    Montevideo, Uruguay
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <Phone
                  className="text-co-primary-blue mr-4 flex-shrink-0 mt-1"
                  size={22}
                />
                <div>
                  <h4 className="font-bold mb-1">Teléfono</h4>
                  <p>(+598) 2904 5880</p>
                </div>
              </li>

              <li className="flex items-start">
                <Mail
                  className="text-co-primary-blue mr-4 flex-shrink-0 mt-1"
                  size={22}
                />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p>centroodontologicouy@gmail.com</p>
                </div>
              </li>

              <li className="flex items-start">
                <Clock
                  className="text-co-primary-blue mr-4 flex-shrink-0 mt-1"
                  size={22}
                />
                <div>
                  <h4 className="font-bold mb-1">Horario de Atención</h4>
                  <p>Lunes a Viernes: 8:00 - 20:00</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex  gap-4">
              <Link
                href="https://wa.me/59891234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-co-primary-blue hover:bg-co-primary-blue/90 text-white py-3 px-6 rounded-lg text-base shadow-lg transition-all"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Hablános por WhatsApp
              </Link>
              <Link
                href="https://www.google.com/maps/place/Centro+Odontol%C3%B3gico+Dra+Zelpo+Dra+P%C3%A9rez/@-34.9044397,-56.1882703,17z/data=!3m1!4b1!4m6!3m5!1s0x959f8100143b0261:0x28206a1815e77e03!8m2!3d-34.9044397!4d-56.1882703!16s%2Fg%2F11xdjpzcvj?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-co-primary-blue border border-co-primary-blue py-3 px-6 rounded-lg text-base shadow-lg transition-all"
              >
                <Star className="w-6 h-6" />
                Dejanos una reseña!
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 md:p-10 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-7 w-7 text-co-primary-blue" />
                <h3 className="text-3xl font-bold text-co-primary-blue">
                  Agenda Online
                </h3>
              </div>

              <p className="text-gray-700 mb-6">
                Seleccioná el día y horario que prefieras para tu consulta.
                Recibirás una confirmación inmediata por email.
              </p>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-co-primary-blue text-white hover:bg-co-primary-blue/90 py-3 h-auto text-base"
              >
                Ver horarios disponibles
              </Button>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl h-[300px] w-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9617672460623!2d-56.1909379!3d-34.9044309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81e077437e67%3A0xf4fe5ae4dc39577e!2sTorre%20de%20los%20Profesionales!5e0!3m2!1ses-419!2suy!4v1712403827054!5m2!1ses-419!2su"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Torre de los Profesionales"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ModalAgenda open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

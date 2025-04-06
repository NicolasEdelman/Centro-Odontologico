"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Calendar, Send, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formState);
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    // Mostrar mensaje de éxito (en una implementación real)
  };

  return (
    <section id="contacto" className="w-full py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-co-primary-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a programar tu consulta. 
            Contáctanos por cualquiera de estos medios o completa el formulario.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Formulario de contacto - 7 columnas en pantallas grandes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Send className="mr-3 text-co-primary-blue" size={24} />
                Envíanos un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre completo
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Tu nombre" 
                      className="border-gray-300 focus:border-co-primary-blue focus:ring-co-primary-blue"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@email.com" 
                      className="border-gray-300 focus:border-co-primary-blue focus:ring-co-primary-blue"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Tu teléfono" 
                    className="border-gray-300 focus:border-co-primary-blue focus:ring-co-primary-blue"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="¿En qué podemos ayudarte?" 
                    rows={5} 
                    className="border-gray-300 focus:border-co-primary-blue focus:ring-co-primary-blue"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-co-primary-blue hover:bg-co-primary-blue/90 text-white py-3 h-auto text-base"
                  >
                    Enviar Mensaje
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Información de contacto y mapa - 5 columnas en pantallas grandes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Tarjeta de información de contacto */}
            <div className="bg-co-primary-blue text-white rounded-2xl shadow-xl p-8 md:p-10 mb-8">
              <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="text-white/80 mr-4 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-white/90 mb-1">Dirección</h4>
                    <p className="text-white/80">Av. Principal 1234, Montevideo, Uruguay</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="text-white/80 mr-4 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-white/90 mb-1">Teléfono</h4>
                    <p className="text-white/80">+598 2345 6789</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="text-white/80 mr-4 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-white/90 mb-1">Email</h4>
                    <p className="text-white/80">info@centroodontologico.uy</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="text-white/80 mr-4 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-bold text-white/90 mb-1">Horario de Atención</h4>
                    <p className="text-white/80">Lunes a Viernes: 9:00 - 19:00</p>
                    <p className="text-white/80">Sábados: 9:00 - 13:00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tarjeta de agendamiento */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
              className="bg-co-secondary-beige text-white rounded-2xl shadow-xl p-8 flex-grow"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-7 w-7 text-white" />
                <h3 className="text-2xl font-bold">Agenda Online</h3>
              </div>
              
              <p className="text-white/90 mb-6">
                Selecciona el día y horario que prefieras para tu consulta. 
                Recibirás una confirmación inmediata por email.
              </p>
              
              <Link href="https://calendly.com/centroodontologico" target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full bg-white text-co-secondary-beige hover:bg-white/90 py-3 h-auto text-base"
                >
                  Ver horarios disponibles
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mapa de Google */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9268455460146!2d-56.18810788417801!3d-34.90281458037944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cb6a8c7191%3A0x882b1a80f96b433c!2sMontevideo%2C%20Uruguay!5e0!3m2!1sen!2sus!4v1616593972909!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación Centro Odontológico"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}


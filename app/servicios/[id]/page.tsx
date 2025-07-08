"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { useParams } from "next/navigation"

// Datos de servicios
const serviciosData = {
  "cirugia-terceros-molares": {
    title: "Cirugía de Terceros Molares",
    description: "Extracción segura y efectiva de muelas del juicio con mínimas molestias y rápida recuperación.",
    image: "/images/dental-treatment-4.jpeg",
    content: `
      <p>La cirugía de terceros molares, comúnmente conocida como extracción de muelas del juicio, es uno de los procedimientos quirúrgicos más frecuentes en odontología. En Centro Odontológico, realizamos este procedimiento con las técnicas más avanzadas para garantizar la comodidad del paciente y una rápida recuperación.</p>
      
      <h3>¿Por qué extraer las muelas del juicio?</h3>
      <p>Las muelas del juicio suelen extraerse por varias razones:</p>
      <ul>
        <li>Falta de espacio en la mandíbula para su correcta erupción</li>
        <li>Posición inadecuada que puede dañar dientes adyacentes</li>
        <li>Riesgo de infección o formación de quistes</li>
        <li>Dolor e inflamación recurrentes</li>
        <li>Prevención de problemas futuros</li>
      </ul>
      
      <h3>Nuestro enfoque</h3>
      <p>En Centro Odontológico, cada cirugía es planificada meticulosamente. Utilizamos técnicas mínimamente invasivas y anestesia adecuada para garantizar que el procedimiento sea lo más cómodo posible. Nuestro equipo de especialistas cuenta con amplia experiencia en extracciones complejas, incluyendo muelas impactadas o en posiciones difíciles.</p>
      
      <h3>Recuperación</h3>
      <p>Proporcionamos instrucciones detalladas para el cuidado postoperatorio y medicación para controlar cualquier molestia. La mayoría de nuestros pacientes pueden retomar sus actividades normales en pocos días, con una recuperación completa en aproximadamente una semana.</p>
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
  },
  "estetica-facial": {
    title: "Estética Facial",
    description: "Tratamientos no invasivos para realzar la belleza natural de tu rostro y complementar tu sonrisa.",
    image: "/images/dental-treatment-2.jpeg",
    content: `
      <p>En Centro Odontológico entendemos que una sonrisa hermosa se complementa con un rostro armonioso. Nuestros tratamientos de estética facial están diseñados para realzar tu belleza natural y proporcionar resultados sutiles pero efectivos.</p>
      
      <h3>Tratamientos disponibles</h3>
      <p>Ofrecemos una variedad de procedimientos no invasivos:</p>
      <ul>
        <li>Aplicación de toxina botulínica para reducir líneas de expresión</li>
        <li>Rellenos dérmicos para restaurar volumen y definir contornos</li>
        <li>Tratamientos para mejorar la calidad y textura de la piel</li>
        <li>Procedimientos para definir el contorno mandibular</li>
        <li>Tratamientos para labios que complementen tu sonrisa</li>
      </ul>
      
      <h3>Enfoque personalizado</h3>
      <p>Cada rostro es único, por lo que nuestros tratamientos son completamente personalizados. Durante la consulta inicial, analizamos tus características faciales y discutimos tus objetivos estéticos para crear un plan de tratamiento adaptado a tus necesidades específicas.</p>
      
      <h3>Resultados naturales</h3>
      <p>Nuestro objetivo es siempre lograr resultados naturales que realcen tus características sin alterar tu expresión. Buscamos que luzcas como una versión rejuvenecida y descansada de ti mismo/a, manteniendo tu esencia y personalidad.</p>
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
  },
  implantologia: {
    title: "Implantología y Regeneración Ósea",
    description:
      "Soluciones permanentes para dientes perdidos con tecnología de vanguardia y materiales de alta calidad.",
    image: "/images/dental-treatment-3.jpeg",
    content: `
      <p>La implantología dental es la solución más avanzada y duradera para reemplazar dientes perdidos. En Centro Odontológico, contamos con especialistas altamente capacitados y la tecnología más moderna para ofrecer tratamientos de implantes con los más altos estándares de calidad.</p>
      
      <h3>¿Qué son los implantes dentales?</h3>
      <p>Los implantes dentales son raíces artificiales de titanio que se colocan quirúrgicamente en el hueso maxilar para soportar una corona, puente o prótesis. Proporcionan una base estable y duradera que permite recuperar la función masticatoria y la estética de forma natural.</p>
      
      <h3>Regeneración ósea</h3>
      <p>En casos donde el volumen óseo es insuficiente para colocar implantes, realizamos procedimientos de regeneración ósea utilizando biomateriales de última generación. Estas técnicas permiten recuperar el hueso perdido y crear las condiciones ideales para la colocación exitosa de implantes.</p>
      
      <h3>Ventajas de los implantes</h3>
      <ul>
        <li>Solución permanente y estable</li>
        <li>Apariencia y función similar a los dientes naturales</li>
        <li>Preservación del hueso maxilar</li>
        <li>No requieren modificar dientes adyacentes</li>
        <li>Mejora significativa en la calidad de vida</li>
      </ul>
      
      <h3>Nuestro proceso</h3>
      <p>Cada tratamiento de implantes comienza con un diagnóstico exhaustivo que incluye estudios radiográficos 3D para planificar con precisión la posición ideal de cada implante. Utilizamos sistemas de implantes de reconocido prestigio internacional y técnicas quirúrgicas mínimamente invasivas para garantizar resultados predecibles y duraderos.</p>
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
  },
  ortodoncia: {
    title: "Ortodoncia",
    description: "Alineación dental perfecta con tratamientos personalizados para todas las edades.",
    image: "/images/dental-treatment-5.jpeg",
    content: `
      <p>En Centro Odontológico ofrecemos tratamientos de ortodoncia avanzados para corregir la alineación dental y mejorar la función masticatoria. Nuestro enfoque combina técnicas tradicionales con las innovaciones más recientes para proporcionar resultados óptimos en el menor tiempo posible.</p>
      
      <h3>Opciones de tratamiento</h3>
      <p>Disponemos de diversas alternativas adaptadas a las necesidades de cada paciente:</p>
      <ul>
        <li>Ortodoncia convencional con brackets metálicos</li>
        <li>Brackets estéticos de cerámica o zafiro</li>
        <li>Sistemas de alineadores transparentes</li>
        <li>Ortodoncia lingual (brackets por la cara interna)</li>
        <li>Sistemas de autoligado que reducen el tiempo de tratamiento y las molestias</li>
      </ul>
      
      <h3>Ortodoncia para todas las edades</h3>
      <p>Tratamos pacientes de todas las edades, desde niños (ortodoncia interceptiva) hasta adultos. Nunca es tarde para conseguir una sonrisa perfectamente alineada y funcional.</p>
      
      <h3>Tecnología avanzada</h3>
      <p>Utilizamos software de planificación digital para visualizar los resultados antes de iniciar el tratamiento. Esto nos permite diseñar el plan más eficiente y predecir con precisión los movimientos dentales necesarios para lograr la sonrisa ideal.</p>
      
      <h3>Seguimiento personalizado</h3>
      <p>Cada paciente recibe un seguimiento cercano durante todo el tratamiento, con citas regulares para ajustes y evaluación del progreso. Nuestro objetivo es hacer que la experiencia sea lo más cómoda y eficiente posible.</p>
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
  },
  ortopedia: {
    title: "Ortopedia",
    description: "Corrección temprana de problemas de desarrollo maxilofacial para prevenir complicaciones futuras.",
    image: "/images/dental-treatment-1.jpeg",
    content: `
      <p>La ortopedia dentofacial se enfoca en guiar el crecimiento y desarrollo de los maxilares en niños y adolescentes. En Centro Odontológico, ofrecemos tratamientos ortopédicos tempranos que pueden prevenir problemas más complejos en el futuro.</p>
      
      <h3>¿Cuándo es necesaria la ortopedia?</h3>
      <p>La ortopedia está indicada en casos de:</p>
      <ul>
        <li>Discrepancias en el tamaño de los maxilares</li>
        <li>Problemas de mordida cruzada</li>
        <li>Hábitos orales que afectan el desarrollo</li>
        <li>Respiración bucal y problemas funcionales</li>
        <li>Preparación para futuros tratamientos ortodónticos</li>
      </ul>
      
      <h3>Beneficios de la intervención temprana</h3>
      <p>Tratar los problemas ortopédicos durante la etapa de crecimiento permite:</p>
      <ul>
        <li>Aprovechar el potencial de crecimiento natural</li>
        <li>Reducir la necesidad de tratamientos más invasivos en el futuro</li>
        <li>Mejorar la función respiratoria y masticatoria</li>
        <li>Favorecer el desarrollo facial armónico</li>
        <li>Simplificar futuros tratamientos ortodónticos</li>
      </ul>
      
      <h3>Nuestro enfoque</h3>
      <p>Realizamos un diagnóstico exhaustivo que incluye análisis facial, funcional y radiográfico para determinar el plan de tratamiento más adecuado. Utilizamos aparatología removible y fija según las necesidades específicas de cada paciente, con controles periódicos para evaluar el progreso y realizar los ajustes necesarios.</p>
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
  },
  rehabilitacion: {
    title: "Rehabilitación",
    description: "Restauración completa de la función y estética dental para devolverte la confianza en tu sonrisa.",
    image: "/images/dental-treatment-2.jpeg",
    content: `
      <p>La rehabilitación oral es un conjunto de procedimientos destinados a restaurar la función masticatoria, la estética y la salud bucal en pacientes con múltiples problemas dentales. En Centro Odontológico, ofrecemos soluciones integrales adaptadas a las necesidades específicas de cada paciente.</p>
      
      <h3>¿Qué incluye la rehabilitación oral?</h3>
      <p>Dependiendo de cada caso, puede incluir:</p>
      <ul>
        <li>Restauraciones estéticas (carillas, coronas)</li>
        <li>Prótesis fijas (puentes, coronas sobre implantes)</li>
        <li>Prótesis removibles parciales o completas</li>
        <li>Tratamiento de problemas de ATM (articulación temporomandibular)</li>
        <li>Reconstrucción de casos complejos</li>
      </ul>
      
      <h3>Proceso de rehabilitación</h3>
      <p>Cada tratamiento comienza con un diagnóstico completo que incluye:</p>
      <ul>
        <li>Evaluación clínica exhaustiva</li>
        <li>Estudios radiográficos</li>
        <li>Fotografías y modelos de estudio</li>
        <li>Análisis funcional de la oclusión</li>
        <li>Planificación digital del caso</li>
      </ul>
      
      <h3>Materiales de última generación</h3>
      <p>Utilizamos materiales cerámicos de alta resistencia y estética que imitan perfectamente la apariencia de los dientes naturales. Nuestro laboratorio dental trabaja con tecnología CAD/CAM para garantizar la precisión y calidad de cada restauración.</p>
      
      <h3>Resultados duraderos</h3>
      <p>Nuestro objetivo es proporcionar rehabilitaciones que no solo sean estéticamente atractivas, sino también funcionales y duraderas. Cada caso es tratado con la máxima atención al detalle para garantizar resultados que mejoren significativamente la calidad de vida de nuestros pacientes.</p>
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
  },
}

export default function ServicioPage() {
  const params = useParams()
  const id = params.id as string
  const servicio = serviciosData[id as keyof typeof serviciosData]

  if (!servicio) {
    notFound()
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main >
      {/* Hero Section */}
      <AnimatedSection variant="fadeIn" fullWidth>
        <section className="bg-co-primary-blue py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/#servicios" className="inline-flex items-center text-white hover:text-[#5d7a99] mb-8 mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Servicios
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6">{servicio.title}</h1>
                <p className="text-xl text-white mb-8">{servicio.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#7a9cbf] hover:bg-[#5d7a99] text-white ">Agendar Consulta</Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl"
              >
                <Image src={servicio.image || "/placeholder.svg"} alt={servicio.title} fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contenido Detallado */}
      <AnimatedSection variant="slideUp" fullWidth>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: servicio.content }}></div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Video Informativo */}
      <AnimatedSection variant="scale" fullWidth>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-800 mb-12"
            >
              Video Informativo
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={servicio.videoUrl}
                  title={`Video sobre ${servicio.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
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
              ¿Necesitas más información?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Agenda una consulta y nuestros especialistas te brindarán toda la información que necesitas sobre{" "}
              {servicio.title.toLowerCase()}.
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
                <Button size="lg" className="bg-white text-[#7a9cbf] hover:bg-gray-100">
                  Agendar Consulta
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}


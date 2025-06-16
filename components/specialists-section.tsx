"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AutoCarousel from "./auto-carrousel";
import { useState, useEffect } from "react";

export default function SpecialistsSection() {
  const [useCarousel, setUseCarousel] = useState(false);
  const [selected, setSelected] = useState<null | (typeof specialists)[0]>(
    null
  );
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setUseCarousel(specialists.length > 6 || window.innerWidth < 768);
  }, []);

  const specialists = [
    {
      name: "Dra. Gissela Rodríguez",
      role: "Especialista en Cirugía Buco Maxilo Facial",
      image: "/images/Staff/GisellaRodriguez.png",
      text: (
        <>
          Ella es{" "}
          <strong>
            Doctora en Odontología y nuestra "Especialista en Cirugía y
            Traumatología Buco Maxilo Facial".
          </strong>
          <br />
          <br />
          Realizó su formación académica en la Facultad de Odontología,
          Universidad de la República (UdelaR) Montevideo, Uruguay.
          <br />
          <br />
          <strong>Docente Grado 2 de la Cátedra de Cirugía BMF II</strong> de la
          Facultad de Odontología, UdelaR.
          <br />
          <br />
          <strong> Docente de Postgrado</strong> en el "Curso de Cirugía Menor"
          en la Asociación Odontológica Uruguaya (AOU)
        </>
      ),
    },
    {
      name: "Dra. Lorena Diaz",
      role: "Especialista en Endodoncia",
      image: "/images/Staff/LorenaDiaz.png",
      text: (
        <>
          Ella es{" "}
          <strong>
            Doctora en Odontología y nuestra Especialista en Endodoncia.
          </strong>
          <br />
          <br />
          Realizó su formación académica en la Facultad de Odontología,
          Universidad de la República (UdelaR) Montevideo, Uruguay.
          <br />
          <br />
          Se ha entrenado en Endodoncia Mecanizada en el Instituto BioClinic
          dictado por la Dra. Iliana Modyeievsky en Montevideo, Uruguay.
        </>
      ),
    },

    {
      name: "Dra. Ana Paula Teske",
      role: "Asesora en Patologia y Laserterapia",
      image: "/images/Staff/PaulaTeske.png",
      text: (
        <>
          Ella es Doctora en Odontología y{" "}
          <strong>
            nuestra referente en Patología Oral y Buco MáxiloFacial
          </strong>{" "}
          así como en
          <strong> Laserterapia.</strong>
          <br />
          <br />
          Realizó su formación académica en la Facultad de Odontología,
          Universidad de la República (UdelaR) Montevideo, Uruguay.
          <br />
          <br />
          Actualmente es <strong>Docente grado 2 </strong> en el Departamento de
          diagnóstico en patología y semiología BMF - Clínica Estomatológica de
          la UdelaR.
          <br />
          <br />
          Recibió capacitación en <strong>Laserterapia clínica</strong> sobre el
          uso del Láser en Odontología por el Láser Movement Group. Montevideo,
          Uruguay.
          <br />
          <br />
          Cursando la carrera de <strong>Doctor en Medicina</strong> en la
          Facultad de Medicina, UdelaR. Montevideo, Uruguay.
        </>
      ),
    },
    {
      name: "Dra. Patricia Pérez",
      role: "Especialista en Periodoncia",
      image: "/images/Staff/PatriciaPerez.png",
      text: (
        <>
          Ella es{" "}
          <strong>
            Doctora en Odontología y nuestra Especialista en Periodoncia.
          </strong>
          <br />
          <br />
          Realizó su formación académica en la Facultad de Odontología,
          Universidad de la República (UdelaR) Montevideo, Uruguay.
          <br />
          <br />
          Recibió su título de<strong> Especialista en Periodoncia</strong> en
          la Universidad Católica del Uruguay (UCU).
          <br />
          <br />
          Actualmente se encuentra cursando una{" "}
          <strong>Maestría en Periodoncia</strong> también en la UCU.
          <br />
          <br />
          Participó en Curso de{" "}
          <strong>
            Cirugía plástica periodontal y periimplantaria en área estética
          </strong>{" "}
          Dr. Gustavo Giordani, Brasil.
        </>
      ),
    },
    {
      name: "Dra. Virginia Machado",
      role: "Especialista en Trastornos Temporo Mandibulares y Sueño",
      image: "/images/Staff/VirginiaMachado.png",
      text: (
        <>
          Ella es <strong>Doctora en Odontología</strong> y nuestra
          <strong>
            "Especialista en Trastornos Temporo Mandibulares y Sueño"
          </strong>
          <br />
          <br />
          Realizó su formación académica en la Facultad de Odontología,
          Universidad de la República (UdelaR) Montevideo, Uruguay.
          <br />
          <br />
          Es <strong>Magister en Función Cráneo Mandibular</strong> por la
          Facultad de Odontología, UdelaR y actualmente cursando el Doctorado.
          <br />
          <br />
          También es <strong />
          Diplomada en Medicina del Sueño
          <strong /> por la Universidad CLAEH.
          <br />
          <br />Y es <strong>Directora de: Sistema Sinergia Salud</strong> un
          equipo multidisciplinario que incluye Fonoaudióloga y Osteópata entre
          otros profesionales.
        </>
      ),
    },
    {
      name: "Victoria Rodriguez",
      role: "Cosmetóloga Médica",
      image: "/images/Staff/EquipoMarron/VictoriaRodriguez.png",
      text: (
        <>
          Ella es <strong>Tecnóloga en Cosmetología Médica,</strong> egresada de
          la Escuela Universitaria de Tecnología Médica de la Universidad de la
          República (UdelaR) Montevideo, Uruguay. <br />
          <br />
          Cuenta con un curso de <strong>"Cosmetología у facial"</strong> en
          Beauty Center. curso de Aparatología.
        </>
      ),
    },
    {
      name: "Valentina Armand",
      role: "Fonoaudióloga",
      image: "/images/Staff/ValentinaArmand.png",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleCardClick = (spec: (typeof specialists)[0]) => {
    setSelected(spec);
    setPaused(true);
  };

  const handleCloseModal = () => {
    setSelected(null);
    setPaused(false);
  };

  const SpecialistCard = ({
    name,
    role,
    image,
    onClick,
  }: {
    name: string;
    role: string;
    image: string;
    onClick: () => void;
  }) => (
    <motion.div
      variants={item}
      className="group text-center flex-shrink-0 w-[150px] md:w-[200px] max-w-[200px]"
    >
      <div className="relative w-full aspect-square overflow-hidden md:mb-4 mx-auto max-w-[200px] pb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 hover:cursor-pointer"
          onClick={onClick}
        />
      </div>

      <div className=" mx-auto overflow-hidden">
        <h3 className="text-md md:text-lg font-bold text-gray-800  whitespace-normal">
          {name}
        </h3>
        <p className="text-co-secondary-beige md:text-base text-sm  whitespace-normal h-[68px]">
          {role}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section
      id="equipo"
      className="w-full pt-20 md:py-20 bg-white overflow-x-hidden"
    >
      <div className="md:mx-auto md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Nuestras Especialistas
          </h2>
          <div className="w-20 h-1 bg-co-secondary-beige mx-auto md:mb-12" />
        </motion.div>

        {useCarousel ? (
          <AutoCarousel paused={paused}>
            {[...specialists].map((spec, i) => (
              <SpecialistCard
                key={i}
                {...spec}
                onClick={() => handleCardClick(spec)}
              />
            ))}
          </AutoCarousel>
        ) : (
          <div className="md:container md:mx-auto md:px-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full"
            >
              {specialists.map((spec, i) => (
                <SpecialistCard
                  key={i}
                  {...spec}
                  onClick={() => handleCardClick(spec)}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-[95vw] md:max-w-xl md:p-8 p-2 relative overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
              aria-label="Cerrar modal"
            >
              &times;
            </button>
            <div className="flex flex-row items-start gap-4">
              <Image
                src={selected.image}
                alt={selected.name}
                width={140}
                height={140}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col items-start justify-center mt-4 md:mt-10">
                <h3 className="text-2xl font-bold text-black">
                  {selected.name}
                </h3>
                <p className="text-co-secondary-beige text-base">
                  {selected.role}
                </p>
              </div>
            </div>
            <div className="text-left text-gray-700 text-md px-4  border-gray-300 pt-4">
              {selected.text}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

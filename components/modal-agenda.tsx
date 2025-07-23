"use client";

import Image from "next/image";
import React from "react";

interface ModalAgendaProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalAgenda({ open, onClose }: ModalAgendaProps) {
  if (!open) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-sm md:max-w-2xl p-4 sm:p-10 text-center relative"
        onClick={handleContentClick}
      >
        <h3 className="text-3xl font-bold text-co-primary-blue mb-2">
          Elegí con quién agendar
        </h3>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Seleccioná una profesional para continuar con tu reserva.
        </p>

        <div className="flex flex-row gap-4 md:gap-8 justify-center items-center">
          <a
            href="https://cal.com/fabiana-zelpo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 hover:scale-105 transition"
          >
            <img
              src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Imagenes/Colores/FabianaAzul.webp"
              alt="Fabiana"
              width={128}
              height={128}
              className="rounded-full object-cover w-32 h-32"
            />
            <span className="text-lg font-medium text-gray-800">Fabiana</span>
          </a>
          <a
            href="https://cal.com/nadia-perez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 hover:scale-105 transition"
          >
            <img
              src="https://centro-odontologico.s3.us-east-2.amazonaws.com/Imagenes/Colores/NadiaAzul.webp"
              alt="Nadia"
              width={128}
              height={128}
              className="rounded-full object-cover w-32 h-32"
            />
            <span className="text-lg font-medium text-gray-800">Nadia</span>
          </a>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

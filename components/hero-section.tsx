"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [error, setError] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const handleVideoError = () => {
    setError(true);
  };

  return (
    <section className="w-full h-screen md:h-screen relative flex items-center overflow-hidden ">
      <div className="absolute inset-0 z-0 w-full h-full">
        {error ? (
          <Image
            src="/images/PortadaDesktop.jpg"
            alt="Fondo"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
        ) : (
          <>
            <video
              ref={videoRef}
              src="https://centro-odontologico.s3.us-east-2.amazonaws.com/PortadaDesktop.webm"
              autoPlay
              loop
              muted={muted}
              playsInline
              className="w-full h-full object-cover brightness-50 transition-transform duration-700 scale-110 md:scale-100 hidden md:block bg-gradient-to-br from-co-primary-blue to-co-primary-blue/20"
              onError={handleVideoError}
            />
            <video
              ref={videoRef}
              src="https://centro-odontologico.s3.us-east-2.amazonaws.com/PortadaMobile.webm"
              autoPlay
              loop
              muted={muted}
              playsInline
              className="w-full h-full object-cover brightness-50 transition-transform duration-700 scale-110 md:scale-100 md:hidden block bg-gradient-to-br from-co-primary-blue/60 to-co-primary-blue/20"
              onError={handleVideoError}
            />
          </>
        )}
        {/* Botón mute/desmute */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-10  rounded-full p-2 shadow hover:bg-gray-100/30 transition"
        >
          {!muted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 9v6h4l5 5V4l-5 5H9z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 9v6h4l5 5V4l-5 5H9z" />
              <line
                x1="19"
                y1="5"
                x2="5"
                y2="19"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 mb-20 md:mb-14">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-full md:text-center items-center flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-2 font-avenir">
              CENTRALIZA TU ODONTOLOGÍA
            </h1>
            <p className="text-lg md:text-2xl text-white mb-2 md:mb-4 max-w-xl font-now md:text-center">
              Profesionalismo y dedicación en cada tratamiento
            </p>
            <div className="flex flex-row gap-4">
              <Button
                href="#servicios"
                className="inline-flex h-9 md:h-10 items-center justify-center  bg-white px-4 sm:px-8 text-sm md:text-base font-medium text-gray-500 hover:bg-co-primary-blue/80 hover:text-white transition-colors font-montserrat whitespace-nowrap"
              >
                Conocer Especialidades
              </Button>
              <Button
                href="#contacto"
                className="inline-flex h-9 md:h-10 items-center justify-center  bg-white px-4 sm:px-8 text-sm md:text-base font-medium text-gray-500 hover:bg-co-primary-blue/80 hover:text-white transition-colors font-montserrat whitespace-nowrap"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

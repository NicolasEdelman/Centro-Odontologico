"use client";
import { useRef, useState } from "react";
import Image from "next/image";

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
    <section className="w-full h-screen md:h-screen relative flex items-center overflow-hidden">
      {/* Background video o imagen de fallback */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {error ? (
          <Image
            src="/images/PortadaDesktop.jpg" // O .png, o la extensión que sea
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
              className="w-full h-full object-cover brightness-50 transition-transform duration-700 scale-110 md:scale-100 hidden md:block"
              onError={handleVideoError}
            />
            <video
              ref={videoRef}
              src="https://centro-odontologico.s3.us-east-2.amazonaws.com/PortadaMobile.webm"
              autoPlay
              loop
              muted={muted}
              playsInline
              className="w-full h-full object-cover brightness-50 transition-transform duration-700 scale-110 md:scale-100 md:hidden block"
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
      <div className="container mx-auto px-4 z-10 md:flex md:justify-center md:items-center ">
        <div className="max-w-full md:mt-[45rem] md:text-center md:items-center md:flex md:flex-col md:justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-2 font-avenir">
            CENTRALIZA TU ODONTOLOGÍA
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 md:mb-4 max-w-xl font-now md:text-center">
            Profesionalismo y dedicación en cada tratamiento
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="#nosotras"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-4 sm:px-8 text-sm sm:text-base font-medium text-gray-500 hover:bg-co-primary-blue/80 hover:text-white transition-colors font-montserrat whitespace-nowrap"
            >
              Conocer Especialidades
            </a>
            <a
              href="#contacto"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-4 sm:px-8 text-sm sm:text-base font-medium text-gray-500 hover:bg-co-primary-blue/80 hover:text-white transition-colors font-montserrat whitespace-nowrap"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div> */}
    </section>
  );
}

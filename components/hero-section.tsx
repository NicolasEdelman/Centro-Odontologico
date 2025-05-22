import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full h-screen relative flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dental-treatment-1.jpeg"
          alt="Centro Odontológico"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-avenir">
            CENTRALIZA <br /> TU ODONTOLOGÍA
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-xl font-now">
            Profesionalismo y dedicación en cada tratamiento
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="#nosotras"
              className="inline-flex h-12 items-center justify-center rounded-md bg-co-primary-blue px-4 sm:px-8 text-sm sm:text-base font-medium text-white hover:bg-co-primary-gray/80 transition-colors font-montserrat whitespace-nowrap"
            >
              Conocer Especialidades
            </a>
            <a
              href="#contacto"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-4 sm:px-8 text-sm sm:text-base font-medium text-white hover:bg-white/10 transition-colors font-montserrat whitespace-nowrap"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
      </div>
    </section>
  )
}


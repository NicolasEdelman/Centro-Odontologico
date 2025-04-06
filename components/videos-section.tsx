"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function VideosSection() {
  const videos = [
    {
      id: "video1",
      title: "Conoce nuestras instalaciones",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
    },
    {
      id: "video2",
      title: "Testimonios de pacientes",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
    },
    {
      id: "video3",
      title: "Nuestro equipo en acción",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplazar con URL real
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = videos.length - 1

  const nextSlide = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 10000) // Cambiar cada 10 segundos

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Videos Institucionales</h2>
          <div className="w-20 h-1 bg-[#a5c5e5] mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Carousel */}
          <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden">
            <iframe
              src={videos[currentIndex].embedUrl}
              title={videos[currentIndex].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

          {/* Title */}
          <div className="text-center mt-6 mb-8">
            <h3 className="text-xl font-bold">{videos[currentIndex].title}</h3>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#a5c5e5] text-[#a5c5e5] hover:bg-[#a5c5e5]/10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Anterior</span>
            </Button>

            <div className="flex items-center gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#a5c5e5]" : "bg-white/30"}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="sr-only">Slide {index + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#a5c5e5] text-[#a5c5e5] hover:bg-[#a5c5e5]/10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


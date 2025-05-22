"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function VideosSection() {
  const videos = [
    {
      id: "video1",
      title: "Mirá nuestro reel",
      embedUrl: "https://www.youtube.com/embed/rgQTTW9o1sk",
    },
    {
      id: "video2",
      title: "Mirá nuestro reel",
      embedUrl: "https://www.youtube.com/embed/rgQTTW9o1sk",
    },
    {
      id: "video3",
      title: "Mirá nuestro reel",
      embedUrl: "https://www.youtube.com/embed/rgQTTW9o1sk",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const maxIndex = videos.length - 1;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="videos" className="w-full py-20 bg-co-primary-blue text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Videos institucionales
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative md:max-w-xl mx-auto"
        >
          <div className="relative flex items-center justify-center h-[280px] md:h-[560px] overflow-hidden">
            {videos.map((video, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + videos.length) % videos.length;
              const isNext = index === (currentIndex + 1) % videos.length;

              let positionStyles =
                "absolute transition-all duration-700 ease-in-out aspect-[9/16] rounded-xl overflow-hidden";

              let motionProps = {};

              if (isActive) {
                positionStyles += " w-[220px] md:w-[320px] z-20";
                motionProps = {
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.8, opacity: 0 },
                };
              } else if (isPrev) {
                positionStyles +=
                  " w-[100px] md:w-[200px] -left-24 opacity-40 scale-[0.9] z-10";
                motionProps = {
                  initial: { x: -50, opacity: 0 },
                  animate: { x: 0, opacity: 0.4 },
                  exit: { x: -50, opacity: 0 },
                };
              } else if (isNext) {
                positionStyles +=
                  " w-[100px] md:w-[200px] -right-24 opacity-40 scale-[0.9] z-10";
                motionProps = {
                  initial: { x: 50, opacity: 0 },
                  animate: { x: 0, opacity: 0.4 },
                  exit: { x: 50, opacity: 0 },
                };
              } else {
                return null;
              }

              return (
                <AnimatePresence key={video.id}>
                  <motion.div
                    key={video.id}
                    className={positionStyles}
                    {...motionProps}
                    transition={{ duration: 0.6 }}
                  >
                    <iframe
                      src={`${video.embedUrl}${
                        index === 1 ? "?autoplay=1&mute=1" : ""
                      }`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-xl"
                    />
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>

          <div className="text-center mt-10 mb-8">
            <h3 className="text-xl font-bold">{videos[currentIndex].title}</h3>
          </div>

          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-co-primary-blue hover:bg-white/10 hover:text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Anterior</span>
            </Button>

            <div className="flex items-center gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="sr-only">Slide {index + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-co-primary-blue hover:bg-white/10 hover:text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

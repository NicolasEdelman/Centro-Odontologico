"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface CarouselConFlechasProps {
  children: React.ReactNode;
}

export default function CarouselConFlechas({
  children,
}: CarouselConFlechasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth / 3; // ya que mostramos máx. 3
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className={clsx(
          "flex overflow-x-auto gap-6 scroll-smooth pb-8",
          "no-scrollbar px-1 py-2",
          "mx-auto max-w-6xl"
        )}
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {children}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => scroll("left")}
          className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

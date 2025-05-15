"use client";

import { useEffect, useRef } from "react";

interface AutoCarouselProps {
  children: React.ReactNode;
}

export default function AutoCarousel({ children }: AutoCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let position = 0;
    const speed = 1.5;

    const animate = () => {
      position -= speed;

      const totalWidth = carousel.scrollWidth / 3;
      if (position <= -totalWidth) {
        position = 0;
      }

      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);


  const repeatedChildren = [children, children, children];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex items-center gap-20 py-4"
        style={{ whiteSpace: "nowrap" }}
      >
        {repeatedChildren.map((group, index) => (
          <div key={index} className="flex items-center gap-20">
            {group}
          </div>
        ))}
      </div>
    </div>
  );
}

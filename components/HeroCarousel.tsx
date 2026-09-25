"use client";

import { useEffect, useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import { getFeaturedGames } from "@/data/games";

export default function HeroCarousel() {
  const slides = getFeaturedGames().slice(0, 4);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <section className="space-y-3">
      <HeroBanner game={slides[index]} />
      <div className="flex justify-center gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setIndex(slideIndex)}
            className={`h-2 w-8 rounded-full ${
              slideIndex === index ? "bg-[#7c5cff]" : "bg-[#232636]"
            }`}
            aria-label={`Ir al slide ${slide.title}`}
          />
        ))}
      </div>
    </section>
  );
}

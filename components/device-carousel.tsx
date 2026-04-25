"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CarouselShot = {
  src: string;
  alt: string;
  label?: string;
};

type DeviceCarouselProps = {
  shots: readonly CarouselShot[];
  mode: "hero" | "project";
  className?: string;
  autoPlayMs?: number;
};

export function DeviceCarousel({
  shots,
  mode,
  className,
  autoPlayMs = 3500,
}: DeviceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shots.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % shots.length);
    }, autoPlayMs);

    return () => window.clearInterval(timer);
  }, [autoPlayMs, shots.length]);

  const activeShot = shots[activeIndex];

  return (
    <div className={`device-carousel device-carousel-${mode} ${className ?? ""}`.trim()}>
      <div className="phone-frame">
        <div className="phone-screen-mask">
          {shots.map((shot, index) => (
            <figure
              key={shot.src}
              className={`device-slide ${index === activeIndex ? "is-active" : ""}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes={mode === "hero" ? "320px" : "280px"}
                priority={index === 0}
                className="object-cover"
              />
            </figure>
          ))}
          <div className="phone-reflection" />
        </div>
      </div>

      <div className="carousel-controls" style={{ position: 'relative', zIndex: 100 }}>
        <button
          className="carousel-arrow"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActiveIndex((current) => (current === 0 ? shots.length - 1 : current - 1));
          }}
          aria-label="Previous screenshot"
        >
          ‹
        </button>

        <div className="carousel-meta">
          <div className="carousel-counter">
            Shot {activeIndex + 1} of {shots.length}
          </div>
          {activeShot.label ? <span className="carousel-label">{activeShot.label}</span> : null}

          <div className="carousel-dots">
            {shots.map((shot, index) => (
              <button
                key={shot.src}
                className={`carousel-dot ${index === activeIndex ? "is-active" : ""}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActiveIndex((current) => (current + 1) % shots.length);
          }}
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>


    </div>
  );
}

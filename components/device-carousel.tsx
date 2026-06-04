"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CarouselShot = {
  src: string;
  alt: string;
  label?: string;
  type?: "mobile" | "web";
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
  autoPlayMs = 4500,
}: DeviceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shots.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % shots.length);
    }, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlayMs, shots.length]);

  if (!shots || shots.length === 0) return null;

  return (
    <div className={`carousel-3d-wrapper ${className ?? ""}`.trim()}>
      <div className="carousel-3d-container">
        {shots.map((shot, index) => {
          const isActive = index === activeIndex;
          const offset = index - activeIndex;

          // Compute circular wrapping offset
          let circularOffset = offset;
          if (circularOffset > shots.length / 2) {
            circularOffset -= shots.length;
          } else if (circularOffset < -shots.length / 2) {
            circularOffset += shots.length;
          }

          const absOffset = Math.abs(circularOffset);

          // Render active slide + 2 slides left and right
          if (absOffset > 2 && shots.length > 4) {
            return null;
          }

          const isWeb = shot.type === "web";

          // Calculate transforms based on circularOffset for Coverflow 3D effect
          let transformStr = "";
          let zIndex = 10 - absOffset;
          let opacity = 1;

          if (circularOffset === 0) {
            transformStr = "translate3d(0, 0, 0) scale(1) rotateY(0deg)";
            opacity = 1;
          } else if (circularOffset === -1) {
            transformStr = "translate3d(-40%, 0, -120px) scale(0.82) rotateY(25deg)";
            opacity = 0.75;
          } else if (circularOffset === 1) {
            transformStr = "translate3d(40%, 0, -120px) scale(0.82) rotateY(-25deg)";
            opacity = 0.75;
          } else if (circularOffset === -2) {
            transformStr = "translate3d(-70%, 0, -240px) scale(0.68) rotateY(38deg)";
            opacity = 0.45;
          } else if (circularOffset === 2) {
            transformStr = "translate3d(70%, 0, -240px) scale(0.68) rotateY(-38deg)";
            opacity = 0.45;
          }

          return (
            <div
              key={shot.src + "-" + index}
              className={`carousel-3d-card ${isActive ? "active" : ""} ${isWeb ? "card-web" : "card-mobile"}`}
              style={{
                transform: transformStr,
                zIndex: zIndex,
                opacity: opacity,
              }}
              onClick={() => setActiveIndex(index)}
            >
              {isWeb ? (
                <div className="browser-mockup">
                  <div className="browser-hdr">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <div className="url-bar">
                      <span className="lock">🔒</span>
                      <span className="url">{shot.label || "project-live-web.app"}</span>
                    </div>
                  </div>
                  <div className="browser-body">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority={isActive}
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ) : (
                <div className="phone-mockup">
                  <div className="phone-notch" />
                  <div className="phone-inner">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 300px"
                      priority={isActive}
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              {!isActive && <div className="card-overlay" />}
            </div>
          );
        })}
      </div>

      <div className="carousel-meta-controls">
        <button
          className="carousel-btn prev-btn"
          type="button"
          onClick={() => setActiveIndex((current) => (current === 0 ? shots.length - 1 : current - 1))}
          aria-label="Previous screenshot"
        >
          ‹
        </button>

        <div className="carousel-details">
          <span className="carousel-index">
            {activeIndex + 1} / {shots.length}
          </span>
          {shots[activeIndex].label && (
            <h5 className="carousel-active-label">{shots[activeIndex].label}</h5>
          )}
          <div className="carousel-dots-indicator">
            {shots.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot-btn ${idx === activeIndex ? "active" : ""}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          className="carousel-btn next-btn"
          type="button"
          onClick={() => setActiveIndex((current) => (current + 1) % shots.length)}
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>
    </div>
  );
}

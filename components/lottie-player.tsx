"use client";

import { useEffect, useRef, useState } from "react";

type LottiePlayerProps = {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export function LottiePlayer({
  src,
  loop = true,
  autoplay = true,
  className,
  style,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<any>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    // Dynamically load lottie-web on client-side only
    import("lottie-web").then((LottieModule) => {
      setLottie(LottieModule.default);
    });
  }, []);

  useEffect(() => {
    if (!lottie || !containerRef.current) return;

    if (animRef.current) {
      animRef.current.destroy();
    }

    try {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        path: src,
      });
    } catch (err) {
      console.error("Failed to load Lottie animation:", src, err);
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [lottie, src, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...style,
      }}
    />
  );
}

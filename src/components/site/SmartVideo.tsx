"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import type { VideoHTMLAttributes } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SmartVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "poster" | "preload"> & {
  src: string;
  poster?: string;
  eager?: boolean;
};

export const SmartVideo = forwardRef<HTMLVideoElement, SmartVideoProps>(function SmartVideo(
  { src, poster, eager = false, autoPlay = false, className, onLoadedData, ...props },
  forwardedRef,
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [nearViewport, setNearViewport] = useState(eager);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useImperativeHandle(forwardedRef, () => videoRef.current as HTMLVideoElement);

  useEffect(() => {
    if (eager || !videoRef.current || nearViewport) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" },
    );

    const video = videoRef.current;
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => observer.observe(video));
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, [eager, nearViewport]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !nearViewport || !autoPlay || reduceMotion) return;
    void video.play().catch(() => undefined);
  }, [autoPlay, nearViewport, reduceMotion]);

  return (
    <video
      ref={videoRef}
      src={nearViewport ? src : undefined}
      poster={poster}
      preload={eager ? "metadata" : "none"}
      autoPlay={nearViewport && autoPlay && !reduceMotion}
      className={cn("transition-opacity duration-700", ready ? "opacity-100" : "opacity-90", className)}
      onLoadedData={(event) => {
        setReady(true);
        onLoadedData?.(event);
      }}
      {...props}
    />
  );
});

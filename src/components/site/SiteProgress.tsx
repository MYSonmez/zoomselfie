"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function SiteProgress({ photoSoft = false }: { photoSoft?: boolean }) {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 28, mass: .25 });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className={`pointer-events-none fixed inset-x-0 top-0 z-[120] h-[2px] origin-left ${photoSoft ? "bg-cyan-300" : "bg-primary"}`}
    />
  );
}

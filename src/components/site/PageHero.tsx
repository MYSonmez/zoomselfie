"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="premium-grain relative flex min-h-[68svh] items-center overflow-hidden bg-[#f6f1e7] pb-16 pt-28 md:pb-20 md:pt-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-full -z-10"
        style={{
          background:
            "radial-gradient(900px 520px at 82% 28%, rgba(255,184,0,0.22), transparent 66%)",
        }}
      />
      <div aria-hidden className="ambient-orbit absolute -right-44 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-dashed border-black/8" />
      <div className="container-page">
        <motion.div
          initial={{ opacity: 1, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-600">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 text-[clamp(3.4rem,6vw,6.6rem)] font-extrabold leading-[.92] tracking-[-.065em] text-foreground">
            {title}
          </h1>
          {description && (
            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isPhotoSoft = pathname === "/photosoft";

  useEffect(() => {
    let themeTimer: ReturnType<typeof setTimeout> | undefined;

    if (isPhotoSoft) {
      if (reduceMotion) document.documentElement.dataset.theme = "photosoft";
      else themeTimer = setTimeout(() => (document.documentElement.dataset.theme = "photosoft"), 360);
    } else {
      delete document.documentElement.dataset.theme;
    }

    if (pathname === "/") document.documentElement.dataset.page = "zoomselfie-home";
    else if (pathname === "/kiosk") document.documentElement.dataset.page = "zoomselfie-kiosk";
    else delete document.documentElement.dataset.page;

    return () => {
      if (themeTimer) clearTimeout(themeTimer);
    };
  }, [isPhotoSoft, pathname, reduceMotion]);

  return (
    <div className="flex min-h-screen flex-col transition-colors duration-500">
      <Navbar />
      <motion.main
        key={pathname}
        initial={reduceMotion || !isPhotoSoft ? false : { opacity: 0.35, x: 54 }}
        animate={{ opacity: 1, x: 0 }}
        transition={isPhotoSoft ? { duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />

      <AnimatePresence>
        {isPhotoSoft && !reduceMotion && (
          <motion.div
            key="photosoft-product-transition"
            aria-hidden="true"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 0 0 100%)"] }}
            transition={{ duration: 1.18, times: [0, 0.3, 0.6, 1], ease: [0.76, 0, 0.24, 1] }}
            className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-[#05080a]"
          >
            <div className="absolute inset-y-0 left-0 w-2 bg-cyan-300 sm:w-3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,.11),transparent_34rem)]" />
            <motion.div
              initial={{ opacity: 0, x: -34 }}
              animate={{ opacity: [0, 1, 1, 0], x: [-34, 0, 0, 26] }}
              transition={{ duration: 0.88, times: [0, 0.22, 0.67, 1], delay: 0.16, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center px-6 text-center text-white"
            >
              <div>
                <div className="mx-auto mb-5 h-px w-14 bg-cyan-300" />
                <p className="text-[10px] font-black uppercase tracking-[.32em] text-cyan-300">ZoomSelfie presents</p>
                <p className="mt-3 text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">PhotoSoft</p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[.22em] text-white/38">Attraction Photo Operations</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

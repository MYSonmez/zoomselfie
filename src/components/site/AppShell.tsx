"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SiteProgress } from "@/components/site/SiteProgress";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isPhotoSoft = pathname === "/photosoft";

  useLayoutEffect(() => {
    if (window.location.hash) return;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const restoreTimer = window.setTimeout(() => {
      root.style.scrollBehavior = previousBehavior;
    }, 700);

    return () => window.clearTimeout(restoreTimer);
  }, [pathname]);

  useEffect(() => {
    let themeTimer: ReturnType<typeof setTimeout> | undefined;

    if (isPhotoSoft) {
      if (reduceMotion) document.documentElement.dataset.theme = "photosoft";
      else themeTimer = setTimeout(() => (document.documentElement.dataset.theme = "photosoft"), 290);
    } else {
      delete document.documentElement.dataset.theme;
    }

    if (pathname === "/") document.documentElement.dataset.page = "zoomselfie-home";
    else if (pathname === "/kiosk") document.documentElement.dataset.page = "zoomselfie-kiosk";
    else if (pathname.startsWith("/products/")) document.documentElement.dataset.page = "zoomselfie-product";
    else delete document.documentElement.dataset.page;

    return () => {
      if (themeTimer) clearTimeout(themeTimer);
    };
  }, [isPhotoSoft, pathname, reduceMotion]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip transition-colors duration-500">
      <SiteProgress photoSoft={isPhotoSoft} />
      <Navbar />
      <motion.main
        key={pathname}
        initial={reduceMotion ? false : isPhotoSoft ? { opacity: 0.35, x: 54 } : { opacity: 1, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={isPhotoSoft ? { duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] } : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.92, times: [0, 0.31, 0.58, 1], ease: [0.76, 0, 0.24, 1] }}
            className="pointer-events-none absolute inset-x-0 top-0 z-[40] h-[100svh] overflow-hidden bg-[#05080a]"
          >
            <div className="absolute inset-y-0 left-0 w-2 bg-cyan-300 sm:w-3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,.11),transparent_34rem)]" />
            <motion.div
              initial={{ opacity: 0, x: -34 }}
              animate={{ opacity: [0, 1, 1, 0], x: [-34, 0, 0, 26] }}
              transition={{ duration: 0.7, times: [0, 0.22, 0.67, 1], delay: 0.1, ease: "easeOut" }}
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

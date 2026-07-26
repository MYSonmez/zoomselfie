import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, Sparkles, MapPin, Play, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import { CTASection } from "@/components/site/CTASection";

import galataVideo from "@/assets/Galata-web-1.mp4";
import galleryParisCouple from "@/assets/gallery-paris-couple.png";
import galleryAquariumFamily from "@/assets/gallery-aquarium-family.png";
import gallerySkiSolo from "@/assets/gallery-ski-solo.png";
import galleryStadiumFriends from "@/assets/gallery-stadium-friends.png";
import galleryCruiseSunset from "@/assets/gallery-cruise-sunset.png";
import galleryIstanbulGroup from "@/assets/gallery-istanbul-group.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - ZoomSelfie Memory Showcase" },
      { name: "description", content: "Cinematic visitor memories created with ZoomSelfie AI software." },
    ],
  }),
  component: Gallery,
});

type GalleryItem = {
  id: string;
  type: "photo" | "video";
  title: string;
  location: string;
  src: string;
};

const allItems: GalleryItem[] = [
  { id: "p1", type: "photo", title: "Art Nouveau Paris Moment", location: "Eiffel Tower, Paris", src: galleryParisCouple },
  { id: "p2", type: "photo", title: "Ottoman Mosaic Memory", location: "Hagia Sophia, Istanbul", src: galleryIstanbulGroup },
  { id: "p3", type: "photo", title: "Alpine Summit Snapshot", location: "Swiss Alps", src: gallerySkiSolo },
  { id: "p4", type: "photo", title: "Mediterranean Golden Hour", location: "Mediterranean Cruise", src: galleryCruiseSunset },
  { id: "p5", type: "photo", title: "Game Day Fan Reel", location: "Wembley Stadium, London", src: galleryStadiumFriends },
  { id: "p6", type: "photo", title: "Aquatic World Family", location: "Dubai Aquarium", src: galleryAquariumFamily },
];

function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [heroMuted, setHeroMuted] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const navigate = useCallback((dir: 1 | -1) => {
    if (lightboxIdx === null) return;
    const next = lightboxIdx + dir;
    if (next < 0 || next >= allItems.length) return;
    setLightboxIdx(next);
  }, [lightboxIdx]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightboxIdx, navigate]);

  return (
    <>
      {/* ====== CINEMATIC HERO ====== */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[560px] overflow-hidden bg-slate-950">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <video
            ref={heroVideoRef}
            src={galataVideo}
            autoPlay
            muted={heroMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col justify-end container-page pb-16 md:pb-24"
        >
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-primary mb-6">
              <Play className="h-3 w-3" fill="currentColor" /> Featured Video - Galata Tower, Istanbul
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[0.95]">
              Moments<br />worth <span className="bg-gradient-to-r from-primary to-amber-300 bg-clip-text text-transparent">keeping.</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-lg leading-relaxed">
              Every image below was captured and enhanced in real-time by ZoomSelfie AI.
            </p>
          </motion.div>
        </motion.div>

        {/* Sound toggle */}
        <button
          onClick={() => { if (heroVideoRef.current) { heroVideoRef.current.muted = !heroMuted; setHeroMuted(!heroMuted); } }}
          className="absolute bottom-8 right-8 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
        >
          {heroMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ====== EDITORIAL GALLERY ====== */}
      <section className="bg-background">
        {/* Section intro */}
        <div className="container-page py-20 md:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> ZoomSelfie Output
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Real captures. Real venues.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Click any memory to experience it in full resolution.
            </p>
          </motion.div>
        </div>

        {/* Row 1: Large left + stacked right */}
        <div className="container-page pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
            <GalleryCard item={allItems[0]} idx={0} onClick={() => setLightboxIdx(0)} aspect="aspect-[4/3]" />
            <div className="grid grid-rows-2 gap-4">
              <GalleryCard item={allItems[1]} idx={1} onClick={() => setLightboxIdx(1)} aspect="aspect-[16/9]" />
              <GalleryCard item={allItems[2]} idx={2} onClick={() => setLightboxIdx(2)} aspect="aspect-[16/9]" />
            </div>
          </div>
        </div>

        {/* Row 2: Full-bleed panoramic */}
        <div className="container-page py-4">
          <GalleryCard item={allItems[3]} idx={3} onClick={() => setLightboxIdx(3)} aspect="aspect-[21/9]" />
        </div>

        {/* Row 3: Two equal */}
        <div className="container-page pt-4 pb-20 md:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GalleryCard item={allItems[4]} idx={4} onClick={() => setLightboxIdx(4)} aspect="aspect-[4/3]" />
            <GalleryCard item={allItems[5]} idx={5} onClick={() => setLightboxIdx(5)} aspect="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ====== FULLSCREEN LIGHTBOX ====== */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl"
            onClick={() => setLightboxIdx(null)}
          >
            <button onClick={() => setLightboxIdx(null)} className="absolute top-5 right-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors">
              <X className="h-5 w-5" />
            </button>

            {lightboxIdx > 0 && (
              <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors">
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {lightboxIdx < allItems.length - 1 && (
              <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors">
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            <motion.div
              key={allItems[lightboxIdx].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[88vh] w-full mx-4"
            >
              <img src={allItems[lightboxIdx].src} alt={allItems[lightboxIdx].title} className="w-full max-h-[88vh] object-contain rounded-xl" />

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-b-xl">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1"><MapPin className="h-3 w-3 text-primary" /> {allItems[lightboxIdx].location}</div>
                    <h3 className="text-white text-xl font-bold">{allItems[lightboxIdx].title}</h3>
                  </div>
                  <span className="shrink-0 flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" /> ZoomSelfie AI
                  </span>
                </div>
              </motion.div>

              <div className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-4 py-1.5 text-xs font-bold text-white/60 tabular-nums">
                {lightboxIdx + 1} / {allItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}

/* ─── Reusable Gallery Card ─── */
function GalleryCard({ item, idx, onClick, aspect }: { item: GalleryItem; idx: number; onClick: () => void; aspect: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl ${aspect}`}
    >
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] ease-out group-hover:scale-[1.06]"
      />

      {/* Ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

      {/* AI Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 px-3 py-1 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="h-2.5 w-2.5 text-primary" /> AI Enhanced
      </div>

      {/* Bottom caption — revealed on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="flex items-center gap-1.5 text-white/50 text-[11px] font-medium mb-1.5">
          <MapPin className="h-3 w-3 text-primary" /> {item.location}
        </div>
        <h3 className="text-white text-lg sm:text-xl font-bold leading-snug">{item.title}</h3>
      </div>

      {/* Hover ring */}
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-primary/0 group-hover:ring-primary/40 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}
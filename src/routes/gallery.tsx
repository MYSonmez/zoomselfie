"use client";

import type { StaticImageData } from "next/image";
import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Expand, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SmartVideo } from "@/components/site/SmartVideo";

import galataVideo from "@/assets/Galata-web-1.web.mp4";
import ortakoyVideo from "@/assets/ortaköy-web-4.mp4";
import galleryParisCouple from "@/assets/gallery-paris-couple.png";
import galleryAquariumFamily from "@/assets/gallery-aquarium-family.png";
import gallerySkiSolo from "@/assets/gallery-ski-solo.png";
import galleryStadiumFriends from "@/assets/gallery-stadium-friends.png";
import galleryCruiseSunset from "@/assets/gallery-cruise-sunset.png";
import galleryIstanbulGroup from "@/assets/gallery-istanbul-group.png";

const photos = [
  galleryParisCouple,
  galleryIstanbulGroup,
  gallerySkiSolo,
  galleryCruiseSunset,
  galleryStadiumFriends,
  galleryAquariumFamily,
];

type PhotoCell = {
  id: string;
  src?: StaticImageData;
  className: string;
  imageClassName?: string;
};

const photoCells: PhotoCell[] = [
  { id: "photo-01", src: photos[0], className: "md:col-span-6 md:row-span-2 min-h-[460px] md:min-h-[576px]", imageClassName: "object-center" },
  { id: "photo-02", src: photos[1], className: "md:col-span-3 min-h-[280px]" },
  { id: "future-01", className: "md:col-span-3 min-h-[280px]" },
  { id: "photo-03", src: photos[2], className: "md:col-span-3 min-h-[280px]" },
  { id: "future-02", className: "md:col-span-3 min-h-[280px]" },
  { id: "photo-04", src: photos[3], className: "md:col-span-4 min-h-[330px]" },
  { id: "photo-05", src: photos[4], className: "md:col-span-4 min-h-[330px]" },
  { id: "photo-06", src: photos[5], className: "md:col-span-4 min-h-[330px]" },
  { id: "future-03", className: "md:col-span-3 min-h-[250px]" },
  { id: "future-04", className: "md:col-span-3 min-h-[250px]" },
  { id: "future-05", className: "md:col-span-3 min-h-[250px]" },
  { id: "future-06", className: "md:col-span-3 min-h-[250px]" },
  { id: "future-07", className: "md:col-span-5 min-h-[290px]" },
  { id: "future-08", className: "md:col-span-4 min-h-[290px]" },
  { id: "future-09", className: "md:col-span-3 min-h-[290px]" },
  { id: "future-10", className: "md:col-span-3 min-h-[230px]" },
  { id: "future-11", className: "md:col-span-6 min-h-[230px]" },
  { id: "future-12", className: "md:col-span-3 min-h-[230px]" },
];

export default function Gallery() {
  const reduceMotion = useReducedMotion();
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  useEffect(() => {
    if (activePhoto === null) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight") setActivePhoto((current) => current === null ? null : (current + 1) % photos.length);
      if (event.key === "ArrowLeft") setActivePhoto((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhoto]);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, delay },
  });

  return (
    <div className="gallery-page overflow-hidden bg-[#f2f0ea] text-zinc-950">
      <section className="premium-grain relative flex min-h-[100svh] items-center overflow-hidden bg-black pb-8 pt-28 text-white sm:pb-10 sm:pt-32 lg:pb-8 lg:pt-28">
        <Image src={galleryParisCouple} alt="" priority sizes="100vw" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.82)_34%,rgba(0,0,0,.18)_70%,rgba(0,0,0,.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.22),transparent_42%,rgba(0,0,0,.84)_100%)]" />
        <div className="absolute -left-24 bottom-0 h-80 w-[34rem] rounded-full bg-primary/18 blur-3xl" />
        <div className="container-page relative z-10 w-full">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="relative z-20 max-w-[54rem]">
            <p className="inline-flex rounded-full border border-primary/35 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[.24em] text-primary backdrop-blur-md sm:text-xs">ZoomSelfie gallery</p>
            <h1 className="mt-6 max-w-[52.5rem] text-[clamp(3.25rem,5.2vw,5.7rem)] font-extrabold leading-[.92] tracking-[-.06em]">See what a moment can become.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/62 sm:text-lg">Photos become personal stories. Moments become videos worth keeping and sharing.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#photos" className="inline-flex h-13 items-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-black shadow-[0_18px_50px_-20px_rgba(255,184,0,.85)] transition hover:bg-white">Photos <ArrowDown className="h-4 w-4" /></a>
              <a href="#videos" className="inline-flex h-13 items-center gap-2 rounded-full border border-white/25 bg-black/20 px-7 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-black">Videos <Play className="h-4 w-4" /></a>
            </div>
          </motion.div>

        </div>
      </section>

      <section id="photos" className="py-20 sm:py-24 lg:py-32">
        <div className="container-page">
          <motion.header {...reveal()} className="flex items-end justify-between gap-8 border-b border-black/15 pb-7">
            <div><p className="text-xs font-bold uppercase tracking-[.24em] text-zinc-500">01 · Photos</p><h2 className="mt-3 text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">Still stories.</h2></div>
            <span className="hidden text-sm font-bold text-zinc-400 sm:block">Collection / 001</span>
          </motion.header>

          <div className="mt-7 grid auto-rows-auto gap-3 md:grid-cols-12 lg:gap-4">
            {photoCells.map((cell, index) => {
              const photoIndex = cell.src ? photos.indexOf(cell.src) : -1;
              return cell.src ? (
                <motion.button key={cell.id} {...reveal(Math.min(index * .035, .18))} type="button" onClick={() => setActivePhoto(photoIndex)} className={`premium-media group relative overflow-hidden rounded-[1.75rem] bg-zinc-900 ${cell.className}`}>
                  <Image src={cell.src} alt="ZoomSelfie photo creation" loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${cell.imageClassName ?? ""}`} />
                  <span className="absolute right-5 top-5 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"><Expand className="h-4 w-4" /></span>
                </motion.button>
              ) : (
                <FutureFrame key={cell.id} className={cell.className} index={index + 1} />
              );
            })}
          </div>
        </div>
      </section>

      <section id="videos" className="bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">
        <div className="container-page">
          <motion.header {...reveal()} className="flex items-end justify-between gap-8 border-b border-white/15 pb-7">
            <div><p className="text-xs font-bold uppercase tracking-[.24em] text-white/40">02 · Videos</p><h2 className="mt-3 text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">Moving moments.</h2></div>
            <span className="hidden text-sm font-bold text-white/30 sm:block">Collection / 001</span>
          </motion.header>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            <HoverVideo src={galataVideo} index="01" />
            <HoverVideo src={ortakoyVideo} index="02" />
            <VideoFrame index="03" />
            <VideoFrame index="04" />
            <VideoFrame index="05" />
            <VideoFrame index="06" />
            <VideoFrame index="07" />
            <VideoFrame index="08" />
            <VideoFrame index="09" />
            <VideoFrame index="10" />
            <VideoFrame index="11" />
            <VideoFrame index="12" />
          </div>
        </div>
      </section>

      <section className="premium-grain relative overflow-hidden bg-[#f2f0ea] py-24 sm:py-32">
        <div className="container-page text-center">
          <motion.div {...reveal()} className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-zinc-500">The collection continues</p>
            <h2 className="mt-6 text-5xl font-extrabold leading-[.96] tracking-[-.065em] sm:text-7xl lg:text-[5.5rem]">More places.<br />More ways to remember them.</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><Link to="/contact">Create with ZoomSelfie <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-black/20 bg-transparent px-8 hover:bg-black hover:text-white"><Link to="/products">Explore products</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-black/97 p-4 backdrop-blur-2xl sm:p-8" onClick={() => setActivePhoto(null)}>
            <button type="button" onClick={() => setActivePhoto(null)} aria-label="Close" className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-black sm:right-8 sm:top-8"><X className="h-5 w-5" /></button>
            <motion.img key={activePhoto} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} src={photos[activePhoto].src} alt="ZoomSelfie photo creation" onClick={(event) => event.stopPropagation()} className="max-h-[88svh] max-w-[90vw] rounded-[1.5rem] object-contain shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FutureFrame({ className, index }: { className: string; index: number }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`premium-card relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#e9e6df] ${className}`} aria-hidden="true">
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)] [background-size:32px_32px]" />
      <span className="absolute left-5 top-5 text-[10px] font-bold tabular-nums text-black/20">{String(index).padStart(2, "0")}</span>
      <span className="absolute left-1/2 top-1/2 h-px w-12 -translate-x-1/2 bg-black/12" />
      <span className="absolute left-1/2 top-1/2 h-12 w-px -translate-y-1/2 bg-black/12" />
    </motion.div>
  );
}

function HoverVideo({ src, index }: { src: string; index: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  const play = () => {
    if (reduceMotion) return;
    const video = videoRef.current;
    if (!video) return;
    if (video.readyState === 0) video.load();
    void video.play().catch(() => undefined);
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .2 }}
      tabIndex={0}
      aria-label={`ZoomSelfie video ${index}`}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
      className="premium-media group relative aspect-[9/16] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black outline-none ring-primary transition focus-visible:ring-2"
    >
      <SmartVideo
        ref={videoRef}
        src={src}
        eager
        muted
        loop
        playsInline
        onLoadedData={(event) => { event.currentTarget.currentTime = 0; }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 opacity-80 transition-opacity group-hover:opacity-30" />
      <span className="pointer-events-none absolute left-4 top-4 text-[10px] font-bold tabular-nums text-white/45">{index}</span>
    </motion.div>
  );
}

function VideoFrame({ index }: { index: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="premium-card relative aspect-[9/16] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[.035]" aria-hidden="true">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:40px_40px]" />
      <span className="absolute left-5 top-5 text-[10px] font-bold tabular-nums text-white/20">{index}</span>
      <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 text-white/15"><Play className="h-4 w-4" /></span>
    </motion.div>
  );
}

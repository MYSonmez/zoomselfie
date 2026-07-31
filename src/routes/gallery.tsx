import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Expand, Pause, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

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
      { title: "Gallery | ZoomSelfie" },
      {
        name: "description",
        content: "A visual collection of photos and videos created with ZoomSelfie.",
      },
    ],
  }),
  component: Gallery,
});

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
  src?: string;
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

function Gallery() {
  const reduceMotion = useReducedMotion();
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      void videoRef.current.play();
      setVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setVideoPlaying(false);
    }
  };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.65, delay },
  });

  return (
    <div className="gallery-page overflow-hidden bg-[#f2f0ea] text-zinc-950">
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary pb-14 pt-24 sm:pt-28 lg:pb-20">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-orange-500/25 blur-3xl" />
        <div className="container-page relative z-10 grid w-full items-center gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-10">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[.24em]">ZoomSelfie gallery</p>
            <h1 className="mt-6 text-6xl font-extrabold leading-[.9] tracking-[-.075em] sm:text-7xl lg:text-[6.5rem]">See what a moment can become.</h1>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#photos" className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-7 text-sm font-bold text-white transition hover:bg-zinc-800">Photos <ArrowDown className="h-4 w-4" /></a>
              <a href="#videos" className="inline-flex h-12 items-center gap-2 rounded-full border border-black/25 px-7 text-sm font-bold transition hover:bg-black hover:text-white">Videos <Play className="h-4 w-4" /></a>
            </div>
          </motion.div>

          <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .85, delay: .08 }} className="relative mx-auto h-[500px] w-full max-w-[680px] sm:h-[610px]">
            <div className="absolute left-[2%] top-[12%] h-[58%] w-[42%] rotate-[-5deg] overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-white shadow-2xl"><img src={galleryParisCouple} alt="ZoomSelfie photo example" className="h-full w-full object-cover" /></div>
            <div className="absolute right-[2%] top-[2%] h-[45%] w-[46%] rotate-[4deg] overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-white shadow-2xl"><img src={galleryIstanbulGroup} alt="ZoomSelfie photo example" className="h-full w-full object-cover" /></div>
            <div className="absolute bottom-[2%] right-[9%] h-[48%] w-[47%] rotate-[-2deg] overflow-hidden rounded-[1.8rem] border-[6px] border-white bg-white shadow-2xl"><img src={galleryCruiseSunset} alt="ZoomSelfie photo example" className="h-full w-full object-cover" /></div>
            <div className="absolute bottom-[5%] left-[12%] h-[32%] w-[30%] rotate-[6deg] overflow-hidden rounded-[1.5rem] border-[5px] border-white bg-white shadow-2xl"><img src={gallerySkiSolo} alt="ZoomSelfie photo example" className="h-full w-full object-cover" /></div>
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
                <motion.button key={cell.id} {...reveal(Math.min(index * .035, .18))} type="button" onClick={() => setActivePhoto(photoIndex)} className={`group relative overflow-hidden rounded-[1.75rem] bg-zinc-900 ${cell.className}`}>
                  <img src={cell.src} alt="ZoomSelfie photo creation" loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${cell.imageClassName ?? ""}`} />
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

          <div className="mt-7 grid gap-4 lg:grid-cols-12">
            <motion.div {...reveal()} className="relative min-h-[600px] overflow-hidden rounded-[2rem] bg-black lg:col-span-7 lg:row-span-2 lg:min-h-[696px]">
              <video ref={videoRef} src={galataVideo} poster={galleryIstanbulGroup} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
              <button type="button" onClick={toggleVideo} aria-label={videoPlaying ? "Pause video" : "Play video"} className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-white hover:text-black">{videoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button>
            </motion.div>
            <VideoFrame className="min-h-[340px] lg:col-span-5" index="02" />
            <VideoFrame className="min-h-[340px] lg:col-span-5" index="03" />
            <VideoFrame className="min-h-[260px] lg:col-span-3" index="04" />
            <VideoFrame className="min-h-[260px] lg:col-span-4" index="05" />
            <VideoFrame className="min-h-[260px] lg:col-span-5" index="06" />
            <VideoFrame className="min-h-[230px] lg:col-span-5" index="07" />
            <VideoFrame className="min-h-[230px] lg:col-span-3" index="08" />
            <VideoFrame className="min-h-[230px] lg:col-span-4" index="09" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2f0ea] py-24 sm:py-32">
        <div className="container-page text-center">
          <motion.div {...reveal()} className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-zinc-500">The collection continues</p>
            <h2 className="mt-6 text-5xl font-extrabold leading-[.96] tracking-[-.065em] sm:text-7xl lg:text-[5.5rem]">More places.<br />More ways to remember them.</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><Link to="/book-demo">Create with ZoomSelfie <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-black/20 bg-transparent px-8 hover:bg-black hover:text-white"><Link to="/products">Explore products</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-black/97 p-4 backdrop-blur-2xl sm:p-8" onClick={() => setActivePhoto(null)}>
            <button type="button" onClick={() => setActivePhoto(null)} aria-label="Close" className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-black sm:right-8 sm:top-8"><X className="h-5 w-5" /></button>
            <motion.img key={activePhoto} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} src={photos[activePhoto]} alt="ZoomSelfie photo creation" onClick={(event) => event.stopPropagation()} className="max-h-[88svh] max-w-[90vw] rounded-[1.5rem] object-contain shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FutureFrame({ className, index }: { className: string; index: number }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#e9e6df] ${className}`} aria-hidden="true">
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)] [background-size:32px_32px]" />
      <span className="absolute left-5 top-5 text-[10px] font-bold tabular-nums text-black/20">{String(index).padStart(2, "0")}</span>
      <span className="absolute left-1/2 top-1/2 h-px w-12 -translate-x-1/2 bg-black/12" />
      <span className="absolute left-1/2 top-1/2 h-12 w-px -translate-y-1/2 bg-black/12" />
    </motion.div>
  );
}

function VideoFrame({ className, index }: { className: string; index: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] ${className}`} aria-hidden="true">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:40px_40px]" />
      <span className="absolute left-5 top-5 text-[10px] font-bold tabular-nums text-white/20">{index}</span>
      <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 text-white/15"><Play className="h-4 w-4" /></span>
    </motion.div>
  );
}

"use client";

import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  Check,
  Code2,
  Globe2,
  LayoutDashboard,
  Monitor,
  MonitorSmartphone,
  Pause,
  Play,
  Share2,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SmartVideo } from "@/components/site/SmartVideo";
import { useI18n } from "@/i18n/I18nProvider";

import heroVideo from "@/assets/hero-video.mp4";
import galataVideo from "@/assets/Galata-web-1.web.mp4";
import galataWomanPortrait from "@/assets/galata-woman-portrait.png";
import heroKiosk from "@/assets/hero-kiosk.svg";
import kioskParis from "@/assets/kiosk-paris.png";
import prodPlatform from "@/assets/campaign-tool-placeholder.svg";
import prodDeveloperApi from "@/assets/api-placeholder.svg";
import prodDesktopApp from "@/assets/desktop-app-placeholder.svg";
import appDashboard from "@/assets/app-dashboard.png";
import webPanelPlaceholder from "@/assets/web-panel-placeholder.svg";
import galleryAquarium from "@/assets/gallery-aquarium-family.png";
import galleryCruise from "@/assets/gallery-cruise-sunset.png";
import galleryIstanbul from "@/assets/gallery-istanbul-group.png";
import galleryStadium from "@/assets/gallery-stadium-friends.png";

const experienceSteps = [
  {
    number: "01",
    icon: Camera,
    label: "Capture",
    title: "Take your photo",
    text: "Pose at a ZoomSelfie kiosk or begin with a photo already on your phone.",
    image: heroKiosk,
  },
  {
    number: "02",
    icon: Sparkles,
    label: "Personalize",
    title: "Choose your story",
    text: "Pick a landmark, visual theme or branded template that belongs to the moment.",
    image: galleryAquarium,
  },
  {
    number: "03",
    icon: Play,
    label: "Create",
    title: "Watch it come alive",
    text: "Your portrait becomes part of a short visual journey built around the scene.",
    image: galleryIstanbul,
  },
  {
    number: "04",
    icon: Share2,
    label: "Keep",
    title: "Receive and share",
    text: "Open your ZoomSelfie by QR or link, download it and share it wherever you like.",
    image: galleryCruise,
  },
];

const channels = [
  {
    icon: MonitorSmartphone,
    label: "At the moment",
    title: "Kiosk",
    text: "A complete self-service creation point for landmarks, venues and events. ZoomSelfie kiosk systems are available as purchasable hardware solutions.",
    image: kioskParis,
    to: "/kiosk" as const,
    cta: "Explore kiosk systems",
  },
  {
    icon: Globe2,
    label: "From any browser",
    title: "Web Campaign",
    text: "Let people upload a photo, select a template and create branded content without visiting a physical kiosk.",
    image: prodPlatform,
    to: "/products/campaign-tool" as const,
    cta: "Explore campaigns",
  },
  {
    icon: LayoutDashboard,
    label: "Behind every setup",
    title: "Web Panel",
    text: "Manage campaigns, kiosks, templates, teams and usage from one clear web workspace.",
    image: webPanelPlaceholder,
    to: "/products/web-panel" as const,
    cta: "Explore the Web Panel",
  },
  {
    icon: Monitor,
    label: "For professional workflows",
    title: "Desktop App",
    text: "Create larger sets of personalized photo and video content for photography and creative projects.",
    image: prodDesktopApp,
    to: "/products/desktop-app" as const,
    cta: "Explore the Desktop App",
  },
  {
    icon: Code2,
    label: "Inside your product",
    title: "API",
    text: "Add the ZoomSelfie creation experience to your own app, booking flow, loyalty platform or digital product.",
    image: prodDeveloperApi,
    to: "/products/api" as const,
    cta: "Explore the API",
  },
];

const audiences = [
  { title: "Destinations & hospitality", text: "Turn the identity of a place into a personal memory visitors take with them.", image: galleryAquarium },
  { title: "Brands & events", text: "Create participation, branded sharing and a more memorable audience touchpoint.", image: galleryStadium },
  { title: "Photographers & creative teams", text: "Offer a distinctive digital product through a focused professional workflow.", image: prodDesktopApp },
];

const localizedBlogPreview = {
  en: {
    eyebrow: "Stories & ideas",
    title: "Look closer at the experience.",
    text: "Creative inspiration, practical guides and lessons from the complete photo journey.",
    cta: "Visit the journal",
    read: "Read story",
    posts: [
      { title: "One photo can hold a much bigger story", excerpt: "How a person, place and moment become one memory worth keeping.", slug: "one-photo-a-bigger-story" },
      { title: "Inside a ZoomSelfie kiosk experience", excerpt: "A closer look at the self-service journey from first tap to final QR.", slug: "inside-a-zoomselfie-kiosk-experience" },
      { title: "What connects an attraction photography operation?", excerpt: "The PhotoSoft system behind capture, sales, delivery and insight.", slug: "connecting-an-attraction-photography-operation" },
    ],
  },
  tr: {
    eyebrow: "Hikâyeler ve fikirler",
    title: "Deneyime daha yakından bakın.",
    text: "Yaratıcı ilham, pratik rehberler ve fotoğraf yolculuğunun tamamından edinilen deneyimler.",
    cta: "Blogu ziyaret et",
    read: "Yazıyı oku",
    posts: [
      { title: "Tek bir fotoğraf çok daha büyük bir hikâye taşıyabilir", excerpt: "İnsan, mekân ve anın saklanmaya değer tek bir hatıraya dönüşmesi.", slug: "tek-fotograf-daha-buyuk-bir-hikaye" },
      { title: "Bir ZoomSelfie kiosk deneyiminin içinde", excerpt: "İlk dokunuştan son QR koduna kadar self-servis yolculuğa yakından bakış.", slug: "zoomselfie-kiosk-deneyiminin-icinde" },
      { title: "Turistik mekân fotoğraf operasyonunu ne birleştirir?", excerpt: "Çekim, satış, teslimat ve içgörünün arkasındaki PhotoSoft sistemi.", slug: "turistik-mekan-fotograf-operasyonunu-birlestirmek" },
    ],
  },
  nl: {
    eyebrow: "Verhalen en ideeën",
    title: "Bekijk de ervaring van dichterbij.",
    text: "Creatieve inspiratie, praktische gidsen en lessen uit de volledige fotoreis.",
    cta: "Bezoek het journal",
    read: "Lees verhaal",
    posts: [
      { title: "Eén foto kan een veel groter verhaal dragen", excerpt: "Hoe mens, plek en moment één herinnering worden die je wilt bewaren.", slug: "een-foto-een-groter-verhaal" },
      { title: "Binnen in een ZoomSelfie-kioskervaring", excerpt: "Een blik op de selfservicereis van de eerste aanraking tot de laatste QR-code.", slug: "in-een-zoomselfie-kioskervaring" },
      { title: "Wat verbindt een attractiefotografie-operatie?", excerpt: "Het PhotoSoft-systeem achter opname, verkoop, levering en inzicht.", slug: "een-attractiefotografie-operatie-verbinden" },
    ],
  },
} as const;

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { locale } = useI18n();
  const journal = localizedBlogPreview[locale];
  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start start", "end end"],
  });
  const experienceScale = useTransform(experienceProgress, [0, 1], [.9, 1]);
  const experienceRadius = useTransform(experienceProgress, [0, 1], ["2.8rem", "1.25rem"]);

  useMotionValueEvent(experienceProgress, "change", (latest) => {
    if (reduceMotion) return;
    const nextStep = Math.min(experienceSteps.length - 1, Math.floor(latest * experienceSteps.length));
    setActiveStep((current) => current === nextStep ? current : nextStep);
  });

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.65, delay },
  });

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying((value) => !value);
  };

  return (
    <div className="zoomselfie-home overflow-x-clip bg-white text-zinc-950">
      <section className="premium-grain zoomselfie-screen items-end overflow-hidden bg-black pb-12 pt-24 sm:pb-16 lg:pb-20">
        <SmartVideo ref={videoRef} src={heroVideo} poster={galleryIstanbul.src} eager autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.05)_35%,rgba(0,0,0,.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.62),transparent_64%)]" />
        <div className="absolute -bottom-36 -left-28 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />

        <div aria-hidden="true" className="ambient-drift absolute bottom-[16%] right-[5%] z-10 hidden items-center gap-3 2xl:flex">
          <div className="premium-media relative h-44 w-28 -rotate-6 overflow-hidden rounded-[1.3rem] border-4 border-white bg-white shadow-2xl">
            <Image src={galataWomanPortrait} alt="" sizes="112px" className="h-full w-full object-cover" />
            <span className="absolute inset-x-2 bottom-2 rounded-full bg-white/90 py-1 text-center text-[8px] font-black uppercase tracking-[.12em] text-black">Portrait</span>
          </div>
          <div className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/20 text-primary backdrop-blur"><ArrowRight className="h-4 w-4" /></div>
          <div className="premium-media relative h-52 w-32 rotate-3 overflow-hidden rounded-[1.45rem] border-4 border-zinc-950 bg-black shadow-2xl">
            <SmartVideo src={galataVideo} poster={galleryIstanbul.src} muted loop playsInline autoPlay className="h-full w-full object-cover" />
            <span className="absolute inset-x-2 bottom-2 rounded-full bg-primary py-1 text-center text-[8px] font-black uppercase tracking-[.12em] text-black">ZoomSelfie</span>
          </div>
        </div>

        <div className="container-page relative z-10 w-full text-white">
          <motion.div
            initial={reduceMotion ? false : { opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="text-xs font-bold uppercase tracking-[.22em] text-primary">Your photo. Your place. Your story.</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-extrabold leading-[.94] tracking-[-0.06em] sm:text-7xl lg:text-[6.3rem]">
              Take a photo.<br />Make the moment yours.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-xl sm:leading-8">
              Capture or upload your photo, choose a place or theme, and receive a personalized video ready to download and share.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-13 rounded-full px-8 text-base shadow-[0_18px_55px_-18px_rgba(255,184,0,.9)]">
                <Link to="/gallery">See the experience <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <a href="#experience" className="inline-flex h-13 items-center gap-2 rounded-full border border-white/30 bg-black/15 px-7 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-zinc-950">
                How it works <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-between">
            <div className="hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/45 sm:flex">
              <span className="h-px w-12 bg-white/30" /> Capture · Personalize · Create · Share
            </div>
            <button type="button" onClick={toggleVideo} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black" aria-label={isPlaying ? "Pause video" : "Play video"}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" fill="currentColor" />}
            </button>
          </div>
        </div>
      </section>

      <section ref={experienceRef} id="experience" className="relative bg-[#f7f7f5] lg:h-[240svh]">
        <div className="home-experience-sticky zoomselfie-screen py-14 lg:pt-24 lg:pb-12">
        <div className="container-page w-full">
          <div className="grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
            <motion.div {...reveal()}>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">The ZoomSelfie journey</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Simple enough to enjoy. Special enough to keep.</h2>
              <div className="mt-8 space-y-2">
                {experienceSteps.map((step, index) => {
                  const active = activeStep === index;
                  return (
                    <button
                      key={step.number}
                      type="button"
                      onMouseEnter={() => setActiveStep(index)}
                      onFocus={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                      className={`w-full rounded-[1.35rem] border p-4 text-left transition-all ${active ? "border-primary/40 bg-white shadow-[0_18px_50px_-35px_rgba(0,0,0,.35)]" : "border-transparent text-zinc-500 hover:bg-white/60"}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors ${active ? "bg-primary text-zinc-950" : "bg-zinc-200 text-zinc-600"}`}><step.icon className="h-4 w-4" /></span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3"><h3 className={`font-bold ${active ? "text-zinc-950" : ""}`}>{step.title}</h3><span className="text-[10px] font-black">{step.number}</span></div>
                          <AnimatePresence initial={false}>
                            {active && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-2 text-sm leading-6 text-zinc-600">{step.text}</motion.p>}
                          </AnimatePresence>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div {...reveal(.08)} style={{ scale: experienceScale, borderRadius: experienceRadius }} className="premium-media frame-corners zs-stage-visual relative min-h-[500px] overflow-hidden bg-zinc-950 shadow-[0_28px_80px_-35px_rgba(0,0,0,.45)] lg:min-h-[560px]">
              <motion.div aria-hidden="true" style={{ scaleX: experienceProgress }} className="absolute inset-x-0 top-0 z-20 h-1 origin-left bg-primary" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={experienceSteps[activeStep].image.src}
                  src={experienceSteps[activeStep].image.src}
                  alt=""
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: .55 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/10" />
              <div className="absolute right-7 top-7 z-10 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] font-black tracking-[.18em] text-white/70 backdrop-blur-md">0{activeStep + 1} / 04</div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">{experienceSteps[activeStep].label}</p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{experienceSteps[activeStep].title}</h3>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>

      <section id="gallery-preview" className="zoomselfie-screen overflow-hidden bg-white py-14 lg:pt-24 lg:pb-12">
        <div className="container-page w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <motion.div {...reveal()}>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">One photo, a bigger story</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl">You bring the moment.<br />ZoomSelfie brings it to life.</h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600">Choose the visual story that fits you. A portrait becomes a short video shaped around a landmark, destination, event or campaign.</p>
              <div className="mt-8 space-y-3">
                {["Ready-made or custom branded templates", "No app download required", "QR, link or email delivery", "Ready to download and share"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-zinc-950"><Check className="h-3.5 w-3.5" /></span>{item}</div>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-9 rounded-full px-7">
                <Link to="/gallery">Explore the gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>

            <motion.div {...reveal(.1)} className="zs-phone-stage relative flex min-h-[540px] items-center justify-center">
              <div className="absolute h-[430px] w-[430px] rounded-full bg-primary/20 blur-3xl" />
              <motion.div animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-4, -3, -4] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="premium-media relative z-10 w-[42%] max-w-[230px] -translate-x-5 overflow-hidden rounded-[2.2rem] border-[6px] border-white bg-white shadow-[0_28px_80px_rgba(0,0,0,.23)]">
                <Image src={galataWomanPortrait} alt="Original visitor portrait" className="aspect-[9/16] w-full object-cover" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold">Your photo</div>
              </motion.div>
              <motion.div animate={reduceMotion ? undefined : { y: [0, 12, 0], rotate: [4, 3, 4] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="premium-media relative z-20 -ml-8 w-[42%] max-w-[230px] translate-x-5 overflow-hidden rounded-[2.2rem] border-[6px] border-zinc-950 bg-black shadow-[0_32px_90px_rgba(0,0,0,.32)]">
                <SmartVideo src={galataVideo} poster={galataWomanPortrait.src} autoPlay muted loop playsInline className="aspect-[9/16] w-full object-cover" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-zinc-950">Your ZoomSelfie</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="products-preview" className="zoomselfie-screen bg-zinc-950 py-14 text-white lg:pt-24 lg:pb-12">
        <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-6">
          <motion.div {...reveal()} className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Where ZoomSelfie lives</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">One creative engine. Five products with different jobs.</h2>
          </motion.div>

          <div className="zs-channel-row mt-10 flex min-h-[450px] flex-col gap-3 lg:h-[480px] lg:min-h-0 lg:flex-row">
            {channels.map((channel, index) => {
              const active = activeChannel === index;
              return (
                <article
                  key={channel.title}
                  onMouseEnter={() => setActiveChannel(index)}
                  onFocus={() => setActiveChannel(index)}
                  onClick={() => setActiveChannel(index)}
                  className={`premium-media group relative isolate min-h-[300px] cursor-pointer overflow-hidden rounded-[2rem] transition-[flex] duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:min-h-0 ${active ? "lg:flex-[2.2]" : "lg:flex-1"}`}
                  tabIndex={0}
                >
                  <Image src={channel.image} alt="" sizes="(max-width: 768px) 100vw, 33vw" className={`absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-1000 ${active ? "scale-100" : "scale-105"}`} />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/20 to-black/10" />
                  <div className="flex h-full flex-col p-6 sm:p-8">
                    <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-zinc-950"><channel.icon className="h-5 w-5" /></span><span className="text-xs font-black text-white/55">0{index + 1}</span></div>
                    <div className="mt-auto max-w-xl">
                      <p className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">{channel.label}</p>
                      <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{channel.title}</h3>
                      <div className={`overflow-hidden transition-all duration-500 ${active ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-0"}`}>
                        <p className="max-w-lg text-sm leading-6 text-white/70">{channel.text}</p>
                        <Link to={channel.to} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">{channel.cta} <ArrowRight className="h-4 w-4" /></Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solutions-preview" className="zoomselfie-screen bg-[#f7f7f5] py-14 lg:pt-24 lg:pb-12">
        <div className="container-page w-full">
          <motion.div {...reveal()} className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Value for every side</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl">Personal for the audience.<br />Valuable for the business.</h2>
            </div>
            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-7 text-zinc-600">ZoomSelfie begins with the person in the frame, then creates engagement, visibility or a new creative product for the team behind the experience.</p>
              <Button asChild variant="outline" className="mt-6 rounded-full px-6">
                <Link to="/solutions">Explore all solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <motion.article key={audience.title} {...reveal(index * .07)} className="premium-media frame-corners zs-audience-card group relative min-h-[390px] overflow-hidden rounded-[2rem] bg-zinc-950">
                <Image src={audience.image} alt="" sizes="(max-width: 768px) 100vw, 25vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white"><h3 className="text-2xl font-bold">{audience.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/68">{audience.text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section data-no-translate className="zoomselfie-screen overflow-hidden bg-[#f4f0e8] py-14 lg:pt-24 lg:pb-12">
        <div className="container-page w-full">
          <motion.div {...reveal()} className="grid gap-7 border-b border-black/15 pb-7 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[.2em] text-amber-600">{journal.eyebrow}</p><h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl">{journal.title}</h2></div>
            <div className="max-w-lg lg:justify-self-end"><p className="text-base leading-7 text-zinc-600">{journal.text}</p><Link to="/blog" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-950">{journal.cta}<ArrowRight className="h-4 w-4" /></Link></div>
          </motion.div>
          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            {journal.posts.map((post, index) => {
              const images = [galleryIstanbul, kioskParis, appDashboard];
              return (
                <motion.article key={post.slug} {...reveal(index * .06)} className={`group ${index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-3" : "lg:col-span-4"}`}>
                  <Link to={`/blog/${locale}/${post.slug}`} className="block">
                    <div className={`premium-media relative overflow-hidden rounded-[1.75rem] bg-zinc-900 ${index === 1 ? "min-h-[300px] lg:min-h-[350px]" : "min-h-[340px] lg:min-h-[410px]"}`}>
                      <Image src={images[index]} alt="" loading="lazy" sizes="(max-width: 1024px) 100vw, 40vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/5 to-black/5" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7"><p className="text-[9px] font-black uppercase tracking-[.18em] text-primary">0{index + 1} · {journal.read}</p><h3 className="mt-3 text-xl font-extrabold leading-[1.1] sm:text-2xl">{post.title}</h3><p className="mt-3 text-xs leading-5 text-white/60">{post.excerpt}</p></div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="photosoft-preview" className="premium-grain zoomselfie-screen overflow-hidden bg-[#111113] py-14 text-white lg:pt-24 lg:pb-12">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-cyan-300/[.025]" />
        <div className="container-page relative w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <motion.div {...reveal()}>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Same family, a different job</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-[-0.055em] sm:text-6xl">When a creative experience becomes a complete operation.</h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400">ZoomSelfie helps a person create their own content. PhotoSoft manages the professional photography business inside an attraction—from capture and guest matching to sales, delivery and analytics.</p>
              <Button asChild className="mt-8 rounded-full bg-cyan-300 px-7 text-zinc-950 hover:bg-white">
                <Link to="/photosoft">Explore PhotoSoft <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
            <motion.div {...reveal(.1)} className="premium-media frame-corners relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-2 shadow-2xl">
              <Image src={appDashboard} alt="PhotoSoft operations dashboard" className="zs-dashboard-image h-[420px] w-full rounded-[1.5rem] object-cover object-top sm:h-[500px]" />
              <span className="interface-scan absolute inset-x-8 top-1/2 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="premium-grain zoomselfie-screen isolate overflow-hidden bg-black py-20 text-white">
        <Image src={galleryCruise} alt="" sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="container-page w-full text-center">
          <motion.div {...reveal()} className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Create the moment</p>
            <h2 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-0.055em] sm:text-7xl">Bring ZoomSelfie to your audience.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Launch a self-service experience through a purchasable kiosk system, a web campaign or your own integrated product.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="h-13 rounded-full px-8 text-base"><Link to="/contact">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-white/30 bg-black/20 px-8 text-base text-white hover:bg-white hover:text-zinc-950"><Link to="/products">Explore products</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

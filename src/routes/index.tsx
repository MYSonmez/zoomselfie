import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Camera,
  UploadCloud,
  Sparkles,
  ZoomIn,
  QrCode,
  TrendingUp,
  Share2,
  Zap,
  Star,
  BarChart3,
  Layers,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Landmark,
  Building2,
  TreePalm,
  Ticket,
  Check,
  Maximize2,
  X,
  ShieldCheck,
  Globe2,
  Users,
  Award,
} from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionTitle } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";

import heroVideo from "@/assets/hero-video.mp4";
import kioskParis from "@/assets/kiosk-paris.png";
import kioskIstanbul from "@/assets/kiosk-istanbul.png";
import kioskRome from "@/assets/kiosk-rome.png";
import kioskHotel from "@/assets/kiosk-hotel.png";
import kioskPark from "@/assets/kiosk-park.png";
import kioskAquarium from "@/assets/kiosk-aquarium.png";
import kioskSki from "@/assets/kiosk-ski.png";
import kioskCruise from "@/assets/kiosk-cruise.png";
import kioskStadium from "@/assets/kiosk-stadium.png";
import heroAiMemory from "@/assets/hero-ai-memory.png";
import appDashboard from "@/assets/app-dashboard.png";
import galataVideo from "@/assets/Galata-web-1.mp4";
import galataWomanPortrait from "@/assets/galata-woman-portrait.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const venueKiosks = [
  {
    id: "paris",
    title: "Eiffel Tower — Art Nouveau Pavilion",
    location: "Paris, France",
    category: "Historical & Monuments",
    image: kioskParis,
    desc: "Custom wrought-iron Art Nouveau pavilion kiosk designed to harmonize with Parisian architecture.",
    tag: "Monuments",
    stats: "2.4M+ Scans / Year",
  },
  {
    id: "istanbul",
    title: "Hagia Sophia & Bosphorus Pavilion",
    location: "Istanbul, Turkey",
    category: "Historical & Monuments",
    image: kioskIstanbul,
    desc: "Ottoman dome architecture with handmade Iznik tiles and instant Maiden's Tower souvenirs.",
    tag: "World Heritage",
    stats: "1.8M+ Scans / Year",
  },
  {
    id: "rome",
    title: "Colosseum Roman Temple Kiosk",
    location: "Rome, Italy",
    category: "Historical & Monuments",
    image: kioskRome,
    desc: "Classical marble architecture topped with Capitoline Wolf sculpture and solar roof integration.",
    tag: "Ancient Wonder",
    stats: "3.1M+ Scans / Year",
  },
  {
    id: "hotel",
    title: "Grand Palais Luxury Hotel Lobby",
    location: "Monaco & Paris",
    category: "Hotels & Resorts",
    image: kioskHotel,
    desc: "Opulent gold and marble indoor kiosk tailored for 5-star concierge photo experiences.",
    tag: "Luxury Resort",
    stats: "99.2% Guest Rating",
  },
  {
    id: "ski",
    title: "Alpine Mountain Ski Resort Kiosk",
    location: "Swiss Alps & Aspen",
    category: "Ski & Adventure",
    image: kioskSki,
    desc: "Climate-controlled sub-zero outdoor photo booth with anti-frost glass and instant slope pass integration.",
    tag: "Ski Resort",
    stats: "3,800+ Daily Captures",
  },
  {
    id: "cruise",
    title: "Ocean Cruise Top Deck Kiosk",
    location: "Caribbean & Mediterranean",
    category: "Hotels & Resorts",
    image: kioskCruise,
    desc: "Nautical gold-trimmed sunset kiosk engineered for luxury cruise ship upper decks.",
    tag: "Cruise Ship",
    stats: "96% Photo Pass Conversion",
  },
  {
    id: "stadium",
    title: "VIP Arena & Stadium Concourse",
    location: "London & New York",
    category: "Sports & Events",
    image: kioskStadium,
    desc: "High-density fan photo booth with dynamic team LED branding and game night video reels.",
    tag: "Stadium VIP",
    stats: "5,200+ Captures / Game",
  },
  {
    id: "park",
    title: "Rollercoaster Theme Park Kiosk",
    location: "Orlando, Florida",
    category: "Theme Parks",
    image: kioskPark,
    desc: "High-throughput photo capture booth integrated with ride speed triggers and photo passes.",
    tag: "Theme Parks",
    stats: "4,500+ Daily Photos",
  },
  {
    id: "aquarium",
    title: "Underwater Ocean Tunnel Kiosk",
    location: "Dubai & Singapore",
    category: "Aquariums & Zoos",
    image: kioskAquarium,
    desc: "Sub-aquatic glow enclosure delivering instant aquatic souvenir videos to visitor smartphones.",
    tag: "Aquariums",
    stats: "94% Share Rate",
  },
];

const steps = [
  { n: "01", title: "Take Photo", desc: "Guests snap a high-res photo at custom venue kiosks or with staff cameras.", icon: Camera },
  { n: "02", title: "Upload", desc: "Photos stream securely to the ZoomSelfie AI processing cloud in milliseconds.", icon: UploadCloud },
  { n: "03", title: "AI Processing", desc: "Our engine enhances lighting, applies venue branding, and generates 4K memory assets.", icon: Sparkles },
  { n: "04", title: "Zoom Animation", desc: "A signature cinematic zoom effect converts static photos into shareable video clips.", icon: ZoomIn },
  { n: "05", title: "QR Delivery", desc: "Guests scan a personalized QR code to instantly stream, save, and post to social media.", icon: QrCode },
];

export function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalImage, setActiveModalImage] = useState<typeof venueKiosks[0] | null>(null);
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [visitors, setVisitors] = useState(12000);
  const [captureRate, setCaptureRate] = useState(35);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const filteredKiosks =
    selectedCategory === "All"
      ? venueKiosks
      : venueKiosks.filter((k) => k.category === selectedCategory);

  const estimatedMonthlyRevenue = Math.round((visitors * (captureRate / 100) * 4.5 * 30));

  return (
    <div className="overflow-hidden bg-background">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-accent/30 blur-3xl" />

        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent/60 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>AI-Powered Visitor Experience Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1]"
            >
              Turn Every Visitor Photo Into a{" "}
              <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Digital Memory.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              ZoomSelfie captures, animates, and instantly delivers branded 4K video memories directly to guests' smartphones via QR. Built for world-class venues.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="rounded-full px-8 h-13 text-base shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
                <Link to="/book-demo">
                  Book a Venue Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 h-13 text-base border-border hover:bg-accent transition-all">
                <Link to="/kiosk">Explore Hardware</Link>
              </Button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/70 border border-border/80 backdrop-blur-md shadow-sm"
            >
              {[
                { label: "Venues Worldwide", val: "250+" },
                { label: "Photos Processed", val: "18M+" },
                { label: "Avg Delivery Speed", val: "2.4s" },
                { label: "Guest Delight Rate", val: "99.4%" },
              ].map((m) => (
                <div key={m.label} className="text-center p-2">
                  <div className="text-2xl font-bold text-foreground">{m.val}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* HERO VIDEO PLAYER SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 relative mx-auto max-w-5xl group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-slate-950 shadow-[var(--shadow-elevated)] group-hover:shadow-[var(--shadow-glow-lg)] transition-all duration-500">
              <video
                ref={videoRef}
                src={heroVideo}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-[340px] sm:h-[480px] md:h-[580px] object-cover"
              />

              {/* Video Overlay controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs">
                <button onClick={togglePlay} className="hover:text-primary transition-colors flex items-center gap-1">
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  <span>{isPlaying ? "Pause" : "Play"}</span>
                </button>
                <span className="text-white/30">|</span>
                <button onClick={toggleMute} className="hover:text-primary transition-colors flex items-center gap-1">
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  <span>{isMuted ? "Unmute" : "Muted"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS — TIMELINE */}
      <Section className="bg-surface/50 border-y border-border py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            eyebrow="Simple 5-Step Process"
            title="From Snapshot to Shareable Memory"
            description="How ZoomSelfie turns a visitor photo into an engaging, branded digital experience."
          />
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="mt-20 hidden lg:flex items-start justify-center gap-0">
          {steps.map((s, idx) => (
            <div key={s.n} className="flex items-start">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="flex flex-col items-center w-44"
              >
                {/* Icon circle */}
                <div className="relative">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white border-2 border-primary/20 shadow-[0_8px_24px_rgba(255,184,0,0.18)] text-primary">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 h-6 w-6 rounded-full bg-primary text-primary-foreground text-[10px] font-black grid place-items-center shadow">{s.n}</span>
                </div>
                {/* Text */}
                <h3 className="mt-5 text-sm font-bold text-foreground text-center leading-snug">{s.title}</h3>
                <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed text-center px-2">{s.desc}</p>
              </motion.div>

              {/* Arrow connector */}
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 + 0.2 }}
                  className="flex items-center mt-8 origin-left"
                >
                  <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-primary/20" />
                  <div className="h-0 w-0 border-y-4 border-y-transparent border-l-[6px] border-l-primary/40" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="mt-12 lg:hidden flex flex-col gap-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex items-start gap-4 rounded-2xl bg-white border border-border p-5 shadow-sm"
            >
              <div className="relative shrink-0">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-[9px] font-black grid place-items-center">{s.n}</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* VENUE KIOSK SHOWCASE — TOP 3 */}
      <Section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            eyebrow="Bespoke Architecture"
            title="Kiosks Designed for Landmark Venues"
            description="We don't build generic boxes. Every installation is tailor-made to match the architecture, brand, and ambiance of the world's most iconic venues."
          />
        </motion.div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {venueKiosks.slice(0, 3).map((kiosk, idx) => (
            <motion.div
              key={kiosk.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveModalImage(kiosk)}
              className="group cursor-pointer relative rounded-3xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-[var(--shadow-elevated)] transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={kiosk.image}
                  alt={kiosk.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <span className="absolute top-4 left-4 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-bold text-white">{kiosk.tag}</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg"><Maximize2 className="h-5 w-5" /></span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-medium opacity-80 mb-0.5">{kiosk.location}</div>
                  <h4 className="text-base font-bold leading-snug">{kiosk.title}</h4>
                </div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between border-t border-border">
                <span className="text-xs font-bold text-primary">{kiosk.stats}</span>
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">View <ArrowRight className="h-3 w-3" /></span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Button asChild variant="outline" className="rounded-full px-8 border-border hover:bg-accent hover:border-primary/40 transition-all">
            <Link to="/solutions">Explore All Venue Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </Section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setActiveModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-[1.3fr_1fr]">
                <div className="bg-black flex items-center justify-center p-2 max-h-[70vh] md:max-h-full overflow-hidden">
                  <img
                    src={activeModalImage.image}
                    alt={activeModalImage.title}
                    className="w-full h-full object-contain max-h-[600px]"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                      {activeModalImage.category}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-foreground">{activeModalImage.title}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{activeModalImage.location}</p>
                    
                    <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                      {activeModalImage.desc}
                    </p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <Check className="h-4 w-4 text-primary" /> Weatherproof Enclosure & Solar Roof Options
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <Check className="h-4 w-4 text-primary" /> Integrated 4K Touchscreen & DSLR Lens System
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <Check className="h-4 w-4 text-primary" /> Direct Thermal & QR Video Stream Engine
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">Annual Performance</div>
                      <div className="text-lg font-extrabold text-primary">{activeModalImage.stats}</div>
                    </div>
                    <Button asChild className="rounded-full">
                      <Link to="/book-demo">Request Custom Kiosk Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE AI MAGIC — SIDE BY SIDE WITH CONTEXT */}
      <Section className="bg-surface/60 border-y border-border py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text context */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3 py-1 text-xs font-bold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> The AI Magic
            </span>
            <Link to="/gallery" className="group block">
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] group-hover:text-primary transition-colors inline-flex items-center gap-3">
                <span>From a snapshot<br />to a cinematic memory.</span>
                <ArrowRight className="h-7 w-7 text-primary transition-transform group-hover:translate-x-2 shrink-0 hidden sm:inline-block" />
              </h2>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
              In under 3 seconds, ZoomSelfie's AI engine captures, enhances, and delivers a stunning branded 4K video memory — no app, no waiting.
            </p>

            <div className="mt-5">
              <Button asChild variant="outline" size="sm" className="rounded-full gap-2 border-primary/40 text-foreground hover:text-primary hover:border-primary">
                <Link to="/gallery">
                  Explore Full Gallery <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 space-y-5">
              {[
                { icon: Zap, title: "Instant AI rendering", desc: "Real-time 4K enhancement, color grading, and venue branding applied in milliseconds." },
                { icon: QrCode, title: "Zero-friction delivery", desc: "Guests scan a QR code to download — no app install, no login, no friction." },
                { icon: Share2, title: "Built for social virality", desc: "Optimized 9:16 format for Instagram, TikTok, and WhatsApp sharing straight from the kiosk." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-white border border-border shadow-sm text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{item.title}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Cards (Clickable link to Gallery) */}
          <Link to="/gallery" className="group flex items-end justify-center gap-6 sm:gap-10 hover:scale-[1.02] transition-transform duration-300">
            {/* Photo card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative shrink-0"
              style={{ rotate: "-3deg" }}
            >
              <div className="w-[150px] sm:w-[190px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.22)] border border-white/60">
                <img
                  src={galataWomanPortrait}
                  alt="ZoomSelfie AI photo output"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="inline-flex items-center gap-1 rounded-full bg-white border border-border px-3 py-1 text-[10px] font-bold text-foreground shadow-sm group-hover:border-primary">
                  <Camera className="h-2.5 w-2.5 text-primary" /> Raw capture
                </span>
              </div>
            </motion.div>

            {/* Video card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative shrink-0"
              style={{ rotate: "3deg" }}
            >
              <div className="w-[150px] sm:w-[190px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.32)] border border-white/60 bg-black">
                <video
                  src={galataVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground shadow-md">
                  <Sparkles className="h-2.5 w-2.5" /> 4K memory
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </Section>

      {/* DASHBOARD PREVIEW SECTION */}
      <Section className="py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3 py-1 text-xs font-semibold text-primary">
              <BarChart3 className="h-3.5 w-3.5" /> Real-Time Telemetry
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15]">
              One dashboard.<br />Every venue, every kiosk.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Track scan volume, revenue, guest satisfaction, and hardware uptime across your entire global fleet — all in real time.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: TrendingUp, text: "Automated revenue payout & photo pass upsells" },
                { icon: Zap, text: "Live hardware status, printer ink & solar battery telemetry" },
                { icon: Share2, text: "Social sharing analytics & viral reach heatmaps" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="shrink-0 grid h-8 w-8 place-items-center rounded-lg bg-accent text-primary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <Button asChild className="mt-10 rounded-full shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
              <Link to="/products">Explore Platform Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-border shadow-[0_24px_64px_rgba(0,0,0,0.16)] bg-slate-950"
          >
            <img src={appDashboard} alt="Analytics Dashboard Mockup" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </Section>



      {/* CTA SECTION */}
      <CTASection />
    </div>
  );
}

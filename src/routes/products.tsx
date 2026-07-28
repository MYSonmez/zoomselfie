import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cpu, Monitor, LayoutDashboard, Sparkles, Code2, Camera, Check, Maximize2, X } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

import prodPlatform from "@/assets/prod-platform.png";
import prodDesktopApp from "@/assets/prod-desktop-app.png";
import appDashboard from "@/assets/app-dashboard.png";
import prodAiEngine from "@/assets/prod-ai-engine.png";
import prodDeveloperApi from "@/assets/prod-developer-api.png";
import kioskParis from "@/assets/kiosk-paris.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Ecosystem — ZoomSelfie" },
      { name: "description", content: "The ZoomSelfie ecosystem: Platform, Desktop App, Dashboard, AI Engine, API, and Kiosk." },
      { property: "og:title", content: "Products — ZoomSelfie" },
      { property: "og:description", content: "A complete AI visitor experience ecosystem." },
    ],
  }),
  component: Products,
});

const products = [
  {
    icon: Cpu,
    n: "01",
    title: "Cloud Platform",
    desc: "The high-availability global cloud backbone powering real-time photo ingestion, 4K rendering, and instant QR stream delivery.",
    features: ["Global Edge CDN distribution", "Sub-2.4s AI rendering pipeline", "Multi-venue fleet orchestration"],
    img: prodPlatform,
  },
  {
    icon: Monitor,
    n: "02",
    title: "Operator Desktop App",
    desc: "Native desktop control suite engineered for venue staff, attraction photography crews, and roaming photobooth operators.",
    features: ["Live camera feed & stream preview", "Batch processing & queue manager", "Local offline resilience buffer"],
    img: prodDesktopApp,
  },
  {
    icon: LayoutDashboard,
    n: "03",
    title: "Analytics Dashboard",
    desc: "Real-time telemetry, daily photo revenue reports, visitor engagement metrics, and social share attribution analytics.",
    features: ["Real-time financial revenue tracking", "Guest satisfaction ratings & NPS", "Role-based venue permissions"],
    img: appDashboard,
  },
  {
    icon: Sparkles,
    n: "04",
    title: "AI Animation Engine",
    desc: "The neural network engine behind our signature 4K zoom animation converting static photos into viral souvenir video reels.",
    features: ["Automated subject segmentation", "Venue brand overlay presets", "Cinematic 60fps 4K video rendering"],
    img: prodAiEngine,
  },
  {
    icon: Code2,
    n: "05",
    title: "Developer API & SDKs",
    desc: "Integrate ZoomSelfie directly into your venue ticketing system, mobile app, and guest loyalty platforms.",
    features: ["RESTful API & Webhook triggers", "Python & Node.js SDK libraries", "Enterprise Single Sign-On (SSO)"],
    img: prodDeveloperApi,
  },
  {
    icon: Camera,
    n: "06",
    title: "Architectural Kiosk",
    desc: "Self-serve capture hardware custom-fabricated for heritage monuments, theme parks, ski resorts, and luxury hotels.",
    features: ["Studio optics & 32\" 4K screen", "Solar dome & weatherproof IP66", "Instant QR & thermal printing"],
    img: kioskParis,
  },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Product Ecosystem"
        title="A complete visitor experience ecosystem."
        description="Six integrated products. One platform. Every ZoomSelfie module works seamlessly to maximize guest engagement and venue revenue."
      />
      
      <Section>
        <SectionTitle
          eyebrow="The Ecosystem"
          title="Engineered for Performance & Scale"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-[var(--shadow-elevated)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setSelectedProduct(p)}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute top-4 left-4 flex items-center justify-between right-4">
                    <span className="text-xs font-black tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                      {p.n}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/90 backdrop-blur-md text-primary shadow-md">
                      <p.icon className="h-5 w-5" />
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(p);
                    }}
                    className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/80 backdrop-blur-md text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110 shadow-md"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-border/50 mt-4">
                <ul className="space-y-2 mt-4 text-xs">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-foreground font-medium">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book-demo"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover transition-colors"
                >
                  Explore {p.title} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid md:grid-cols-[1.3fr_1fr]">
                <div className="bg-slate-950 flex items-center justify-center p-2 max-h-[70vh] md:max-h-full">
                  <img
                    src={selectedProduct.img}
                    alt={selectedProduct.title}
                    className="w-full h-full object-contain max-h-[600px]"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                      Module {selectedProduct.n}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-foreground">{selectedProduct.title}</h3>
                    
                    <p className="mt-4 text-xs text-foreground/80 leading-relaxed">
                      {selectedProduct.desc}
                    </p>

                    <div className="mt-6 space-y-2.5">
                      {selectedProduct.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs font-semibold text-foreground">
                          <Check className="h-4 w-4 text-primary shrink-0" /> {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                    <Button asChild className="w-full rounded-full">
                      <Link to="/book-demo">Request Product Demo</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}

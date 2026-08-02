"use client";

import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  Cloud,
  CreditCard,
  Monitor,
  PackageCheck,
  Paintbrush,
  Printer,
  QrCode,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroKiosk from "@/assets/hero-kiosk.svg";
import kioskIsolatedCabin from "@/assets/kiosk-isolated-cabin.png";
import kioskIsolatedStand from "@/assets/kiosk-isolated-stand.png";
import kioskModelStandard from "@/assets/kiosk-model-standard.png";
import kioskModelPro from "@/assets/kiosk-model-pro.png";
import kioskParis from "@/assets/kiosk-paris.png";
import kioskIstanbul from "@/assets/kiosk-istanbul.png";
import kioskAquarium from "@/assets/kiosk-aquarium.png";

const models = [
  {
    id: "standard",
    name: "ZoomSelfie Standard",
    shortName: "Standard",
    label: "Compact system",
    description:
      "A clean, space-efficient kiosk for indoor venues, hotel lobbies, events and controlled visitor areas.",
    image: kioskModelStandard,
    highlights: ["Compact footprint", "Guided touchscreen journey", "Digital content delivery"],
    idealFor: "Indoor venues and flexible placements",
  },
  {
    id: "pro",
    name: "ZoomSelfie Pro",
    shortName: "Pro",
    label: "High-traffic system",
    description:
      "A more prominent kiosk configuration designed for continuous use in busy visitor destinations and flagship locations.",
    image: kioskModelPro,
    highlights: ["Larger visual presence", "High-traffic operation", "Expanded configuration options"],
    idealFor: "Attractions, landmarks and permanent installations",
    popular: true,
  },
] as const;

const formats = [
  {
    id: "open-air",
    name: "Open-Air Stand",
    description: "A freestanding format with an open, approachable visitor flow.",
    image: kioskIsolatedStand,
  },
  {
    id: "cabin",
    name: "Enclosed Cabin",
    description: "A defined capture area for a more private and immersive experience.",
    image: kioskIsolatedCabin,
  },
] as const;

const finishes = [
  { id: "black", name: "Midnight", swatch: "bg-zinc-950" },
  { id: "white", name: "Cloud", swatch: "bg-white" },
  { id: "orange", name: "Zoom Orange", swatch: "bg-[#ffb800]" },
  { id: "custom", name: "Custom Brand", swatch: "bg-[linear-gradient(135deg,#ffb800_0_33%,#ef4444_33%_66%,#6366f1_66%)]" },
] as const;

const addOns = [
  {
    id: "payment",
    title: "Payment Terminal",
    description: "Enable a paid visitor journey directly at the kiosk.",
    icon: CreditCard,
  },
  {
    id: "printer",
    title: "Print Station",
    description: "Add physical photo delivery alongside digital content.",
    icon: Printer,
  },
  {
    id: "branding",
    title: "Full Brand Wrap",
    description: "Customize the kiosk body for the venue or campaign.",
    icon: Paintbrush,
  },
  {
    id: "connectivity",
    title: "Independent Connectivity",
    description: "Add a dedicated connection where venue networks are limited.",
    icon: Wifi,
  },
  {
    id: "support",
    title: "Priority Support",
    description: "Choose an extended onboarding and support package.",
    icon: ShieldCheck,
  },
  {
    id: "content",
    title: "Custom Content Pack",
    description: "Launch with a tailored set of branded photo and video templates.",
    icon: Sparkles,
  },
] as const;

const included = [
  { icon: Monitor, title: "Kiosk hardware", text: "The selected physical kiosk and touchscreen experience." },
  { icon: Camera, title: "Capture setup", text: "A capture configuration prepared for the chosen model and venue." },
  { icon: Cloud, title: "Web Panel", text: "Remote campaign, template and kiosk management." },
  { icon: QrCode, title: "Digital delivery", text: "QR, link or email delivery according to the project flow." },
];

const installations = [
  { title: "Landmarks", image: kioskParis },
  { title: "Cultural destinations", image: kioskIstanbul },
  { title: "Family attractions", image: kioskAquarium },
];

export default function Kiosk() {
  const reduceMotion = useReducedMotion();
  const [modelId, setModelId] = useState<(typeof models)[number]["id"]>("pro");
  const [formatId, setFormatId] = useState<(typeof formats)[number]["id"]>("open-air");
  const [finishId, setFinishId] = useState<(typeof finishes)[number]["id"]>("black");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["branding", "content"]);

  const activeModel = models.find((model) => model.id === modelId) ?? models[1];
  const activeFormat = formats.find((format) => format.id === formatId) ?? formats[0];
  const activeFinish = finishes.find((finish) => finish.id === finishId) ?? finishes[0];
  const selectedFeatures = addOns.filter((item) => selectedAddOns.includes(item.id));

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className="kiosk-page overflow-hidden bg-white pb-24 text-zinc-950 xl:pb-32">
      <section className="premium-grain kiosk-screen items-end overflow-hidden bg-black pb-12 pt-24 text-white sm:pb-16 lg:pb-20">
        <Image src={heroKiosk} alt="ZoomSelfie kiosk at a destination" sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.28)_58%,rgba(0,0,0,.42))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        <div className="container-page relative z-10 w-full">
          <motion.div initial={reduceMotion ? false : { opacity: 1, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-primary" /> Kiosk systems for sale
            </div>
            <h1 className="mt-6 text-5xl font-extrabold leading-[.94] tracking-[-.065em] sm:text-7xl lg:text-[6rem]">
              Choose it.<br />Configure it. Make it yours.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-xl sm:leading-8">
              Build a complete ZoomSelfie kiosk for your venue. Select the model, format, finish and features—then request a tailored commercial quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-13 rounded-full px-8 text-base shadow-[0_18px_55px_-18px_rgba(255,184,0,.9)]">
                <a href="#configure">Configure your kiosk <ArrowDown className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 rounded-full border-white/25 bg-white/5 px-8 text-base text-white backdrop-blur-md hover:bg-white hover:text-black">
                <Link to="/contact">Talk to sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="configure" className="bg-[#f5f5f2] py-20 lg:py-28">
        <div className="container-page">
          <motion.div {...reveal()} className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Interactive configurator</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1] tracking-[-.055em] sm:text-6xl">Build your kiosk.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">Your choices create a configuration brief. Final hardware details, availability and pricing are confirmed in your commercial proposal.</p>
          </motion.div>

          <div className="mt-12 grid items-start gap-7 xl:grid-cols-[1.25fr_.75fr]">
            <div className="space-y-5">
              <ConfiguratorStep number="01" title="Choose a model">
                <div className="grid gap-4 md:grid-cols-2">
                  {models.map((model) => {
                    const selected = model.id === modelId;
                    return (
                      <button key={model.id} type="button" onClick={() => setModelId(model.id)} className={`premium-card group overflow-hidden rounded-[1.6rem] border-2 bg-white text-left transition-all ${selected ? "border-primary shadow-[0_18px_55px_-30px_rgba(255,184,0,.8)]" : "border-transparent hover:border-zinc-300"}`}>
                        <div className="premium-media relative h-60 overflow-hidden bg-zinc-100">
                          <Image src={model.image} alt={model.name} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105" />
                          <span className="absolute left-4 top-4 rounded-full bg-black/75 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">{model.label}</span>
                          {"popular" in model && model.popular && <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-wider">Most popular</span>}
                          {selected && <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-primary text-black"><Check className="h-5 w-5" /></span>}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-extrabold">{model.name}</h3>
                          <p className="mt-2 text-xs leading-5 text-zinc-600">{model.description}</p>
                          <div className="mt-5 flex items-center justify-between border-t border-zinc-200 pt-4 text-xs font-bold">
                            <span>{model.idealFor}</span>
                            <span className={selected ? "text-primary" : "text-zinc-400"}>{selected ? "Selected" : "Select"}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </ConfiguratorStep>

              <ConfiguratorStep number="02" title="Choose the format">
                <div className="grid gap-4 md:grid-cols-2">
                  {formats.map((format) => {
                    const selected = format.id === formatId;
                    return (
                      <button key={format.id} type="button" onClick={() => setFormatId(format.id)} className={`premium-card grid min-h-44 grid-cols-[8rem_1fr] items-center overflow-hidden rounded-[1.5rem] border-2 bg-white text-left transition ${selected ? "border-primary" : "border-transparent hover:border-zinc-300"}`}>
                        <div className="h-full bg-zinc-100"><Image src={format.image} alt={format.name} sizes="(max-width: 768px) 100vw, 33vw" className="h-full w-full object-contain p-2" /></div>
                        <div className="p-5"><div className="flex items-center justify-between gap-3"><h3 className="text-base font-extrabold">{format.name}</h3>{selected && <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />}</div><p className="mt-2 text-xs leading-5 text-zinc-600">{format.description}</p></div>
                      </button>
                    );
                  })}
                </div>
              </ConfiguratorStep>

              <ConfiguratorStep number="03" title="Choose a finish">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {finishes.map((finish) => {
                    const selected = finish.id === finishId;
                    return (
                      <button key={finish.id} type="button" onClick={() => setFinishId(finish.id)} className={`rounded-[1.35rem] border-2 bg-white p-4 text-left transition ${selected ? "border-primary" : "border-transparent hover:border-zinc-300"}`}>
                        <span className={`block h-12 w-full rounded-xl border border-black/10 ${finish.swatch}`} />
                        <span className="mt-3 flex items-center justify-between text-xs font-bold">{finish.name}{selected && <Check className="h-4 w-4 text-primary" />}</span>
                      </button>
                    );
                  })}
                </div>
              </ConfiguratorStep>

              <ConfiguratorStep number="04" title="Add optional features">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {addOns.map((item) => {
                    const selected = selectedAddOns.includes(item.id);
                    return (
                      <button key={item.id} type="button" onClick={() => toggleAddOn(item.id)} className={`premium-card flex min-h-44 flex-col rounded-[1.35rem] border-2 p-5 text-left transition ${selected ? "border-primary bg-[#fff9e7]" : "border-transparent bg-white hover:border-zinc-300"}`}>
                        <div className="flex items-center justify-between"><span className={`grid h-10 w-10 place-items-center rounded-full ${selected ? "bg-primary text-black" : "bg-zinc-100 text-zinc-700"}`}><item.icon className="h-4.5 w-4.5" /></span><span className={`grid h-6 w-6 place-items-center rounded-full border ${selected ? "border-primary bg-primary text-black" : "border-zinc-300 text-transparent"}`}><Check className="h-3.5 w-3.5" /></span></div>
                        <h3 className="mt-5 text-sm font-extrabold">{item.title}</h3>
                        <p className="mt-2 text-[11px] leading-5 text-zinc-600">{item.description}</p>
                      </button>
                    );
                  })}
                </div>
              </ConfiguratorStep>
            </div>

            <aside className="xl:sticky xl:top-24">
              <div className="premium-media frame-corners overflow-hidden rounded-[2rem] bg-zinc-950 text-white shadow-[0_30px_80px_-35px_rgba(0,0,0,.55)]">
                <div className="relative h-[360px] bg-[radial-gradient(circle_at_50%_45%,#353535,transparent_62%)]">
                  <AnimatePresence mode="wait">
                    <motion.img key={`${modelId}-${formatId}`} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: .25 }} src={(formatId === "cabin" ? kioskIsolatedCabin : activeModel.image).src} alt="Your configured ZoomSelfie kiosk" className="absolute inset-0 h-full w-full object-contain p-6" />
                  </AnimatePresence>
                  <span className="interface-scan absolute inset-x-8 top-1/2 z-20 h-px bg-gradient-to-r from-transparent via-primary/75 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">Live configuration</span>
                </div>
                <div className="border-t border-white/10 p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-primary">Your kiosk</p>
                  <h3 className="mt-2 text-2xl font-extrabold">{activeModel.name}</h3>
                  <div className="mt-6 space-y-3 text-sm">
                    <SummaryRow label="Format" value={activeFormat.name} />
                    <SummaryRow label="Finish" value={activeFinish.name} />
                    <SummaryRow label="Options" value={selectedFeatures.length ? `${selectedFeatures.length} selected` : "None"} />
                  </div>
                  {selectedFeatures.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{selectedFeatures.map((item) => <span key={item.id} className="rounded-full bg-white/[.07] px-3 py-1.5 text-[10px] font-semibold text-white/65">{item.title}</span>)}</div>}
                  <div className="mt-7 rounded-[1.25rem] bg-white/[.06] p-4"><p className="text-xs font-bold">Custom commercial quote</p><p className="mt-1 text-[11px] leading-5 text-white/48">Pricing is prepared around the selected hardware, venue, location and service requirements.</p></div>
                  <Button asChild size="lg" className="mt-5 h-12 w-full rounded-full font-bold"><Link to="/contact">Request this configuration <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="kiosk-screen bg-white py-16 lg:py-24">
        <div className="container-page w-full">
          <motion.div {...reveal()} className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Compare models</p><h2 className="mt-5 text-4xl font-extrabold tracking-[-.055em] sm:text-6xl">Two models.<br />Different demands.</h2></div><p className="max-w-lg text-base leading-7 text-zinc-600 lg:justify-self-end">Choose by placement and operating intensity. Exact components are finalized after your venue requirements are reviewed.</p></motion.div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {models.map((model) => <motion.article key={model.id} {...reveal()} className={`premium-card rounded-[2rem] border-2 p-7 sm:p-9 ${model.id === modelId ? "border-primary bg-[#fffaf0]" : "border-zinc-200"}`}><div className="flex items-start justify-between gap-5"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-primary">{model.label}</p><h3 className="mt-2 text-2xl font-extrabold">{model.name}</h3></div>{model.id === modelId && <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase">Your selection</span>}</div><p className="mt-5 text-sm leading-6 text-zinc-600">{model.description}</p><ul className="mt-6 space-y-3">{model.highlights.map((highlight) => <li key={highlight} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-6 w-6 place-items-center rounded-full bg-zinc-950 text-white"><Check className="h-3.5 w-3.5" /></span>{highlight}</li>)}</ul><button type="button" onClick={() => { setModelId(model.id); document.querySelector("#configure")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Choose {model.shortName} <ArrowRight className="h-4 w-4" /></button></motion.article>)}
          </div>
        </div>
      </section>

      <section className="kiosk-screen bg-zinc-950 py-16 text-white lg:py-24">
        <div className="container-page w-full">
          <motion.div {...reveal()} className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Included with every system</p><h2 className="mt-5 text-4xl font-extrabold tracking-[-.055em] sm:text-6xl">Ready for the complete experience.</h2></motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{included.map((item, index) => <motion.article key={item.title} {...reveal(index * .06)} className="premium-card rounded-[1.75rem] border border-white/10 bg-white/[.045] p-6"><span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-black"><item.icon className="h-5 w-5" /></span><h3 className="mt-8 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p></motion.article>)}</div>
          <div className="mt-8 flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/[.04] p-5 text-xs leading-6 text-white/50"><PackageCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> Final scope, installation, shipping, warranty and service terms are specified in the commercial proposal for your location.</div>
        </div>
      </section>

      <section className="kiosk-screen bg-[#f5f5f2] py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[100rem] px-4 sm:px-6">
          <motion.div {...reveal()} className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Designed for the location</p><h2 className="mt-5 text-4xl font-extrabold tracking-[-.055em] sm:text-6xl">A product that belongs in the experience.</h2></motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">{installations.map((item, index) => <motion.article key={item.title} {...reveal(index * .06)} className="premium-media frame-corners kiosk-example-card group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-black"><Image src={item.image} alt={item.title} sizes="(max-width: 768px) 100vw, 33vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" /><h3 className="absolute inset-x-0 bottom-0 p-7 text-2xl font-extrabold text-white">{item.title}</h3></motion.article>)}</div>
        </div>
      </section>

      <section className="premium-grain kiosk-screen overflow-hidden bg-primary py-20">
        <div className="container-page relative w-full text-center">
          <motion.div {...reveal()} className="mx-auto max-w-4xl"><p className="text-xs font-black uppercase tracking-[.2em]">Your configured system</p><h2 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-.06em] sm:text-7xl">From selection to installation.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">Send your selected direction to our team. We will review the venue, confirm the hardware scope and continue the conversation with a suitable proposal.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild size="lg" className="h-13 rounded-full bg-black px-8 text-base text-white hover:bg-zinc-800"><Link to="/contact" hash="kiosk">Request kiosk information <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" size="lg" className="h-13 rounded-full border-black/25 bg-transparent px-8 text-base hover:bg-black hover:text-white"><Link to="/products">Explore all products</Link></Button></div></motion.div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 z-40 hidden w-[min(940px,calc(100%-2rem))] -translate-x-1/2 items-center justify-between gap-6 rounded-full border border-white/15 bg-zinc-950/94 p-2.5 pl-5 text-white shadow-[0_18px_55px_rgba(0,0,0,.32)] backdrop-blur-xl xl:flex">
        <div className="flex min-w-0 items-center gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-black"><Check className="h-5 w-5" /></span><div className="min-w-0"><p className="truncate text-sm font-extrabold">{activeModel.name} · {activeFormat.name}</p><p className="truncate text-[10px] text-white/45">{activeFinish.name} · {selectedFeatures.length} optional feature{selectedFeatures.length === 1 ? "" : "s"}</p></div></div>
        <Button asChild className="shrink-0 rounded-full px-6"><Link to="/contact">Request quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
      </div>
    </div>
  );
}

function ConfiguratorStep({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <section className="premium-card rounded-[2rem] border border-black/[.06] bg-white/55 p-4 sm:p-6"><div className="mb-5 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-zinc-950 text-[10px] font-black text-white">{number}</span><h3 className="text-lg font-extrabold">{title}</h3></div>{children}</section>;
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"><span className="text-white/45">{label}</span><span className="text-right font-bold">{value}</span></div>;
}

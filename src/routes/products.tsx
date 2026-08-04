"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  LayoutDashboard,
  Monitor,
  PanelsTopLeft,
  ScanFace,
} from "lucide-react";
import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { Button } from "@/components/ui/button";
import kioskModelPro from "@/assets/kiosk-model-pro.png";
import campaignTool from "@/assets/campaign-tool-placeholder.svg";
import webPanel from "@/assets/web-panel-placeholder.svg";
import desktopApp from "@/assets/desktop-app-placeholder.svg";
import apiProduct from "@/assets/api-placeholder.svg";
import kioskParis from "@/assets/kiosk-paris.png";

const products = [
  {
    name: "Kiosk Systems",
    label: "On-location self-service",
    text: "A physical ZoomSelfie experience people can use where the moment happens.",
    to: "/kiosk",
    image: kioskModelPro,
    icon: ScanFace,
    fit: "contain" as const,
    dark: true,
  },
  {
    name: "Web Panel",
    label: "Manage and organise",
    text: "Keep campaigns, kiosks, templates, teams and usage visible in one web workspace.",
    to: "/products/web-panel",
    image: webPanel,
    icon: LayoutDashboard,
    fit: "cover" as const,
    dark: true,
  },
  {
    name: "Desktop App",
    label: "Professional workflow",
    text: "Produce larger sets of personalized photo and video content through a focused desktop flow.",
    to: "/products/desktop-app",
    image: desktopApp,
    icon: Monitor,
    fit: "cover" as const,
    dark: true,
  },
  {
    name: "Campaign Tool",
    label: "Create and publish",
    text: "Build a branded photo or video journey and make it available on the web, a kiosk or both.",
    to: "/products/campaign-tool",
    image: campaignTool,
    icon: PanelsTopLeft,
    fit: "cover" as const,
  },
  {
    name: "API",
    label: "Integrated creation",
    text: "Bring ZoomSelfie creation into an existing app, platform or digital customer journey.",
    to: "/products/api",
    image: apiProduct,
    icon: Code2,
    fit: "cover" as const,
  },
];

const decisionRows = [
  ["I need a physical experience", "Kiosk Systems", "/kiosk"],
  ["I manage content, kiosks or campaigns", "Web Panel", "/products/web-panel"],
  ["I process larger sets of photos", "Desktop App", "/products/desktop-app"],
  ["I want to launch a branded web journey", "Campaign Tool", "/products/campaign-tool"],
  ["I want ZoomSelfie inside my product", "API", "/products/api"],
] as const;

export default function Products() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 1, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-70px" },
    transition: { duration: .65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });
  const sideReveal = (index: number) => ({
    initial: reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -96 : 96 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: .78, delay: .04, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="products-page bg-white text-zinc-950">
      <section className="premium-grain product-screen flex min-h-[100svh] items-center overflow-hidden bg-black pb-8 pt-28 text-white sm:pb-10 sm:pt-32 lg:pb-8 lg:pt-28">
        <Image src={kioskParis} alt="ZoomSelfie product experience" priority sizes="100vw" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94)_0%,rgba(0,0,0,.74)_36%,rgba(0,0,0,.12)_76%,rgba(0,0,0,.4)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.24),transparent_42%,rgba(0,0,0,.84)_100%)]" />
        <div className="absolute -bottom-32 -left-24 h-80 w-[34rem] rounded-full bg-primary/18 blur-3xl" />
        <div className="container-page relative z-10 w-full">
          <motion.div {...reveal()} className="max-w-[54rem]">
            <p className="inline-flex rounded-full border border-primary/35 bg-black/35 px-4 py-2 text-[9px] font-black uppercase tracking-[.2em] text-primary shadow-[0_0_30px_-10px_rgba(255,184,0,.65)] backdrop-blur-md sm:text-xs">The ZoomSelfie product family</p>
            <h1 className="mt-6 max-w-[52.5rem] text-[clamp(3.25rem,5.2vw,5.7rem)] font-extrabold leading-[.92] tracking-[-.06em]">One idea. Five ways to bring it to life.</h1>
            <p className="mt-6 max-w-[39rem] text-base leading-7 text-white/68 sm:text-lg sm:leading-8">Start with a kiosk, manage the setup in the Web Panel, work through the Desktop App, publish a campaign or integrate ZoomSelfie into another product.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-13 rounded-full px-8"><a href="#product-family">Explore the family <ArrowDown className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-white/25 bg-black/15 px-8 text-white hover:bg-white hover:text-black"><Link to="/contact">Discuss your setup</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="product-family" className="bg-[#f5f2eb] py-20 lg:py-24">
        <div className="container-page">
          <motion.div {...reveal()} className="grid gap-6 border-b border-black/15 pb-10 lg:grid-cols-[1fr_.62fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">Choose a starting point</p><h2 className="mt-5 text-[clamp(2.8rem,5vw,5.6rem)] font-extrabold leading-[.94] tracking-[-.065em]">Each product has one clear job.</h2></div>
            <p className="max-w-xl text-base leading-7 text-black/58 lg:justify-self-end">Choose the product around where the experience begins, who manages it and how the finished content reaches the user.</p>
          </motion.div>

          <div className="mt-12 grid gap-6 overflow-x-clip">
            {products.map((product, index) => (
              <motion.article key={product.name} {...sideReveal(index)} className={`premium-card group overflow-hidden rounded-[2.2rem] border border-black/8 lg:grid lg:grid-cols-2 ${product.dark ? "bg-zinc-950 text-white" : "bg-[#f7f7f5]"}`}>
                <div className={`premium-media relative min-h-[340px] overflow-hidden sm:min-h-[420px] lg:min-h-[500px] ${index % 2 === 1 ? "lg:order-2" : ""} ${product.fit === "contain" ? "bg-[#f1eee7]" : "bg-zinc-900"}`}>
                  <Image src={product.image} alt={`${product.name} preview`} sizes="(max-width:1024px) 100vw, 50vw" className={product.fit === "contain" ? "h-full w-full object-contain p-7 sm:p-12" : "h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"} />
                </div>
                <div className={`flex min-h-[340px] flex-col justify-center p-7 sm:p-10 lg:min-h-[500px] lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className={`grid h-12 w-12 place-items-center rounded-full ${product.dark ? "bg-primary text-black" : "bg-black text-white"}`}><product.icon className="h-5 w-5" /></span>
                  <p className={`mt-8 text-[10px] font-black uppercase tracking-[.2em] ${product.dark ? "text-primary" : "text-amber-600"}`}>{product.label}</p>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">{product.name}</h3>
                  <p className={`mt-4 max-w-xl text-sm leading-7 ${product.dark ? "text-white/52" : "text-black/58"}`}>{product.text}</p>
                  <Link to={product.to} className={`mt-8 inline-flex items-center gap-2 text-sm font-bold ${product.dark ? "text-primary" : "text-zinc-950"}`}>Explore {product.name} <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-screen flex items-center bg-[#f6f1e7] py-20 lg:py-24">
        <div className="container-page grid w-full items-start gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <motion.div {...reveal()}>
            <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">Find your direction</p>
            <h2 className="mt-5 text-[clamp(2.8rem,4.6vw,5rem)] font-extrabold leading-[.96] tracking-[-.06em]">Start with what you need to do.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-black/58">The products can work independently or together. The right starting point depends on where the photo comes from and who controls the journey.</p>
          </motion.div>
          <div className="premium-card overflow-hidden rounded-[2rem] border border-black/8 bg-white">
            {decisionRows.map(([need, product, to], index) => (
              <Link key={need} to={to} className="group grid gap-2 border-b border-black/8 px-6 py-6 last:border-0 sm:grid-cols-[44px_1fr_auto] sm:items-center sm:gap-5 sm:px-8">
                <span className="text-sm font-extrabold text-black/30">0{index + 1}</span>
                <span><span className="block text-sm font-bold">{need}</span><span className="mt-1 block text-xs text-black/42">Best starting point: {product}</span></span>
                <ArrowRight className="hidden h-5 w-5 text-amber-600 transition-transform group-hover:translate-x-1 sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="product-screen flex items-center overflow-hidden bg-[#061014] py-20 text-white lg:py-24">
        <div className="container-page grid w-full items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <motion.div {...reveal()}>
            <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">A different operating layer</p>
            <h2 className="mt-5 text-[clamp(2.8rem,4.8vw,5.2rem)] font-extrabold leading-[.95] tracking-[-.06em]">When self-service becomes a complete photo operation.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/54">ZoomSelfie products create personalized content. PhotoSoft manages the wider attraction photography business, from professional capture and guest matching to sales, delivery and analysis.</p>
            <Link to="/photosoft" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">Explore PhotoSoft <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>
          <motion.div {...reveal(.08)} className="premium-card rounded-[2.2rem] border border-cyan-300/15 bg-cyan-300/[.06] p-8 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[.2em] text-cyan-300">The shortest distinction</p>
            <p className="mt-8 text-3xl font-extrabold leading-[1.08] tracking-[-.045em]">ZoomSelfie helps a person create the content.</p>
            <div className="my-7 h-px bg-white/10" />
            <p className="text-3xl font-extrabold leading-[1.08] tracking-[-.045em] text-white/52">PhotoSoft manages the entire photography operation.</p>
          </motion.div>
        </div>
      </section>

      <section className="premium-grain bg-primary py-20 text-center sm:py-24">
        <div className="container-page">
          <motion.div {...reveal()} className="mx-auto max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-black/50">Not sure where to start?</p>
            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5.4rem)] font-extrabold leading-[.95] tracking-[-.06em]">Tell us what you want the audience to experience.</h2>
            <Button asChild size="lg" className="mt-9 h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><Link to="/contact">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

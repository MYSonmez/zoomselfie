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
    name: "Campaign Tool",
    label: "Create and publish",
    text: "Build a branded photo or video journey and make it available on the web, a kiosk or both.",
    to: "/products/campaign-tool",
    image: campaignTool,
    icon: PanelsTopLeft,
    fit: "cover" as const,
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
  ["I want to launch a branded web journey", "Campaign Tool", "/products/campaign-tool"],
  ["I manage content, kiosks or campaigns", "Web Panel", "/products/web-panel"],
  ["I process larger sets of photos", "Desktop App", "/products/desktop-app"],
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

  return (
    <div className="products-page bg-white text-zinc-950">
      <section className="premium-grain product-screen flex items-center overflow-hidden bg-primary pb-10 pt-24 md:pt-28">
        <div className="container-page grid w-full items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div {...reveal()} className="relative z-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-black/55">The ZoomSelfie product family</p>
            <h1 className="mt-6 text-[clamp(3.5rem,6.5vw,7rem)] font-extrabold leading-[.88] tracking-[-.07em]">One idea. Five ways to bring it to life.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-black/65 sm:text-lg">Start with a kiosk, publish a campaign, manage the setup, work through a desktop flow or integrate ZoomSelfie into another product.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><a href="#product-family">Explore the family <ArrowDown className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-black/25 bg-transparent px-8 hover:bg-white"><Link to="/contact">Discuss your setup</Link></Button>
            </div>
          </motion.div>

          <motion.div {...reveal(.08)} className="relative min-h-[440px] lg:min-h-[610px]">
            <div className="premium-media frame-corners absolute left-[2%] top-[4%] h-[67%] w-[78%] -rotate-3 overflow-hidden rounded-[2.2rem] border-[7px] border-zinc-950 bg-zinc-950 p-2 shadow-2xl">
              <Image src={webPanel} alt="ZoomSelfie Web Panel" priority sizes="(max-width:1024px) 90vw, 45vw" className="h-full w-full rounded-[1.55rem] object-cover object-top" />
              <span className="interface-scan absolute inset-x-6 top-1/2 z-20 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            </div>
            <div className="premium-media absolute bottom-[2%] right-[1%] h-[49%] w-[58%] rotate-3 overflow-hidden rounded-[2rem] border-[7px] border-white bg-white shadow-2xl">
              <Image src={kioskModelPro} alt="ZoomSelfie kiosk" priority sizes="(max-width:1024px) 55vw, 28vw" className="h-full w-full object-contain p-4" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="product-family" className="py-20 lg:py-24">
        <div className="container-page">
          <motion.div {...reveal()} className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">Choose a starting point</p>
            <h2 className="mt-5 text-[clamp(2.8rem,5vw,5.6rem)] font-extrabold leading-[.94] tracking-[-.065em]">Each product has one clear job.</h2>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {products.map((product, index) => (
              <motion.article key={product.name} {...reveal(index * .05)} className={`premium-card group overflow-hidden rounded-[2.2rem] border border-black/8 ${product.dark ? "bg-zinc-950 text-white" : "bg-[#f7f7f5]"} ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[.8fr_1.2fr]" : ""}`}>
                <div className={`premium-media relative overflow-hidden ${index === 0 ? "min-h-[390px] lg:min-h-[540px]" : "h-[330px]"} ${product.fit === "contain" ? "bg-[#f1eee7]" : "bg-zinc-900"}`}>
                  <Image src={product.image} alt={`${product.name} preview`} sizes={index === 0 ? "(max-width:1024px) 100vw, 55vw" : "(max-width:1024px) 100vw, 50vw"} className={product.fit === "contain" ? "h-full w-full object-contain p-7 sm:p-12" : "h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"} />
                </div>
                <div className={`flex flex-col p-7 sm:p-9 ${index === 0 ? "justify-center sm:p-12" : "min-h-[290px]"}`}>
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

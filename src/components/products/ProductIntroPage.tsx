"use client";

import type { StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { Button } from "@/components/ui/button";

type Detail = { title: string; text: string };

export type ProductIntroPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  audience: string;
  heroImage: StaticImageData;
  heroImageAlt: string;
  imageFit?: "cover" | "contain";
  benefits: Detail[];
  steps: Detail[];
  capabilities: string[];
  outcomeTitle: string;
  outcomeText: string;
  contactTopic: string;
  variant?: "campaign" | "panel" | "desktop" | "api";
  heroTags?: [string, string, string];
};

export function ProductIntroPage({
  eyebrow,
  title,
  description,
  audience,
  heroImage,
  heroImageAlt,
  imageFit = "cover",
  benefits,
  steps,
  capabilities,
  outcomeTitle,
  outcomeText,
  contactTopic,
  variant = "campaign",
  heroTags = ["Capture", "Create", "Deliver"],
}: ProductIntroPageProps) {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 1, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-70px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });
  const heroSurface = {
    campaign: "bg-[#f6f1e7]",
    panel: "bg-[#f0f2eb]",
    desktop: "bg-[#ece9e2]",
    api: "bg-[#edf2f2]",
  }[variant];
  const stageTransform = {
    campaign: "rotate-[-1deg]",
    panel: "rotate-[.5deg]",
    desktop: "rotate-[1deg]",
    api: "rotate-[-.5deg]",
  }[variant];

  return (
    <div className="product-intro-page bg-white text-zinc-950">
      <section className={`premium-grain product-screen flex items-center overflow-hidden pb-10 pt-24 md:pt-28 ${heroSurface}`}>
        <div aria-hidden="true" className="ambient-orbit absolute -right-36 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-dashed border-black/10" />
        <div aria-hidden="true" className="absolute -left-40 bottom-[-15rem] h-[30rem] w-[30rem] rounded-full bg-primary/16 blur-3xl" />
        <div className="container-page grid w-full items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <motion.div {...reveal()} className="relative z-10 max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">{eyebrow}</p>
            <h1 className="mt-6 text-[clamp(3.2rem,5.5vw,5.8rem)] font-extrabold leading-[.92] tracking-[-.065em]">
              {title}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">{description}</p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2.5 text-xs font-bold text-zinc-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" /> {audience}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800">
                <Link to="/contact" hash={contactTopic}>Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-black/20 bg-transparent px-8 hover:bg-white">
                <a href="#benefits">See how it helps <ArrowDown className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </motion.div>

          <motion.div {...reveal(.08)} className="group relative min-h-[410px] [perspective:1400px] lg:min-h-[560px]">
            <div className={`absolute inset-0 rounded-[2.8rem] bg-primary transition-transform duration-700 group-hover:rotate-0 ${variant === "api" ? "-rotate-2" : "rotate-2"}`} />
            <div className={`premium-media frame-corners absolute inset-3 overflow-hidden rounded-[2.45rem] border border-black/10 bg-zinc-950 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-0 group-hover:scale-[1.015] ${stageTransform}`}>
              <span className="interface-scan" />
              <Image
                src={heroImage}
                alt={heroImageAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className={imageFit === "contain" ? "h-full w-full bg-zinc-950 object-contain p-7" : "h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.025]"}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-white/5" />
            </div>
            <div className="absolute -left-2 top-[14%] z-20 rounded-full border border-black/10 bg-white/88 px-4 py-2 text-[10px] font-black uppercase tracking-[.16em] shadow-xl backdrop-blur-md">{heroTags[0]}</div>
            <div className="absolute -right-2 top-[42%] z-20 rounded-full bg-black px-4 py-2 text-[10px] font-black uppercase tracking-[.16em] text-white shadow-xl">{heroTags[1]}</div>
            <div className="absolute bottom-[8%] left-[10%] z-20 rounded-full bg-primary px-4 py-2 text-[10px] font-black uppercase tracking-[.16em] text-black shadow-xl">{heroTags[2]}</div>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="product-screen flex items-center bg-white py-20 lg:py-24">
        <div className="container-page w-full">
          <motion.div {...reveal()} className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">Why it matters</p>
            <h2 className="mt-5 text-[clamp(2.7rem,5vw,5.4rem)] font-extrabold leading-[.95] tracking-[-.06em]">
              A clearer way to create more value from every photo.
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.article key={benefit.title} {...reveal(index * .06)} className="premium-card group min-h-[280px] rounded-[2rem] border border-black/8 bg-[#f7f7f5] p-7 transition-colors hover:border-primary/50 hover:bg-primary sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-black text-white"><Sparkles className="h-5 w-5" /></span>
                <p className="mt-14 text-[10px] font-black uppercase tracking-[.2em] text-black/45">0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-[-.035em]">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/58">{benefit.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-screen flex items-center overflow-hidden bg-zinc-950 py-20 text-white lg:py-24">
        <div className="container-page grid w-full gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <motion.div {...reveal()} className="lg:sticky lg:top-28 lg:self-start">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-black"><Workflow className="h-5 w-5" /></span>
            <p className="mt-7 text-xs font-black uppercase tracking-[.22em] text-primary">A simple flow</p>
            <h2 className="mt-5 text-[clamp(2.7rem,4.5vw,4.8rem)] font-extrabold leading-[.96] tracking-[-.055em]">From setup to a finished experience.</h2>
          </motion.div>
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <motion.article key={step.title} {...reveal(index * .05)} className="premium-card grid gap-5 rounded-[1.7rem] border border-white/10 bg-white/[.045] p-6 hover:border-primary/35 sm:grid-cols-[70px_1fr] sm:p-8">
                <span className="text-4xl font-extrabold tracking-[-.06em] text-primary/85">0{index + 1}</span>
                <div><h3 className="text-xl font-bold">{step.title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-white/52">{step.text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-screen flex items-center bg-[#f6f1e7] py-20 lg:py-24">
        <div className="container-page grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...reveal()}>
            <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">Core capabilities</p>
            <h2 className="mt-5 text-[clamp(2.7rem,4.5vw,4.8rem)] font-extrabold leading-[.96] tracking-[-.055em]">Everything essential. Nothing in the way.</h2>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div key={capability} className="premium-card flex items-center gap-3 rounded-2xl border border-black/8 bg-white/75 p-4 text-sm font-bold hover:border-primary/45">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary"><Check className="h-3.5 w-3.5" /></span>
                  {capability}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...reveal(.08)} className="premium-grain premium-card relative overflow-hidden rounded-[2.5rem] bg-primary p-8 sm:p-12">
            <Layers3 className="h-10 w-10" />
            <p className="mt-16 text-xs font-black uppercase tracking-[.2em] text-black/50">The outcome</p>
            <h3 className="mt-4 text-4xl font-extrabold leading-[1] tracking-[-.055em] sm:text-5xl">{outcomeTitle}</h3>
            <p className="mt-5 max-w-lg text-base leading-7 text-black/65">{outcomeText}</p>
            <Button asChild size="lg" className="mt-9 h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800">
              <Link to="/contact" hash={contactTopic}>Discuss your setup <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

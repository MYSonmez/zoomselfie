"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Blocks, Heart, Layers3, Sparkles, Zap } from "lucide-react";
import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { Button } from "@/components/ui/button";
import galleryIstanbul from "@/assets/gallery-istanbul-group.png";
import kioskModel from "@/assets/kiosk-model-pro.png";
import campaignTool from "@/assets/campaign-tool-placeholder.svg";

const principles = [
  { icon: Heart, title: "Start with the person", text: "The technology should disappear behind a journey that feels natural, personal and enjoyable." },
  { icon: Zap, title: "Keep the moment moving", text: "Capture, creation and delivery should happen while the experience still feels fresh." },
  { icon: Blocks, title: "Adapt to the context", text: "Kiosk, web, desktop and API products serve different users without losing the same creative core." },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({ initial: reduceMotion ? false : { opacity: 1, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-70px" }, transition: { duration: .65, delay, ease: [0.22, 1, 0.36, 1] as const } });

  return (
    <div className="about-page bg-white text-zinc-950">
      <section className="premium-grain product-screen flex items-center overflow-hidden bg-[#f6f1e7] pb-14 pt-28 md:pt-32">
        <div className="container-page grid w-full items-center gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-16">
          <motion.div {...reveal()} className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">About ZoomSelfie</p>
            <h1 className="mt-6 text-[clamp(3.5rem,6.4vw,7rem)] font-extrabold leading-[.88] tracking-[-.07em]">We put the person inside the story.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-black/58 sm:text-lg sm:leading-8">ZoomSelfie is built around a simple idea: a photo can become a richer memory when the person, place and creative context come together in one effortless experience.</p>
          </motion.div>
          <motion.div {...reveal(.08)} className="relative min-h-[480px] lg:min-h-[620px]">
            <div className="absolute inset-0 rotate-2 rounded-[2.7rem] bg-primary" />
            <div className="premium-media frame-corners absolute inset-3 -rotate-1 overflow-hidden rounded-[2.35rem] border-[6px] border-white bg-zinc-950 shadow-2xl"><Image src={galleryIstanbul} alt="A personalized ZoomSelfie destination memory" priority sizes="(max-width:1024px) 100vw, 55vw" className="h-full w-full object-cover object-center" /></div>
          </motion.div>
        </div>
      </section>

      <section className="product-screen flex items-center py-20 lg:py-24">
        <div className="container-page grid w-full items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <motion.div {...reveal()}>
            <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">The idea</p>
            <h2 className="mt-5 text-[clamp(2.8rem,4.8vw,5.2rem)] font-extrabold leading-[.95] tracking-[-.06em]">A creative engine that can meet people in different ways.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/58">A visitor can create at a kiosk. A participant can upload through a web campaign. A photographer can work through the Desktop App. A product team can integrate the same creation capability through the API.</p>
            <Button asChild variant="outline" className="mt-8 h-12 rounded-full border-black/20 bg-transparent px-7 hover:bg-black hover:text-white"><Link to="/products">Explore the product family <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </motion.div>
          <motion.div {...reveal(.08)} className="grid min-h-[520px] grid-cols-2 gap-4">
            <div className="premium-media overflow-hidden rounded-[2rem] bg-[#f3f0e9] p-5"><Image src={kioskModel} alt="ZoomSelfie kiosk system" sizes="25vw" className="h-full w-full object-contain" /></div>
            <div className="premium-media mt-16 overflow-hidden rounded-[2rem] bg-zinc-950"><Image src={campaignTool} alt="ZoomSelfie software experience" sizes="25vw" className="h-full w-full object-cover object-top" /></div>
          </motion.div>
        </div>
      </section>

      <section className="product-screen flex items-center bg-zinc-950 py-20 text-white lg:py-24">
        <div className="container-page w-full">
          <motion.div {...reveal()} className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.22em] text-primary">One family, two different jobs</p><h2 className="mt-5 text-[clamp(2.8rem,5vw,5.5rem)] font-extrabold leading-[.94] tracking-[-.06em]">ZoomSelfie creates the experience. PhotoSoft runs the operation.</h2></motion.div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <motion.article {...reveal(.04)} className="rounded-[2.2rem] border border-white/10 bg-white/[.045] p-8 sm:p-10"><Sparkles className="h-9 w-9 text-primary" /><p className="mt-12 text-xs font-black uppercase tracking-[.2em] text-primary">ZoomSelfie</p><h3 className="mt-4 text-3xl font-extrabold tracking-[-.045em]">Self-service content creation</h3><p className="mt-4 text-sm leading-7 text-white/52">A person takes or uploads a photo, chooses an experience and receives a personalized photo or video.</p></motion.article>
            <motion.article {...reveal(.08)} className="rounded-[2.2rem] border border-cyan-300/18 bg-cyan-300/[.06] p-8 sm:p-10"><Layers3 className="h-9 w-9 text-cyan-300" /><p className="mt-12 text-xs font-black uppercase tracking-[.2em] text-cyan-300">PhotoSoft</p><h3 className="mt-4 text-3xl font-extrabold tracking-[-.045em]">Attraction photo operations</h3><p className="mt-4 text-sm leading-7 text-white/52">A professional platform connecting capture, guest matching, content, sales, delivery and operational insight.</p><Link to="/photosoft" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">Explore PhotoSoft <ArrowRight className="h-4 w-4" /></Link></motion.article>
          </div>
        </div>
      </section>

      <section className="product-screen flex items-center bg-[#f6f1e7] py-20 lg:py-24">
        <div className="container-page w-full">
          <motion.div {...reveal()} className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">How we think</p><h2 className="mt-5 text-[clamp(2.8rem,4.8vw,5.2rem)] font-extrabold leading-[.95] tracking-[-.06em]">Three principles behind every product.</h2></motion.div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">{principles.map((principle, index) => <motion.article key={principle.title} {...reveal(index * .05)} className="min-h-[310px] rounded-[2rem] border border-black/8 bg-white p-8"><span className="grid h-12 w-12 place-items-center rounded-full bg-primary"><principle.icon className="h-5 w-5" /></span><p className="mt-16 text-[10px] font-black uppercase tracking-[.2em] text-black/35">0{index + 1}</p><h3 className="mt-3 text-2xl font-extrabold">{principle.title}</h3><p className="mt-3 text-sm leading-7 text-black/52">{principle.text}</p></motion.article>)}</div>
          <Button asChild size="lg" className="mt-10 h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><Link to="/contact">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, Code2, LayoutDashboard, Monitor, PanelsTopLeft, ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";

import prodPlatform from "@/assets/prod-platform.png";
import prodDesktopApp from "@/assets/prod-desktop-app.png";
import appDashboard from "@/assets/app-dashboard.png";
import prodDeveloperApi from "@/assets/prod-developer-api.png";
import kioskParis from "@/assets/kiosk-paris.png";
import kioskModelPro from "@/assets/kiosk-model-pro.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | ZoomSelfie" },
      { name: "description", content: "Explore ZoomSelfie kiosk, campaign, web panel, desktop and API products." },
    ],
  }),
  component: Products,
});

const workflow = [
  { number: "01", title: "Create", text: "Build the visual experience." },
  { number: "02", title: "Publish", text: "Launch it on web or kiosk." },
  { number: "03", title: "Manage", text: "Control every active experience." },
  { number: "04", title: "Deliver", text: "Send the finished content." },
];

function Products() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: .15 },
    transition: { duration: .65, delay },
  });

  return (
    <div className="products-page overflow-hidden bg-white text-zinc-950">
      <section className="products-screen relative flex min-h-[100svh] items-center overflow-hidden bg-primary pb-14 pt-24 sm:pt-28 lg:pb-20">
        <div className="absolute -left-36 top-16 h-[30rem] w-[30rem] rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[34rem] w-[34rem] rounded-full bg-orange-500/25 blur-3xl" />
        <div className="container-page relative z-10 grid w-full items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.22em]">ZoomSelfie products</p>
            <h1 className="mt-6 text-6xl font-extrabold leading-[.9] tracking-[-.075em] sm:text-7xl lg:text-[6.4rem]">One experience.<br />Every way to launch it.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/60 sm:text-lg">From a physical kiosk to a web campaign or an API inside your own product—choose where the ZoomSelfie journey begins.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><a href="#product-family">Explore products <ArrowDown className="ml-2 h-4 w-4" /></a></Button><Button asChild variant="outline" size="lg" className="h-13 rounded-full border-black/25 bg-transparent px-8 hover:bg-black hover:text-white"><Link to="/book-demo">Find your setup</Link></Button></div>
          </motion.div>

          <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .1 }} className="relative mx-auto h-[480px] w-full max-w-[690px] sm:h-[590px]">
            <div className="absolute left-[4%] top-[12%] h-[64%] w-[82%] rotate-[-3deg] overflow-hidden rounded-[2rem] border-[6px] border-zinc-950 bg-zinc-950 p-2 shadow-2xl"><img src={appDashboard} alt="ZoomSelfie Web Panel" className="h-full w-full rounded-[1.45rem] object-cover object-top" /></div>
            <div className="absolute bottom-[2%] right-[1%] h-[45%] w-[58%] rotate-[4deg] overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-white shadow-2xl"><img src={prodPlatform} alt="ZoomSelfie Campaign Tool" className="h-full w-full object-cover object-top" /></div>
            <div className="absolute bottom-[2%] left-[2%] h-[43%] w-[28%] rotate-[-5deg] overflow-hidden rounded-[1.7rem] bg-zinc-950 shadow-2xl"><img src={kioskModelPro} alt="ZoomSelfie Kiosk" className="h-full w-full object-contain p-2" /></div>
          </motion.div>
        </div>
      </section>

      <section id="product-family" className="products-screen relative flex min-h-[100svh] items-center overflow-hidden bg-zinc-950 py-20 text-white lg:py-24">
        <img src={kioskParis} alt="ZoomSelfie kiosk installation" className="absolute inset-0 h-full w-full object-cover opacity-62" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96),rgba(0,0,0,.72)_48%,rgba(0,0,0,.18))]" />
        <div className="container-page relative z-10 w-full">
          <motion.div {...reveal()} className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-primary"><span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-black"><ScanFace className="h-5 w-5" /></span>Physical product · For sale</div>
            <h2 className="mt-7 text-5xl font-extrabold leading-[.96] tracking-[-.06em] sm:text-7xl">ZoomSelfie Kiosk</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/62 sm:text-lg">A complete self-service photo and video system configured around the venue, brand and visitor flow.</p>
            <ul className="mt-7 space-y-3 text-sm font-semibold">{["Standard and Pro models", "Open-air or enclosed format", "Selectable finishes and optional features"].map((item) => <li key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-black"><Check className="h-3.5 w-3.5" /></span>{item}</li>)}</ul>
            <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-13 rounded-full px-8"><Link to="/kiosk">Configure a kiosk <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" size="lg" className="h-13 rounded-full border-white/25 bg-black/20 px-8 text-white hover:bg-white hover:text-black"><Link to="/contact">Talk to sales</Link></Button></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3f1ec] py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <motion.div {...reveal()} className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Create and operate</p><h2 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-.06em] sm:text-7xl">The software behind every experience.</h2></div><p className="max-w-lg text-base leading-7 text-zinc-600 lg:justify-self-end">Build the campaign in one place, then manage every published experience from another.</p></motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <motion.article id="campaign-tool" {...reveal()} className="overflow-hidden rounded-[2.25rem] bg-white shadow-[0_25px_75px_-55px_rgba(0,0,0,.55)]">
              <div className="relative h-[430px] overflow-hidden bg-zinc-100"><img src={prodPlatform} alt="ZoomSelfie Campaign Tool" className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]" /></div>
              <div className="p-7 sm:p-9"><div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-primary"><PanelsTopLeft className="h-5 w-5" />Create and publish</div><h3 className="mt-5 text-3xl font-extrabold">Campaign Tool</h3><p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">Build a branded photo-to-video campaign and publish it on the web, a kiosk or both.</p><Link to="/book-demo" className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Explore Campaign Tool <ArrowRight className="h-4 w-4 text-primary" /></Link></div>
            </motion.article>

            <motion.article id="web-panel" {...reveal(.08)} className="overflow-hidden rounded-[2.25rem] bg-zinc-950 text-white shadow-[0_25px_75px_-55px_rgba(0,0,0,.7)]">
              <div className="relative h-[430px] overflow-hidden p-3"><img src={appDashboard} alt="ZoomSelfie Web Panel" className="h-full w-full rounded-[1.55rem] object-cover object-top transition-transform duration-700 hover:scale-[1.025]" /></div>
              <div className="p-7 sm:p-9"><div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-primary"><LayoutDashboard className="h-5 w-5" />Manage and measure</div><h3 className="mt-5 text-3xl font-extrabold">Web Panel</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/52">Control campaigns, kiosks, templates, usage and credits from one clear workspace.</p><Link to="/book-demo" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore Web Panel <ArrowRight className="h-4 w-4" /></Link></div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <motion.div {...reveal()} className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Professional and embedded</p><h2 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-.06em] sm:text-7xl">For teams that need more control.</h2></motion.div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
            <motion.article id="desktop-app" {...reveal()} className="group relative min-h-[620px] overflow-hidden rounded-[2.25rem] bg-zinc-950 text-white"><img src={prodDesktopApp} alt="ZoomSelfie Desktop App" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-8 sm:p-10"><span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-black"><Monitor className="h-5 w-5" /></span><p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-primary">For photographers and event teams</p><h3 className="mt-3 text-4xl font-extrabold">Desktop App</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/58">Create larger sets of personalized photo and video content through an efficient desktop workflow.</p></div></motion.article>
            <motion.article id="api" {...reveal(.08)} className="group relative min-h-[620px] overflow-hidden rounded-[2.25rem] bg-primary"><img src={prodDeveloperApi} alt="ZoomSelfie API" className="absolute inset-x-0 top-0 h-[58%] w-full object-cover object-top mix-blend-multiply transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 p-8 sm:p-10"><span className="grid h-11 w-11 place-items-center rounded-full bg-black text-white"><Code2 className="h-5 w-5" /></span><p className="mt-7 text-xs font-bold uppercase tracking-[.18em]">Inside your own product</p><h3 className="mt-3 text-4xl font-extrabold">ZoomSelfie API</h3><p className="mt-4 max-w-xl text-sm leading-7 text-black/58">Connect ZoomSelfie creation to your app, booking flow, loyalty platform or digital service.</p></div></motion.article>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-white sm:py-24">
        <div className="container-page">
          <motion.div {...reveal()} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{workflow.map((item) => <article key={item.number} className="flex min-h-56 flex-col rounded-[1.75rem] border border-white/10 bg-white/[.04] p-6"><span className="text-xs font-black text-primary">{item.number}</span><div className="mt-auto"><h3 className="text-2xl font-extrabold">{item.title}</h3><p className="mt-2 text-sm text-white/42">{item.text}</p></div></article>)}</motion.div>
        </div>
      </section>

      <section className="bg-cyan-300 py-16 text-zinc-950 sm:py-20">
        <div className="container-page"><motion.div {...reveal()} className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[.2em] text-cyan-900">A different photography operation</p><h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">Attraction photography runs on PhotoSoft.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-700">Capture points, guest matching, POS sales, delivery and analytics for museums and attractions.</p></div><Button asChild size="lg" className="h-13 rounded-full bg-zinc-950 px-8 text-white hover:bg-cyan-900"><Link to="/photosoft">Explore PhotoSoft <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></motion.div></div>
      </section>

      <section className="bg-primary py-20 sm:py-24"><div className="container-page text-center"><motion.div {...reveal()} className="mx-auto max-w-4xl"><p className="text-xs font-black uppercase tracking-[.2em]">Choose your starting point</p><h2 className="mt-5 text-5xl font-extrabold leading-[.98] tracking-[-.06em] sm:text-7xl">Let’s build the right ZoomSelfie setup.</h2><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild size="lg" className="h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><Link to="/book-demo">Book a demo <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" size="lg" className="h-13 rounded-full border-black/25 bg-transparent px-8 hover:bg-black hover:text-white"><Link to="/contact">Contact sales</Link></Button></div></motion.div></div></section>
    </div>
  );
}

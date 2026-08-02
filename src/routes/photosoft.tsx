"use client";

import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Building2,
  Camera,
  Download,
  Eye,
  Globe2,
  MonitorSmartphone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TicketCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartVideo } from "@/components/site/SmartVideo";

import heroVideo from "@/assets/Create_a_premium_cinematic_web.mp4";
import heroKiosk from "@/assets/hero-kiosk.svg";
import appDashboard from "@/assets/app-dashboard.png";
import galleryAquarium from "@/assets/gallery-aquarium-family.png";
import galleryCruise from "@/assets/gallery-cruise-sunset.png";
import galleryIstanbul from "@/assets/gallery-istanbul-group.png";
import galleryParis from "@/assets/gallery-paris-couple.png";
import kioskAquarium from "@/assets/kiosk-aquarium.png";
import kioskModelPro from "@/assets/kiosk-model-pro.png";
import kioskStadium from "@/assets/kiosk-stadium.png";
import museumImage from "@/assets/kiosk-rome.png";
import parkImage from "@/assets/kiosk-park.png";
import aquariumImage from "@/assets/kiosk-aquarium.png";
import eventImage from "@/assets/gallery-stadium-friends.png";
import hotelImage from "@/assets/kiosk-hotel.png";

const platformSteps = [
  {
    index: "01",
    title: "Capture the photo",
    shortTitle: "Capture",
    description: "Manage photos from professional studios, green screens, fixed cameras, roaming photographers and ride systems in one flow.",
    icon: Camera,
    image: kioskStadium,
  },
  {
    index: "02",
    title: "Match the guest",
    shortTitle: "Match",
    description: "Associate every photo with the right guest through a QR code, ticket, wristband, guest account or API.",
    icon: TicketCheck,
    image: galleryParis,
  },
  {
    index: "03",
    title: "Create the products",
    shortTitle: "Create",
    description: "Turn one capture into themed photos, short videos, social formats, prints and branded product options.",
    icon: Sparkles,
    image: galleryAquarium,
  },
  {
    index: "04",
    title: "Show the personal gallery",
    shortTitle: "Show",
    description: "Let each guest see only their own photos and videos on a kiosk, sales screen or mobile device.",
    icon: Eye,
    image: kioskAquarium,
  },
  {
    index: "05",
    title: "Sell across every channel",
    shortTitle: "Sell",
    description: "Sell through self-service kiosks, cashier/POS screens, mobile devices and post-visit online galleries.",
    icon: ShoppingBag,
    image: kioskModelPro,
  },
  {
    index: "06",
    title: "Deliver every product",
    shortTitle: "Deliver",
    description: "Manage digital downloads, email delivery, prints, albums and souvenir products from one place.",
    icon: Download,
    image: galleryCruise,
  },
  {
    index: "07",
    title: "Analyse the results",
    shortTitle: "Analyse",
    description: "Measure the complete conversion journey, products, channels and locations with real operational data.",
    icon: BarChart3,
    image: appDashboard,
  },
];

const channels = [
  { icon: MonitorSmartphone, title: "Self-service kiosk", text: "Scan the QR code, view the gallery, choose a package and pay." },
  { icon: Users, title: "Cashier / POS", text: "Staff find the guest gallery, build the order and complete the sale." },
  { icon: Globe2, title: "Online gallery", text: "Guests can return and purchase after leaving the attraction." },
  { icon: Download, title: "Digital delivery", text: "Downloads, sharing and repeat access stay in one place." },
];

const venues = [
  { name: "Museums", text: "Place every guest inside the story of the exhibition.", image: museumImage },
  { name: "Aquariums", text: "Turn family moments into themed media products.", image: aquariumImage },
  { name: "Theme parks", text: "Manage high-volume capture and sales flows.", image: parkImage },
  { name: "Observation decks", text: "Turn the city view into a personal souvenir.", image: galleryIstanbul },
  { name: "Events", text: "Launch campaign-specific photo revenue quickly.", image: eventImage },
  { name: "Tourist destinations", text: "Make the visit last through personal media.", image: hotelImage },
];

const valueCards = [
  { icon: Users, label: "Guest experience", title: "Every guest finds their photos easily", text: "They wait less, see only their own content and reach the right products from different devices." },
  { icon: TrendingUp, label: "Revenue potential", title: "Every capture creates more opportunity", text: "More products, packages and channels keep generating sales even after the visit ends." },
  { icon: BarChart3, label: "Operational efficiency", title: "Less manual work, more control", text: "Matching becomes faster, sales points move smoothly and every location stays visible." },
];

const productFamilies = [
  {
    number: "01",
    title: "Capture & Association",
    description: "Manage capture points and associate every photo with the right guest.",
    modules: ["PhotoSoft Capture", "Guest Matching"],
    icon: Camera,
  },
  {
    number: "02",
    title: "Create & Present",
    description: "Turn photos into products and present them in a personal gallery at the right moment.",
    modules: ["Creative Engine", "PhotoSoft Gallery"],
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Commerce & Delivery",
    description: "Connect kiosks, POS and the online store in one sales and delivery flow.",
    modules: ["Kiosk", "POS", "Online Store", "Delivery"],
    icon: ShoppingBag,
  },
  {
    number: "04",
    title: "Intelligence & Scale",
    description: "Manage quality, performance and multiple locations from one central view.",
    modules: ["Quality Intelligence", "Analytics", "Multi-Site"],
    icon: BarChart3,
  },
];

export default function PhotoSoft() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.65, delay },
  });

  return (
    <div className="photosoft-page overflow-hidden bg-black text-white">
      <section className="premium-grain photosoft-screen items-end overflow-hidden bg-black pt-24 pb-12 sm:pb-16 lg:pb-20">
        <SmartVideo
          src={heroVideo}
          poster={heroKiosk.src}
          eager
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.08)_35%,rgba(0,0,0,.88)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.45),transparent_58%)]" />

        <div className="container-page relative z-10 w-full">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">The Operating System for Attraction Photography</p>
            <h1 className="mt-5 max-w-6xl text-5xl font-extrabold leading-[.95] tracking-[-0.06em] sm:text-7xl lg:text-[6.2rem]">
              From the moment it is captured<br />to the moment it is sold.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-xl sm:leading-8">
              Connect capture points, guest matching, automated content creation, personal galleries, kiosk, POS, online sales, delivery and analytics in one platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-13 rounded-full bg-white px-7 text-base font-bold text-black hover:bg-cyan-200">
                <Link to="/contact" hash="photosoft">Contact PhotoSoft <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <a href="#journey" className="inline-flex h-13 items-center gap-2 rounded-full border border-white/35 bg-black/15 px-7 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
                See how it works <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          <div className="mt-12 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/50">
            <span className="h-px w-12 bg-white/35" /> Capture → Match → Create → Show → Sell → Deliver → Analyse
          </div>
        </div>
      </section>

      <section className="photosoft-screen bg-white py-14 text-zinc-950 sm:py-16 lg:pt-24 lg:pb-12">
        <div className="container-page">
          <motion.div {...reveal()} className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-700">Attraction Media Commerce</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Turn every guest photo into a media product that creates value.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-600 lg:justify-self-end lg:text-lg">PhotoSoft brings capture points, guest matching, creative products, galleries, sales channels, delivery and operational data into the same system.</p>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              { icon: Camera, label: "Capture", title: "Every capture point stays connected.", text: "Manage content from professional studios, automatic cameras, ride systems and roaming teams in one operational flow.", image: kioskStadium },
              { icon: ShoppingBag, label: "Commerce", title: "Every product is ready to sell.", text: "Personal galleries, kiosks, POS and the online store share the same product, order and delivery structure.", image: kioskModelPro },
              { icon: BarChart3, label: "Intelligence", title: "Every result is visible.", text: "See the complete journey, from capture and conversion to product performance and location comparison.", image: appDashboard },
            ].map((pillar, index) => (
              <motion.article key={pillar.label} {...reveal(index * .07)} className="premium-media frame-corners ps-pillar group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-zinc-950 text-white lg:min-h-[360px]">
                <Image src={pillar.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="relative flex h-full min-h-[380px] flex-col justify-end p-7 sm:p-8 lg:min-h-[360px]">
                  <div className="mb-auto grid h-11 w-11 place-items-center rounded-full bg-cyan-300 text-zinc-950"><pillar.icon className="h-5 w-5" /></div>
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-cyan-300">{pillar.label}</p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{pillar.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="photosoft-screen bg-[#08090b] py-14 sm:py-16 lg:pt-24 lg:pb-12">
        <div className="mx-auto w-full max-w-[100rem] px-3 sm:px-5 lg:px-6">
          <motion.div {...reveal()} className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">How PhotoSoft works</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">Seven stages. One continuous flow.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              The complete photography journey, from capture to analysis, runs on the same platform.
            </p>
          </motion.div>

          <div className="ps-journey-grid mt-16 flex min-h-[480px] flex-col gap-3 lg:h-[460px] lg:min-h-0 lg:flex-row">
            {platformSteps.map((step, index) => {
              const isActive = activeStep === index;
              const StepIcon = step.icon;
              return (
                <div
                  key={step.index}
                  className={`relative mt-8 flex min-h-[220px] min-w-0 flex-col first:mt-0 lg:mt-0 lg:min-h-0 transition-[flex] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${isActive ? "lg:flex-[5]" : "lg:flex-1"}`}
                >
                  <span className="pointer-events-none absolute -top-7 left-1/2 z-10 -translate-x-1/2 text-sm font-black tracking-[.12em] text-cyan-300 transition-all duration-700">
                    {step.index}
                  </span>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    aria-pressed={isActive}
                    className="group relative isolate min-h-[220px] w-full flex-1 overflow-hidden rounded-[1.8rem] text-left lg:min-h-0"
                  >
                    <Image
                      src={step.image}
                      alt=""
                      className={`absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-1000 ${isActive ? "scale-100" : "scale-110"}`}
                    />
                    <div className={`absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/15 to-black/10 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-80"}`} />
                    <div className="flex h-full flex-col p-6 sm:p-7">
                      <div className="flex items-center justify-end">
                        <StepIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className={`mt-auto max-w-xl transition-all duration-500 ${isActive ? "translate-y-0 opacity-100" : "lg:translate-y-7 lg:opacity-0"}`}>
                        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-cyan-300">{step.shortTitle}</p>
                        <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">{step.title}</h3>
                        <p className="mt-3 max-w-lg text-sm leading-6 text-white/72 sm:text-base sm:leading-7">{step.description}</p>
                      </div>
                      {!isActive && <span className="absolute bottom-7 left-7 hidden text-xl font-bold text-white lg:block lg:[writing-mode:vertical-rl] lg:rotate-180">{step.shortTitle}</span>}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-center text-xs text-zinc-500">Select or hover over a stage to explore the details.</p>
        </div>
      </section>

      <section className="photosoft-screen bg-[#f3f5f7] py-14 text-zinc-950 sm:py-16 lg:pt-24 lg:pb-12">
        <div className="container-page">
          <motion.div {...reveal()} className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-700">Platform architecture</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-6xl">The digital operating system for your photography business.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-zinc-600 lg:justify-self-end lg:text-lg">Eleven connected modules manage the complete lifecycle, from capture and commerce to quality intelligence and multi-site operations.</p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {productFamilies.map((family, index) => (
              <motion.article key={family.title} {...reveal(index * .06)} className="premium-card group rounded-[2rem] border border-zinc-200 bg-white p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-cyan-700">{family.number}</span>
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-zinc-950 text-cyan-300"><family.icon className="h-5 w-5" /></div>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold tracking-tight">{family.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-600">{family.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {family.modules.map((module) => <span key={module} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-bold text-zinc-700">{module}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="photosoft-screen bg-white py-14 text-zinc-950 sm:py-16 lg:pt-24 lg:pb-12">
        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <motion.div {...reveal()}>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-600">Many products from one capture</p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-6xl">One moment.<br />Many memories.</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-zinc-600">PhotoSoft turns a single capture into themed photos, short videos, social content, sponsored designs and print products.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Themed photo", "Short video", "Social content", "Sponsored design", "Print"].map((item) => <span key={item} className="rounded-full border border-zinc-200 px-3.5 py-2 text-xs font-bold text-zinc-700">{item}</span>)}
              </div>
            </motion.div>
            <motion.div {...reveal(.1)} className="ps-product-collage grid grid-cols-2 gap-3 sm:gap-4">
              <div className="premium-media frame-corners overflow-hidden rounded-[2rem] bg-zinc-100"><Image src={galleryAquarium} alt="Themed aquarium photo product" className="ps-collage-main h-full min-h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:min-h-[420px]" /></div>
              <div className="grid gap-3 sm:gap-4">
                <div className="premium-media overflow-hidden rounded-[2rem] bg-zinc-100"><Image src={galleryCruise} alt="Digital memory product" className="ps-collage-small h-52 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[202px]" /></div>
                <div className="premium-media overflow-hidden rounded-[2rem] bg-zinc-100"><Image src={galleryIstanbul} alt="City-themed photo product" className="ps-collage-small h-52 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[202px]" /></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="photosoft-screen overflow-hidden bg-zinc-950 py-14 sm:py-16 lg:pt-24 lg:pb-12">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-cyan-400/[.035]" />
        <div className="container-page relative">
          <motion.div {...reveal()} className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Commerce can happen anywhere</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">Guests buy wherever<br />it suits them.</h2>
          </motion.div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div {...reveal()} className="premium-media frame-corners ps-commerce-visual relative min-h-[440px] overflow-hidden rounded-[2.2rem] bg-[#e8e5df] lg:min-h-[400px]">
              <Image src={kioskModelPro} alt="PhotoSoft self-service kiosk" className="absolute inset-0 h-full w-full object-contain p-7 sm:p-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />
              <div className="absolute bottom-0 p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Kiosk · POS · Online</p><h3 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">The sales opportunity does not end at the attraction exit.</h3></div>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((channel, index) => (
                <motion.div key={channel.title} {...reveal(index * .05)} className="premium-card flex items-start gap-4 rounded-[1.7rem] border border-white/10 bg-white/[.045] p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-300 text-zinc-950"><channel.icon className="h-5 w-5" /></div>
                  <div><h3 className="text-base font-bold">{channel.title}</h3><p className="mt-1.5 text-sm leading-6 text-zinc-400">{channel.text}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="photosoft-screen bg-[#f3f5f7] py-14 text-zinc-950 sm:py-16 lg:pt-24 lg:pb-12">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
            <motion.div {...reveal()}>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-700">Operations Intelligence</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">Your complete photography operation, live and visible.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">PhotoSoft combines every performance signal, from capture to sale, in one operational view built for better decisions.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Which capture point performs best?", "Which theme sells more?", "Which photos fail quality checks?", "Which channel generates more revenue?"].map((question, index) => (
                  <motion.div key={question} {...reveal(index * .05)} className="rounded-2xl border border-zinc-200 bg-white p-4"><span className="text-xs font-bold text-cyan-700">0{index + 1}</span><p className="mt-3 text-sm font-bold leading-6">{question}</p></motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div {...reveal(.08)} className="premium-media frame-corners relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-zinc-950 p-2 shadow-2xl sm:p-3">
              <Image src={appDashboard} alt="PhotoSoft management and analytics dashboard" className="ps-dashboard-image h-[360px] w-full rounded-[1.5rem] object-cover object-top sm:h-[460px] lg:h-[520px]" />
              <span className="interface-scan absolute inset-x-8 top-1/2 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="photosoft-screen isolate overflow-hidden bg-zinc-950 py-14 sm:py-16 lg:pt-24 lg:pb-12">
        <Image src={appDashboard} alt="" sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover object-top opacity-15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950/75 via-zinc-950/90 to-zinc-950" />
        <div className="container-page">
          <motion.div {...reveal()} className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Measure · Improve · Scale</p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">Every decision starts from the same operational view.</h2>
          </motion.div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <motion.article {...reveal()} className="premium-card rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-8">
              <ShieldCheck className="h-7 w-7 text-cyan-300" />
              <p className="mt-10 text-xs font-bold uppercase tracking-[.16em] text-cyan-300">Quality Intelligence</p>
              <h3 className="mt-3 text-2xl font-bold">Prioritize content that is ready to sell.</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">Identify blurred, flawed or closed-eye captures and improve the quality of the operation.</p>
            </motion.article>
            <motion.article {...reveal(.06)} className="premium-card rounded-[2rem] bg-white p-7 text-zinc-950 ring-1 ring-zinc-200 sm:p-8">
              <BarChart3 className="h-7 w-7 text-cyan-700" />
              <p className="mt-10 text-xs font-bold uppercase tracking-[.16em] text-cyan-700">Revenue Analytics</p>
              <h3 className="mt-3 text-2xl font-bold">See the complete conversion journey.</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Measure capture, QR usage, gallery views, purchases, products and channel performance together.</p>
            </motion.article>
            <motion.article {...reveal(.12)} className="premium-card rounded-[2rem] bg-cyan-300 p-7 text-zinc-950 sm:p-8">
              <Building2 className="h-7 w-7" />
              <p className="mt-10 text-xs font-bold uppercase tracking-[.16em] text-zinc-700">Multi-Site Management</p>
              <h3 className="mt-3 text-2xl font-bold">Manage every location from one center.</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">Track attractions, stores, kiosks and capture points in one shared operational view.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="photosoft-screen bg-white py-14 text-zinc-950 sm:py-16 lg:pt-24 lg:pb-12">
        <div className="container-page">
          <motion.div {...reveal()} className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-700">Attraction ecosystem</p>
              <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">One platform that adapts to every destination.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-zinc-600 lg:justify-self-end">From museums and theme parks to aquariums and events, PhotoSoft adapts to different guest journeys, product structures and sales models.</p>
          </motion.div>
        </div>
        <div className="photosoft-marquee-window mt-10 overflow-hidden">
          <div className="photosoft-marquee-track flex w-max hover:[animation-play-state:paused]">
            {[0, 1].map((group) => (
              <div key={group} aria-hidden={group === 1} className="flex gap-4 pr-4">
                {venues.map((venue) => (
                  <article key={`${group}-${venue.name}`} className="premium-media ps-venue-card group relative min-h-[360px] w-[78vw] max-w-[350px] shrink-0 overflow-hidden rounded-[2rem] bg-zinc-900 lg:min-h-[380px]">
                    <Image src={venue.image} alt={group === 0 ? venue.name : ""} sizes="(max-width: 768px) 80vw, 25vw" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
                    <div className="absolute bottom-0 p-7 text-white"><h3 className="text-2xl font-bold">{venue.name}</h3><p className="mt-2 text-sm leading-6 text-white/70">{venue.text}</p></div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="photosoft-screen isolate overflow-hidden bg-zinc-950 py-14 sm:py-16 lg:pt-24 lg:pb-12">
        <Image src={galleryCruise} alt="" sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-zinc-950/85" />
        <div className="container-page">
          <motion.div {...reveal()} className="mx-auto max-w-4xl text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Why PhotoSoft?</p><h2 className="mt-5 text-4xl font-extrabold tracking-[-0.055em] sm:text-6xl">Grow the experience, revenue and operation together.</h2></motion.div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 lg:grid-cols-3">
            {valueCards.map((card, index) => (
              <motion.div key={card.label} {...reveal(index * .06)} className="bg-zinc-950 p-7 sm:p-8"><card.icon className="h-6 w-6 text-cyan-300" /><p className="mt-10 text-[10px] font-bold uppercase tracking-[.18em] text-zinc-500">{card.label}</p><h3 className="mt-2 text-xl font-bold">{card.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{card.text}</p></motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="photosoft-screen isolate overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
        <Image src={heroKiosk} alt="PhotoSoft attraction photography experience" sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-black/65" />
        <div className="container-page text-center">
          <motion.div {...reveal()} className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">From capture to commerce</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Make every guest moment discoverable, purchasable and measurable.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Let’s plan how PhotoSoft can work for your operation.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild size="lg" className="h-13 rounded-full bg-cyan-300 px-8 text-base font-bold text-zinc-950 hover:bg-white"><Link to="/contact" hash="photosoft">Contact PhotoSoft <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" size="lg" className="h-13 rounded-full border-white/30 bg-black/20 px-8 text-base text-white hover:bg-white hover:text-black"><Link to="/products">Explore ZoomSelfie</Link></Button></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

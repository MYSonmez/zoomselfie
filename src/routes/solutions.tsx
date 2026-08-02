"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Hotel,
  Landmark,
  Megaphone,
  Share2,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";
import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { Button } from "@/components/ui/button";
import galleryIstanbul from "@/assets/gallery-istanbul-group.png";
import galleryCruise from "@/assets/gallery-cruise-sunset.png";
import galleryStadium from "@/assets/gallery-stadium-friends.png";
import galleryAquarium from "@/assets/gallery-aquarium-family.png";
import galleryParis from "@/assets/gallery-paris-couple.png";
import desktopApp from "@/assets/desktop-app-placeholder.svg";

const sharedBenefits = [
  { icon: Users, title: "More participation", text: "Give people an active role instead of another screen to passively watch." },
  { icon: Share2, title: "Organic visibility", text: "Create personal content people have a genuine reason to keep and share." },
  { icon: WalletCards, title: "New value", text: "Turn a memorable digital output into an optional revenue or campaign opportunity." },
  { icon: Zap, title: "Light operation", text: "Use a guided self-service flow that can work without adding a complex process for staff." },
];

const groups = [
  {
    id: "destinations",
    icon: Landmark,
    audience: "Destinations & attractions",
    title: "Let visitors become part of the place they came to see.",
    description: "Museums, landmarks, city centres, aquariums and family attractions can turn the identity of the location into a personal photo or video memory.",
    image: galleryIstanbul,
    alt: "Visitors creating a personalized destination memory",
    examples: "Museums · landmarks · city centres · aquariums · zoos",
    benefits: ["Make the visit more interactive", "Extend the memory beyond the venue", "Turn visitor sharing into destination visibility"],
    products: [["Kiosk Systems", "/kiosk"], ["Campaign Tool", "/products/campaign-tool"], ["Web Panel", "/products/web-panel"]],
  },
  {
    id: "hospitality",
    icon: Hotel,
    audience: "Hospitality & travel",
    title: "Give every stay a memory with the property inside it.",
    description: "Hotels, resorts, passenger ships and travel environments can offer a branded experience that guests create themselves and take home digitally.",
    image: galleryCruise,
    alt: "Personalized travel memory at sunset",
    examples: "Hotels · resorts · cruises · airports · beach clubs",
    benefits: ["Add a distinctive guest touchpoint", "Show the destination through guest content", "Create an optional service or revenue layer"],
    products: [["Kiosk Systems", "/kiosk"], ["Campaign Tool", "/products/campaign-tool"], ["Web Panel", "/products/web-panel"]],
  },
  {
    id: "marketing",
    icon: Megaphone,
    audience: "Brands & marketing",
    title: "Turn campaign attention into personal participation.",
    description: "Invite people to place themselves inside the campaign through a branded web or kiosk journey, then leave with content made for them.",
    image: galleryParis,
    alt: "Branded personalized content created by a couple",
    examples: "Brand campaigns · launches · sponsorships · activations",
    benefits: ["Move from impressions to active participation", "Keep every output visually on brand", "Give campaign sharing a personal reason"],
    products: [["Campaign Tool", "/products/campaign-tool"], ["Kiosk Systems", "/kiosk"], ["API", "/products/api"]],
  },
  {
    id: "events",
    icon: BriefcaseBusiness,
    audience: "Events & entertainment",
    title: "Give the crowd something made from their own moment.",
    description: "Sports events, fairs, festivals and special occasions can add a fast creative experience that reflects the event and continues after it ends.",
    image: galleryStadium,
    alt: "Friends creating personalized content at a sports event",
    examples: "Sports · festivals · fairs · launches · celebrations",
    benefits: ["Increase on-site interaction", "Create sponsor-friendly outputs", "Extend the event through attendee sharing"],
    products: [["Kiosk Systems", "/kiosk"], ["Campaign Tool", "/products/campaign-tool"], ["Web Panel", "/products/web-panel"]],
  },
  {
    id: "photographers",
    icon: Camera,
    audience: "Photographers & creative businesses",
    title: "Turn a photo service into a more distinctive digital product.",
    description: "Photographers and creative teams can use ZoomSelfie themes and motion formats to offer clients something beyond a standard gallery of still images.",
    image: desktopApp,
    alt: "ZoomSelfie Desktop App for professional creative workflows",
    examples: "Photographers · studios · event teams · creative production",
    benefits: ["Add a new deliverable to existing shoots", "Process larger sets through one workflow", "Keep visual concepts consistent across a project"],
    products: [["Desktop App", "/products/desktop-app"], ["Web Panel", "/products/web-panel"], ["API", "/products/api"]],
  },
] as const;

export default function Solutions() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 1, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-70px" },
    transition: { duration: .65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="solutions-page bg-white text-zinc-950">
      <section className="premium-grain solutions-hero product-screen relative isolate flex items-end overflow-hidden bg-black pb-14 pt-28 text-white sm:pb-18 lg:pb-20">
        <Image src={galleryAquarium} alt="A family creating a ZoomSelfie experience" priority sizes="100vw" className="absolute inset-0 -z-30 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black via-black/62 to-black/18" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/15" />
        <div className="container-page w-full">
          <motion.div {...reveal()} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] backdrop-blur"><Sparkles className="h-3.5 w-3.5 text-primary" /> Solutions for the teams behind the experience</div>
            <h1 className="mt-7 text-[clamp(3.5rem,7vw,7.5rem)] font-extrabold leading-[.87] tracking-[-.07em]">A better moment for people. More value for the business.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">ZoomSelfie helps organisations turn a location, campaign or creative service into personal content people want to keep and share.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-13 rounded-full px-8"><a href="#business-value">See the business value <ArrowDown className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline" className="h-13 rounded-full border-white/25 bg-black/15 px-8 text-white hover:bg-white hover:text-black"><Link to="/contact">Discuss your use case</Link></Button></div>
          </motion.div>
        </div>
      </section>

      <section id="business-value" className="product-screen flex items-center bg-[#f6f1e7] py-20 lg:py-24">
        <div className="container-page w-full">
          <motion.div {...reveal()} className="max-w-4xl"><p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">The value behind the experience</p><h2 className="mt-5 text-[clamp(2.8rem,5vw,5.6rem)] font-extrabold leading-[.94] tracking-[-.065em]">Designed around what the audience does next.</h2></motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sharedBenefits.map((benefit, index) => <motion.article key={benefit.title} {...reveal(index * .05)} className="premium-card min-h-[300px] rounded-[2rem] border border-black/8 bg-white p-7"><span className="grid h-12 w-12 place-items-center rounded-full bg-primary"><benefit.icon className="h-5 w-5" /></span><p className="mt-14 text-[10px] font-black uppercase tracking-[.2em] text-black/35">0{index + 1}</p><h3 className="mt-3 text-2xl font-extrabold tracking-[-.035em]">{benefit.title}</h3><p className="mt-3 text-sm leading-7 text-black/55">{benefit.text}</p></motion.article>)}
          </div>
        </div>
      </section>

      {groups.map((group, index) => (
        <section key={group.id} id={group.id} className={`product-screen flex items-center py-20 lg:py-24 ${index % 2 === 0 ? "bg-white" : "bg-zinc-950 text-white"}`}>
          <div className={`container-page grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <motion.div {...reveal()} className={`premium-media frame-corners relative min-h-[430px] overflow-hidden rounded-[2.4rem] ${group.id === "photographers" ? "bg-[#101114]" : "bg-zinc-900"}`}>
              <Image src={group.image} alt={group.alt} sizes="(max-width:1024px) 100vw, 50vw" className={group.id === "photographers" ? "h-full w-full object-cover object-center" : "h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-transparent to-transparent" />
              <p className="absolute bottom-7 left-7 right-7 text-xs font-bold uppercase tracking-[.15em] text-white/72">{group.examples}</p>
            </motion.div>

            <motion.div {...reveal(.06)} className="max-w-xl">
              <span className={`grid h-12 w-12 place-items-center rounded-full ${index % 2 === 1 ? "bg-primary text-black" : "bg-black text-white"}`}><group.icon className="h-5 w-5" /></span>
              <p className={`mt-7 text-xs font-black uppercase tracking-[.22em] ${index % 2 === 1 ? "text-primary" : "text-amber-600"}`}>{group.audience}</p>
              <h2 className="mt-5 text-[clamp(2.7rem,4.4vw,4.9rem)] font-extrabold leading-[.95] tracking-[-.06em]">{group.title}</h2>
              <p className={`mt-6 text-base leading-7 ${index % 2 === 1 ? "text-white/52" : "text-black/58"}`}>{group.description}</p>
              <div className="mt-7 grid gap-3">
                {group.benefits.map((benefit) => <div key={benefit} className={`premium-card flex items-center gap-3 rounded-2xl border p-4 text-sm font-bold ${index % 2 === 1 ? "border-white/10 bg-white/[.045]" : "border-black/8 bg-[#f7f7f5]"}`}><span className="h-2 w-2 shrink-0 rounded-full bg-primary" />{benefit}</div>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {group.products.map(([label, to]) => <Link key={label} to={to} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-colors ${index % 2 === 1 ? "border-white/15 text-white/72 hover:border-primary hover:text-primary" : "border-black/12 hover:border-black"}`}>{label}<ArrowRight className="h-3.5 w-3.5" /></Link>)}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="premium-grain bg-primary py-20 text-center sm:py-24">
        <div className="container-page"><motion.div {...reveal()} className="mx-auto max-w-4xl"><p className="text-xs font-black uppercase tracking-[.22em] text-black/50">A solution shaped around your audience</p><h2 className="mt-5 text-[clamp(2.8rem,5vw,5.4rem)] font-extrabold leading-[.95] tracking-[-.06em]">Tell us where the moment happens.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/62">We will help map the audience journey to the right ZoomSelfie products without turning the experience into a complicated operation.</p><Button asChild size="lg" className="mt-9 h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><Link to="/contact">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></motion.div></div>
      </section>
    </div>
  );
}

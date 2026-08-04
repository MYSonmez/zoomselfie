"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "@/components/site/ResponsiveImage";
import { Link } from "@/components/site/AppLink";
import { Button } from "@/components/ui/button";
import galleryIstanbul from "@/assets/gallery-istanbul-group.png";
import galleryCruise from "@/assets/gallery-cruise-sunset.png";
import galleryStadium from "@/assets/gallery-stadium-friends.png";
import galleryAquarium from "@/assets/gallery-aquarium-family.png";
import galleryParis from "@/assets/gallery-paris-couple.png";

const solutions = [
  {
    id: "marketing",
    audience: "Marketing",
    short: "Campaign participation",
    title: "Turn campaign attention into personal participation.",
    advantage: "ZoomSelfie turns a passive campaign into an experience people actively join. Instead of only seeing the brand message, participants become part of it and leave with a personalized photo or video that feels relevant enough to save, share and remember.",
    operation: "The Campaign Tool controls the visual templates, campaign flow and branded output from one place. Participants can join through a campaign page or a kiosk, upload or capture their image, select a prepared concept and receive the finished content digitally.",
    image: galleryParis,
    alt: "A couple creating personalized campaign content",
    products: [["Explore Campaign Tool", "/products/campaign-tool"]],
  },
  {
    id: "photographers",
    audience: "Photographers",
    short: "A new creative deliverable",
    title: "Add a new perspective to professional photography.",
    advantage: "ZoomSelfie gives photographers a product beyond the standard still-image gallery. Story-driven motion, prepared visual themes and panoramic effects create a more distinctive deliverable, helping creative professionals offer greater value and open an additional service or revenue opportunity.",
    operation: "The Desktop App brings the workflow into the photographer’s own production environment. Images from a shoot can be processed with selected templates and visual concepts in a repeatable flow, while the photographer keeps control of the source material, style and final delivery.",
    image: galleryParis,
    alt: "A professionally styled personalized photo",
    products: [["Explore Desktop App", "/products/desktop-app"]],
  },
  {
    id: "resorts-hotels",
    audience: "Resorts & Hotels",
    short: "A stay worth sharing",
    title: "Turn every stay into a destination memory.",
    advantage: "ZoomSelfie turns the property, its views and atmosphere into a personal memory guests can take away. The experience adds an entertaining premium touchpoint to the stay, improves guest satisfaction and gives the hotel or resort organic visibility whenever the finished content is shared.",
    operation: "A compact self-service kiosk can be placed in the lobby, experience area or another high-traffic location. Guests capture or upload their image, choose a destination-themed format and receive the completed photo or video digitally without creating a demanding new workflow for hotel staff.",
    image: galleryCruise,
    alt: "Guests creating a personalized resort memory",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "museums",
    audience: "Museums",
    short: "Interactive storytelling",
    title: "Make art, history and discovery personal.",
    advantage: "ZoomSelfie helps visitors form a more personal connection with art, history and discovery. By becoming part of the exhibition story, guests gain a memorable cultural takeaway while every shared output extends the museum’s visibility beyond the physical visit.",
    operation: "A kiosk guides the visitor through a simple self-service journey near an exhibition or exit area. The visitor captures or uploads an image, selects an exhibition-specific theme and receives a finished photo or short video that can be delivered immediately by QR code or digitally.",
    image: galleryIstanbul,
    alt: "Visitors creating a cultural destination memory",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "city-centers",
    audience: "City Centers",
    short: "Turn streets into stories",
    title: "Capture the pulse and identity of the city.",
    advantage: "ZoomSelfie transforms squares, monuments and busy public spaces into interactive city touchpoints. Locals and tourists create a panoramic memory around the destination, encouraging exploration while every shared result carries the identity of the city to a wider audience.",
    operation: "Weather-appropriate kiosk systems can be positioned at tourist information points, landmarks or pedestrian areas. Visitors complete a guided capture and template-selection flow, then receive a city-branded photo or video without requiring a permanently staffed operation.",
    image: galleryIstanbul,
    alt: "A personalized memory created in a city centre",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "historical-places",
    audience: "Historical & Touristic Places",
    short: "Bring heritage to life",
    title: "Add a modern memory without disturbing the place.",
    advantage: "ZoomSelfie adds a modern digital layer to landmarks, ruins, viewpoints and cultural settings without competing with their authenticity. Visitors leave with a polished personal souvenir, and the destination gains organic reach through content that keeps its identity visible in every share.",
    operation: "A kiosk can be installed at an appropriate visitor point without interfering with the protected structure or landscape. Guests capture or upload an image and choose a location-specific visual concept, after which the system produces and delivers the personalized output automatically.",
    image: galleryIstanbul,
    alt: "Visitors photographed at a historical destination",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "passenger-ships",
    audience: "Passenger Ships",
    short: "Capture the voyage",
    title: "Make every deck part of the journey story.",
    advantage: "ZoomSelfie turns ocean views, onboard landmarks and the atmosphere of the voyage into a personal travel memory. It gives passengers an enjoyable activity during the journey and allows the ship’s identity to travel further through branded content shared with friends and family.",
    operation: "Compact kiosks can work at scenic decks, lounges or entry points with minimal space and no dedicated operator. Passengers create or upload their image, select a voyage-themed scene and receive the completed content digitally while the experience remains available throughout the trip.",
    image: galleryCruise,
    alt: "Passengers creating a memory during a sea journey",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "aquariums",
    audience: "Aquariums",
    short: "Step inside the underwater world",
    title: "Create clear, imaginative memories beyond the glass.",
    advantage: "Aquariums create a strong atmosphere but glass, movement and low light often make ordinary phone photography disappointing. ZoomSelfie gives families a bright, imaginative and consistently polished souvenir connected to the underwater world they came to experience.",
    operation: "A kiosk uses prepared aquarium scenes, themed frames and motion templates instead of relying only on difficult ambient conditions. Visitors capture or upload their image, choose a concept and receive a finished digital photo or video through a simple self-service flow.",
    image: galleryAquarium,
    alt: "A family creating an aquarium-themed memory",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "zoos",
    audience: "Zoos",
    short: "Star in a wild adventure",
    title: "Bring visitors closer to the atmosphere of the wild.",
    advantage: "ZoomSelfie adds a playful memory-making layer to family visits, school trips and educational days. Guests can star in a themed wildlife story, creating a stronger connection with the atmosphere of the zoo while shared content increases its visibility naturally.",
    operation: "Self-service kiosks can be placed near popular exhibits or immersive zones and configured with animal-themed visual concepts. In a few guided steps, visitors create their image, select a scene and receive a ready-to-share photo or video without staff assistance.",
    image: galleryAquarium,
    alt: "A family creating a themed wildlife memory",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "airports",
    audience: "Airports (International)",
    short: "Turn waiting time into a moment",
    title: "Give travellers a personal arrival or departure memory.",
    advantage: "ZoomSelfie turns passenger dwell time into a quick, positive destination experience. Travellers receive a polished arrival or departure memory, while airports, tourism partners and retail brands gain a more engaging touchpoint that can continue travelling through social sharing.",
    operation: "A compact kiosk can be positioned in terminals, lounges or retail zones and configured for the airport or destination. Travellers follow a short capture-and-selection flow and receive their finished content digitally, allowing the experience to operate continuously without slowing passenger movement.",
    image: galleryParis,
    alt: "Travellers creating personalized destination content",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "sports-events",
    audience: "Sports Events",
    short: "Put fans inside the action",
    title: "Turn crowd energy into content made for every fan.",
    advantage: "ZoomSelfie channels the energy of the crowd into personalized content made for each supporter. Fans become part of team, stadium and sponsor-led visual concepts, creating a stronger match-day interaction and branded social reach that continues after the final whistle.",
    operation: "Kiosks placed in fan zones, concourses or sponsor areas guide supporters through a fast photo and template flow. The system combines their image with approved team or sponsor visuals and delivers the result digitally, keeping output consistent even during high-traffic periods.",
    image: galleryStadium,
    alt: "Friends creating personalized content at a sports event",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "special-events",
    audience: "Special Events",
    short: "Make every moment memorable",
    title: "Give guests a keepsake shaped around the occasion.",
    advantage: "ZoomSelfie gives weddings, galas, launches and cultural festivals a personalized digital keepsake shaped around the occasion. Guests receive something more distinctive than a standard event photo, while organisers and sponsors gain exposure that extends beyond the venue.",
    operation: "A compact kiosk is configured with event-specific frames, themes and branded motion formats. Guests capture or upload an image, select their preferred concept and receive the finished result digitally through a guided flow that works in elegant, casual or high-energy settings.",
    image: galleryParis,
    alt: "Guests creating personalized content at a special event",
    products: [["Explore Kiosk Systems", "/kiosk"]],
  },
  {
    id: "fair-events",
    audience: "Fair Events",
    short: "Make the booth unforgettable",
    title: "Turn exhibition foot traffic into lasting brand reach.",
    advantage: "ZoomSelfie helps a booth stand out in a crowded exhibition environment by giving attendees a reason to stop and participate. The personalized takeaway keeps the booth, logo and campaign message visible after the fair, turning foot traffic into longer-lasting brand reach.",
    operation: "The Campaign Tool prepares the branded journey, templates and delivery flow for the activation. Visitors can create content through a campaign screen or connected kiosk, and the finished photo or video is delivered digitally with the approved message and visual identity intact.",
    image: galleryStadium,
    alt: "Visitors interacting with a branded fair experience",
    products: [["Explore Campaign Tool", "/products/campaign-tool"]],
  },
] as const;

export default function Solutions() {
  const reduceMotion = useReducedMotion();
  const [activeSolution, setActiveSolution] = useState<(typeof solutions)[number]["id"] | null>("marketing");
  const solutionRefs = useRef<Record<string, HTMLElement | null>>({});
  const centerOnOpenRef = useRef(false);

  useEffect(() => {
    if (!activeSolution || !centerOnOpenRef.current) return;
    centerOnOpenRef.current = false;
    const timer = window.setTimeout(() => {
      solutionRefs.current[activeSolution]?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }, reduceMotion ? 0 : 480);
    return () => window.clearTimeout(timer);
  }, [activeSolution, reduceMotion]);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-70px" },
    transition: { duration: .65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="solutions-page bg-[#f3efe7] text-zinc-950">
      <section className="premium-grain solutions-hero relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black pb-8 pt-28 text-white sm:pb-10 sm:pt-32 lg:h-[100svh] lg:pb-8 lg:pt-28">
        <Image src={galleryAquarium} alt="A family creating a ZoomSelfie experience" priority sizes="100vw" className="absolute inset-0 -z-30 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,.92)_0%,rgba(0,0,0,.72)_36%,rgba(0,0,0,.12)_76%,rgba(0,0,0,.38)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,.26),transparent_42%,rgba(0,0,0,.84)_100%)]" />
        <div className="absolute -bottom-32 -left-24 -z-10 h-80 w-[34rem] rounded-full bg-primary/18 blur-3xl" />
        <div className="container-page w-full">
          <motion.div {...reveal()} className="max-w-[54rem]">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/35 bg-black/35 px-4 py-2 text-[9px] font-black uppercase tracking-[.18em] text-primary shadow-[0_0_30px_-10px_rgba(255,184,0,.65)] backdrop-blur-md sm:text-xs sm:tracking-[.22em]"><Sparkles className="h-3.5 w-3.5 shrink-0" /> Solutions for the teams behind the experience</div>
            <h1 className="mt-6 max-w-[52.5rem] text-[clamp(3.25rem,5.2vw,5.7rem)] font-extrabold leading-[.92] tracking-[-.06em]">A better moment for people. More value for the business.</h1>
            <p className="mt-6 max-w-[39rem] text-base leading-7 text-white/68 sm:text-lg sm:leading-8">From visitor destinations to creative businesses, ZoomSelfie turns participation into personal content people want to keep and share.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="h-13 rounded-full px-8"><a href="#solution-list">Find your solution <ArrowDown className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline" className="h-13 rounded-full border-white/25 bg-black/15 px-8 text-white hover:bg-white hover:text-black"><Link to="/contact">Discuss your use case</Link></Button></div>
          </motion.div>
        </div>
      </section>

      <section id="solution-list" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 xl:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full border border-black/5" />
        <div className="pointer-events-none absolute -right-24 top-36 h-[22rem] w-[22rem] rounded-full border border-black/5" />
        <div className="container-page relative">
          <motion.div {...reveal()} className="grid gap-6 border-b border-black/15 pb-10 sm:gap-8 sm:pb-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">ZoomSelfie for</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.45rem,11vw,4rem)] font-extrabold leading-[.92] tracking-[-.065em] sm:mt-5 sm:text-[clamp(3rem,7vw,5.2rem)] lg:text-[clamp(3rem,5.5vw,6.2rem)]">One platform.<br />Different reasons to use it.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/58 lg:justify-self-end">Explore thirteen contexts individually. Each row brings the experience, business value and the ZoomSelfie products behind it into one clear view.</p>
          </motion.div>

          <div className="divide-y divide-black/15 border-b border-black/15">
            {solutions.map((solution, index) => {
              const active = activeSolution === solution.id;
              return (
                <motion.article
                  key={solution.id}
                  ref={(node) => { solutionRefs.current[solution.id] = node; }}
                  layout={!reduceMotion}
                  className={`relative ${active ? "flex min-h-[calc(100svh-4rem)] scroll-mt-20 flex-col md:min-h-[calc(100svh-5rem)] md:scroll-mt-24" : ""}`}
                >
                  <button
                    type="button"
                    aria-expanded={active}
                    aria-controls={`${solution.id}-content`}
                    onClick={() => {
                      const nextSolution = active ? null : solution.id;
                      centerOnOpenRef.current = Boolean(nextSolution);
                      setActiveSolution(nextSolution);
                    }}
                    className="group grid w-full grid-cols-[2rem_minmax(0,1fr)_2.75rem] items-center gap-3 py-5 text-left sm:grid-cols-[3.25rem_minmax(0,1fr)_3.25rem] sm:gap-5 sm:py-7 lg:grid-cols-[5rem_1.15fr_.85fr_auto] lg:gap-8 lg:py-6"
                  >
                    <span className={`text-[10px] font-black tracking-[.2em] transition-colors ${active ? "text-amber-600" : "text-black/30"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={`min-w-0 text-[clamp(1.45rem,7vw,2rem)] font-extrabold leading-[.98] tracking-[-.045em] transition-colors sm:text-[clamp(1.8rem,4.5vw,2.8rem)] lg:text-[clamp(1.8rem,2.85vw,3.35rem)] ${active ? "text-zinc-950" : "text-zinc-700 group-hover:text-zinc-950"}`}>{solution.audience}</span>
                    <span className="hidden max-w-md text-sm leading-6 text-black/45 lg:block">{solution.short}</span>
                    <span className={`grid h-11 w-11 place-items-center rounded-full border transition-all duration-300 sm:h-13 sm:w-13 ${active ? "rotate-0 border-zinc-950 bg-zinc-950 text-white" : "border-black/20 text-black group-hover:border-zinc-950 group-hover:bg-zinc-950 group-hover:text-white"}`}>{active ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
                  </button>

                  <div
                    id={`${solution.id}-content`}
                    aria-hidden={!active}
                    inert={!active ? true : undefined}
                    className={`grid min-h-0 transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${active ? "grid-rows-[1fr] pb-4 opacity-100 sm:pb-6" : "pointer-events-none grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className={active ? "min-h-0 overflow-visible" : "min-h-0 overflow-hidden"}>
                      <div className="grid min-h-0 gap-4 pt-1 sm:grid-rows-[auto_minmax(180px,24vh)] sm:gap-5 lg:min-h-[500px] lg:grid-cols-[1fr_.82fr] lg:grid-rows-1 lg:gap-8 lg:pl-[5rem] xl:gap-14 xl:pl-[7rem]">
                        <div className="min-h-0 pr-1 lg:flex lg:flex-col lg:justify-start lg:py-3 lg:pr-2 xl:py-5">
                          <p className="text-[10px] font-black uppercase tracking-[.22em] text-amber-600">ZoomSelfie for {solution.audience}</p>
                          <h3 className="mt-3 max-w-3xl text-[clamp(1.85rem,8vw,2.8rem)] font-extrabold leading-[.96] tracking-[-.055em] text-zinc-950 sm:mt-4 sm:text-[clamp(2.15rem,4.8vw,3.3rem)] lg:text-[clamp(2rem,2.8vw,3.35rem)]">{solution.title}</h3>
                          <div className="mt-4 divide-y divide-black/10 border-y border-black/10 sm:mt-5">
                            <div className="grid gap-1.5 py-3 sm:grid-cols-[6.25rem_1fr] sm:gap-4 sm:py-4 xl:grid-cols-[7rem_1fr] xl:gap-5">
                              <p className="text-[9px] font-black uppercase tracking-[.18em] text-black/35">The advantage</p>
                              <p className="max-w-2xl text-[13px] leading-5 text-black/60 sm:text-sm sm:leading-6 xl:text-[15px] xl:leading-6">{solution.advantage}</p>
                            </div>
                            <div className="grid gap-1.5 py-3 sm:grid-cols-[6.25rem_1fr] sm:gap-4 sm:py-4 xl:grid-cols-[7rem_1fr] xl:gap-5">
                              <p className="text-[9px] font-black uppercase tracking-[.18em] text-black/35">How it works</p>
                              <p className="max-w-2xl text-[13px] leading-5 text-black/60 sm:text-sm sm:leading-6 xl:text-[15px] xl:leading-6">{solution.operation}</p>
                            </div>
                          </div>

                          <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
                            {solution.products.map(([label, to]) => <Link key={label} to={to} className="inline-flex items-center gap-2 rounded-full border border-black/18 px-4 py-2 text-xs font-bold text-zinc-900 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white sm:py-2.5">{label}<ArrowUpRight className="h-3.5 w-3.5" /></Link>)}
                          </div>
                        </div>

                        <figure className="relative hidden min-h-[180px] overflow-hidden rounded-[1.25rem] border border-black/10 bg-black/5 sm:block sm:rounded-[1.6rem] lg:min-h-[500px]">
                          <Image src={solution.image} alt={solution.alt} sizes="(max-width:1024px) 100vw, 42vw" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.025]" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div {...reveal()} className="mt-10 border-y border-cyan-600/20 py-8 sm:mt-14 sm:py-10 lg:mt-16">
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center lg:grid-cols-[1.3fr_.7fr]">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.22em] text-cyan-700">A different kind of solution</p>
                <h3 className="mt-3 max-w-3xl text-[clamp(2rem,6vw,3.8rem)] font-extrabold leading-[.96] tracking-[-.055em]">Running the entire photo business inside an attraction?</h3>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-black/58 sm:text-base sm:leading-7">That is where PhotoSoft takes over: capture points, visitor matching, kiosk and POS sales, online delivery and performance analytics in one operation platform.</p>
              </div>
              <Link to="/photosoft" className="inline-flex w-fit items-center gap-3 rounded-full bg-cyan-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-500 sm:justify-self-end">Explore PhotoSoft <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="premium-grain bg-primary py-20 text-center sm:py-24">
        <div className="container-page"><motion.div {...reveal()} className="mx-auto max-w-4xl"><p className="text-xs font-black uppercase tracking-[.22em] text-black/50">A solution shaped around your audience</p><h2 className="mt-5 text-[clamp(2.8rem,5vw,5.4rem)] font-extrabold leading-[.95] tracking-[-.06em]">Tell us where the moment happens.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/62">We will help map the audience journey to the right ZoomSelfie products without turning the experience into a complicated operation.</p><Button asChild size="lg" className="mt-9 h-13 rounded-full bg-black px-8 text-white hover:bg-zinc-800"><Link to="/contact">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></motion.div></div>
      </section>
    </div>
  );
}

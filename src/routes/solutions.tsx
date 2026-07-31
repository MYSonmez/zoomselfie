import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, Building2, TreePalm, Ticket, Camera, PartyPopper, Check, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

import kioskParis from "@/assets/kiosk-paris.png";
import kioskIstanbul from "@/assets/kiosk-istanbul.png";
import kioskRome from "@/assets/kiosk-rome.png";
import kioskHotel from "@/assets/kiosk-hotel.png";
import kioskPark from "@/assets/kiosk-park.png";
import kioskAquarium from "@/assets/kiosk-aquarium.png";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Venue Industry Solutions — ZoomSelfie" },
      { name: "description", content: "Self-service ZoomSelfie experiences for landmarks, events, photographers, hotels, museums, aquariums and attractions." },
      { property: "og:title", content: "Solutions — ZoomSelfie" },
      { property: "og:description", content: "Let people create personalized, shareable photo and video stories through kiosk or web experiences." },
    ],
  }),
  component: Solutions,
});

const industries = [
  {
    icon: Landmark,
    title: "Landmarks & City Centers",
    desc: "Let visitors step into the story of a place and create a panoramic video they can take home and share.",
    image: kioskParis,
    challenges: ["Location-based video templates", "Self-service kiosk or web access", "Branded, shareable destination content"],
  },
  {
    icon: Ticket,
    title: "Theme Parks & Attractions",
    desc: "Add a playful content moment where guests can pose, choose a theme and receive a personalized souvenir video.",
    image: kioskPark,
    challenges: ["Quick guided experience", "Free or paid campaign options", "Instant digital delivery"],
  },
  {
    icon: Building2,
    title: "Hotels & Resorts",
    desc: "Help guests turn the view, property and atmosphere around them into a personal digital memory.",
    image: kioskHotel,
    challenges: ["Property-specific templates", "A memorable guest touchpoint", "Content guests naturally share"],
  },
  {
    icon: TreePalm,
    title: "Aquariums & Zoos",
    desc: "Put families inside imaginative animal and underwater stories through accessible self-service content creation.",
    image: kioskAquarium,
    challenges: ["Family-friendly interaction", "Exhibit and campaign themes", "No app required"],
  },
  {
    icon: Camera,
    title: "Photographers",
    desc: "Offer more than a traditional photo by turning portraits into short, story-driven videos using your own concepts.",
    image: kioskRome,
    challenges: ["Desktop batch workflows", "Custom themes and shooting concepts", "A new digital product to offer clients"],
  },
  {
    icon: PartyPopper,
    title: "Brands & Events",
    desc: "Launch a branded campaign that lets people create personalized content at an event or from any web browser.",
    image: kioskIstanbul,
    challenges: ["Campaign-specific branding", "Kiosk, web or both", "Shareable event content"],
  },
];

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Where ZoomSelfie fits"
        title="Give people a story they can create themselves."
        description="ZoomSelfie adapts to the place, audience and campaign while keeping the experience simple for the person using it."
      >
        <Button asChild size="lg" className="rounded-full px-8 shadow-[var(--shadow-glow)]">
          <Link to="/book-demo">Book a Venue Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </PageHero>

      <Section>
        <SectionTitle
          eyebrow="Use cases"
          title="A flexible experience for places, people and campaigns."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-[var(--shadow-elevated)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <span className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-2xl bg-white/90 backdrop-blur-md text-primary shadow-md">
                    <ind.icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold tracking-tight text-foreground leading-snug">{ind.title}</h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-border/50 mt-4">
                <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-primary">What ZoomSelfie brings</div>
                <ul className="mt-3 space-y-2">
                  {ind.challenges.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-xs text-foreground font-medium">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}

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
      { name: "description", content: "AI visitor experience solutions for heritage monuments, theme parks, museums, hotels, aquariums, and world attractions." },
      { property: "og:title", content: "Solutions — ZoomSelfie" },
      { property: "og:description", content: "Purpose-built visitor experience platforms for the world's most memorable venues." },
    ],
  }),
  component: Solutions,
});

const industries = [
  {
    icon: Landmark,
    title: "Heritage Monuments & Cultural Sites",
    desc: "Bespoke architectural pavilions (Parisian Art Nouveau, Roman Temple, Ottoman Domes) designed to honor heritage site aesthetics while digitizing souvenir capture.",
    image: kioskParis,
    challenges: ["Strict heritage preservation guidelines", "High international visitor volume", "Demand for premium branded souvenirs"],
  },
  {
    icon: Ticket,
    title: "Theme Parks & Thrill Rides",
    desc: "High-throughput photo capture booths integrated with ride speed triggers and instant mobile QR photo passes.",
    image: kioskPark,
    challenges: ["Long physical photo counter queues", "Manual printing bottlenecks", "Missed upsell opportunities"],
  },
  {
    icon: Building2,
    title: "Luxury Hotels & Resorts",
    desc: "Opulent marble and gold indoor kiosks offering 5-star concierge photo experiences for guests.",
    image: kioskHotel,
    challenges: ["Fewer memorable on-brand touchpoints", "Limited organic social attribution", "Lack of guest loyalty engagement"],
  },
  {
    icon: TreePalm,
    title: "Aquariums & Zoos",
    desc: "Underwater glow enclosures delivering instant aquatic souvenir videos straight to visitor smartphones.",
    image: kioskAquarium,
    challenges: ["Challenging glass glare & low-light conditions", "Passive exhibit exit moments", "Desire for shareable eco-memories"],
  },
  {
    icon: Camera,
    title: "Observation Decks & World Landmarks",
    desc: "Roman and historic outdoor kiosks capturing breathtaking panoramic visitor memories at landmark elevation points.",
    image: kioskRome,
    challenges: ["Extreme weather & high altitude conditions", "Fast-moving visitor foot traffic", "Instant digital sharing requirements"],
  },
  {
    icon: PartyPopper,
    title: "World Heritage Wonders",
    desc: "Custom architectural structures incorporating solar glass domes and multi-lingual touch interfaces.",
    image: kioskIstanbul,
    challenges: ["Off-grid power constraints", "Multi-cultural language barriers", "High throughput requirements"],
  },
];

function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Industry Solutions"
        title="One platform. Every landmark venue."
        description="From heritage monuments to theme parks and luxury resorts, ZoomSelfie powers the most memorable digital souvenir experiences worldwide."
      >
        <Button asChild size="lg" className="rounded-full px-8 shadow-[var(--shadow-glow)]">
          <Link to="/book-demo">Book a Venue Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </PageHero>

      <Section>
        <SectionTitle
          eyebrow="Tailored Architectures"
          title="Built for the Demands of World-Class Venues"
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
                <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-primary">Key Solutions</div>
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

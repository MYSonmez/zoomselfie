import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Users, Rocket, Heart } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import heroAiMemory from "@/assets/hero-ai-memory.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ZoomSelfie" },
      { name: "description", content: "ZoomSelfie creates self-service photo and video experiences for people, brands, photographers and destinations." },
      { property: "og:title", content: "About ZoomSelfie" },
      { property: "og:description", content: "The story and principles behind the ZoomSelfie experience." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Made for the person", desc: "The experience should feel simple, enjoyable and worth sharing from the first screen." },
  { icon: Rocket, title: "Fast by design", desc: "Capture, personalization and delivery should happen while the moment still feels fresh." },
  { icon: Globe2, title: "Flexible by nature", desc: "Kiosk, web, desktop or API—the experience adapts to where people already are." },
  { icon: Users, title: "Built together", desc: "Templates, campaigns and physical setups take shape around each audience and location." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We help people step into the story of a place."
        description="ZoomSelfie turns a simple photo into a personal video experience—created by the user, shaped by the location and ready to share."
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">The idea</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] sm:text-6xl">A photo can carry more of the moment.</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">ZoomSelfie began with a simple thought: people should be able to turn their own photo into a richer memory without learning a complicated tool. They choose the visual story; the experience takes care of the rest.</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">The same core experience can live at a landmark kiosk, inside a branded web campaign, in a photographer’s workflow or within another product through the API.</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-zinc-950 shadow-[var(--shadow-elevated)]">
            <img src={heroAiMemory} alt="A personalized ZoomSelfie memory" className="min-h-[460px] w-full object-cover" />
          </div>
        </div>
      </Section>
      <Section surface>
        <SectionTitle eyebrow="Values" title="What we care about." />
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-primary">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}

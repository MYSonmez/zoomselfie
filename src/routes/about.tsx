import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Users, Rocket, Heart } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ZoomSelfie" },
      { name: "description", content: "ZoomSelfie is an international B2B SaaS company redefining the visitor experience with AI." },
      { property: "og:title", content: "About ZoomSelfie" },
      { property: "og:description", content: "The team building the world's leading AI visitor experience platform." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Guest-first", desc: "Every product decision starts with the visitor holding the memory." },
  { icon: Rocket, title: "Move fast, ship polished", desc: "We ship weekly. Nothing leaves the door without the ZoomSelfie polish." },
  { icon: Globe2, title: "Built for the world", desc: "20+ countries, four continents, one platform." },
  { icon: Users, title: "Partners, not vendors", desc: "We measure our success by the outcomes of the venues we serve." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build the memories venues send home."
        description="ZoomSelfie is an international B2B SaaS company on a mission to make every visit unforgettable — with AI, engineering, and a lot of care for detail."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            { label: "Countries", value: "20+" },
            { label: "Venues", value: "300+" },
            { label: "Memories delivered", value: "12M+" },
          ].map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-white p-10 text-center shadow-[var(--shadow-soft)]">
              <div className="text-6xl font-bold tracking-tight text-primary">{s.value}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
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

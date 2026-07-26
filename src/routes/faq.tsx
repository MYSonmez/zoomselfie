import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ZoomSelfie Platform & Hardware" },
      { name: "description", content: "Answers to the most common questions about the ZoomSelfie platform, hardware kiosks, pricing, and global venue deployment." },
      { property: "og:title", content: "FAQ — ZoomSelfie" },
      { property: "og:description", content: "Everything venues ask before rolling out ZoomSelfie." },
    ],
  }),
  component: Faq,
});

const groups = [
  {
    title: "Platform & Software",
    items: [
      { q: "What is ZoomSelfie?", a: "ZoomSelfie is an AI-powered visitor experience platform that captures, animates, and delivers branded 4K video souvenir memories directly to guests' smartphones via QR." },
      { q: "How long does venue deployment take?", a: "Standard turn-key models ship in 2-3 weeks. Most venue rollouts are fully live in under two weeks with remote setup and staff handoff." },
      { q: "Do guests need to download an application?", a: "Never. Guests scan a personalized QR code on the kiosk screen or printed ticket and immediately stream, save, or share their 4K memory in any web browser." },
    ],
  },
  {
    title: "Kiosk Hardware & Purchasing",
    items: [
      { q: "What is the difference between Cabin and Open-Air Stand models?", a: "Enclosed Pavilion Cabins feature full architectural booth structures with privacy walls, climate control, and optional solar glass domes. Open-Air Stands offer a compact footprint optimized for high-volume foot traffic and fast indoor throughput." },
      { q: "What is the typical fabrication and shipping lead time?", a: "Standard turn-key models ship within 2 to 3 weeks globally. Custom Enterprise Pavilion kiosks (such as heritage Roman, Parisian, or Ottoman structures) require 4 to 6 weeks for custom fabrication, solar fitting, and international logistics." },
      { q: "Are leasing and revenue-share options available?", a: "Yes! Qualified high-volume venues (theme parks, ski resorts, and major monuments) can opt for our $0 upfront hardware placement program with a simple revenue share split." },
      { q: "Can we brand the kiosk hardware and wraps?", a: "Yes — from custom 360-degree vinyl wraps to logo cutouts, LED lighting accents, and custom on-screen intro cards, everything is brandable." },
      { q: "How does remote telemetry and maintenance work?", a: "Every kiosk includes an integrated cloud telemetry modem. Our engineers monitor printer ink levels, solar battery status, camera focus, and internet connectivity 24/7, deploying OTA updates remotely." },
    ],
  },
  {
    title: "Data Privacy & Compliance",
    items: [
      { q: "Is ZoomSelfie GDPR-compliant?", a: "Yes. We offer regional data residency, full consent workflows, end-to-end encryption, and documented automated deletion procedures." },
      { q: "Where is guest photo data stored?", a: "In regional cloud infrastructure, with optional dedicated data residency in the EU, US, or APAC regions." },
    ],
  },
];

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Base"
        title="Frequently asked questions."
        description="Everything venues ask before rolling out ZoomSelfie hardware, cloud platform, and souvenir photo passes."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground">{g.title}</h2>
              <Accordion type="single" collapsible className="mt-6 space-y-3">
                {g.items.map((it, i) => (
                  <AccordionItem key={i} value={`${g.title}-${i}`} className="border-b border-border last:border-0 rounded-2xl bg-white px-6">
                    <AccordionTrigger className="text-left text-base font-bold hover:no-underline py-5">{it.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{it.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}

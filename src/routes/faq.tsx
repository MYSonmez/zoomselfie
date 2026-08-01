import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const groups = [
  {
    title: "Using ZoomSelfie",
    items: [
      { q: "What is ZoomSelfie?", a: "ZoomSelfie is a self-service photo and video experience. A person takes or uploads a photo, chooses a location or theme, and receives personalized content ready to download and share." },
      { q: "Where can I create a ZoomSelfie?", a: "The experience can be available at a physical ZoomSelfie kiosk or through a web campaign. It can also be integrated into another app or service through the ZoomSelfie API." },
      { q: "Do I need to install an app?", a: "No. Kiosk and web experiences are designed to work without an app download. The finished content can be opened through a QR code, link or email, depending on the campaign setup." },
      { q: "What do I choose during the experience?", a: "You can choose from templates created for a location, event, brand or visual theme. Your photo is then placed into the selected ZoomSelfie story." },
    ],
  },
  {
    title: "For brands, venues and events",
    items: [
      { q: "What is the ZoomSelfie Kiosk?", a: "It is the on-location version of the ZoomSelfie experience. The touchscreen guides visitors through taking a photo, choosing a template and receiving their finished content." },
      { q: "Can ZoomSelfie work without a kiosk?", a: "Yes. The Campaign Tool can publish an experience to the web, allowing people to upload a photo and create their ZoomSelfie from a browser." },
      { q: "Can the experience match our brand?", a: "Yes. Campaign visuals, messages and templates can be prepared around your brand, event, location or promotion." },
      { q: "Can a campaign be free or paid?", a: "The campaign setup can support free access or a paid experience, depending on the project and payment integration." },
      { q: "How are kiosks and campaigns managed?", a: "The ZoomSelfie Web Panel brings campaign, kiosk, template, usage and credit management into one central interface." },
    ],
  },
  {
    title: "Products and integrations",
    items: [
      { q: "Who is the Desktop App for?", a: "It is designed for photographers and event teams that need to process larger groups of photos efficiently using ZoomSelfie templates." },
      { q: "What can the ZoomSelfie API do?", a: "The API can trigger photo-to-video creation, deliver the result through your preferred channel, track usage and manage campaigns or templates programmatically." },
      { q: "What is the difference between ZoomSelfie and PhotoSoft?", a: "ZoomSelfie lets a user create their own personalized content through a kiosk, web campaign or integrated experience. PhotoSoft manages the complete professional photography operation inside an attraction, including capture points, guest matching, POS and online sales, delivery and analytics." },
    ],
  },
];

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Base"
        title="Frequently asked questions."
        description="Clear answers about the user experience, kiosk, web campaigns, products and the difference between ZoomSelfie and PhotoSoft."
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

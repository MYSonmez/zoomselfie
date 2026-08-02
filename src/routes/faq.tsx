import { HelpCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const groups = [
  {
    number: "01",
    title: "Creating with ZoomSelfie",
    description: "The experience from the participant's point of view.",
    items: [
      { q: "What is ZoomSelfie?", a: "ZoomSelfie is a self-service photo and video experience. A person takes or uploads a photo, chooses an available theme or template, and receives personalized content ready to keep and share." },
      { q: "Where can someone create a ZoomSelfie?", a: "The experience can begin at a physical kiosk, through a web campaign or inside another app or digital service connected through the API." },
      { q: "Does the participant need to install an app?", a: "No. Kiosk and web experiences are designed to work without an app download. Delivery can use a QR code, link or email depending on the setup." },
      { q: "Who owns the uploaded photo and finished content?", a: "Ownership, consent and retention rules should be defined for each campaign or deployment. These details are shown to the participant as part of the experience." },
    ],
  },
  {
    number: "02",
    title: "Products & kiosk systems",
    description: "Choosing the right ZoomSelfie product.",
    items: [
      { q: "What is the ZoomSelfie Kiosk?", a: "It is an on-location self-service system that guides people through capture, template choice, creation and digital delivery. Models and optional features can be shaped around the location." },
      { q: "Can ZoomSelfie work without a kiosk?", a: "Yes. The Campaign Tool can publish a web experience where participants upload a photo from their own device." },
      { q: "What does the Web Panel manage?", a: "The Web Panel provides a shared workspace for campaigns, connected kiosks, template libraries, teams and usage visibility." },
      { q: "Who is the Desktop App for?", a: "The Desktop App is a main ZoomSelfie product for photographers, studios and creative teams working with larger sets of photos through a professional workflow." },
    ],
  },
  {
    number: "03",
    title: "Business & integrations",
    description: "How organisations use ZoomSelfie.",
    items: [
      { q: "Can the experience match a brand or location?", a: "Yes. The journey, messages and creative templates can be prepared around a campaign, event, destination or visual identity." },
      { q: "Which organisations can use ZoomSelfie?", a: "Destinations, hospitality businesses, brands, events, photographers and product teams can each use a different combination of ZoomSelfie products." },
      { q: "What can the API add to another product?", a: "The API can place ZoomSelfie photo and video creation inside an existing app, platform or customer journey while that product keeps its own interface and context." },
      { q: "Is this an online purchase website?", a: "No. This website introduces the products and possible setups. Kiosk configurations and software requirements continue through a direct conversation with the ZoomSelfie team." },
    ],
  },
  {
    number: "04",
    title: "PhotoSoft",
    description: "A related product with a different operating model.",
    items: [
      { q: "What is the difference between ZoomSelfie and PhotoSoft?", a: "ZoomSelfie lets a person create their own personalized content through a kiosk, web campaign, desktop workflow or integrated experience. PhotoSoft manages the complete professional attraction photography operation." },
      { q: "Is a kiosk the whole PhotoSoft system?", a: "No. In PhotoSoft, the kiosk is one gallery or sales point inside a wider workflow that begins at professional capture points and continues through sales, delivery and analysis." },
      { q: "Who is PhotoSoft designed for?", a: "PhotoSoft is designed for professional photo operators and attractions that need to connect capture, guest matching, content production, sales channels, delivery and performance insight." },
    ],
  },
];

export default function Faq() {
  return (
    <div className="bg-white">
      <PageHero eyebrow="Knowledge base" title="Answers without the sales language." description="Clear distinctions between the experience, the products, the business use cases and the PhotoSoft operating platform." />
      <section className="bg-[#f7f7f5] py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[.42fr_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary"><HelpCircle className="h-5 w-5" /></span>
            <h2 className="mt-7 text-4xl font-extrabold leading-[1] tracking-[-.05em]">Four clear areas.</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-black/52">Start with the section closest to your question. If the answer depends on your setup, contact us with the product already selected.</p>
          </aside>
          <div className="space-y-14">
            {groups.map((group) => (
              <section key={group.title} id={group.number}>
                <div className="border-b border-black/10 pb-5"><p className="text-[10px] font-black uppercase tracking-[.2em] text-amber-600">{group.number}</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-.04em]">{group.title}</h2><p className="mt-2 text-sm text-black/45">{group.description}</p></div>
                <Accordion type="single" collapsible className="mt-4 space-y-3">
                  {group.items.map((item, index) => <AccordionItem key={item.q} value={`${group.number}-${index}`} className="rounded-[1.4rem] border border-black/8 bg-white px-6"><AccordionTrigger className="py-5 text-left text-base font-bold hover:no-underline">{item.q}</AccordionTrigger><AccordionContent className="pb-6 text-sm leading-7 text-black/52">{item.a}</AccordionContent></AccordionItem>)}
                </Accordion>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Still deciding where to start?" description="Choose a topic on the Contact page and tell us what you want the audience or your team to do." />
    </div>
  );
}

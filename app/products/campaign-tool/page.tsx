import { ProductIntroPage } from "@/components/products/ProductIntroPage";
import campaignTool from "@/assets/campaign-tool-placeholder.svg";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Campaign Tool",
  description: "Build and publish branded self-service photo and video campaigns for the web, a ZoomSelfie kiosk or both.",
  path: "/products/campaign-tool",
});

export default function Page() {
  return <ProductIntroPage
    eyebrow="ZoomSelfie Campaign Tool"
    title="Turn one idea into a self-service campaign."
    description="Create the branded journey, choose the visual templates and publish an experience people can open on the web or use at a kiosk."
    audience="For marketing teams, venues and event owners"
    heroImage={campaignTool}
    heroImageAlt="ZoomSelfie Campaign Tool interface"
    variant="campaign"
    heroTags={["Build", "Publish", "Participate"]}
    benefits={[
      { title: "Make participation feel effortless", text: "Give people a short, guided journey from their own photo to a finished image or video." },
      { title: "Keep every output on brand", text: "Shape the visual direction, campaign message and available templates around one clear identity." },
      { title: "Launch where the audience is", text: "Use the same campaign idea on the web, at a kiosk or across both touchpoints." },
    ]}
    steps={[
      { title: "Shape the experience", text: "Define the campaign story, screens and visual choices people will see." },
      { title: "Add the creative set", text: "Prepare the photo and video templates that make the campaign distinctive." },
      { title: "Publish the journey", text: "Make it available through a campaign link, QR entry point or ZoomSelfie kiosk." },
      { title: "Keep it current", text: "Update content and availability as the campaign, season or event changes." },
    ]}
    capabilities={["Branded user journey", "Photo upload or capture", "Photo and video templates", "Web and kiosk publishing", "QR and link entry points", "Campaign availability controls"]}
    outcomeTitle="A campaign people take part in, not just scroll past."
    outcomeText="ZoomSelfie turns the audience from a viewer into the subject of the content while the campaign keeps its own visual identity."
    contactTopic="campaign-tool"
  />;
}

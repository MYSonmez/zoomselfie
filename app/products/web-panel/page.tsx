import { ProductIntroPage } from "@/components/products/ProductIntroPage";
import webPanel from "@/assets/web-panel-placeholder.svg";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Web Panel",
  description: "Manage ZoomSelfie campaigns, kiosks, templates, teams and usage from one web workspace.",
  path: "/products/web-panel",
});

export default function Page() {
  return <ProductIntroPage
    eyebrow="ZoomSelfie Web Panel"
    title="One place to keep every experience organised."
    description="The Web Panel connects the moving parts behind ZoomSelfie so teams can manage content, campaigns and connected products without losing the overview."
    audience="For teams managing one or more ZoomSelfie experiences"
    heroImage={webPanel}
    heroImageAlt="ZoomSelfie Web Panel dashboard"
    variant="panel"
    heroTags={["Organise", "Update", "Manage"]}
    benefits={[
      { title: "See the whole setup", text: "Bring active campaigns, connected kiosks and available templates into one consistent workspace." },
      { title: "Change content without friction", text: "Keep seasonal, location-based and branded experiences current from the web." },
      { title: "Give teams a shared view", text: "Create a clearer operating rhythm for the people responsible for content and delivery." },
    ]}
    steps={[
      { title: "Connect the products", text: "Bring campaign, kiosk and template activity into the same management layer." },
      { title: "Organise the library", text: "Keep visual sets and campaign content easy to find and reuse." },
      { title: "Publish updates", text: "Make approved changes available to the right experience and location." },
      { title: "Review usage", text: "Understand where the products are active and how the available capacity is being used." },
    ]}
    capabilities={["Campaign overview", "Kiosk management", "Template library", "Team workspace", "Usage visibility", "Remote content updates"]}
    outcomeTitle="Less time coordinating. More time improving the experience."
    outcomeText="A central workspace keeps ZoomSelfie manageable as the number of campaigns, templates or locations grows."
    contactTopic="web-panel"
  />;
}

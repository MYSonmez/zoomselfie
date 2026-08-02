import { ProductIntroPage } from "@/components/products/ProductIntroPage";
import desktopApp from "@/assets/desktop-app-placeholder.svg";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Desktop App",
  description: "A focused ZoomSelfie workflow for photographers and creative teams producing personalized photo and video content at higher volume.",
  path: "/products/desktop-app",
});

export default function Page() {
  return <ProductIntroPage
    eyebrow="ZoomSelfie Desktop App"
    title="A faster creative workflow for larger photo sets."
    description="Bring portraits into a focused desktop workflow, apply prepared ZoomSelfie concepts and produce personalized content without repeating the same steps by hand."
    audience="For photographers, studios and creative production teams"
    heroImage={desktopApp}
    heroImageAlt="ZoomSelfie Desktop App workflow"
    variant="desktop"
    heroTags={["Import", "Create", "Deliver"]}
    benefits={[
      { title: "Work through more photos", text: "Use an organised desktop flow when a project involves more images than a self-service session." },
      { title: "Keep the creative direction consistent", text: "Apply the prepared themes and formats across a complete set of portraits." },
      { title: "Deliver a more distinctive product", text: "Offer clients personalized photo and video outputs beyond a standard gallery." },
    ]}
    steps={[
      { title: "Bring in the portraits", text: "Start with the selected photographs from a shoot, studio session or event." },
      { title: "Choose the creative set", text: "Match the project with the prepared ZoomSelfie themes and output formats." },
      { title: "Create the outputs", text: "Process the selected images through a repeatable production workflow." },
      { title: "Prepare delivery", text: "Keep the finished files organised for the team or final customer handoff." },
    ]}
    capabilities={["Multi-photo workflow", "Prepared creative templates", "Photo and video output", "Project organisation", "Consistent visual sets", "Professional delivery flow"]}
    outcomeTitle="A repeatable way to turn photography into a new digital product."
    outcomeText="The Desktop App gives professional users a dedicated ZoomSelfie workflow while the kiosk and web products remain self-service experiences."
    contactTopic="desktop-app"
  />;
}

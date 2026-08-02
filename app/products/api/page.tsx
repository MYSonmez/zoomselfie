import { ProductIntroPage } from "@/components/products/ProductIntroPage";
import apiProduct from "@/assets/api-placeholder.svg";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "API",
  description: "Integrate ZoomSelfie personalized photo and video creation into an existing app, platform or digital customer journey.",
  path: "/products/api",
});

export default function Page() {
  return <ProductIntroPage
    eyebrow="ZoomSelfie API"
    title="Bring ZoomSelfie into the product you already have."
    description="Add personalized photo and video creation to an existing app, website or customer journey while keeping your own interface and product context."
    audience="For product teams, platforms and integration partners"
    heroImage={apiProduct}
    heroImageAlt="ZoomSelfie API integration concept"
    variant="api"
    heroTags={["Connect", "Create", "Return"]}
    benefits={[
      { title: "Keep your own experience", text: "Place ZoomSelfie creation inside the product journey your customers already understand." },
      { title: "Add a creative capability", text: "Turn an uploaded or captured photo into a personalized output without building the media engine from zero." },
      { title: "Design around your use case", text: "Connect the content flow to the screens, delivery channel and business logic that fit your product." },
    ]}
    steps={[
      { title: "Define the journey", text: "Decide where photo input, template choice and final delivery belong in your product." },
      { title: "Prepare the content set", text: "Create the visual templates and output options for the integrated experience." },
      { title: "Connect the workflow", text: "Link your interface to the ZoomSelfie creation and delivery process." },
      { title: "Launch and evolve", text: "Start with one focused use case, then extend the experience as the product grows." },
    ]}
    capabilities={["Photo input workflow", "Template-based creation", "Photo and video output", "Product-level integration", "Flexible delivery journey", "Usage visibility"]}
    outcomeTitle="A native-feeling creative feature without a separate destination."
    outcomeText="The API makes ZoomSelfie a capability inside another product rather than asking users to leave the experience they are already in."
    contactTopic="api"
  />;
}

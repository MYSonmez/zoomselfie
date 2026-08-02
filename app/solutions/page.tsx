import Solutions from "@/routes/solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions for Businesses, Destinations & Creative Teams",
  description: "See how ZoomSelfie creates participation, visibility and new value for destinations, hospitality, brands, events, photographers and product teams.",
  path: "/solutions",
});

export default function Page() {
  return <Solutions />;
}

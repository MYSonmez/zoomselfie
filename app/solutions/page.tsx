import Solutions from "@/routes/solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description: "ZoomSelfie photo and video experiences for destinations, museums, hotels, tourism, studios and events.",
  path: "/solutions",
});

export default function Page() {
  return <Solutions />;
}

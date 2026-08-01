import Gallery from "@/routes/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description: "See the personalized photos and videos people can create with ZoomSelfie experiences.",
  path: "/gallery",
});

export default function Page() {
  return <Gallery />;
}

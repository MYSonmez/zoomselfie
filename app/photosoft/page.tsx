import PhotoSoft from "@/routes/photosoft";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "PhotoSoft Attraction Photography Platform",
  description: "Manage capture points, guest matching, content production, kiosk and POS sales, delivery and analytics with PhotoSoft.",
  path: "/photosoft",
});

export default function Page() {
  return <PhotoSoft />;
}

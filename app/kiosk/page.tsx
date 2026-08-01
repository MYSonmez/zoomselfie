import Kiosk from "@/routes/kiosk";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Photo & Video Kiosk Systems",
  description: "Configure a ZoomSelfie kiosk model, format, finish and optional features for your venue or campaign.",
  path: "/kiosk",
});

export default function Page() {
  return <Kiosk />;
}

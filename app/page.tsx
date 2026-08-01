import Home from "@/routes/index";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Personalized Photo & Video Experiences",
  description: "Turn a photo into a personalized video memory through a ZoomSelfie kiosk, web campaign, desktop workflow or API.",
});

export default function Page() {
  return <Home />;
}

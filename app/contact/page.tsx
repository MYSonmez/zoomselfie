import Contact from "@/routes/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact ZoomSelfie about kiosk systems, campaigns, the Web Panel, Desktop App, API integrations, support or PhotoSoft.",
  path: "/contact",
});

export default function Page() {
  return <Contact />;
}

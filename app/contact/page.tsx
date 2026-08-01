import Contact from "@/routes/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact ZoomSelfie to discuss kiosks, campaigns, integrations or attraction photography operations.",
  path: "/contact",
});

export default function Page() {
  return <Contact />;
}

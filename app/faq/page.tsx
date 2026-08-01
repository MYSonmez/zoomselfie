import Faq from "@/routes/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: "Answers about ZoomSelfie kiosks, web campaigns, content delivery, integrations and PhotoSoft.",
  path: "/faq",
});

export default function Page() {
  return <Faq />;
}

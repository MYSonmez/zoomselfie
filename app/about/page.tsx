import About from "@/routes/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: "Learn how ZoomSelfie turns personal photos into memorable, shareable visual experiences.",
  path: "/about",
});

export default function Page() {
  return <About />;
}

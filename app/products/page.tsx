import Products from "@/routes/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products",
  description: "Explore ZoomSelfie Campaign Tool, Web Panel, Desktop App, API and kiosk systems for personalized photo and video experiences.",
  path: "/products",
});

export default function Page() {
  return <Products />;
}

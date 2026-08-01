import BookDemo from "@/routes/book-demo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Demo",
  description: "Book a ZoomSelfie or PhotoSoft demo and find the right photo and video experience setup.",
  path: "/book-demo",
});

export default function Page() {
  return <BookDemo />;
}

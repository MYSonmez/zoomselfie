import Blog from "@/routes/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Stories, Ideas & Photo Experience Guides",
  description: "Explore creative photo and video ideas, self-service experience guides and PhotoSoft attraction photography insights.",
  path: "/blog",
});

export default function Page() {
  return <Blog />;
}

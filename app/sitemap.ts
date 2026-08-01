import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const paths = ["", "/products", "/kiosk", "/solutions", "/gallery", "/photosoft", "/about", "/faq", "/contact", "/book-demo"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/products" || path === "/photosoft" ? 0.9 : 0.7,
  }));
}

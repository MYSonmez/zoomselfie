import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getAllBlogParams } from "@/content/blog";

const paths = [
  "",
  "/products",
  "/products/campaign-tool",
  "/products/web-panel",
  "/products/desktop-app",
  "/products/api",
  "/kiosk",
  "/solutions",
  "/gallery",
  "/blog",
  "/photosoft",
  "/about",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = paths.map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 || path === "/blog" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/products" || path === "/photosoft" ? 0.9 : path.startsWith("/products/") || path === "/kiosk" ? 0.8 : 0.7,
  }));

  const articles: MetadataRoute.Sitemap = getAllBlogParams().map(({ locale, slug }) => ({
    url: `${SITE_URL}/blog/${locale}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...pages, ...articles];
}

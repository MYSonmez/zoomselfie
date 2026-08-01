import { getBlogPosts } from "@/content/blog";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] ?? character);
}

export function GET() {
  const items = getBlogPosts("en").map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/en/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/en/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(`${post.publishedAt}T12:00:00Z`).toUTCString()}</pubDate>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${SITE_NAME} Journal</title>
      <link>${SITE_URL}/blog</link>
      <description>Stories, ideas and guides for personal photo and video experiences.</description>
      <language>en</language>${items}
    </channel>
  </rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } });
}

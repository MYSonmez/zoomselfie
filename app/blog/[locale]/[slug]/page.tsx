import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/routes/blog-article";
import { blogLocales, getAllBlogParams, getBlogPost, isBlogLocale } from "@/content/blog";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isBlogLocale(locale)) return {};
  const post = getBlogPost(locale, slug);
  if (!post) return {};
  const path = `/blog/${locale}/${post.slug}`;
  const languages = Object.fromEntries(blogLocales.map((item) => [item, `${SITE_URL}/blog/${item}/${post.alternateSlugs[item]}`]));

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `${SITE_URL}${path}`, languages: { ...languages, "x-default": languages.en } },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: post.seoTitle,
      description: post.seoDescription,
      url: `${SITE_URL}${path}`,
      locale: locale === "tr" ? "tr_TR" : locale === "nl" ? "nl_NL" : "en_US",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.seoTitle, description: post.seoDescription, images: [post.image.src] },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isBlogLocale(locale)) notFound();
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: `${SITE_URL}${post.image.src}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: post.locale,
    mainEntityOfPage: `${SITE_URL}/blog/${post.locale}/${post.slug}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <BlogArticle post={post} />
    </>
  );
}

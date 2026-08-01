import type { Metadata } from "next";

export const SITE_NAME = "ZoomSelfie";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zoomselfie.com";
export const DEFAULT_DESCRIPTION =
  "Create personalized photo and video memories through ZoomSelfie kiosks, web campaigns, desktop workflows and APIs.";

export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

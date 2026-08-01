import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "@/styles.css";
import { AppShell } from "@/components/site/AppShell";
import { I18nProvider } from "@/i18n/I18nProvider";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — Personalized Photo & Video Experiences`, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "technology",
  keywords: ["photo kiosk", "video kiosk", "personalized photo", "visitor experience", "PhotoSoft"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: SITE_NAME, url: SITE_URL, title: SITE_NAME, description: DEFAULT_DESCRIPTION, locale: "en_US" },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: DEFAULT_DESCRIPTION },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffb800" };

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web, Windows, Kiosk",
      description: DEFAULT_DESCRIPTION,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <I18nProvider>
          <div id="app-root">
            <AppShell>{children}</AppShell>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}

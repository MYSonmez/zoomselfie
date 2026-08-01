"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/i18n/I18nProvider";
import type { BlogLocale } from "@/content/blog";

export function BlogLocaleSync({ currentLocale, alternateSlugs }: { currentLocale: BlogLocale; alternateSlugs: Record<BlogLocale, string> }) {
  const { locale, setLocale } = useI18n();
  const router = useRouter();
  const initialized = useRef(false);
  const routeLocale = useRef(currentLocale);

  useEffect(() => {
    if (!initialized.current || routeLocale.current !== currentLocale) {
      initialized.current = true;
      routeLocale.current = currentLocale;
      document.documentElement.lang = currentLocale;
      document.documentElement.dataset.locale = currentLocale;
      window.localStorage.setItem("zoomselfie-locale", currentLocale);
      document.cookie = `zoomselfie-locale=${currentLocale}; path=/; max-age=31536000; samesite=lax`;
      if (locale !== currentLocale) setLocale(currentLocale);
      return;
    }

    if (locale !== currentLocale && alternateSlugs[locale]) router.replace(`/blog/${locale}/${alternateSlugs[locale]}`);
  }, [alternateSlugs, currentLocale, locale, router, setLocale]);

  return null;
}

"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/i18n/messages";
import { isLocale, messages } from "@/i18n/messages";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (value: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const originalText = new WeakMap<Text, string>();
const appliedText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
const appliedAttributes = new WeakMap<Element, Map<string, string>>();
const translatedAttributes = ["alt", "aria-label", "placeholder", "title"] as const;

function withWhitespace(source: string, translated: string) {
  const leading = source.match(/^\s*/)?.[0] ?? "";
  const trailing = source.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function translateValue(value: string, locale: Locale) {
  const clean = value.replace(/\s+/g, " ").trim();
  const selectedCount = clean.match(/^(\d+) selected$/);
  if (selectedCount && locale === "tr") return `${selectedCount[1]} özellik seçildi`;
  if (selectedCount && locale === "nl") return `${selectedCount[1]} functies geselecteerd`;
  return messages[locale][clean] ?? clean;
}

function translateTextNode(node: Text, locale: Locale) {
  const current = node.nodeValue ?? "";
  if (current !== appliedText.get(node)) originalText.set(node, current);
  const source = originalText.get(node) ?? current;
  if (!source.trim()) return;
  const next = locale === "en" ? source : withWhitespace(source, translateValue(source, locale));
  appliedText.set(node, next);
  if (current !== next) node.nodeValue = next;
}

function translateElementAttributes(element: Element, locale: Locale) {
  let originals = originalAttributes.get(element);
  let applied = appliedAttributes.get(element);
  if (!originals) {
    originals = new Map();
    originalAttributes.set(element, originals);
  }
  if (!applied) {
    applied = new Map();
    appliedAttributes.set(element, applied);
  }

  for (const attribute of translatedAttributes) {
    const current = element.getAttribute(attribute);
    if (current === null) continue;
    if (current !== applied.get(attribute)) originals.set(attribute, current);
    const source = originals.get(attribute) ?? current;
    const next = locale === "en" ? source : translateValue(source, locale);
    applied.set(attribute, next);
    if (current !== next) element.setAttribute(attribute, next);
  }
}

function translateTree(root: Node, locale: Locale) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, locale);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const element = root as Element;
  if (element.hasAttribute("data-no-translate")) return;
  translateElementAttributes(element, locale);
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text, locale);
    else if (!(node as Element).closest("[data-no-translate]")) translateElementAttributes(node as Element, locale);
    node = walker.nextNode();
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, updateLocale] = useState<Locale>("en");
  const [localeLoaded, setLocaleLoaded] = useState(false);
  const previousLocale = useRef<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("zoomselfie-locale");
    if (isLocale(saved)) updateLocale(saved);
    setLocaleLoaded(true);
  }, []);

  useEffect(() => {
    if (!localeLoaded) return;
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    window.localStorage.setItem("zoomselfie-locale", locale);
    document.cookie = `zoomselfie-locale=${locale}; path=/; max-age=31536000; samesite=lax`;

    const root = document.getElementById("app-root");
    if (!root) return;

    // English is the server-rendered source language. On a normal English visit
    // there is nothing to translate, so avoid walking and observing the full DOM.
    if (locale === "en" && previousLocale.current === "en") return;

    translateTree(root, locale);
    previousLocale.current = locale;
    if (locale === "en") return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") translateTextNode(mutation.target as Text, locale);
        for (const node of mutation.addedNodes) translateTree(node, locale);
      }
    });
    observer.observe(root, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, [locale, localeLoaded]);

  const setLocale = useCallback((nextLocale: Locale) => updateLocale(nextLocale), []);
  const t = useCallback((value: string) => translateValue(value, locale), [locale]);
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}

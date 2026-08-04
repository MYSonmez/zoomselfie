"use client";

import Image from "@/components/site/ResponsiveImage";
import { usePathname } from "next/navigation";
import { Link } from "@/components/site/AppLink";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Check, ChevronDown, Code2, Languages, LayoutDashboard, Menu, Monitor, PanelsTopLeft, ScanFace, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";
import kioskModelPro from "@/assets/kiosk-model-pro.png";
import { localeLabels, type Locale } from "@/i18n/messages";
import { useI18n } from "@/i18n/I18nProvider";

const mainLinks = [
  { to: "/solutions", label: "Solutions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/photosoft", label: "PhotoSoft" },
] as const;

const productLinks = [
  {
    to: "/kiosk",
    label: "Kiosk Systems",
    description: "Hardware systems & custom configurations",
    icon: ScanFace,
    featured: true,
    hash: undefined,
  },
  {
    to: "/products/web-panel",
    label: "Web Panel",
    description: "Manage campaigns and usage",
    icon: LayoutDashboard,
    hash: undefined,
  },
  {
    to: "/products/desktop-app",
    label: "Desktop App",
    description: "Workflows for photographers",
    icon: Monitor,
    hash: undefined,
  },
  {
    to: "/products/campaign-tool",
    label: "Campaign Tool",
    description: "Publish on the web or kiosk",
    icon: PanelsTopLeft,
    hash: undefined,
  },
  {
    to: "/products/api",
    label: "API",
    description: "Build ZoomSelfie into your product",
    icon: Code2,
    hash: undefined,
  },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [, setProductsPinned] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { locale, setLocale } = useI18n();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const isPhotoSoftRoute = pathname === "/photosoft";
  const [photoSoftVisualsReady, setPhotoSoftVisualsReady] = useState(false);
  const isPhotoSoft = isPhotoSoftRoute && photoSoftVisualsReady;
  const isHome = pathname === "/";
  const usesDarkHero = isHome || pathname === "/products" || pathname === "/kiosk" || pathname === "/solutions" || pathname === "/gallery";
  const isDarkTop = isPhotoSoft || (usesDarkHero && !scrolled);
  const productsActive = pathname === "/products" || pathname.startsWith("/products/") || pathname === "/kiosk";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setProductsPinned(false);
    setMobileProductsOpen(false);
    setLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isPhotoSoftRoute) {
      setPhotoSoftVisualsReady(false);
      return;
    }

    if (reduceMotion) {
      setPhotoSoftVisualsReady(true);
      return;
    }

    const timer = setTimeout(() => setPhotoSoftVisualsReady(true), 290);
    return () => clearTimeout(timer);
  }, [isPhotoSoftRoute, reduceMotion]);

  const desktopLinkClass = (to?: string) => cn(
    "text-sm font-medium transition-colors",
    isDarkTop
      ? to === "/photosoft"
        ? "font-bold text-cyan-300 hover:text-white"
        : "text-white/72 hover:text-white"
      : to === "/photosoft"
        ? "font-semibold text-cyan-600 hover:text-cyan-500"
        : "text-muted-foreground hover:text-foreground",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-3 z-50 px-3 text-white transition-all duration-500 sm:px-4",
        scrolled ? "sm:top-2" : "sm:top-4",
      )}
    >
      <div className={cn(
        "container-page flex h-16 !max-w-[96rem] items-center justify-between rounded-[1.55rem] border !px-7 shadow-[0_22px_80px_-34px_rgba(0,0,0,.72)] backdrop-blur-xl transition-all duration-500 sm:rounded-[1.75rem] sm:!px-8 md:!px-10",
        scrolled ? "md:h-16" : "md:h-[4.6rem]",
        isDarkTop
          ? isPhotoSoft
            ? "border-cyan-300/15 bg-[#05080a]/82 text-white"
            : "border-white/15 bg-black/55 text-white"
          : "border-black/[.08] bg-white/88 text-zinc-950",
      )}>
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90" aria-label="ZoomSelfie home">
          <Logo size="md" tone={isDarkTop ? "light" : "default"} />
          {isPhotoSoft && <span className="hidden rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[.18em] text-cyan-200 sm:inline-flex">PhotoSoft OS</span>}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          <Link to="/" hash="experience" className={desktopLinkClass()}>How It Works</Link>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => {
              setProductsOpen(false);
              setProductsPinned(false);
            }}
          >
            <div
              onClick={() => setProductsPinned((value) => {
                const nextValue = !value;
                setProductsOpen(nextValue);
                return nextValue;
              })}
              className={cn(desktopLinkClass(), "flex items-center gap-1.5", productsActive && (isDarkTop ? "font-semibold text-white" : "font-semibold text-foreground"))}
            >
              <Link to="/products" onClick={(event) => event.stopPropagation()} className="transition-colors">Products</Link>
              <button type="button" aria-label="Open products menu" aria-expanded={productsOpen} className="grid h-6 w-6 place-items-center rounded-full transition hover:bg-current/10"><ChevronDown className={cn("h-3.5 w-3.5 transition-transform", productsOpen && "rotate-180")} /></button>
            </div>

            <div className={cn(
              "absolute left-1/2 top-full w-[900px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-5 transition-all duration-300",
              productsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
            )}>
              <div className="premium-grain overflow-hidden rounded-[2rem] border border-black/[.08] bg-white p-3 text-zinc-950 shadow-[0_36px_100px_-38px_rgba(0,0,0,.68)] backdrop-blur-xl">
                <div className="grid gap-3 lg:grid-cols-[1.06fr_.94fr]">
                  <Link to="/kiosk" onClick={() => setProductsOpen(false)} className="group relative min-h-[390px] overflow-hidden rounded-[1.55rem] bg-[#090909] text-white">
                    <div className="absolute inset-y-0 right-0 w-[52%] p-5">
                      <div className="relative h-full overflow-hidden rounded-[1.35rem] bg-[#f6f6f4]"><Image src={kioskModelPro} alt="ZoomSelfie kiosk system" sizes="380px" className="h-full w-full object-contain object-center p-3 transition-transform duration-700 group-hover:scale-[1.04]" /></div>
                    </div>
                    <div className="relative z-10 flex h-full max-w-[52%] flex-col p-7">
                      <span className="w-fit rounded-full bg-primary px-3 py-1.5 text-[8px] font-black uppercase tracking-[.16em] text-black">Kiosk for sale</span>
                      <h3 className="mt-6 text-3xl font-extrabold leading-[1.02] tracking-[-.05em]">Configure and buy your kiosk.</h3>
                      <p className="mt-4 text-xs leading-5 text-white/50">Choose a model, format, finish and optional features.</p>
                      <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-primary">Open configurator <span aria-hidden="true">→</span></span>
                    </div>
                  </Link>

                  <div className="overflow-hidden rounded-[1.55rem] border border-black/[.07] bg-[#faf9f6]">
                    <div className="border-b border-black/[.07] px-5 py-4"><p className="text-[9px] font-black uppercase tracking-[.22em] text-zinc-400">Software products</p></div>
                    {productLinks.slice(1).map((item, index) => (
                      <Link key={`${item.label}-${index}`} to={item.to} hash={item.hash} onClick={() => setProductsOpen(false)} className="group grid min-h-[76px] grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-black/[.07] px-5 py-3 transition hover:bg-white last:border-b-0">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-amber-600 transition group-hover:bg-primary group-hover:text-black"><item.icon className="h-4.5 w-4.5" /></span>
                        <span><strong className="block text-sm font-extrabold">{item.label}</strong><span className="mt-0.5 block text-[10px] text-zinc-500">{item.description}</span></span>
                        <span className="translate-x-1 text-sm text-amber-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between gap-4 px-3 py-2"><Link to="/products" onClick={() => setProductsOpen(false)} className="text-xs font-bold text-amber-600">View all products →</Link><Link to="/contact" onClick={() => setProductsOpen(false)} className="text-[11px] font-semibold text-zinc-500">Find your setup</Link></div>
              </div>
            </div>
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={desktopLinkClass(link.to)}
              activeProps={{ className: link.to === "/photosoft" ? "font-bold text-cyan-400" : isDarkTop ? "font-semibold text-white" : "font-semibold text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative" data-no-translate>
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              aria-label="Language"
              aria-expanded={languageOpen}
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-full border px-3 text-xs font-extrabold uppercase tracking-[.08em] transition-colors",
                isDarkTop ? "border-white/20 bg-white/10 text-white hover:bg-white/20" : "border-border bg-background text-foreground hover:bg-surface",
              )}
            >
              <Languages className="h-4 w-4" />
              {locale}
              <ChevronDown className={cn("h-3 w-3 transition-transform", languageOpen && "rotate-180")} />
            </button>
            {languageOpen && (
              <div className={cn(
                "absolute right-0 top-full mt-3 w-44 overflow-hidden rounded-2xl border p-1.5 shadow-[0_20px_55px_-24px_rgba(0,0,0,.55)] backdrop-blur-xl",
                isPhotoSoft ? "border-white/10 bg-[#0b0e10]" : "border-border bg-white",
              )}>
                {(Object.keys(localeLabels) as Locale[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => { setLocale(item); setLanguageOpen(false); }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors",
                      isPhotoSoft ? "text-white/75 hover:bg-white/[.08]" : "text-zinc-700 hover:bg-zinc-100",
                      locale === item && (isPhotoSoft ? "bg-white/[.08] text-cyan-300" : "bg-accent text-zinc-950"),
                    )}
                  >
                    <span>{localeLabels[item]}</span>
                    {locale === item && <Check className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button asChild className={cn("rounded-full px-6 transition-all", isPhotoSoft ? "bg-cyan-300 text-zinc-950 shadow-[0_12px_30px_-12px_rgba(103,232,249,.8)] hover:bg-white" : "shadow-[var(--shadow-glow)] hover:scale-105")}>
            <Link to="/contact">{isPhotoSoft ? "Contact PhotoSoft" : "Contact"}</Link>
          </Button>
        </div>

        <button className={cn("inline-flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden", isDarkTop ? "border-white/20 bg-white/10 text-white" : "border-border")} onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className={cn("mt-2 overflow-hidden rounded-[1.5rem] border shadow-xl backdrop-blur-xl lg:hidden", isDarkTop ? "border-white/15 bg-black/92 text-white" : "border-black/[.08] bg-white/95 text-zinc-950")}>
          <div className="container-page flex max-h-[calc(100svh-4rem)] flex-col overflow-y-auto py-4">
            <Link to="/" hash="experience" onClick={() => setOpen(false)} className={cn("py-2.5 text-base font-medium", isDarkTop ? "text-white/75" : "text-foreground")}>How It Works</Link>

            <div className={cn("flex items-center justify-between text-base font-medium", isDarkTop ? "text-white/75" : "text-foreground")}>
              <Link to="/products" onClick={() => setOpen(false)} className="flex-1 py-2.5">Products</Link>
              <button type="button" onClick={() => setMobileProductsOpen((value) => !value)} aria-label="Open products menu" className="grid h-10 w-10 place-items-center rounded-full"><ChevronDown className={cn("h-4 w-4 transition-transform", mobileProductsOpen && "rotate-180")} /></button>
            </div>
            {mobileProductsOpen && (
              <div className={cn("mb-2 grid gap-1 rounded-2xl p-2", isDarkTop ? "bg-white/[.05]" : "bg-surface")}>
                {productLinks.map((item, index) => (
                  <Link key={`${item.label}-mobile-${index}`} to={item.to} hash={item.hash} onClick={() => setOpen(false)} className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5", "featured" in item && item.featured ? "bg-zinc-950 text-white" : isDarkTop ? "text-white/70" : "text-foreground")}>
                    <item.icon className={cn("h-4 w-4", "featured" in item && item.featured ? "text-primary" : isPhotoSoft ? "text-cyan-300" : "text-primary")} />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {mainLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={cn("py-2.5 text-base font-medium", isDarkTop ? link.to === "/photosoft" ? "font-bold text-cyan-300" : "text-white/75" : link.to === "/photosoft" ? "font-bold text-cyan-600" : "text-foreground")}>
                {link.label}
              </Link>
            ))}

            <div className={cn("mt-3 rounded-2xl border p-2", isDarkTop ? "border-white/10 bg-white/[.04]" : "border-border bg-surface")} data-no-translate>
              <div className="grid grid-cols-3 gap-1">
                {(Object.keys(localeLabels) as Locale[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLocale(item)}
                    className={cn(
                      "rounded-xl px-2 py-2.5 text-xs font-extrabold uppercase transition-colors",
                      isPhotoSoft ? "text-white/50" : "text-muted-foreground",
                      locale === item && (isPhotoSoft ? "bg-cyan-300 text-zinc-950" : "bg-primary text-primary-foreground"),
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <Button asChild className={cn("mt-3 rounded-full", isPhotoSoft && "bg-cyan-300 text-zinc-950 hover:bg-white")}>
              <Link to="/contact" onClick={() => setOpen(false)}>{isPhotoSoft ? "Contact PhotoSoft" : "Contact"}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

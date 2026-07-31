import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronDown, Code2, LayoutDashboard, Menu, Monitor, PanelsTopLeft, ScanFace, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";
import kioskModelPro from "@/assets/kiosk-model-pro.png";

const mainLinks = [
  { to: "/solutions", label: "Solutions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/photosoft", label: "PhotoSoft" },
] as const;

const productLinks = [
  {
    to: "/kiosk",
    label: "Buy a Kiosk",
    description: "Hardware systems & custom configurations",
    icon: ScanFace,
    featured: true,
    hash: undefined,
  },
  {
    to: "/products",
    label: "Campaign Tool",
    description: "Publish on the web or kiosk",
    icon: PanelsTopLeft,
    hash: "campaign-tool",
  },
  {
    to: "/products",
    label: "Web Panel",
    description: "Manage campaigns and usage",
    icon: LayoutDashboard,
    hash: "web-panel",
  },
  {
    to: "/products",
    label: "Desktop App",
    description: "Workflows for photographers",
    icon: Monitor,
    hash: "desktop-app",
  },
  {
    to: "/products",
    label: "API",
    description: "Build ZoomSelfie into your product",
    icon: Code2,
    hash: "api",
  },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const reduceMotion = useReducedMotion();
  const isPhotoSoftRoute = pathname === "/photosoft";
  const [photoSoftVisualsReady, setPhotoSoftVisualsReady] = useState(false);
  const isPhotoSoft = isPhotoSoftRoute && photoSoftVisualsReady;
  const isHome = pathname === "/";
  const isDarkTop = isPhotoSoft || (isHome && !scrolled);
  const productsActive = pathname === "/products" || pathname === "/kiosk";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
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

    const timer = setTimeout(() => setPhotoSoftVisualsReady(true), 360);
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isPhotoSoft
          ? scrolled
            ? "border-b border-cyan-300/15 bg-[#05080a]/92 text-white shadow-[0_12px_45px_-28px_rgba(34,211,238,.65)] backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-black/75 to-transparent text-white"
          : isHome && !scrolled
            ? "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent text-white"
            : "border-b border-border bg-background/92 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-xl",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90" aria-label="ZoomSelfie home">
          <Logo size="md" tone={isDarkTop ? "light" : "default"} />
          {isPhotoSoft && <span className="hidden rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[.18em] text-cyan-200 sm:inline-flex">PhotoSoft OS</span>}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          <Link to="/" hash="experience" className={desktopLinkClass()}>How It Works</Link>

          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button
              type="button"
              onClick={() => setProductsOpen((value) => !value)}
              onFocus={() => setProductsOpen(true)}
              aria-expanded={productsOpen}
              className={cn(desktopLinkClass(), "flex items-center gap-1.5", productsActive && (isDarkTop ? "font-semibold text-white" : "font-semibold text-foreground"))}
            >
              Products <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", productsOpen && "rotate-180")} />
            </button>

            <div className={cn(
              "absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-5 transition-all duration-300",
              productsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
            )}>
              <div className={cn(
                "grid grid-cols-[1.08fr_.92fr] gap-3 rounded-[2rem] border p-4 shadow-[0_30px_90px_-35px_rgba(0,0,0,.5)] backdrop-blur-xl",
                isPhotoSoft ? "border-white/10 bg-[#0b0e10]/98" : "border-border bg-white/98",
              )}>
                <Link to="/kiosk" onClick={() => setProductsOpen(false)} className="group relative min-h-[350px] overflow-hidden rounded-[1.55rem] bg-zinc-950 p-7 text-white">
                  <div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                  <img src={kioskModelPro} alt="" className="absolute -bottom-2 right-0 h-[78%] w-[54%] object-contain object-bottom transition-transform duration-500 group-hover:scale-105" />
                  <div className="relative z-10 flex h-full max-w-[58%] flex-col">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-black"><ScanFace className="h-5 w-5" /></span>
                    <div className="mt-auto">
                      <span className="inline-flex rounded-full bg-primary px-2.5 py-1 text-[8px] font-black uppercase tracking-[.14em] text-black">Kiosk systems for sale</span>
                      <h3 className="mt-3 text-2xl font-extrabold leading-tight">Configure and buy your kiosk.</h3>
                      <p className="mt-3 text-[11px] leading-5 text-white/48">Choose a model, format, finish and optional features for your venue.</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary">Open configurator <span aria-hidden="true">→</span></span>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-col">
                  <p className={cn("px-3 pb-2 pt-1 text-[9px] font-black uppercase tracking-[.2em]", isPhotoSoft ? "text-white/30" : "text-zinc-400")}>Software products</p>
                  <div className="grid gap-1">
                    {productLinks.slice(1).map((item, index) => (
                      <Link key={`${item.label}-${index}`} to={item.to} hash={item.hash} onClick={() => setProductsOpen(false)} className={cn("group flex items-center gap-4 rounded-[1.15rem] p-3.5 transition-all", isPhotoSoft ? "text-white hover:bg-white/[.07]" : "text-zinc-950 hover:bg-zinc-100")}>
                        <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-full transition-transform group-hover:scale-105", isPhotoSoft ? "bg-white/10 text-cyan-300" : "bg-accent text-primary")}><item.icon className="h-4.5 w-4.5" /></span>
                        <span className="min-w-0"><span className="block text-sm font-bold">{item.label}</span><span className={cn("mt-0.5 block truncate text-[10px]", isPhotoSoft ? "text-white/40" : "text-muted-foreground")}>{item.description}</span></span>
                        <span className={cn("ml-auto translate-x-1 text-sm opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100", isPhotoSoft ? "text-cyan-300" : "text-primary")}>→</span>
                      </Link>
                    ))}
                  </div>
                  <div className={cn("mt-auto flex items-center justify-between border-t px-3 pt-3", isPhotoSoft ? "border-white/10" : "border-border")}>
                    <Link to="/products" onClick={() => setProductsOpen(false)} className={cn("text-xs font-bold", isPhotoSoft ? "text-cyan-300" : "text-primary")}>View all products →</Link>
                    <Link to="/book-demo" onClick={() => setProductsOpen(false)} className={cn("text-[10px] font-bold", isPhotoSoft ? "text-white/45" : "text-zinc-500")}>Find your setup</Link>
                  </div>
                </div>
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
          <Button asChild className={cn("rounded-full px-6 transition-all", isPhotoSoft ? "bg-cyan-300 text-zinc-950 shadow-[0_12px_30px_-12px_rgba(103,232,249,.8)] hover:bg-white" : "shadow-[var(--shadow-glow)] hover:scale-105")}>
            <Link to="/book-demo">{isPhotoSoft ? "PhotoSoft Demo" : "Book Demo"}</Link>
          </Button>
        </div>

        <button className={cn("inline-flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden", isDarkTop ? "border-white/20 bg-white/10 text-white" : "border-border")} onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className={cn("border-t shadow-xl lg:hidden", isPhotoSoft ? "border-white/10 bg-[#070a0d]" : "border-border bg-background")}>
          <div className="container-page flex max-h-[calc(100svh-4rem)] flex-col overflow-y-auto py-4">
            <Link to="/" hash="experience" onClick={() => setOpen(false)} className={cn("py-2.5 text-base font-medium", isPhotoSoft ? "text-white/75" : "text-foreground")}>How It Works</Link>

            <button type="button" onClick={() => setMobileProductsOpen((value) => !value)} className={cn("flex items-center justify-between py-2.5 text-left text-base font-medium", isPhotoSoft ? "text-white/75" : "text-foreground")}>
              Products <ChevronDown className={cn("h-4 w-4 transition-transform", mobileProductsOpen && "rotate-180")} />
            </button>
            {mobileProductsOpen && (
              <div className={cn("mb-2 grid gap-1 rounded-2xl p-2", isPhotoSoft ? "bg-white/[.05]" : "bg-surface")}>
                {productLinks.map((item, index) => (
                  <Link key={`${item.label}-mobile-${index}`} to={item.to} hash={item.hash} onClick={() => setOpen(false)} className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5", item.featured ? "bg-zinc-950 text-white" : isPhotoSoft ? "text-white/70" : "text-foreground")}>
                    <item.icon className={cn("h-4 w-4", item.featured ? "text-primary" : isPhotoSoft ? "text-cyan-300" : "text-primary")} />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}

            {mainLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={cn("py-2.5 text-base font-medium", isPhotoSoft ? link.to === "/photosoft" ? "font-bold text-cyan-300" : "text-white/75" : link.to === "/photosoft" ? "font-bold text-cyan-600" : "text-foreground")}>
                {link.label}
              </Link>
            ))}

            <Button asChild className={cn("mt-3 rounded-full", isPhotoSoft && "bg-cyan-300 text-zinc-950 hover:bg-white")}>
              <Link to="/book-demo" onClick={() => setOpen(false)}>{isPhotoSoft ? "PhotoSoft Demo" : "Book Demo"}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

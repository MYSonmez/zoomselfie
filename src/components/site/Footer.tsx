import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/site/AppLink";
import { Logo } from "@/components/site/Logo";

const columns = [
  {
    title: "Products",
    links: [
      { to: "/kiosk", label: "Kiosk Systems" },
      { to: "/products/campaign-tool", label: "Campaign Tool" },
      { to: "/products/web-panel", label: "Web Panel" },
      { to: "/products/desktop-app", label: "Desktop App" },
      { to: "/products/api", label: "API" },
    ],
  },
  {
    title: "Explore",
    links: [
      { to: "/", hash: "experience", label: "How It Works" },
      { to: "/solutions", label: "Solutions" },
      { to: "/gallery", label: "Gallery" },
      { to: "/blog", label: "Journal" },
      { to: "/photosoft", label: "PhotoSoft" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="premium-grain overflow-hidden bg-zinc-950 text-white">
      <div className="container-page pb-9 pt-16 sm:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.45fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link to="/" className="inline-block transition-opacity hover:opacity-90" aria-label="ZoomSelfie home">
              <Logo size="lg" tone="light" />
            </Link>
            <p className="mt-6 text-sm leading-7 text-white/48">
              Self-service photo and video experiences for people, and flexible creative products for the teams that bring those experiences to life.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-white/28">{column.title}</p>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} hash={"hash" in link ? link.hash : undefined} className="text-sm font-medium text-white/62 transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-5xl text-[clamp(2.4rem,6vw,6.4rem)] font-extrabold leading-[.88] tracking-[-.07em] text-white/[.06]">MAKE THE MOMENT YOURS.</p>
          <div className="mt-8 flex flex-col gap-3 text-xs text-white/32 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ZoomSelfie. All rights reserved.</p>
            <p>Kiosk · Web campaigns · Desktop workflows · API</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

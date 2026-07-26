import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/products", label: "Platform" },
      { to: "/products", label: "Desktop App" },
      { to: "/products", label: "Dashboard" },
      { to: "/products", label: "AI Engine" },
      { to: "/products", label: "API" },
      { to: "/kiosk", label: "Kiosk" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions", label: "Theme Parks" },
      { to: "/solutions", label: "Museums" },
      { to: "/solutions", label: "Hotels & Resorts" },
      { to: "/solutions", label: "Tourism" },
      { to: "/solutions", label: "Photo Studios" },
      { to: "/solutions", label: "Events" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/gallery", label: "Gallery" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
      { to: "/book-demo", label: "Book Demo" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <Logo size="lg" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              The AI-powered visitor experience platform. Turn every visit into a premium,
              shareable digital memory — delivered instantly by QR.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ZoomSelfie. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed for theme parks, museums, hotels, and attractions worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}

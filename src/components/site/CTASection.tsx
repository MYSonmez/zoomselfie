import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection({
  title = "Ready to create a ZoomSelfie experience?",
  description = "Launch it on a kiosk, on the web or inside your own product. We’ll help you choose the right setup.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl border border-border bg-foreground text-white px-8 py-16 md:px-16 md:py-24">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,122,0,0.35), transparent 60%)" }}
          />
          <div
            aria-hidden
            className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,122,0,0.18), transparent 60%)" }}
          />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h2>
            <p className="mt-5 text-lg text-white/70 md:text-xl leading-relaxed">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-primary hover:bg-primary-hover text-primary-foreground h-12 px-6 text-base"
              >
                <Link to="/book-demo">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full h-12 px-6 text-base bg-transparent border-white/20 text-white hover:bg-white hover:text-foreground"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Link } from "@/components/site/AppLink";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection({
  title = "Ready to create a ZoomSelfie experience?",
  description = "Launch it on a kiosk, on the web, through a desktop workflow or inside your own product. We will help you choose the right setup.",
  action = "Contact us",
  topic,
}: {
  title?: string;
  description?: string;
  action?: string;
  topic?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="premium-media frame-corners relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 px-8 py-16 text-white md:px-16 md:py-24">
          <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,184,0,.38),transparent_62%)]" />
          <div aria-hidden className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,122,0,.18),transparent_62%)]" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-primary">Start a conversation</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1] tracking-[-.055em] sm:text-5xl md:text-6xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/62 md:text-lg">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-primary px-7 text-base text-primary-foreground hover:bg-primary-hover">
                <Link to="/contact" hash={topic}>{action} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/20 bg-transparent px-7 text-base text-white hover:bg-white hover:text-zinc-950">
                <Link to="/products">Explore products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

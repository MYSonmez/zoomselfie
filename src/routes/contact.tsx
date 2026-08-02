"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code2,
  Headphones,
  Layers3,
  Mail,
  Monitor,
  PanelsTopLeft,
  ScanFace,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const topics = [
  { id: "general", label: "General information", short: "Start with an open question.", icon: Sparkles },
  { id: "kiosk", label: "Kiosk quotation", short: "Discuss a model and configuration.", icon: ScanFace },
  { id: "campaign-tool", label: "Campaign Tool", short: "Plan a branded web or kiosk journey.", icon: PanelsTopLeft },
  { id: "web-panel", label: "Web Panel", short: "Talk about management and scale.", icon: Layers3 },
  { id: "desktop-app", label: "Desktop App", short: "Explore a professional workflow.", icon: Monitor },
  { id: "api", label: "API integration", short: "Bring ZoomSelfie into a product.", icon: Code2 },
  { id: "support", label: "Technical support", short: "Get help with an existing setup.", icon: Headphones },
  { id: "photosoft", label: "PhotoSoft", short: "Discuss attraction photo operations.", icon: Layers3 },
] as const;

export default function Contact() {
  const [topic, setTopic] = useState<(typeof topics)[number]["id"]>("general");
  const [previewNotice, setPreviewNotice] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (topics.some((item) => item.id === hash)) setTopic(hash as (typeof topics)[number]["id"]);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selected = topics.find((item) => item.id === topic) ?? topics[0];
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 1, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: .65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="contact-page bg-[#f6f1e7] text-zinc-950">
      <section className="premium-grain product-screen flex items-center overflow-hidden pb-14 pt-28 md:pt-32">
        <div className="container-page grid w-full items-center gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
          <motion.div {...reveal()} className="max-w-xl">
            <p className="text-xs font-black uppercase tracking-[.22em] text-amber-600">Contact ZoomSelfie</p>
            <h1 className="mt-6 text-[clamp(3.5rem,6.4vw,7rem)] font-extrabold leading-[.88] tracking-[-.07em]">Tell us what you want to create.</h1>
            <p className="mt-7 text-base leading-7 text-black/58 sm:text-lg sm:leading-8">Choose the product or conversation that fits. The form will adapt so you only share the information that matters.</p>
            <a href="mailto:hello@zoomselfie.com" className="mt-9 inline-flex items-center gap-3 rounded-full border border-black/12 bg-white/70 px-5 py-3 text-sm font-bold transition-colors hover:bg-white"><Mail className="h-4 w-4 text-amber-600" /> hello@zoomselfie.com</a>
            <div className="mt-12 border-t border-black/10 pt-7">
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-black/35">What happens next</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-black/52">We review the context, identify the right ZoomSelfie product and continue the conversation without pushing you into a purchase flow.</p>
            </div>
          </motion.div>

          <motion.div {...reveal(.08)} className="frame-corners rounded-[2.5rem] border border-black/8 bg-white p-5 shadow-[0_35px_90px_-50px_rgba(0,0,0,.45)] sm:p-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-black/38">01 · Choose a topic</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {topics.map((item) => {
                  const active = item.id === topic;
                  return <button key={item.id} type="button" onClick={() => { setTopic(item.id); setPreviewNotice(false); }} className={`flex items-start gap-3 rounded-[1.25rem] border p-4 text-left transition-all ${active ? "border-primary bg-primary" : "border-black/8 bg-[#f8f8f6] hover:border-black/20"}`}><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${active ? "bg-black text-white" : "bg-white text-amber-600"}`}><item.icon className="h-4 w-4" /></span><span><span className="block text-sm font-bold">{item.label}</span><span className={`mt-1 block text-[11px] leading-4 ${active ? "text-black/60" : "text-black/42"}`}>{item.short}</span></span></button>;
                })}
              </div>
            </div>

            <form className="mt-8 border-t border-black/8 pt-7" onSubmit={(event) => { event.preventDefault(); setPreviewNotice(true); }}>
              <div className="flex items-center justify-between gap-4"><p className="text-[10px] font-black uppercase tracking-[.2em] text-black/38">02 · Your details</p><p className="text-xs font-bold text-amber-600">{selected.label}</p></div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div><Label htmlFor="contact-name">Name</Label><Input id="contact-name" required className="mt-2 h-12 rounded-xl bg-[#fafafa]" placeholder="Your name" /></div>
                <div><Label htmlFor="contact-email">Email</Label><Input id="contact-email" type="email" required className="mt-2 h-12 rounded-xl bg-[#fafafa]" placeholder="you@company.com" /></div>
                <div className="sm:col-span-2"><Label htmlFor="contact-company">Company, venue or project <span className="font-normal text-black/35">(optional)</span></Label><Input id="contact-company" className="mt-2 h-12 rounded-xl bg-[#fafafa]" placeholder="Add context if relevant" /></div>
                <div className="sm:col-span-2"><Label htmlFor="contact-message">What would you like to discuss?</Label><Textarea id="contact-message" required rows={5} className="mt-2 rounded-xl bg-[#fafafa]" placeholder={`Tell us about your ${selected.label.toLowerCase()} needs.`} /></div>
              </div>
              <Button type="submit" className="mt-6 h-12 w-full rounded-full text-base">Send inquiry <ArrowRight className="ml-2 h-4 w-4" /></Button>
              {previewNotice && <div role="status" className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><strong>Preview mode:</strong> submission delivery will be connected before launch. No form data has been sent.</div>}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

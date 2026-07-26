import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageSquare, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - ZoomSelfie" },
      { name: "description", content: "Get in touch with the ZoomSelfie team for sales, partnerships, or support." },
      { property: "og:title", content: "Contact ZoomSelfie" },
      { property: "og:description", content: "We'd love to hear from your venue." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 250);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        description="Sales, partnerships, or support - the ZoomSelfie team is here to help."
      />
      <Section className="pt-0">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            {[
              { icon: Mail, label: "Email", value: "hello@zoomselfie.com" },
              { icon: MessageSquare, label: "Sales", value: "sales@zoomselfie.com" },
              { icon: MapPin, label: "HQ", value: "Lisbon - Paris - New York" },
            ].map((i) => (
              <div key={i.label} className="flex items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{i.label}</div>
                  <div className="mt-1 text-lg font-semibold">{i.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-4xl border border-border bg-white p-8 md:p-10 shadow-[var(--shadow-soft)]">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Received!</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                  Thank you{formData.firstName ? `, ${formData.firstName}` : ""}. Our team has received your message and will respond within 24 hours.
                </p>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" });
                  }}
                  className="mt-8 rounded-full border-border"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="fn">First name</Label>
                    <Input
                      id="fn"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="mt-2 h-11 rounded-xl"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ln">Last name</Label>
                    <Input
                      id="ln"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="mt-2 h-11 rounded-xl"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="em">Work email</Label>
                    <Input
                      id="em"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 h-11 rounded-xl"
                      placeholder="jane@venue.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="co">Company / Venue</Label>
                    <Input
                      id="co"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-2 h-11 rounded-xl"
                      placeholder="Your venue name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="ms">Message</Label>
                    <Textarea
                      id="ms"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 rounded-xl"
                      placeholder="Tell us about your venue and what you're looking for."
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full rounded-full h-12 text-base shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </span>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
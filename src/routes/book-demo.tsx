import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, CheckCircle2, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo - ZoomSelfie" },
      { name: "description", content: "See ZoomSelfie live. Book a personalized 30-minute demo with our team." },
      { property: "og:title", content: "Book a ZoomSelfie Demo" },
      { property: "og:description", content: "A 30-minute walkthrough tailored to your venue." },
    ],
  }),
  component: BookDemo,
});

function BookDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    notes: "",
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
        eyebrow="Book a Demo"
        title="See ZoomSelfie live."
        description="A 30-minute personalized walkthrough of the platform, the kiosk, and everything we can do for your venue."
      />
      <Section className="pt-0">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">What you'll get.</h3>
            <ul className="mt-8 space-y-4">
              {[
                "A live walkthrough of the ZoomSelfie platform",
                "Kiosk hardware demonstration and specs",
                "Custom rollout plan for your venue",
                "Pricing and packaging tailored to your operation",
                "Q&A with a ZoomSelfie product expert",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-border bg-white p-8 md:p-10 shadow-[var(--shadow-soft)]">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Demo Scheduled!</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                  Thank you{formData.firstName ? `, ${formData.firstName}` : ""}. Our product team has received your request and will contact you within 1 business day to confirm your slot.
                </p>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: "", lastName: "", email: "", company: "", role: "", notes: "" });
                  }}
                  className="mt-8 rounded-full border-border"
                >
                  Book another demo
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
                  <div>
                    <Label htmlFor="co">Company / Venue</Label>
                    <Input
                      id="co"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-2 h-11 rounded-xl"
                      placeholder="Venue Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ro">Role</Label>
                    <Input
                      id="ro"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="mt-2 h-11 rounded-xl"
                      placeholder="GM / Operations Director"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="ms">Tell us about your venue</Label>
                    <Textarea
                      id="ms"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="mt-2 rounded-xl"
                      placeholder="Estimated annual visitors, location, timeline..."
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
                      <Loader2 className="h-4 w-4 animate-spin" /> Scheduling...
                    </span>
                  ) : (
                    "Book my demo"
                  )}
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  We'll be in touch within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Check,
  Zap,
  Wifi,
  ShieldCheck,
  Sun,
  Smartphone,
  Cpu,
  Sparkles,
  Layers,
  Flame,
  CheckCircle2,
  Package,
  X,
  CreditCard,
  Printer,
  Radio,
  Snowflake,
  Palette,
  Building,
} from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionTitle } from "@/components/site/Section";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

import kioskIsolatedCabin from "@/assets/kiosk-isolated-cabin.png";
import kioskIsolatedStand from "@/assets/kiosk-isolated-stand.png";
import kioskModelStandard from "@/assets/kiosk-model-standard.png";
import kioskModelPro from "@/assets/kiosk-model-pro.png";

export const Route = createFileRoute("/kiosk")({
  head: () => ({
    meta: [
      { title: "Kiosk Sales & Configurator — ZoomSelfie Hardware" },
      {
        name: "description",
        content:
          "Configure your venue's signature photo kiosk. Select Standard or Pro model tiers, toggle enclosed cabin options, customize add-ons, and calculate venue ROI.",
      },
      { property: "og:title", content: "ZoomSelfie Kiosk Hardware Configurator" },
      {
        property: "og:description",
        content:
          "Turnkey architectural hardware, studio optics, solar canopy options, and instant QR delivery.",
      },
    ],
  }),
  component: KioskSales,
});

const modelTiers = [
  {
    id: "standard",
    name: "ZoomSelfie Standard",
    badge: "Boutique & Indoor",
    price: 12900,
    lease: 499,
    imageStand: kioskModelStandard,
    imageCabin: kioskIsolatedCabin,
    screen: '24" 4K Touchscreen',
    camera: "Sony 24MP APS-C",
    speed: "3.2s avg delivery",
    warranty: "1-Year Warranty",
    desc: "Sleek, high-reliability indoor photo kiosk for boutique venues, hotel lobbies, and event spaces.",
    features: [
      '24" 4K Touchscreen Interface',
      "Sony 24MP Studio Optics",
      "Single High-Speed Thermal Printer",
      "Instant QR Code Delivery",
    ],
  },
  {
    id: "pro",
    name: "ZoomSelfie Pro",
    badge: "Most Popular",
    popular: true,
    price: 19500,
    lease: 749,
    imageStand: kioskModelPro,
    imageCabin: kioskIsolatedCabin,
    screen: '32" 4K HDR (2,000 nits)',
    camera: "Sony Full-Frame 33MP DSLR",
    speed: "2.4s avg delivery",
    warranty: "3-Year Priority Warranty",
    desc: "High-throughput commercial kiosk with studio optics, 2,000 nits outdoor screen, and 4K AI video rendering.",
    features: [
      '32" 4K HDR 2,000 nits Outdoor Display',
      "Sony Full-Frame 33MP DSLR",
      "NVIDIA Jetson Edge AI Accelerator",
      "Sub-2.4s QR & 4K Video Engine",
    ],
  },
];

const addOnCatalog = [
  {
    id: "solar",
    title: "Solar Glass Dome Canopy",
    price: 2400,
    lease: 95,
    icon: Sun,
    desc: "High-efficiency glass solar panel dome providing auxiliary power and heritage architectural flair.",
  },
  {
    id: "weather",
    title: "IP66 Weather Armor & Anti-Frost Pack",
    price: 1800,
    lease: 70,
    icon: Snowflake,
    desc: "Climate-controlled sealed enclosure with heated anti-fog glass for sub-zero ski resorts and tropical humidity.",
  },
  {
    id: "printer",
    title: "Dual High-Speed Thermal Printers",
    price: 1500,
    lease: 60,
    icon: Printer,
    desc: "High-density dye-sublimation print engine producing physical 4x6\" branded souvenir prints in 8 seconds.",
  },
  {
    id: "payment",
    title: "Contactless Credit Card & POS Terminal",
    price: 1200,
    lease: 45,
    icon: CreditCard,
    desc: "EMV, Apple Pay, Google Pay, and RFID photo pass payment reader for automated revenue capture.",
  },
  {
    id: "wrap",
    title: "Bespoke Vinyl Venue Brand Wrap",
    price: 950,
    lease: 35,
    icon: Palette,
    desc: "Full 360-degree custom vinyl wrap with your venue logos, colors, sponsor graphics, and QR styling.",
  },
  {
    id: "aifx",
    title: "NVIDIA 60fps AI Video FX Accelerator",
    price: 1600,
    lease: 65,
    icon: Sparkles,
    desc: "Unlocks real-time 60fps 3D particle zoom FX, green-screen isolation, and multi-person face swap templates.",
  },
  {
    id: "cellular",
    title: "Global 5G Dual-SIM Redundant Cellular Pack",
    price: 750,
    lease: 30,
    icon: Radio,
    desc: "High-gain multi-carrier 5G cellular modem for uninterrupted cloud video streaming anywhere in the world.",
  },
];

export function KioskSales() {
  const [selectedModelId, setSelectedModelId] = useState<string>("pro");
  const [hasCabin, setHasCabin] = useState<boolean>(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "weather",
    "payment",
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    venue: "",
    phone: "",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [roiVisitors, setRoiVisitors] = useState(15000);
  const [roiCaptureRate, setRoiCaptureRate] = useState(30);
  const [roiPrice, setRoiPrice] = useState(6);

  const activeModel =
    modelTiers.find((m) => m.id === selectedModelId) || modelTiers[1];

  const cabinPrice = 4500;
  const cabinLease = 180;

  const selectedAddonObjects = addOnCatalog.filter((a) =>
    selectedAddons.includes(a.id)
  );
  const addOnsTotalHardware = selectedAddonObjects.reduce(
    (sum, a) => sum + a.price,
    0
  );
  const addOnsTotalMonthly = selectedAddonObjects.reduce(
    (sum, a) => sum + a.lease,
    0
  );

  const totalHardwarePrice =
    activeModel.price + (hasCabin ? cabinPrice : 0) + addOnsTotalHardware;
  const totalMonthlyLease =
    activeModel.lease + (hasCabin ? cabinLease : 0) + addOnsTotalMonthly;

  const currentKioskImage = hasCabin
    ? activeModel.imageCabin
    : activeModel.imageStand;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const dailyCaptures = Math.round(roiVisitors * (roiCaptureRate / 100));
  const dailyGrossSales = dailyCaptures * roiPrice;
  const monthlyGrossRevenue = dailyGrossSales * 30;
  const monthlyNetProfit = Math.round(monthlyGrossRevenue * 0.85);
  const paybackPeriodDays = Math.max(
    1,
    Math.round(totalHardwarePrice / Math.max(1, dailyGrossSales))
  );

  return (
    <div className="overflow-hidden bg-background pb-36">
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Turnkey Hardware Sales"
        title="Build Your Venue's Signature Kiosk Experience."
        description="Select your base model tier, customize enclosed cabin options, and configure performance add-ons to build a turnkey hardware solution."
      >
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 h-12 text-sm shadow-[var(--shadow-glow)] hover:scale-105 transition-transform font-bold"
          >
            <a href="#configurator">
              Launch Hardware Configurator <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-7 h-12 text-sm font-bold"
          >
            <a href="#roi-calculator">Calculate Venue ROI</a>
          </Button>
        </div>
      </PageHero>

      {/* HARDWARE CONFIGURATOR SECTION */}
      <Section id="configurator" className="pt-4">
        <SectionTitle
          eyebrow="Interactive Configurator"
          title="Configure Your Kiosk Hardware"
          description="Select model tier, toggle enclosed cabin pavilion architecture, and customize add-ons with real-time price updates."
        />

        {/* STEP 1: CLEAN LIGHT-BACKGROUND MODEL CARDS */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Step 01
            </span>
            <h3 className="text-xl font-extrabold text-foreground">
              Select Base Performance Model Tier
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modelTiers.map((tier) => {
              const isSelected = selectedModelId === tier.id;
              return (
                <motion.div
                  key={tier.id}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedModelId(tier.id)}
                  className={`relative cursor-pointer rounded-3xl border-2 overflow-hidden bg-white transition-all flex flex-col justify-between ${
                    isSelected
                      ? "border-primary shadow-[var(--shadow-glow)] ring-2 ring-primary/40"
                      : "border-border hover:border-primary/40 shadow-sm"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-3 right-3 z-10 rounded-full bg-primary px-3 py-0.5 text-[11px] font-bold text-primary-foreground shadow-md">
                      🔥 Most Popular
                    </div>
                  )}

                  {/* EDGE-TO-EDGE COVER IMAGE WITH OVERLAY */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4 }}
                      src={tier.imageStand}
                      alt={tier.name}
                      className="h-full w-full object-cover object-top"
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    <span className="absolute top-3 left-3 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20">
                      {tier.badge}
                    </span>

                    {isSelected && (
                      <div className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    )}

                    {/* Tier name in the overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-black leading-tight text-white drop-shadow-md">
                        {tier.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tier.desc}
                      </p>

                      {/* Price Tag */}
                      <div className="mt-4 p-3.5 rounded-2xl bg-surface border border-border flex items-baseline justify-between">
                        <div>
                          <div className="text-[11px] font-semibold text-muted-foreground">
                            Purchase Price
                          </div>
                          <div className="text-2xl font-black text-foreground">
                            ${tier.price.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[11px] font-semibold text-muted-foreground">
                            Lease Option
                          </div>
                          <div className="text-base font-bold text-primary">
                            ${tier.lease}/mo
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="mt-4 space-y-2 text-xs">
                        {tier.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-center gap-2 text-foreground font-medium"
                          >
                            <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      type="button"
                      variant={isSelected ? "default" : "outline"}
                      className="mt-6 w-full rounded-full font-bold h-11 text-xs"
                    >
                      {isSelected ? "Model Selected" : `Select ${tier.name}`}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* STEP 2: ENCLOSED PAVILION CABIN OPTION (SINGLE HORIZONTAL CARD TOGGLE) */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Step 02
            </span>
            <h3 className="text-xl font-extrabold text-foreground">
              Enclosure Architecture Option
            </h3>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => setHasCabin(!hasCabin)}
            className={`cursor-pointer rounded-3xl border-2 transition-all bg-white shadow-sm overflow-hidden flex flex-col md:flex-row ${
              hasCabin
                ? "border-primary bg-accent/30 shadow-[var(--shadow-glow)] ring-2 ring-primary/40"
                : "border-border hover:border-primary/40"
            }`}
          >
            {/* FLUSH LEFT IMAGE — NO PADDING, NO BORDER, FILLS CARD EDGE */}
            <div className="relative w-full md:w-64 h-52 md:h-auto md:self-stretch shrink-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hasCabin ? "cabin" : "stand"}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  src={currentKioskImage}
                  alt="Enclosure Preview"
                  className="h-full w-full object-cover object-top"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/15 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white border border-white/20">
                {hasCabin ? "Enclosed Pavilion Cabin" : "Open-Air Sleek Stand"}
              </span>
            </div>

            {/* Content & Dynamic Description */}
            <div className="flex-1 flex flex-col justify-between w-full p-5 sm:p-6">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <Building className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="text-lg font-extrabold text-foreground">
                        Enclosed Pavilion Cabin Architecture
                      </h4>
                      <span className="text-xs font-bold text-primary">
                        +${cabinPrice.toLocaleString()} purchase (+${cabinLease}/mo lease)
                      </span>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHasCabin(!hasCabin);
                      }}
                      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                        hasCabin ? "bg-primary" : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                          hasCabin ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={hasCabin ? "cabin-desc" : "stand-desc"}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 text-xs text-muted-foreground leading-relaxed"
                  >
                    {hasCabin
                      ? "FULL ARCHITECTURAL PAVILION CABIN: Includes full privacy enclosure walls, climate control, glass panels, and optional solar glass dome roof. Engineered for landmark heritage sites, outdoor parks, and high-end resorts."
                      : "OPEN-AIR SLEEK STAND: Compact 48x48cm floor footprint optimized for high-volume indoor foot traffic, hotel lobbies, concourses, and mobile pop-up events with ultra-fast guest throughput."}
                  </motion.p>
                </AnimatePresence>

                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-primary">
                    {hasCabin ? "✓ Visitor Privacy Walls" : "✓ Compact Footprint"}
                  </span>
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-primary">
                    {hasCabin ? "✓ Solar Roof Option" : "✓ High Throughput"}
                  </span>
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-primary">
                    {hasCabin ? "✓ IP66 All-Weather" : "✓ Quick Indoor Setup"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STEP 3: ADD-ON CUSTOMIZER */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Step 03
            </span>
            <h3 className="text-xl font-extrabold text-foreground">
              Customize Performance Add-Ons
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Select optional features to upgrade hardware capabilities, weather protection, and monetization.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOnCatalog.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              const IconComp = addon.icon;
              return (
                <motion.div
                  key={addon.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => toggleAddon(addon.id)}
                  className={`cursor-pointer rounded-2xl border-2 p-4 transition-all flex flex-col justify-between ${
                    isChecked
                      ? "border-primary bg-accent/30 shadow-sm"
                      : "border-border bg-white hover:border-primary/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-primary">
                        <IconComp className="h-4.5 w-4.5" />
                      </span>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="h-4 w-4 accent-primary cursor-pointer"
                      />
                    </div>

                    <h5 className="mt-3 text-sm font-bold text-foreground">
                      {addon.title}
                    </h5>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                      {addon.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between text-[11px] font-bold">
                    <span className="text-foreground">
                      +${addon.price.toLocaleString()}
                    </span>
                    <span className="text-primary">+${addon.lease}/mo</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* PROPOSAL REQUEST MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-white rounded-4xl p-8 sm:p-10 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-surface text-foreground hover:bg-accent transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {!formSubmitted ? (
                <>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <Package className="h-4 w-4" /> Formal Hardware Proposal
                  </div>
                  <h3 className="mt-2 text-2xl font-extrabold text-foreground">
                    Request Official Proposal
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Our hardware engineering team will prepare a formal PDF proposal for{" "}
                    <strong>{activeModel.name}</strong> (
                    {hasCabin ? "Enclosed Cabin" : "Open-Air Stand"}) at{" "}
                    <strong>${totalHardwarePrice.toLocaleString()}</strong>.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="mt-6 space-y-4 text-xs"
                  >
                    <div>
                      <label className="font-bold text-foreground block mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full h-11 px-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-foreground block mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@venue.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full h-11 px-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-foreground block mb-1">
                          Venue / Company Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Grand Resort & Park"
                          value={formData.venue}
                          onChange={(e) =>
                            setFormData({ ...formData, venue: e.target.value })
                          }
                          className="w-full h-11 px-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-foreground block mb-1">
                        Deployment Notes & Target Date
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Target installation timeframe, heritage constraints, or custom branding requirements..."
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full p-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full font-bold shadow-md h-12 text-sm"
                    >
                      Send Proposal Request <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">
                    Proposal Request Received!
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
                    Thank you, {formData.name}. Our hardware engineering team is generating your tailored PDF proposal for <strong>{formData.venue}</strong>. Check your inbox shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setIsModalOpen(false);
                      setFormSubmitted(false);
                    }}
                    className="mt-6 rounded-full px-8"
                  >
                    Close Window
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INTERACTIVE VENUE ROI & REVENUE CALCULATOR */}
      <Section id="roi-calculator" surface className="border-y border-border">
        <SectionTitle
          eyebrow="Financial Feasibility"
          title="Interactive Venue ROI & Revenue Calculator"
          description="Estimate your monthly souvenir photo revenue, net margins, and hardware payback timeframe."
        />

        <div className="mt-12 max-w-4xl mx-auto rounded-4xl border border-border bg-white p-8 md:p-12 shadow-[var(--shadow-soft)]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            {/* Sliders Control */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-foreground">Daily Venue Visitors</span>
                  <span className="text-primary font-black text-sm">
                    {roiVisitors.toLocaleString()} guests / day
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={roiVisitors}
                  onChange={(e) => setRoiVisitors(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-foreground">Photo Capture & Scan Rate</span>
                  <span className="text-primary font-black text-sm">
                    {roiCaptureRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="70"
                  step="5"
                  value={roiCaptureRate}
                  onChange={(e) => setRoiCaptureRate(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-foreground">Photo Pass / Souvenir Price</span>
                  <span className="text-primary font-black text-sm">
                    ${roiPrice.toFixed(2)} per guest
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="0.5"
                  value={roiPrice}
                  onChange={(e) => setRoiPrice(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-2xl bg-surface border border-border text-xs text-muted-foreground">
                ℹ️ Calculation based on {dailyCaptures.toLocaleString()} daily souvenir photo packages delivered via QR stream & optional thermal prints.
              </div>
            </div>

            {/* Financial Results Card */}
            <div className="rounded-3xl bg-accent p-8 text-center border border-primary/30 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-bold text-primary uppercase tracking-wider">
                  Estimated Gross Monthly Revenue
                </div>
                <div className="mt-2 text-4xl md:text-5xl font-black text-foreground">
                  ${monthlyGrossRevenue.toLocaleString()}
                </div>
                <div className="text-xs font-semibold text-primary mt-1">
                  Estimated Net Profit: ${monthlyNetProfit.toLocaleString()}/mo
                </div>

                <div className="mt-6 pt-6 border-t border-primary/20 space-y-3 text-xs text-left">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Daily Photo Sales:</span>
                    <span className="font-bold text-foreground">
                      ${dailyGrossSales.toLocaleString()} / day
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hardware Payback Period:</span>
                    <span className="font-black text-emerald-600">
                      {paybackPeriodDays} Days
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 w-full rounded-full font-bold shadow-md"
              >
                Request ROI Feasibility Report
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* SIDE-BY-SIDE HARDWARE SPEC COMPARISON TABLE */}
      <Section className="border-b border-border">
        <SectionTitle
          eyebrow="Hardware Specs"
          title="Side-by-Side Model Comparison Matrix"
          description="Compare Standard vs. Pro hardware capabilities at a glance."
        />

        <div className="mt-12 max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-border bg-white">
                <th className="p-4 font-extrabold text-foreground text-sm">Specification</th>
                <th className="p-4 font-bold text-foreground">ZoomSelfie Standard</th>
                <th className="p-4 font-extrabold text-primary">ZoomSelfie Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              <tr>
                <td className="p-4 font-bold text-muted-foreground">Turnkey Price</td>
                <td className="p-4 font-bold">$12,900 ($499/mo)</td>
                <td className="p-4 font-black text-primary">$19,500 ($749/mo)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-muted-foreground">Touch Display</td>
                <td className="p-4">24" 4K (1,000 nits)</td>
                <td className="p-4 font-semibold">32" 4K HDR (2,000 nits)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-muted-foreground">Camera System</td>
                <td className="p-4">Sony 24MP APS-C</td>
                <td className="p-4 font-semibold">Sony Full-Frame 33MP DSLR</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-muted-foreground">AI Processing</td>
                <td className="p-4">Dual-Core Edge AI</td>
                <td className="p-4 font-semibold">NVIDIA Jetson Orin AI</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-muted-foreground">Delivery Speed</td>
                <td className="p-4">3.2 seconds</td>
                <td className="p-4 font-bold text-primary">2.4 seconds</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-muted-foreground">Enclosure Rating</td>
                <td className="p-4">Indoor / Covered</td>
                <td className="p-4 font-semibold">IP65 Weather Rated (IP66 with Armor)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-muted-foreground">Warranty</td>
                <td className="p-4">1-Year Standard</td>
                <td className="p-4 font-semibold">3-Year Priority Telemetry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* DEPLOYMENT PROCESS */}
      <Section surface>
        <SectionTitle
          eyebrow="Turnkey Logistics"
          title="From Order to Go-Live in 4 Steps"
          description="Our engineering team handles site surveys, custom heritage skinning, electrical integration, and staff training."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Site Survey & Draft",
              desc: "We assess power, network, lighting, and heritage architectural requirements.",
            },
            {
              step: "02",
              title: "Custom Skinning",
              desc: "Factory fabrication of custom vinyl wraps, solar domes, or heritage pavilions.",
            },
            {
              step: "03",
              title: "White-Glove Delivery",
              desc: "On-site precision mounting, electrical calibration, and camera alignment.",
            },
            {
              step: "04",
              title: "Go-Live & Telemetry",
              desc: "Staff training and 24/7 automated cloud telemetry handoff.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="text-xs font-black tracking-widest text-primary">
                STEP {item.step}
              </div>
              <h4 className="mt-3 text-lg font-bold text-foreground">
                {item.title}
              </h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA SECTION */}
      <CTASection
        title="Ready to build your signature kiosk?"
        description="Request a formal hardware proposal and our engineering team will create a customized proposal for your venue."
      />

      {/* STICKY BOTTOM CONFIGURATION NAVBAR WITH BRAND ACCENT CONTAINER */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-border shadow-[0_-12px_35px_rgba(0,0,0,0.15)] p-4 sm:px-8"
      >
        <div className="container-page flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            {/* EDGE-TO-EDGE COVER THUMBNAIL IN BOTTOM NAVBAR */}
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl border-2 border-primary/40 shadow-md shrink-0 overflow-hidden">
              <img
                src={currentKioskImage}
                alt="Selected Kiosk"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-primary">
                <span className="bg-accent px-2.5 py-0.5 rounded-full border border-primary/20">{activeModel.name}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-foreground">
                  {hasCabin ? "Enclosed Cabin (+ $4.5k)" : "Open-Air Stand"}
                </span>
                {selectedAddonObjects.length > 0 && (
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                    +{selectedAddonObjects.length} Add-ons
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-foreground">
                  ${totalHardwarePrice.toLocaleString()}
                </span>
                <span className="text-xs font-semibold text-primary">
                  (Or ${totalMonthlyLease}/mo lease)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="rounded-full font-bold px-8 shadow-[var(--shadow-glow)] hover:scale-105 transition-transform text-sm h-13"
            >
              Request Proposal <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

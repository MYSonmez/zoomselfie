import type { Metadata } from "next";
import Admin from "@/routes/admin";

export const metadata: Metadata = {
  title: "Content Studio | ZoomSelfie",
  description: "Internal ZoomSelfie content workspace.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <Admin />;
}

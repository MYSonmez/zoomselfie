import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ZoomSelfie",
    short_name: "ZoomSelfie",
    description: "Personalized photo and video experiences across kiosk, web, desktop and API.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffb800",
  };
}

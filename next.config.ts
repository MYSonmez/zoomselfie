import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 82],
    minimumCacheTTL: 31_536_000,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[contenthash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;

// Updated Next.js configuration to allow remote images from Unsplash
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable remote image loading for Unsplash URLs used in the site
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

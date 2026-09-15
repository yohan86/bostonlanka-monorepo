import type { NextConfig } from "next";
import path from "path/win32";

const nextConfig: NextConfig = {

    turbopack: {
      root: path.resolve(__dirname, '../../'),
    },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      { protocol: "https", hostname: "img.youtube.com" },
    ]
  }
};

export default nextConfig;

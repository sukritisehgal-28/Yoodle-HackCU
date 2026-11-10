import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Yoodle-HackCU",
  assetPrefix: "/Yoodle-HackCU",
};

export default nextConfig;

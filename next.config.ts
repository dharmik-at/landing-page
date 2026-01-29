import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow serving static files from ingestIqDocs
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [],
  },
  // Transpile mermaid for proper ESM support
  transpilePackages: ["mermaid"],
};

export default nextConfig;

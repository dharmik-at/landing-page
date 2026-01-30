import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow serving static files from ingestIqDocs
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [],
  },
  // Transpile mermaid for proper ESM support
  transpilePackages: ["mermaid"],
  // Include ingestIqDocs folder in production builds
  // This ensures MDX files are available when using fs.readFileSync at runtime
  outputFileTracingIncludes: {
    "/app/docs": ["./ingestIqDocs/**/*"],
    "/app/docs/[...slug]": ["./ingestIqDocs/**/*"],
  },
};

export default nextConfig;

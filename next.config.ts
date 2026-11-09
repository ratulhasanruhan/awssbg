import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "secure.meetupstatic.com", pathname: "/photos/**" },
      { protocol: "https", hostname: "secure-content.meetupstatic.com", pathname: "/**" }
    ]
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css"
      }
    }
  }
};

export default nextConfig;

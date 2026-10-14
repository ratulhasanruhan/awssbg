import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://aws.diapc.dev/sitemap.xml",
    host: "https://aws.diapc.dev"
  };
}

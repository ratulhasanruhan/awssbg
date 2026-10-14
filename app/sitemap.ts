import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aws.diapc.dev";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/events`, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/constitution`, changeFrequency: "monthly", priority: 0.6 }
  ];
}

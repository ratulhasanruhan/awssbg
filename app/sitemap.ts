import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aws.diapc.dev";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1, images: [`${base}/og.png`] },
    { url: `${base}/events`, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/team`, changeFrequency: "monthly", priority: 0.8, images: [`${base}/team/ratul-hasan-ruhan.webp`] },
    { url: `${base}/constitution`, changeFrequency: "monthly", priority: 0.6 }
  ];
}

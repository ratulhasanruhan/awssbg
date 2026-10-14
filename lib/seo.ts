import type { Metadata } from "next";
import { site } from "@/content/site";

const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "AWS Student Builders Group at Daffodil International Academy" };

/** Per-page metadata with matching canonical, Open Graph and Twitter tags. */
export function pageMeta({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const fullTitle = title ? `${title} | AWS SBG · DIA` : `${site.name} · ${site.institution}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE]
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [OG_IMAGE.url] }
  };
}

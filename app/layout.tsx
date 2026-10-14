import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aws.diapc.dev"),
  title: {
    default: "AWS Student Builders Group · Daffodil International Academy",
    template: "%s | AWS SBG · DIA"
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: `${site.name} · ${site.institution}`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AWS Student Builders Group at Daffodil International Academy" }]
  },
  twitter: { card: "summary_large_image", title: `${site.name} · ${site.institution}`, description: site.description, images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  keywords: ["AWS Student Builders Group", "AWS SBG", "Daffodil International Academy", "DIA", "AWS Builder Center", "cloud computing", "student community"],
  icons: {
    icon: "/icon.svg"
  }
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: `${site.name} at ${site.institution}`,
      alternateName: "AWS SBG DIA",
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/brand/awssbg-logo-512.png`, width: 512, height: 512 },
      email: site.email,
      slogan: site.tagline,
      description: site.description,
      parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
      sameAs: [site.facebook, site.meetup]
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#organization` }
    }
  ]
};

export const viewport = { themeColor: "#060914", colorScheme: "dark" as const };

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-aws-orange focus:px-4 focus:py-2 focus:font-bold focus:text-void">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

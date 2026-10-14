import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
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
  description:
    "AWS Student Builders Group at Daffodil International Academy. Learn · Build · Connect · Create Impact. A student-led cloud community, part of the global AWS Builder Center network.",
  openGraph: {
    title: "AWS Student Builders Group · DIA",
    description:
      "Learn · Build · Connect · Create Impact. AWS Student Builders Group at Daffodil International Academy.",
    url: "https://aws.diapc.dev",
    siteName: "AWS Student Builders Group",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AWS SBG at DIA" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Student Builders Group · DIA",
    description:
      "Learn · Build · Connect · Create Impact. AWS Student Builders Group at Daffodil International Academy.",
    images: ["/og.png"]
  },
  alternates: { canonical: "/" },
  keywords: ["AWS Student Builders Group", "AWS SBG", "Daffodil International Academy", "DIA", "AWS Builder Center", "cloud computing", "student community"],
  icons: {
    icon: "/icon.svg"
  }
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AWS Student Builders Group at Daffodil International Academy",
  alternateName: "AWS SBG DIA",
  url: "https://aws.diapc.dev",
  logo: "https://aws.diapc.dev/brand/awssbg-mark.svg",
  email: "aws@diapc.dev",
  slogan: "Learn · Build · Connect · Create Impact",
  parentOrganization: { "@type": "Organization", name: "DIA Programming Club", url: "https://diapc.dev" },
  sameAs: [
    "https://www.facebook.com/awssbgdia",
    "https://www.meetup.com/aws-sbg-at-daffodil-international-academy/"
  ]
};

export const viewport = { themeColor: "#060914" };

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-aws-orange focus:px-4 focus:py-2 focus:font-bold focus:text-void">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

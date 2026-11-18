import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Urbanist } from "next/font/google";
import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/Footer";
import { GlowLayer } from "@/components/GlowLayer";
import { Nav } from "@/components/Nav";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { ORGANIZATION_JSONLD, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Gravio | Brand, Marketing & Growth Agency in Dubai", template: "%s | Gravio" },
  description:
    "Gravio is a Dubai-based brand, content and growth agency helping ambitious businesses sharpen positioning, create stronger content and improve marketing performance across the UAE, GCC and international markets.",
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gravio | Brand, Marketing & Growth Agency in Dubai",
    description: "Gravio is a Dubai-based brand, content and growth agency helping ambitious businesses sharpen positioning, create stronger content and improve marketing performance across the UAE, GCC and international markets.",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_AE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Static, trusted object from our own code; escape "<" so it can never close the tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD).replace(/</g, "\\u003c") }}
        />
        <MotionConfig reducedMotion="user">
          <Nav />
          <main>{children}</main>
          <Footer />
          <GlowLayer />
          <WhatsAppFab />
        </MotionConfig>
      </body>
    </html>
  );
}

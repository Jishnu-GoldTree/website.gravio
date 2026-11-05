import type { Metadata } from "next";
import { Bebas_Neue, Urbanist } from "next/font/google";
import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/Footer";
import { GlowLayer } from "@/components/GlowLayer";
import { Nav } from "@/components/Nav";
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
  metadataBase: new URL("https://www.gravio.ae"),
  title: "Gravio | Marketing Agency in Dubai, UAE",
  description:
    "Gravio is a Dubai marketing agency for brand, content and growth: brand strategy, social media, influencer marketing and performance marketing.",
  openGraph: {
    title: "Gravio | Marketing Agency in Dubai, UAE",
    description: "Brand, content and growth for ambitious brands, from Dubai.",
    url: "https://www.gravio.ae",
    siteName: "Gravio",
    locale: "en_AE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${urbanist.variable} ${display.variable}`}>
      <body>
        <MotionConfig reducedMotion="user">
          <Nav />
          <div role="main">{children}</div>
          <Footer />
          <GlowLayer />
        </MotionConfig>
      </body>
    </html>
  );
}

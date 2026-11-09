import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { MapEmbed } from "@/components/MapEmbed";
import { HomeHero } from "@/components/pageTops";
import { Blog, Clients, Cta, Faq, Process, Services, Testimonials, Values, Work } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/",
  description:
    "Gravio is a Dubai marketing agency for brand, content and growth: brand strategy, visual identity, social media, digital marketing and media planning.",
});

export default function Home() {
  return (
    <>
      <HomeHero />
      <Clients />
      <Process />
      <Values />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Blog />
      <Cta />
      <MapEmbed />
    </>
  );
}

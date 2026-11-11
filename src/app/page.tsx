import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { FEATURES } from "@/lib/content";
import { MapEmbed } from "@/components/MapEmbed";
import { HomeHero } from "@/components/pageTops";
import { Blog, Cta, Faq, Process, Services, Testimonials, Values, Work } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/",
  title: "360° Marketing Agency in Dubai | Gravio",
  description:
    "Gravio is a Dubai marketing agency bringing strategy, brand, digital campaigns and measurement together for businesses in the UAE and beyond.",
});

export default function Home() {
  return (
    <>
      <HomeHero />
      <Process />
      <Values />
      <Services />
      {FEATURES.work && <Work />}
      <Testimonials />
      <Faq />
      {FEATURES.blog && <Blog />}
      <Cta />
      <MapEmbed />
    </>
  );
}

import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { FEATURES } from "@/lib/content";
import { MapEmbed } from "@/components/MapEmbed";
import { HomeHero } from "@/components/pageTops";
import { Blog, Cta, Faq, Process, Services, Testimonials, Values, Work } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/",
  title: "Gravio | Brand, Marketing & Growth Agency in Dubai",
  description:
    "Gravio is a Dubai-based brand, content and growth agency helping ambitious businesses sharpen positioning, create stronger content and improve marketing performance across the UAE, GCC and international markets.",
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

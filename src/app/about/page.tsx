import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { AboutTop } from "@/components/pageTops";
import { Cta, Faq, Impact, People, Values, WhyGravio } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/about/",
  title: "About Gravio | Marketing Management Agency Dubai",
  description:
    "Meet Gravio, a Dubai-based brand, content and growth agency in Business Bay. Strategists, designers, creators and media specialists working as one team since 2020.",
});

export default function AboutPage() {
  return (
    <>
      <AboutTop />
      <Impact />
      <Values />
      <People />
      <WhyGravio />
      <Faq />
      <Cta />
    </>
  );
}

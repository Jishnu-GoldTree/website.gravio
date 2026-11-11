import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { AboutTop } from "@/components/pageTops";
import { Cta, Faq, Impact, People, Values, WhyGravio } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/about/",
  title: "About Gravio | Marketing Management Agency Dubai",
  description:
    "Meet Gravio, a Dubai-based marketing management agency in Business Bay connecting strategy, creative work and digital execution for ambitious businesses.",
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

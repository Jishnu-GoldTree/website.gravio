import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { AboutTop } from "@/components/pageTops";
import { Cta, Faq, Impact, People, Values, WhyGravio } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/about/",
  title: "About Us",
  description:
    "Meet Gravio, a Dubai marketing agency of strategists, designers and media buyers building brands across the UAE and India since 2020.",
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

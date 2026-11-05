import type { Metadata } from "next";
import { AboutTop } from "@/components/pageTops";
import { Clients, Cta, Faq, Impact, People, Values, WhyGravio } from "@/components/sections";

export const metadata: Metadata = { title: "About | Gravio" };

export default function AboutPage() {
  return (
    <>
      <AboutTop />
      <Impact />
      <Clients />
      <Values />
      <People />
      <WhyGravio />
      <Faq />
      <Cta />
    </>
  );
}

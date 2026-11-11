import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ServicesTop } from "@/components/pageTops";
import { Cta, Faq, Services } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/services/",
  title: "Marketing Services in Dubai & the UAE | Gravio",
  description:
    "Explore Gravio's marketing services in Dubai and the UAE: digital marketing, visual identity, brand strategy and media planning, connected in one plan.",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesTop />
      <Services />
      <Faq tight />
      <Cta />
    </>
  );
}

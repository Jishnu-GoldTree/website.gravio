import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ServicesTop } from "@/components/pageTops";
import { Cta, Faq, Services } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/services/",
  title: "Marketing Services",
  description:
    "Digital marketing, visual identity, brand strategy and media planning from Gravio, a full-service marketing agency in Dubai, UAE.",
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

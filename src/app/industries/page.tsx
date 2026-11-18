import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { LinkCards } from "@/components/DetailPage";
import { SimplePage } from "@/components/SimplePage";
import { Cta } from "@/components/sections";
import { INDUSTRY_PAGES } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/industries/",
  title: "Industry Marketing Solutions in Dubai | Gravio",
  description:
    "Marketing for real estate, e-commerce and retail, hospitality and luxury, and B2B and technology businesses in Dubai, the UAE and the GCC.",
});

export default function IndustriesPage() {
  return (
    <>
      <SimplePage
        title="Marketing shaped around how your industry sells"
        text="Every sector has its own buying journey. Gravio connects strategy, creative, media and follow-up to the way your customers actually decide."
      >
        <Button href="/contact/" label="Book a strategy call" />
      </SimplePage>
      <LinkCards cards={INDUSTRY_PAGES.map((p) => ({ href: `/industries/${p.slug}/`, kicker: p.kicker, name: p.name, summary: p.summary }))} />
      <Cta />
    </>
  );
}

import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { INDUSTRY_PAGES, SERVICE_GROUPS, serviceBySlug } from "@/lib/pages";
import { LinkCards } from "@/components/DetailPage";
import { ServicesTop } from "@/components/pageTops";
import { Cta, Faq, Services } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/services/",
  title: "Marketing Services in Dubai & the UAE | Gravio",
  description:
    "Brand strategy, creative and media production, social media, performance marketing, SEO and AI search, and AI-assisted customer systems from Gravio in Dubai.",
});

const serviceCards = SERVICE_GROUPS.flatMap((g) =>
  g.slugs.map((slug) => {
    const p = serviceBySlug(slug)!;
    return { href: `/services/${p.slug}/`, kicker: g.name, name: p.name, summary: p.summary };
  }),
);

export default function ServicesPage() {
  return (
    <>
      <ServicesTop />
      <Services />
      <LinkCards title="Explore every service" text="Detailed scope, process, deliverables and FAQs for each part of the Gravio system." cards={serviceCards} />
      <LinkCards
        title="Industries we serve"
        cards={INDUSTRY_PAGES.map((p) => ({ href: `/industries/${p.slug}/`, kicker: p.kicker, name: p.name, summary: p.summary }))}
      />
      <Faq tight />
      <Cta />
    </>
  );
}

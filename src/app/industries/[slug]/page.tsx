import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { INDUSTRY_PAGES, industryBySlug } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRY_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = industryBySlug((await params).slug);
  if (!page) return {};
  return pageMeta({ path: `/industries/${page.slug}/`, title: page.title, description: page.description });
}

export default async function IndustryPage({ params }: Props) {
  const page = industryBySlug((await params).slug);
  if (!page) notFound();
  const related = INDUSTRY_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({ href: `/industries/${p.slug}/`, kicker: p.kicker, name: p.name, summary: p.summary }));
  return (
    <DetailPage
      page={page}
      path={`/industries/${page.slug}/`}
      crumbs={[{ name: "Industries", path: "/industries/" }]}
      related={{ title: "Other industries", cards: related }}
      serviceType={`${page.name} marketing`}
    />
  );
}

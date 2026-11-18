import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { SERVICE_PAGES, serviceBySlug } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = serviceBySlug((await params).slug);
  if (!page) return {};
  return pageMeta({ path: `/services/${page.slug}/`, title: page.title, description: page.description });
}

export default async function ServicePage({ params }: Props) {
  const page = serviceBySlug((await params).slug);
  if (!page) notFound();
  const related = SERVICE_PAGES.filter((p) => p.slug !== page.slug && p.kicker === page.kicker)
    .concat(SERVICE_PAGES.filter((p) => p.kicker !== page.kicker))
    .slice(0, 3)
    .map((p) => ({ href: `/services/${p.slug}/`, kicker: p.kicker, name: p.name, summary: p.summary }));
  return (
    <DetailPage
      page={page}
      path={`/services/${page.slug}/`}
      crumbs={[{ name: "Services", path: "/services/" }]}
      related={{ title: "Related services", cards: related }}
      serviceType={page.name}
    />
  );
}

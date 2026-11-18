import type { Metadata } from "next";
import { DetailPage } from "@/components/DetailPage";
import { MARKETS_PAGE } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ path: "/markets/", title: MARKETS_PAGE.title, description: MARKETS_PAGE.description });

export default function MarketsPage() {
  return <DetailPage page={MARKETS_PAGE} path="/markets/" crumbs={[]} />;
}

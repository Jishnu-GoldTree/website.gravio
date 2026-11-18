import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { PORTFOLIO_TEXT, PRIVATE_PORTFOLIO } from "@/lib/portfolio";

// Unlisted page: not linked from the site, left out of the sitemap, and kept out of search results.
// It is still public to anyone who has the link.
export const metadata: Metadata = {
  title: { absolute: "Portfolio | Gravio" },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function PrivatePortfolioPage() {
  return <Portfolio projects={PRIVATE_PORTFOLIO} text={PORTFOLIO_TEXT} />;
}

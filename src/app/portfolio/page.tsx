import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { Cta } from "@/components/sections";
import { PORTFOLIO, PORTFOLIO_TEXT } from "@/lib/portfolio";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/portfolio/",
  title: "Portfolio | Websites & Marketing Projects | Gravio",
  description:
    "Explore Gravio's portfolio, including Rut Gold, a Dubai gold and diamond jewellery store, and Model Tree, a jewellery 3D model marketplace.",
});

export default function PortfolioPage() {
  return (
    <>
      <Portfolio projects={PORTFOLIO} text={PORTFOLIO_TEXT} />
      <Cta />
    </>
  );
}

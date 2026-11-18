import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { Cta } from "@/components/sections";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/portfolio/",
  title: "Portfolio | Websites & Marketing Projects | Gravio",
  description:
    "Explore Gravio's portfolio: websites and digital projects for automotive, real estate, interiors, beauty, healthcare, IT and media brands in Dubai and the UAE.",
});

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
      <Cta />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { FEATURES } from "@/lib/content";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = pageMeta({
  path: "/blog/",
  title: "Marketing Insights for UAE & GCC Brands | Gravio",
  description:
    "Practical perspectives on brand strategy, marketing management, digital growth and customer experience in the UAE and GCC, from the Gravio team in Dubai.",
  noindex: !FEATURES.blog,
});

export default function Page() {
  if (!FEATURES.blog) notFound();
  return <SimplePage title="Blog" text="Articles from the Gravio team are on their way." />;
}

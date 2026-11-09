import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { FEATURES } from "@/lib/content";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = pageMeta({
  path: "/blog/",
  title: "Blog",
  description:
    "Marketing insights, strategy and growth tips from the Gravio team in Dubai.",
  noindex: !FEATURES.blog,
});

export default function Page() {
  if (!FEATURES.blog) notFound();
  return <SimplePage title="Blog" text="Articles from the Gravio team are on their way." />;
}

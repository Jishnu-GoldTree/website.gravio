import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = pageMeta({
  path: "/blog/",
  title: "Blog",
  description:
    "Marketing insights, strategy and growth tips from the Gravio team in Dubai.",
  noindex: true,
});

export default function Page() {
  return <SimplePage title="Blog" text="Articles from the Gravio team are on their way." />;
}

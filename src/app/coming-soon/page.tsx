import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = pageMeta({
  path: "/coming-soon/",
  title: "Coming Soon | Gravio",
  description:
    "Something new from Gravio is on its way.",
  noindex: true,
});

export default function Page() {
  return <SimplePage title="Coming Soon" text="We are working on something new. Check back shortly." />;
}

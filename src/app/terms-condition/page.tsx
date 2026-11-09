import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = pageMeta({
  path: "/terms-condition/",
  title: "Terms & Conditions",
  description:
    "The terms that apply when you use the Gravio website and services.",
  noindex: true,
});

export default function Page() {
  return <SimplePage title="Terms & Conditions" text="Our terms and conditions will be published here." />;
}

import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = pageMeta({
  path: "/privacy-policy/",
  title: "Privacy Policy",
  description:
    "How Gravio collects, uses and protects your information.",
  noindex: true,
});

export default function Page() {
  return <SimplePage title="Privacy Policy" text="Our privacy policy will be published here." />;
}

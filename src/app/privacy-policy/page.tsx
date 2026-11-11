import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL_UPDATED, PRIVACY } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  path: "/privacy-policy/",
  title: "Privacy Policy | Gravio",
  description:
    "How Gravio collects, uses and protects your information.",
});

export default function Page() {
  return <LegalPage title="Privacy Policy" updated={LEGAL_UPDATED} sections={PRIVACY} />;
}

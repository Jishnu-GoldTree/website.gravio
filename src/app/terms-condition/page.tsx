import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL_UPDATED, TERMS } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  path: "/terms-condition/",
  title: "Terms & Conditions",
  description:
    "The terms that apply when you use the Gravio website and services.",
});

export default function Page() {
  return <LegalPage title="Terms & Conditions" updated={LEGAL_UPDATED} sections={TERMS} />;
}

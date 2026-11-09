import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { FEATURES } from "@/lib/content";
import { Cta, Work } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/work/",
  title: "Our Work",
  description:
    "Selected Gravio projects, including e-commerce websites for Rut Gold and Model Tree. See how we help brands grow.",
  noindex: !FEATURES.work,
});

export default function WorkPage() {
  if (!FEATURES.work) notFound();
  return (
    <>
      <Work first />
      <Cta />
    </>
  );
}

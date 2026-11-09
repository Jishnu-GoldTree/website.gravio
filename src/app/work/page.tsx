import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Cta, Work } from "@/components/sections";

export const metadata: Metadata = pageMeta({
  path: "/work/",
  title: "Our Work",
  description:
    "Selected Gravio projects, including e-commerce websites for Rut Gold and Model Tree. See how we help brands grow.",
});

export default function WorkPage() {
  return (
    <>
      <Work first />
      <Cta />
    </>
  );
}

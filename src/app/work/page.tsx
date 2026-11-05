import type { Metadata } from "next";
import { Cta, Work } from "@/components/sections";

export const metadata: Metadata = { title: "Work | Gravio" };

export default function WorkPage() {
  return (
    <>
      <Work first />
      <Cta />
    </>
  );
}

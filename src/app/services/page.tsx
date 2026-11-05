import type { Metadata } from "next";
import { ServicesTop } from "@/components/pageTops";
import { Cta, Faq, Services } from "@/components/sections";

export const metadata: Metadata = { title: "Services | Gravio" };

export default function ServicesPage() {
  return (
    <>
      <ServicesTop />
      <Services />
      <Faq tight />
      <Cta />
    </>
  );
}

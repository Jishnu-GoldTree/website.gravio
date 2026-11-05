import type { Metadata } from "next";
import { Compare, Cta, Pricing } from "@/components/sections";

export const metadata: Metadata = { title: "Pricing | Gravio" };

export default function PricingPage() {
  return (
    <>
      <section className="pricing-route">
        <Pricing />
      </section>
      <Compare />
      <Cta />
    </>
  );
}

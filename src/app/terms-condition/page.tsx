import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Terms & Conditions | Gravio" };

export default function Page() {
  return <SimplePage title="Terms & Conditions" text="Our terms and conditions will be published here." />;
}

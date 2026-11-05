import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Coming Soon | Gravio" };

export default function Page() {
  return <SimplePage title="Coming Soon" text="We are working on something new. Check back shortly." />;
}

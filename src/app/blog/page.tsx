import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Blog | Gravio" };

export default function Page() {
  return <SimplePage title="Blog" text="Articles from the Gravio team are on their way." />;
}

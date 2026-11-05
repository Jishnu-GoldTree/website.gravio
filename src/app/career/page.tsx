import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Career | Gravio" };

export default function Page() {
  return <SimplePage title="Career" text="Want to shape the future of marketing in Dubai? Tell us about yourself and the work you love." />;
}

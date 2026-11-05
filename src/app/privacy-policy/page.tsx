import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = { title: "Privacy Policy | Gravio" };

export default function Page() {
  return <SimplePage title="Privacy Policy" text="Our privacy policy will be published here." />;
}

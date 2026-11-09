import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SimplePage } from "@/components/SimplePage";

export const metadata: Metadata = pageMeta({
  path: "/career/",
  title: "Careers",
  description:
    "Join Gravio in Dubai. We're looking for strategists, designers and marketers who want to do bold, creative work.",
});

export default function Page() {
  return <SimplePage title="Career" text="Want to shape the future of marketing in Dubai? Tell us about yourself and the work you love." />;
}

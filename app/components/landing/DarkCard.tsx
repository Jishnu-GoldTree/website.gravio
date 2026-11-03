import type { ReactNode } from "react";

export default function DarkCard({
  id,
  maxWidth = "max-w-[1680px]",
  children,
}: {
  id?: string;
  maxWidth?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-4 py-6 sm:px-6">
      <div
        className={`mx-auto ${maxWidth} rounded-3xl bg-[#05130c] px-6 py-16 sm:px-12 sm:py-20`}
      >
        {children}
      </div>
    </section>
  );
}

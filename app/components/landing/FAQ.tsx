"use client";

import { useState } from "react";
import { FAQS } from "./content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-black text-[#05130c]">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#05130c]/60">
          Find answers to common questions about our services, process, and
          how we can help your business grow.
        </p>

        <div className="mt-10 space-y-4 text-left">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-[#05130c]/15"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-[#05130c]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold">{item.q}</span>
                  <span
                    className={`text-[#05130c]/50 transition ${isOpen ? "rotate-180" : ""}`}
                  >
                    ⌄
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-[#05130c]/70">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import DarkCard from "./DarkCard";
import { PILLARS, WORK_PROJECTS } from "./content";

export default function WorkServices() {
  const [active, setActive] = useState(0);
  const pillar = PILLARS[active];

  return (
    <DarkCard id="work">
      <div className="text-center">
        <span className="text-sm font-semibold tracking-widest text-[#34d473] uppercase">
          A Display of Featured Work
        </span>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Our forward-thinking experts, driven by innovation and technology,
          craft brand storytelling with a deep understanding of platform
          expertise.
        </p>
        <a
          href="#work"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#34d473] py-2 pr-2 pl-5 text-sm font-semibold text-[#05130c]"
        >
          View All Work
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
            →
          </span>
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {WORK_PROJECTS.map((project) => (
          <div
            key={project.name}
            className="flex h-44 flex-col items-center justify-center rounded-xl border border-dashed border-white/20 px-4 text-center"
          >
            <span className="text-xs text-white/40">Image placeholder</span>
            <span className="mt-2 text-xs font-semibold tracking-widest text-[#34d473] uppercase">
              {project.category}
            </span>
            <span className="text-sm text-white/70">{project.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Delivering Solutions
          <br />
          with <span className="text-[#34d473]">Unmatched Expertise</span>
        </h2>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-full bg-[#34d473] py-2 pr-2 pl-5 text-sm font-semibold text-[#05130c]"
        >
          View All Services
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
            →
          </span>
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-4">
          {PILLARS.map((p, index) => {
            const isActive = index === active;
            return (
              <button
                key={p.key}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-2xl border px-6 py-5 text-left transition ${
                  isActive
                    ? "border-[#34d473] bg-[#0a2416]"
                    : "border-white/10 bg-transparent hover:border-white/30"
                }`}
              >
                <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[#05130c]">
                  {p.name}
                </span>
                {!isActive && (
                  <p className="mt-3 text-sm text-white/50">{p.tagline}</p>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col rounded-2xl bg-white px-8 py-8 text-[#05130c]">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#05130c] text-white">
            ↗
          </span>
          <h3 className="mt-4 text-3xl font-bold">{pillar.name}</h3>
          <ul className="mt-6 flex-1 space-y-3">
            {pillar.services.map((service) => (
              <li key={service} className="text-base">
                {service}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#05130c] py-2 pr-2 pl-5 text-sm font-semibold text-white"
          >
            Connect with an expert
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#05130c]">
              →
            </span>
          </a>
        </div>
      </div>
    </DarkCard>
  );
}

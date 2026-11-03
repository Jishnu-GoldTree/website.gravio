import { PILLARS, REGIONS } from "./content";

const SOCIALS = ["Instagram", "LinkedIn", "Facebook", "TikTok"];

export default function SiteFooter() {
  return (
    <section className="px-4 pt-6 pb-28 sm:px-6">
      <div className="mx-auto max-w-[1680px] rounded-3xl bg-[#05130c] px-6 py-12 sm:px-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-2xl font-bold text-white">Gravio</p>
            <p className="mt-4 max-w-sm text-white/70">
              We are a full-impact agency for Brand, Content and Growth that
              work for you.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 py-2 pr-2 pl-6 text-sm font-semibold text-white"
            >
              Connect with an expert
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#05130c]">
                →
              </span>
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-white/50 uppercase">
              Services
            </p>
            <div className="mt-4 divide-y divide-white/10 border-t border-white/10">
              {PILLARS.map((pillar) => (
                <a
                  key={pillar.key}
                  href="#services"
                  className="flex items-center justify-between py-4 text-lg font-medium text-white"
                >
                  {pillar.name}
                  <span className="text-white/40">⌄</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
          {REGIONS.map((region) => (
            <div key={region.name}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-white/20 text-xs text-white/40">
                Icon
              </div>
              <p className="text-sm font-semibold tracking-widest text-white uppercase">
                {region.name}
              </p>
              <p className="mt-2 text-sm text-white/50">
                {region.city}, {region.name} — address placeholder
              </p>
              <p className="mt-1 text-sm text-white/50">Phone placeholder</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 Gravio. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs text-white/60 transition hover:bg-white/20"
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

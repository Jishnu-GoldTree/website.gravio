import InterferenceRibbons from "./InterferenceRibbons";

function Sticker({ className, children }: { className: string; children: string }) {
  return (
    <span
      className={`absolute flex items-center justify-center rounded-full bg-[#34d473] text-sm text-[#05130c] shadow-lg shadow-black/20 ${className}`}
    >
      {children}
    </span>
  );
}

const STATS = [
  { value: "120+", label: "Brands grown" },
  { value: "40M+", label: "Reach generated" },
  { value: "6", label: "Years in the field" },
];

export default function Hero() {
  return (
    <section id="top">
      <div className="relative overflow-hidden bg-[#05130c] px-5 pt-40 pb-16 text-center sm:px-12 sm:pt-48 sm:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-80">
          <InterferenceRibbons
            colors={["#0a5c2d", "#34d473"]}
            wires={48}
            glow={0.55}
            speed={0.45}
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05130c]/20 via-transparent to-[#05130c]"
        />

        <div className="relative mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/70">
          <span className="text-[#34d473]">●</span> #1 Social Media &amp; Branding Agency
        </div>

        <h1 className="relative mx-auto max-w-4xl text-4xl leading-[1.05] font-black tracking-tight text-white uppercase sm:text-7xl">
          <span className="relative inline-block">
            Transforming
            <Sticker className="-top-3 -left-8 h-9 w-9 -rotate-12 sm:-top-5 sm:-left-12 sm:h-11 sm:w-11">+</Sticker>
          </span>
          <span className="mt-2 block text-[#34d473]">Vision Into</span>
          <span className="relative mt-2 block text-white">
            Impact
            <Sticker className="-top-4 -right-3 h-9 w-9 rotate-12 sm:-top-6 sm:-right-8 sm:h-11 sm:w-11">★</Sticker>
          </span>
          <span className="mt-2 block">Effectively</span>
        </h1>

        <p className="relative mx-auto mt-8 max-w-xl text-sm text-white/60 sm:text-base">
          Experience growth through social media and branding designed to
          reach, inspire, and deliver results.
        </p>

        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#34d473] px-7 py-3 text-sm font-semibold text-[#05130c] transition hover:bg-white"
          >
            Get In Touch →
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See Our Work
          </a>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-left"
            >
              <p className="text-2xl font-bold text-[#34d473]">{stat.value}</p>
              <p className="mt-1 text-xs text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

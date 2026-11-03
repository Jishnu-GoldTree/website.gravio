const STAMPS = [
  { name: "Egypt", className: "col-start-2 row-start-1" },
  { name: "Canada", className: "col-start-3 row-start-2" },
  { name: "Saudi Arabia", className: "col-start-1 row-start-2" },
  { name: "United Arab Emirates", className: "col-start-2 row-start-2 row-span-2" },
  { name: "United Kingdom", className: "col-start-3 row-start-3" },
];

export default function GlobalPresence() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-[1680px] rounded-3xl bg-gradient-to-br from-[#34d473] to-[#1a5fb4] px-6 py-16 sm:px-12 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-4xl font-black text-[#05130c] sm:text-5xl">
              Global Presence
            </h2>
            <p className="mt-4 max-w-xs text-[#05130c]/80">
              We proudly serve clients across multiple regions
            </p>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-3">
            {STAMPS.map((stamp) => (
              <div
                key={stamp.name}
                className={`flex items-center justify-center rounded-xl border-2 border-dashed border-[#05130c]/30 bg-[#05130c]/10 px-3 py-6 text-center text-sm font-bold text-[#05130c] ${stamp.className}`}
              >
                {stamp.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-[#05130c]/15 pt-10">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="flex h-10 w-32 items-center justify-center rounded-lg border border-dashed border-[#05130c]/30 text-xs font-semibold text-[#05130c]/60"
            >
              Logo placeholder
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

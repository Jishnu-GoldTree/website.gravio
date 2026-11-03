export default function Awards() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-[1680px] text-center">
        <span className="text-sm font-semibold tracking-widest text-[#0a5c2d] uppercase">
          Recognition
        </span>
        <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold text-[#05130c]">
          Awards &amp; recognition, coming soon.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="flex h-28 items-center justify-center rounded-2xl border border-dashed border-[#05130c]/20 text-xs text-[#05130c]/40"
            >
              Award placeholder
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

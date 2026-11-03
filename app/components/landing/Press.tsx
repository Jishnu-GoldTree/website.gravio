const ARTICLES = Array.from({ length: 4 }, (_, i) => i + 1);

export default function Press() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-[1680px]">
        <h2 className="text-4xl font-black text-[#05130c]">Our Articles</h2>

        <div className="mt-8 -mx-6 flex gap-5 overflow-x-auto px-6 pb-2">
          {ARTICLES.map((id) => (
            <div key={id} className="w-72 shrink-0">
              <div className="flex h-44 items-center justify-center rounded-2xl border border-dashed border-[#05130c]/20 text-sm text-[#05130c]/40">
                Image placeholder
              </div>
              <p className="mt-4 text-lg font-bold text-[#05130c]">
                Press headline placeholder
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center rounded-full bg-[#34d473] px-5 py-2 text-sm font-semibold text-[#05130c]"
              >
                See more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

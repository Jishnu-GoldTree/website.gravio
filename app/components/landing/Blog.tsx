const POSTS = Array.from({ length: 4 }, (_, i) => i + 1);
const REELS = Array.from({ length: 4 }, (_, i) => i + 1);

export default function Blog() {
  return (
    <section id="blog" className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-[1680px] overflow-hidden rounded-3xl bg-[#05130c] px-6 py-16 sm:px-12 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-4xl font-black text-white">Blogs</h2>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-full bg-[#34d473] py-2 pr-2 pl-5 text-sm font-semibold text-[#05130c]"
          >
            View All Blogs
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              →
            </span>
          </a>
        </div>

        <div className="mt-10 -mx-6 flex gap-4 overflow-x-auto px-6 pb-2 sm:-mx-12 sm:px-12">
          {POSTS.map((id) => (
            <div key={id} className="w-64 shrink-0 overflow-hidden rounded-2xl bg-white/[0.04]">
              <div className="h-3 bg-[#34d473]" />
              <div className="flex h-36 items-center justify-center border-y border-dashed border-white/10 text-sm text-white/30">
                Image placeholder
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-[#34d473]">Blog</p>
                <p className="mt-2 text-base font-bold text-white">
                  Blog post title placeholder
                </p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-white/70"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 -mx-6 flex gap-4 overflow-x-auto px-6 pb-2 sm:-mx-12 sm:px-12">
          {REELS.map((id) => (
            <div
              key={id}
              className="relative flex h-64 w-40 shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.04]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#05130c]">
                ▶
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { INDUSTRIES } from "./content";

export default function Industries() {
  return (
    <section id="industries" className="relative px-6 py-20">
      <div className="mx-auto max-w-[1680px]">
        <h2 className="text-4xl font-black text-[#05130c] sm:text-5xl">
          Empowering Growth
          <br />
          Across Diverse Industries
        </h2>
        <p className="mt-4 text-[#05130c]/70">
          We drive success in multiple industries, including:
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry}
              className="flex h-44 items-end rounded-2xl border border-dashed border-[#05130c]/20 bg-[#05130c]/5 p-4"
            >
              <span className="text-sm font-bold text-[#05130c]">
                {industry}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#34d473] py-2 pr-2 pl-5 text-sm font-semibold text-[#05130c]"
        >
          Connect with an expert
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05130c] text-white">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

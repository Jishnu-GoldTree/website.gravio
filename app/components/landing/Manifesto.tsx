import { BELIEFS } from "./content";

export default function Manifesto() {
  return (
    <section id="about" className="relative px-6 py-20">
      <div className="mx-auto grid max-w-[1680px] grid-cols-1 gap-10 md:grid-cols-[auto_1fr]">
        <h2 className="text-6xl leading-[0.9] font-black uppercase sm:text-7xl">
          <span className="bg-gradient-to-br from-[#34d473] to-[#0a5c2d] bg-clip-text text-transparent">
            Why
          </span>
          <br />
          <span className="bg-gradient-to-br from-[#0a5c2d] to-[#34d473] bg-clip-text text-transparent">
            Gravio?
          </span>
        </h2>
        <div className="space-y-5 text-xl leading-relaxed text-[#05130c]/80">
          <p>
            We fuse scale and precision to help you redefine your brand
            equity, turning attention into loyalty and loyalty into growth.
          </p>
          <p>
            We have a passion for creative problem-solving. Every brief is a
            chance to build something that didn&rsquo;t exist before.
          </p>
        </div>
      </div>

      <ul className="mx-auto mt-12 grid max-w-[1680px] grid-cols-1 gap-4 sm:grid-cols-2">
        {BELIEFS.map((line) => (
          <li
            key={line}
            className="flex items-start gap-4 rounded-2xl border border-[#05130c]/5 bg-white px-6 py-5 shadow-sm shadow-black/5 transition hover:border-[#34d473]/40 hover:shadow-md"
          >
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#34d473] text-sm font-bold text-[#05130c]">
              ✓
            </span>
            <span className="text-base leading-snug font-semibold text-[#05130c]">
              {line}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

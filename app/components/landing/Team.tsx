import { TEAM_SLOTS } from "./content";

const BG_COLORS = ["bg-[#f2b6d4]", "bg-[#9fd7ec]", "bg-[#34d473]"];

export default function Team() {
  return (
    <DarkCardWrap>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-black text-white">Meet the Team</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-10 -mx-6 flex gap-4 overflow-x-auto px-6 pb-2 sm:-mx-12 sm:px-12">
        {TEAM_SLOTS.map((slot, index) => (
          <div
            key={slot.id}
            className={`relative flex h-80 w-56 shrink-0 items-end overflow-hidden rounded-2xl ${BG_COLORS[index % BG_COLORS.length]}`}
          >
            <div className="absolute inset-0 flex items-center justify-center text-sm text-[#05130c]/40">
              Photo placeholder
            </div>
            <div className="relative w-full bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-xl font-bold text-white">Team Member</p>
              <p className="text-xs text-white/70">Role placeholder</p>
            </div>
          </div>
        ))}
      </div>
    </DarkCardWrap>
  );
}

function DarkCardWrap({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-[1680px] overflow-hidden rounded-3xl bg-[#05130c] px-6 py-16 sm:px-12 sm:py-20">
        {children}
      </div>
    </section>
  );
}

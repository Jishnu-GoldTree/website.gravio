import CanvasBackground from "./CanvasBackground";
import GlowCursor from "./GlowCursor";
import VaporType from "./VaporType";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#05130c]">
      <CanvasBackground />

      <GlowCursor
        color="#34d473"
        secondaryColor="#b6f0c6"
        theme="dark"
        className="relative z-10 flex flex-1 flex-col"
      >
        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          <span className="animate-fade-up inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white uppercase">
            <span className="h-1 w-1 rounded-full bg-white" />
            Social Media &amp; Branding Agency
            <span className="h-1 w-1 rounded-full bg-white" />
          </span>

          <VaporType
            text="Gravio"
            as="h1"
            color="#ffffff"
            className="animate-fade-up mt-7 w-full max-w-xl [animation-delay:0.1s]"
          />

          <h2 className="animate-fade-up mt-6 max-w-xl text-2xl font-semibold text-white [animation-delay:0.2s]">
            Launching soon. Social media marketing &amp; branding, done with
            impact.
          </h2>

          <p className="animate-fade-up mt-4 max-w-lg text-lg text-white/80 [animation-delay:0.3s]">
            We&rsquo;re building bold brands and scroll-stopping campaigns.
            Something great is almost here.
          </p>

          <div className="animate-fade-up mt-6 flex items-center gap-3 [animation-delay:0.4s]">
            <span className="inline-flex items-center rounded-full bg-[#b6f0c6] px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0a5c2d] uppercase">
              UAE
            </span>
            <span className="inline-flex items-center rounded-full bg-[#b6f0c6] px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0a5c2d] uppercase">
              India
            </span>
          </div>
        </main>

        <footer className="relative z-10 pb-8 text-center text-xs text-white/40">
          © 2026 Gravio. All rights reserved.
        </footer>
      </GlowCursor>
    </div>
  );
}

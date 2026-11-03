export default function CTA() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a2416] to-[#05130c] px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to build something bold?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Tell us about your brand and where you want it to go. We&rsquo;ll
          take it from there.
        </p>
        <a
          href="mailto:hello@gravio.ae"
          className="mt-8 inline-flex items-center rounded-full bg-[#34d473] px-8 py-3 text-sm font-semibold text-[#05130c] transition hover:bg-[#b6f0c6]"
        >
          Start a project
        </a>
      </div>
    </section>
  );
}

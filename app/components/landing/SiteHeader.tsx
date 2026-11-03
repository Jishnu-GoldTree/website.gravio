const NAV_LINKS = [
  { label: "Who We Are", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Industries", href: "#industries" },
  { label: "Blog", href: "#blog" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05130c]/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-wide text-white">
          Gravio
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-[#34d473] px-5 py-2 text-sm font-semibold text-[#05130c] transition hover:bg-[#b6f0c6]"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}

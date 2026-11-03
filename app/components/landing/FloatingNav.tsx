const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Who We Are", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function FloatingNav() {
  return (
    <>
      <a
        href="#top"
        className="fixed top-6 left-6 z-30 inline-flex items-center rounded-full bg-white px-4 py-2 text-base font-bold tracking-wide text-[#05130c] shadow-lg shadow-black/10"
      >
        Gravio
      </a>

      <nav className="fixed top-6 left-1/2 z-30 hidden w-max max-w-[calc(100%-12rem)] -translate-x-1/2 items-center gap-1 rounded-full bg-white px-2 py-2 shadow-lg shadow-black/10 sm:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-[#05130c] transition hover:bg-[#05130c]/5"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-[#34d473] px-6 py-2.5 text-sm font-semibold whitespace-nowrap text-[#05130c] transition hover:bg-[#0a5c2d] hover:text-white"
        >
          Contact Us
        </a>
      </nav>

      <a
        href="#contact"
        className="fixed top-6 right-6 z-30 inline-flex items-center rounded-full bg-[#34d473] px-5 py-2 text-sm font-semibold text-[#05130c] shadow-lg shadow-black/10 sm:hidden"
      >
        Contact
      </a>
    </>
  );
}

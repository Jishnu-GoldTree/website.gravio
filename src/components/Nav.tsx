"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, PAGE_GROUPS } from "@/lib/content";
import { Button } from "./Button";
import { uiSpring } from "./motion";

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="m3 5 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const pagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!pagesRef.current?.contains(e.target as Node)) setPagesOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const groups = [PAGE_GROUPS.main, PAGE_GROUPS.legal];

  return (
    <motion.nav
      className="nav"
      aria-label="Main"
      initial={{ opacity: 0.001, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 60, mass: 1 }}
    >
      <div className="nav-bar">
        <Link href="/" className="logo" aria-label="Gravio home" onClick={() => setMenuOpen(false)}>
          Gravio
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className={`nav-link ${l.desktopOnly ? "desktop-only" : ""}`}>
              {l.label}
            </Link>
          ))}
          <div ref={pagesRef} className="nav-pages">
            <button
              type="button"
              className="nav-link nav-pages-btn"
              aria-expanded={pagesOpen}
              onClick={() => setPagesOpen((v) => !v)}
              style={{ color: pagesOpen ? "#0f7a3d" : undefined }}
            >
              All Pages
              <motion.span animate={{ rotate: pagesOpen ? 180 : 0 }} transition={uiSpring} className="chev">
                <Chevron />
              </motion.span>
            </button>
          </div>
        </div>

        <div className="nav-cta">
          <Button href="/contact/" label="Contact Us" />
        </div>

        <button
          type="button"
          className="burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={uiSpring} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} transition={uiSpring} />
          <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={uiSpring} />
        </button>
      </div>

      <AnimatePresence>
        {pagesOpen && (
          <motion.div
            className="pages-panel"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={uiSpring}
          >
            {groups.map((g) => (
              <div key={g.title} className="pages-col">
                <p className="pages-title">{g.title}</p>
                {g.links.map((l) => (
                  <Link key={l.label} href={l.href} prefetch={l.href !== "/404/"} className="pages-link" onClick={() => setPagesOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -300 }}
            transition={uiSpring}
          >
            {groups.map((g) => (
              <div key={g.title} className="mobile-group">
                <p className="pages-title">{g.title}</p>
                <div className="mobile-links">
                  {g.links.map((l) => (
                    <Link key={l.label} href={l.href} prefetch={l.href !== "/404/"} className="pages-link" onClick={() => setMenuOpen(false)}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Button href="/contact/" label="Contact Us" block />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

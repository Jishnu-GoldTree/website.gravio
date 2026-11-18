"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { domainOf, PORTFOLIO, PORTFOLIO_TEXT, type Project } from "@/lib/portfolio";
import { Button } from "./Button";
import { Reveal, uiSpring } from "./motion";
import { SeedArt } from "./SeedArt";

/** Card or banner picture: the mockup when one is set, otherwise the seeded gradient. */
function Picture({ p, src, className }: { p: Project; src?: string; className: string }) {
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={`${p.name} website`} className={`${className} pf-img`} />
  ) : (
    <SeedArt seed={p.slug} className={className} />
  );
}

const Close = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" style={{ transform: dir === "left" ? "rotate(180deg)" : undefined }}>
    <path d="m7 4 5 5-5 5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Panel({ p, index, onClose, onStep }: { p: Project; index: number; onClose: () => void; onStep: (d: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);
  useEffect(() => {
    ref.current?.scrollTo({ top: 0 });
  }, [p.slug]);

  // Keep Tab inside the panel while it is open.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !ref.current) return;
    const items = ref.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  return (
    <motion.div
      ref={ref}
      className="pf-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pf-panel-title"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 320, damping: 38 }}
      onKeyDown={onKeyDown}
    >
      <div className="pf-panel-bar">
        <span className="pf-panel-count">{String(index + 1).padStart(2, "0")} / {String(PORTFOLIO.length).padStart(2, "0")}</span>
        <div className="pf-panel-nav">
          <button type="button" className="pf-round" aria-label="Previous project" onClick={() => onStep(-1)}><Chevron dir="left" /></button>
          <button type="button" className="pf-round" aria-label="Next project" onClick={() => onStep(1)}><Chevron dir="right" /></button>
          <button ref={closeRef} type="button" className="pf-round pf-round-dark" aria-label="Close project details" onClick={onClose}><Close /></button>
        </div>
      </div>

      {/* Banner slot: set `banner` on the project to replace the gradient with a mockup. */}
      <div className="pf-banner">
        <Picture p={p} src={p.banner} className="fill" />
        {!p.banner && <span className="pf-banner-mark" aria-hidden="true">{p.name}</span>}
      </div>

      <div className="pf-panel-body">
        <p className="pf-meta"><span className="pf-chip">{p.industry}</span><span>{p.location}</span></p>
        <h2 id="pf-panel-title" className="pf-panel-title">{p.name}</h2>
        <p className="pf-about">{p.about}</p>
        <div className="pf-panel-cta">
          <Button href={p.url} label="Visit the live site" />
          <span className="pf-domain">{domainOf(p.url)}</span>
        </div>

        {p.scope && p.scope.length > 0 && (
          <section className="pf-section">
            <h3 className="pf-h3">What we delivered</h3>
            <div className="pf-tags">{p.scope.map((s) => <span key={s} className="pf-tag pf-tag-dark">{s}</span>)}</div>
          </section>
        )}
        <section className="pf-section">
          <h3 className="pf-h3">What the site does</h3>
          <ul className="pf-list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </section>
        <section className="pf-section">
          <h3 className="pf-h3">Services featured</h3>
          <div className="pf-tags">{p.offerings.map((o) => <span key={o} className="pf-tag">{o}</span>)}</div>
        </section>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [open, setOpen] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const show = useCallback((i: number | null) => {
    setOpen(i);
    const hash = i === null ? "" : `#${PORTFOLIO[i].slug}`;
    history.replaceState(null, "", `${location.pathname}${location.search}${hash}`);
  }, []);
  const close = useCallback(() => {
    show(null);
    opener.current?.focus();
  }, [show]);
  const step = useCallback((d: number) => setOpen((i) => {
    if (i === null) return i;
    const n = (i + d + PORTFOLIO.length) % PORTFOLIO.length;
    history.replaceState(null, "", `${location.pathname}${location.search}#${PORTFOLIO[n].slug}`);
    return n;
  }), []);

  // Open the project named in the URL hash, so a project link can be shared.
  useEffect(() => {
    const i = PORTFOLIO.findIndex((p) => `#${p.slug}` === location.hash);
    if (i >= 0) setOpen(i);
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <section className="pf">
      <div className="wrap">
        <Reveal className="head-center pf-head">
          <p className="pf-kicker"><i className="hero-tag-dot" aria-hidden="true" />Portfolio</p>
          <h1 className="h1">Work we&apos;re proud of</h1>
          <p className="lead">{PORTFOLIO_TEXT}</p>
        </Reveal>

        <ul className="pf-grid">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.slug} as="li" delay={(i % 3) * 0.06}>
              <button
                type="button"
                className="pf-card"
                aria-haspopup="dialog"
                onClick={(e) => { opener.current = e.currentTarget; show(i); }}
              >
                <span className="pf-card-media">
                  <Picture p={p} src={p.image} className="fill" />
                  {!p.image && <span className="pf-card-mark" aria-hidden="true">{p.name}</span>}
                  <span className="pf-card-open" aria-hidden="true">View project</span>
                </span>
                <span className="pf-card-body">
                  <span className="pf-meta"><span className="pf-chip">{p.industry}</span><span>{p.location}</span></span>
                  <span className="pf-card-name">{p.name}</span>
                  <span className="pf-card-text">{p.summary}</span>
                  <span className="pf-domain">{domainOf(p.url)}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {open !== null && (
          <>
            <motion.div
              key="scrim"
              className="pf-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={uiSpring}
              onClick={close}
              aria-hidden="true"
            />
            <Panel key="panel" p={PORTFOLIO[open]} index={open} onClose={close} onStep={step} />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

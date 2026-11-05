"use client";

import { motion } from "framer-motion";
import {
  ABOUT,
  HERO_STATS,
  HERO_TAGS,
  HERO_TEXT,
  MANIFESTO,
  PLACES,
  SERVICES_HERO,
  TICKER,
} from "@/lib/content";
import { Arrow, Button } from "./Button";
import { Art } from "./Art";
import { CountUp, Reveal, revealSpring, ScrollText, Ticker } from "./motion";

/** The huge headline: lettering filled with a flame-coloured sweep. */
function BigWord() {
  return (
    <svg className="bigword" viewBox="0 0 1320 274" role="img" aria-label="Marketing">
      <defs>
        <linearGradient id="flame" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#05130c" />
          <stop offset="0.13" stopColor="#0a5c2d" />
          <stop offset="0.2" stopColor="#0f7a3d" />
          <stop offset="0.38" stopColor="#34d473" />
          <stop offset="0.47" stopColor="#0f7a3d" />
          <stop offset="0.5" stopColor="#05130c" />
          <stop offset="0.53" stopColor="#05130c" />
          <stop offset="0.6" stopColor="#0f7a3d" />
          <stop offset="0.76" stopColor="#34d473" />
          <stop offset="0.86" stopColor="#0f7a3d" />
          <stop offset="0.92" stopColor="#0a5c2d" />
          <stop offset="1" stopColor="#05130c" />
        </linearGradient>
      </defs>
      <text x="-14" y="272" fontFamily="var(--font-display)" fontSize="391" textLength="1348" lengthAdjust="spacingAndGlyphs" fill="url(#flame)">
        MARKETING
      </text>
    </svg>
  );
}

export function HomeHero() {
  return (
    <>
      <div className="hero">
        <div className="hero-head">
          <motion.div className="hero-row" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={revealSpring(0)}>
            <p>©2026</p>
            <p>AGENCY</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={revealSpring(0.1)}>
            <BigWord />
          </motion.div>
        </div>
        <div className="hero-panel">
          <Art kind="hero" className="fill" />
          <div className="hero-stats">
            {HERO_STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.1} className="hero-stat">
                <p className="hero-stat-num">{s.value}</p>
                <p className="hero-stat-label">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <div className="hero-bottom">
            <Reveal delay={0.3} className="hero-left">
              <p className="hero-text">{HERO_TEXT}</p>
              <div className="hero-btns">
                <Button href="/contact/" label="Start your project" variant="white" />
                <Button href="/services/" label="See our services" variant="ghost" />
              </div>
            </Reveal>
            <Reveal delay={0.4} className="hero-tags">
              {HERO_TAGS.map((row) => (
                <div key={row[0]} className="hero-tag-row">
                  {row.map((t) => <p key={t} className="hero-tag">{t}</p>)}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
      <section className="strip">
        <Ticker gap={35}>
          {TICKER.map((t) => (
            <li key={t} className="strip-item"><span className="strip-slash">/</span><span>{t}</span><i className="strip-rule" /></li>
          ))}
        </Ticker>
      </section>
      <section className="manifesto">
        <div className="wrap manifesto-inner">
          <div className="cell">
            <Reveal className="places">
              {PLACES.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
          <div className="cell"><ScrollText text={MANIFESTO} className="manifesto-text" /></div>
        </div>
      </section>
    </>
  );
}

export function ServicesTop() {
  const h = SERVICES_HERO;
  return (
    <section className="page-top">
      <div className="wrap">
        <Reveal className="head-center">
          <h1 className="h1">{h.title}</h1>
          <p className="lead">{h.text}</p>
        </Reveal>
        <div className="eyebrow-row">
          <div className="cell"><Reveal><p className="lead eyebrow">{h.eyebrow}</p></Reveal></div>
          <div className="cell"><ScrollText text={h.reveal} className="manifesto-text" /></div>
        </div>
        <div className="s-cards">
          <div className="cell"><Reveal className="s-card">
            <Art kind="g1" className="fill" />
            <div className="s-card-top">
              <h3 className="h3">{h.card1Title}</h3>
              <div className="s-card-icon"><Arrow size={24} color="#0a0a0a" /></div>
            </div>
            <div className="s-card-bottom">
              <CountUp to={h.card1Stat} suffix="+" className="s-card-num" />
              <p>{h.card1Text}</p>
            </div>
          </Reveal></div>
          <div className="cell"><Reveal delay={0.1} className="s-card">
            <Art kind="g2" className="fill" />
            <div className="s-card-top">
              <h3 className="h3">{h.card1Title}</h3>
              <div className="s-card-icon"><Arrow size={24} color="#0a0a0a" /></div>
            </div>
            <div className="s-card-bottom">
              <h3 className="h3">{h.card2Title}</h3>
              <p>{h.card2Text}</p>
            </div>
          </Reveal></div>
          <div className="cell"><Reveal delay={0.2} className="s-card s-card-plain">
            <h3 className="h3">{h.card3Title}</h3>
            <div className="s-card-chips">
              <p>Clarity in positioning</p>
              <p>Performance Driven Marketing</p>
              <p>Media Planning</p>
              <p>Growth Systems</p>
            </div>
          </Reveal></div>
        </div>
      </div>
    </section>
  );
}

export function AboutTop() {
  return (
    <section className="page-top about-top">
      <div className="wrap eyebrow-row">
        <div className="cell"><Reveal><p className="lead eyebrow">{ABOUT.eyebrow}</p></Reveal></div>
        <div className="cell"><ScrollText text={ABOUT.reveal} className="manifesto-text" /></div>
      </div>
    </section>
  );
}

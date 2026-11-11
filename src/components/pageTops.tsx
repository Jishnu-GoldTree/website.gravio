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
import Silk from "./Silk";
import { CountUp, Reveal, revealSpring, ScrollText, Ticker } from "./motion";

/** The huge headline word, stretched to the full width and filled with a white-to-mint sweep. */
function BigWord() {
  return (
    <svg className="bigword" viewBox="0 0 1320 274" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="flame" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.3" stopColor="#b6f0c6" />
          <stop offset="0.5" stopColor="#ffffff" />
          <stop offset="0.75" stopColor="#b6f0c6" />
          <stop offset="1" stopColor="#ffffff" />
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
        <div className="hero-panel">
          <div className="hero-silk fill" aria-hidden="true">
            <Silk color="#12924a" sheenColor="#34d473" speed={3} noiseIntensity={1.2} depth={0.5} sheen={0.8} glow={0.45} dpr={1.5} />
          </div>
          <div className="hero-stats">
            {HERO_STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.1} className="hero-stat">
                <p className="hero-stat-num">{s.value}</p>
                <p className="hero-stat-label">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={revealSpring(0.1)}>
            <span className="hero-row"><span>Elevate</span><span>your</span></span>
            <span className="sr-only">marketing with Gravio, a 360° marketing agency in Dubai</span>
            <BigWord />
          </motion.h1>
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
                  {row.map((t) => <p key={t} className="hero-tag"><i className="hero-tag-dot" aria-hidden="true" />{t}</p>)}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
      <section className="strip">
        <Ticker gap={40} speed={40}>
          {TICKER.map((t, i) => (
            <li key={`${i}-${t}`} className="strip-item">
              <span className={i % 2 ? "strip-word strip-outline" : "strip-word"}>{t}</span>
              <svg className="strip-star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" /></svg>
            </li>
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
      <h1 className="sr-only">About Gravio, a marketing management agency in Dubai</h1>
      <div className="wrap eyebrow-row">
        <div className="cell"><Reveal><p className="lead eyebrow">{ABOUT.eyebrow}</p></Reveal></div>
        <div className="cell"><ScrollText text={ABOUT.reveal} className="manifesto-text" /></div>
      </div>
    </section>
  );
}

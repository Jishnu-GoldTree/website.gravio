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

/**
 * The huge headline word, stretched to the full width and filled with a white-to-mint sweep.
 * Drawn as Bebas Neue glyph outlines rather than SVG <text>: Safari lays out stretched text
 * (textLength) differently and clipped the last letter, while a path renders the same everywhere.
 */
const BIGWORD_PATH =
  "M41 -700H198L268 -199H270L340 -700H497V0H393V-530H391L311 0H219L139 -530H137V0H41ZM664 -700H813L927 0H817L797 -139V-137H672L652 0H550ZM784 -232 735 -578H733L685 -232ZM980 -700H1143Q1228 -700 1267 -660.5Q1306 -621 1306 -539V-496Q1306 -387 1234 -358V-356Q1274 -344 1290.5 -307Q1307 -270 1307 -208V-85Q1307 -55 1309 -36.5Q1311 -18 1319 0H1207Q1201 -17 1199 -32Q1197 -47 1197 -86V-214Q1197 -262 1181.5 -281Q1166 -300 1128 -300H1090V0H980ZM1130 -400Q1163 -400 1179.5 -417Q1196 -434 1196 -474V-528Q1196 -566 1182.5 -583Q1169 -600 1140 -600H1090V-400ZM1383 -700H1493V-405L1633 -700H1743L1612 -443L1745 0H1630L1537 -312L1493 -223V0H1383ZM1797 -700H2097V-600H1907V-415H2058V-315H1907V-100H2097V0H1797ZM2246 -600H2131V-700H2471V-600H2356V0H2246ZM2524 -700H2634V0H2524ZM2716 -700H2854L2961 -281H2963V-700H3061V0H2948L2816 -511H2814V0H2716ZM3135 -166V-534Q3135 -619 3177 -664.5Q3219 -710 3299 -710Q3379 -710 3421 -664.5Q3463 -619 3463 -534V-474H3359V-541Q3359 -610 3302 -610Q3245 -610 3245 -541V-158Q3245 -90 3302 -90Q3359 -90 3359 -158V-295H3304V-395H3463V-166Q3463 -81 3421 -35.5Q3379 10 3299 10Q3219 10 3177 -35.5Q3135 -81 3135 -166Z";

function BigWord() {
  return (
    <svg className="bigword" viewBox="41.0 -710.0 3422.0 720.0" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="flame" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.3" stopColor="#b6f0c6" />
          <stop offset="0.5" stopColor="#ffffff" />
          <stop offset="0.75" stopColor="#b6f0c6" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path d={BIGWORD_PATH} fill="url(#flame)" />
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
            <span className="sr-only">marketing with Gravio, a brand, marketing and growth agency in Dubai</span>
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

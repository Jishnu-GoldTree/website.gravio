"use client";

import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react";
import {
  ABOUT,
  BLOG,
  BLOG_TEXT,
  CTA,
  FAQ_TABS,
  FAQ_TEXT,
  PROCESS,
  PROCESS_TEXT,
  PROJECTS,
  SERVICES,
  SERVICES_TEXT,
  TESTIMONIAL_TEXT,
  TESTIMONIALS,
  VALUES,
  VALUES_TEXT,
  WORK_TEXT,
} from "@/lib/content";
import { Art, Icon } from "./Art";
import { Avatar } from "./Avatar";
import { Button, FakeButton } from "./Button";
import { CountUp, Reveal, SlowFloat, uiSpring } from "./motion";

/** True once the screen is wide enough for the desktop layout. */
function useIsDesktop(min = 1200) {
  const [desktop, setDesktop] = useState(true);
  useEffect(() => {
    const q = window.matchMedia(`(min-width: ${min}px)`);
    const on = () => setDesktop(q.matches);
    on();
    q.addEventListener("change", on);
    return () => q.removeEventListener("change", on);
  }, [min]);
  return desktop;
}

function Head({ title, text, tag = "h2" }: { title: ReactNode; text?: string; tag?: "h1" | "h2" }) {
  const T = tag;
  return (
    <Reveal className="head-center">
      <T className="h1">{title}</T>
      {text && <p className="lead">{text}</p>}
    </Reveal>
  );
}

/* ---------- Process ---------- */

function ProcessCard({ p, i }: { p: (typeof PROCESS)[number]; i: number }) {
  return (
    <div className="process-card">
      <Art kind={`flame${i + 1}`} className="fill" />
      <div className="process-scrim" aria-hidden="true" />
      <div className="process-body">
        <p className="process-num" aria-hidden="true">{p.n}</p>
        <h3 className="h3">{p.title}</h3>
        <p className="process-text">{p.text}</p>
        <div className="process-steps" aria-hidden="true">
          {PROCESS.map((_, k) => <span key={k} className={k <= i ? "on" : ""} />)}
        </div>
      </div>
    </div>
  );
}

/** Phone layout: cards slide sideways as the page scrolls. Lives apart so its scroll target always exists. */
function ProcessPhone() {
  const trackBox = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!list.current) return;
      setTravel(Math.max(0, list.current.scrollWidth - window.innerWidth + 40));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: trackBox, offset: ["start 120px", "end 688px"] });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const x = useSpring(rawX, { stiffness: 500, damping: 60 });

  return (
    <div ref={trackBox} className="wrap process-phone">
      <div className="process-sticky">
        <div className="process-head">
          <Reveal><h2 className="h1">Our Process</h2></Reveal>
          <Reveal delay={0.1}><p className="lead">{PROCESS_TEXT}</p></Reveal>
        </div>
        <motion.div ref={list} className="process-list" style={{ x }}>
          {PROCESS.map((p, i) => <ProcessCard key={p.n} p={p} i={i} />)}
        </motion.div>
      </div>
      <div className="process-spacer" />
    </div>
  );
}

export function Process() {
  const desktop = useIsDesktop();

  return (
    <section className="process">
      {desktop ? (
        <div className="wrap process-desk">
          <div className="process-head">
            <Reveal><h2 className="h1">Our<br />Process</h2></Reveal>
            <Reveal delay={0.1} className="split-side process-side"><p className="lead">{PROCESS_TEXT}</p></Reveal>
          </div>
          {PROCESS.map((p, i) => (
            <div key={p.n} className="process-row">
              {PROCESS.map((_, cell) => (
                <div key={cell}>{cell === i && <ProcessCard p={p} i={i} />}</div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <ProcessPhone />
      )}
    </section>
  );
}

/* ---------- Values ---------- */

export function Values() {
  const [a, b, c] = VALUES;
  const cell = (v: typeof a, i: number) => (
    <Reveal key={v.title} delay={i * 0.1} className={`value-cell value-${v.icon}`}>
      <div className="value-top">
        <span className="value-icon"><Icon name={v.icon} size={34} /></span>
        <span className="value-num" aria-hidden="true">0{i}</span>
      </div>
      <div>
        <p className="value-title">{v.title}</p>
        <p className="value-text">{v.text}</p>
      </div>
    </Reveal>
  );
  return (
    <div className="values">
      <div className="wrap">
        <div className="split-head values-head">
          <Reveal><h2 className="h1">Our Values</h2></Reveal>
          <Reveal delay={0.1} className="split-side values-side"><p className="lead">{VALUES_TEXT}</p></Reveal>
        </div>
        <div className="values-grid">
          <Reveal className="values-photo">
            <Art kind="team" className="fill" />
            <p className="values-badge"><i className="hero-tag-dot" aria-hidden="true" />Strategists, designers and media buyers, one team</p>
          </Reveal>
          {cell(b, 1)}
          {cell(a, 2)}
          {cell(c, 3)}
        </div>
      </div>
    </div>
  );
}

/* ---------- Services accordion ---------- */

export function Services() {
  const desktop = useIsDesktop();
  return (
    <section className="services">
      <Head title="What we offer / Service" text={SERVICES_TEXT} />
      <div className="service-list">
        {SERVICES.map((s) => (
          <div key={s.n} className="service-row service-open" style={{ height: desktop ? 580 : "auto" }}>
            <div className="service-bg">
              <Art kind="streak" className="fill" alt="" />
            </div>
            <div className="service-inner">
              <p className="service-num">{s.n}</p>
              {desktop && (
                <div className="service-photo">
                  <Art kind={s.art} className="fill" />
                </div>
              )}
              <div className="service-main">
                <div className="service-top">
                  <div>
                    <p className="service-kicker">{s.kicker}</p>
                    <h2 className="h2">{s.title}</h2>
                  </div>
                  <Button href="/contact/" label="Start your project" variant="onDark" />
                </div>
                <Reveal className="service-more">
                  <div className="service-stat"><h2>{s.stat}</h2><h3>{s.statLabel}</h3></div>
                  <p className="service-text">{s.text}</p>
                  <div className="service-chips">
                    {s.chips.map((c) => <h3 key={c} className="service-chip">{c}</h3>)}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Work: cards stack and shrink as you scroll ---------- */

function WorkCard({ p, index, listRef }: { p: (typeof PROJECTS)[number]; index: number; listRef: RefObject<HTMLDivElement | null> }) {
  const { scrollY } = useScroll();
  const target = useMotionValue(1);
  const scale = useSpring(target, { stiffness: 400, damping: 120 });
  // The first two cards shrink twice, the third once, and the last card stays full size.
  const stages = PROJECTS.length - 1 - index > 1 ? 2 : PROJECTS.length - 1 - index;

  const update = () => {
    const list = listRef.current;
    if (!list) return;
    const step = (list.firstElementChild as HTMLElement).offsetHeight + 20;
    const lead = window.innerWidth >= 1200 ? 356 : 218;
    const start = list.getBoundingClientRect().top + window.scrollY + index * step - lead;
    const done = (window.scrollY - start) / step;
    target.set(1 - 0.1 * Math.max(0, Math.min(stages, done)));
  };
  useMotionValueEvent(scrollY, "change", update);
  useEffect(update);

  return (
    <motion.div style={{ scale }} className="work-card-motion">
      <Reveal>
        <Link href={p.url} target="_blank" rel="noopener noreferrer" className="work-card">
          <div className="work-body">
            <h3 className="h3">{p.name}</h3>
            <p className="work-text">{p.text}</p>
            <i className="work-line" />
            <div className="work-meta">
              <p className="work-label">Client:</p>
              <div className="work-values"><span className="dot-item"><i />{p.client}</span></div>
            </div>
            <i className="work-line" />
            <div className="work-meta">
              <p className="work-label">Services:</p>
              <div className="work-values">{p.services.map((x) => <span key={x} className="dot-item"><i />{x}</span>)}</div>
            </div>
            <FakeButton label="Visit the Live Site" />
          </div>
          <Art kind={p.art} className="work-photo" />
        </Link>
      </Reveal>
    </motion.div>
  );
}

export function Work({ first = false }: { first?: boolean }) {
  const listRef = useRef<HTMLDivElement>(null);
  return (
    <section className={`work ${first ? "work-first" : ""}`}>
      <div className="wrap">
        <div className="work-head">
          <Head title="Work That Delivers Results" text={WORK_TEXT} tag={first ? "h1" : "h2"} />
        </div>
        <div ref={listRef} className="work-list">
          {PROJECTS.map((p, i) => (
            <div key={p.name} className="work-stick">
              <WorkCard p={p} index={i} listRef={listRef} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

const Star = () => <Icon name="star" size={22} alt="" />;

function TestimonialCard({ t, left, top }: { t: (typeof TESTIMONIALS)[number]; left: number; top: number }) {
  return (
    <Reveal className="testi-card" style={{ "--l": `${left}px`, "--t": `${top}px` } as CSSProperties}>
      <div className="stars">{[0, 1, 2, 3, 4].map((s) => <Star key={s} />)}</div>
      <p className="testi-bold">{t.bold}</p>
      <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
      <div className="testi-foot">
        <Avatar seed={t.name} className="testi-avatar" />
        <div>
          <p className="testi-name">{t.name}</p>
          <p className="testi-role">{t.role}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Testimonials() {
  return (
    <section className="testi">
      <div className="testi-bg"><div className="testi-bg-stick"><Art kind="motion" className="fill" alt="" /></div></div>
      <div className="testi-title-wrap">
        <div className="testi-title">
          <Reveal>
            <h2 className="h1">Trusted by</h2>
            <h2 className="h1">Happy Clients.</h2>
            <p className="lead">{TESTIMONIAL_TEXT}</p>
          </Reveal>
        </div>
      </div>
      <div className="testi-cards">
        <div className="testi-col testi-col-a">
          <TestimonialCard t={TESTIMONIALS[0]} left={0} top={0} />
          <TestimonialCard t={TESTIMONIALS[1]} left={76} top={250} />
          <TestimonialCard t={TESTIMONIALS[2]} left={134} top={241} />
        </div>
        <div className="testi-col testi-col-b">
          <TestimonialCard t={TESTIMONIALS[3]} left={47} top={180} />
          <TestimonialCard t={TESTIMONIALS[4]} left={0} top={240} />
          <TestimonialCard t={TESTIMONIALS[5]} left={60} top={240} />
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function Faq({ tight = false, end = false }: { tight?: boolean; end?: boolean }) {
  const tabs = Object.keys(FAQ_TABS);
  const [tab, setTab] = useState(tabs[0]);
  const [open, setOpen] = useState(0);
  return (
    <section className={`faq ${tight ? "faq-tight" : ""} ${end ? "faq-end" : ""}`}>
      <div className="wrap">
        <Head title="Frequently Asked Question" text={FAQ_TEXT} />
        <Reveal delay={0.1} className="faq-tabs" >
          {tabs.map((t) => (
            <button key={t} type="button" className={`faq-tab ${t === tab ? "on" : ""}`} onClick={() => { setTab(t); setOpen(0); }}>
              {t === tab && <motion.span layoutId={`faq-pill-${tight ? "a" : "b"}`} className="faq-pill" transition={uiSpring} />}
              <span className="faq-tab-label">{t}</span>
            </button>
          ))}
        </Reveal>
        <div className="faq-list">
          {FAQ_TABS[tab].map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={`${tab}-${i}`} delay={i * 0.05} >
                <motion.div className="faq-item" initial={false} animate={{ backgroundColor: isOpen ? "#0f7a3d" : "#ffffff" }} transition={uiSpring}>
                  <button type="button" className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <motion.span initial={false} animate={{ color: isOpen ? "#ffffff" : "#0b2e1a" }} transition={uiSpring}>{item.q}</motion.span>
                    <motion.span className="faq-icon" initial={false} animate={{ backgroundColor: isOpen ? "#ffffff" : "#0b2e1a", rotate: isOpen ? 180 : 0 }} transition={uiSpring}>
                      <Icon name={isOpen ? "minus" : "plus"} alt="Icon" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div className="faq-a-wrap" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={uiSpring}>
                        <p className="faq-a">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Blog ---------- */

export function Blog() {
  const [first, ...rest] = BLOG;
  return (
    <section className="blog">
      <div className="wrap">
        <div className="blog-head">
          <Reveal><h2 className="h1 blog-title">Blog &amp; Insights That Drive Growth</h2></Reveal>
          <Reveal delay={0.1} className="blog-side">
            <p className="lead">{BLOG_TEXT}</p>
            <Button href="/blog/" label="See all Articles" />
          </Reveal>
        </div>
        <Reveal>
          <Link href="/blog/" className="blog-feature">
            <Art kind={first.art} className="blog-feature-img" />
            <div className="blog-feature-body">
              <div>
                <p className="blog-tag"><i />{first.tag}</p>
                <h3 className="h3">{first.title}</h3>
                <p className="blog-feature-text">{first.text}</p>
              </div>
              <FakeButton label="View Blog" block arrow={false} />
            </div>
          </Link>
        </Reveal>
        <div className="blog-row">
          {rest.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <Link href="/blog/" className="blog-card">
                <div className="blog-card-img">
                  <Art kind={b.art} className="fill" />
                  <p className="blog-tag blog-tag-over"><i />{b.tag}</p>
                </div>
                <h3 className="h3">{b.title}</h3>
                <p className="blog-card-text">{b.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing call to action ---------- */

export function Cta() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <Reveal className="cta-art">
          <SlowFloat className="fill">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/art/growth.png" alt="Glass 3D bar chart icon" className="fill" />
          </SlowFloat>
        </Reveal>
        <Reveal delay={0.1}><h2 className="h1">{CTA.title}</h2></Reveal>
        <Reveal delay={0.2}><p className="lead">{CTA.text}</p></Reveal>
        <Reveal delay={0.3}><Button href="/contact/" label="Contact Us" /></Reveal>
      </div>
    </section>
  );
}

/* ---------- About page parts ---------- */

export function Impact() {
  return (
    <section className="impact">
      <div className="wrap">
        <Head title="Our Impact" text={ABOUT.impactText} />
        <div className="impact-grid">
          <Reveal className="impact-quote">
            <Icon name="quote" size={46} className="quote-mark" />
            <h3 className="h3">{ABOUT.quote}</h3>
            <div className="impact-author">
              <span className="impact-avatar impact-mark" aria-hidden>G</span>
              <div>
                <p className="impact-name">{ABOUT.quoteName}</p>
                <p className="impact-role">{ABOUT.quoteRole}</p>
              </div>
            </div>
          </Reveal>
          <div className="impact-stats">
            {[ABOUT.stats.slice(0, 2), ABOUT.stats.slice(2)].map((row, r) => (
              <div key={r} className="impact-row">
                {row.map((s, i) => (
                  <div key={s.label} className="cell">
                    <Reveal delay={(r * 2 + i) * 0.1} className="impact-stat">
                      {typeof s.value === "number" ? (
                        <CountUp to={s.value} suffix={s.suffix} className="impact-num" />
                      ) : (
                        <span className="impact-num">{s.value}</span>
                      )}
                      <h3 className="impact-label">{s.label}</h3>
                    </Reveal>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Person({ p, i }: { p: (typeof ABOUT.people)[number]; i: number }) {
  return (
    <Reveal delay={(i % 4) * 0.1} className="person">
      <motion.div className="person-photo" initial="rest" animate="rest" whileHover="hover">
        <motion.div className="fill" variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }} transition={uiSpring}>
          <Avatar seed={p.name} className="fill" />
        </motion.div>
      </motion.div>
      <h3 className="h3">{p.name}</h3>
      <p className="person-role">{p.role}</p>
    </Reveal>
  );
}

export function People() {
  return (
    <section className="people">
      <div className="wrap">
        <Head title="The People Behind the Work" text={ABOUT.peopleText} />
        <div className="people-grid">
          <Reveal className="join-card">
            <div>
              <p className="join-kicker">{ABOUT.joinKicker}</p>
              <h3 className="h3">{ABOUT.joinTitle}</h3>
              <p className="join-text">{ABOUT.joinText}</p>
            </div>
            <Button href="/career/" label="See Open Positions" />
          </Reveal>
          <div className="people-row">
            {ABOUT.people.map((p, i) => <div key={p.name} className="cell"><Person p={p} i={i} /></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyGravio() {
  const [hovered, setHovered] = useState(-1);
  return (
    <section className="why">
      <Art kind="motion" className="fill" alt="" />
      <div className="wrap why-inner">
        <Reveal><h2 className="h1">Why Gravio?</h2><p className="lead">{ABOUT.whyText}</p></Reveal>
        <div className="why-list" onMouseLeave={() => setHovered(-1)}>
          {ABOUT.why.map((w, i) => (
            <Reveal key={w.label} delay={i * 0.05}>
              <motion.div
                className="why-row"
                onMouseEnter={() => setHovered(i)}
                initial={false}
                animate={{ color: hovered === i ? "#34d473" : "#cfe0d6" }}
                transition={uiSpring}
              >
                <p>[0{i + 1}]</p>
                <p className="why-label">{w.label}</p>
                <h3 className="h3">{w.text}</h3>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

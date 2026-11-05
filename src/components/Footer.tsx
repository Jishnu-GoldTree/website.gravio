"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CONTACT, FOOTER_ABOUT, PAGE_GROUPS } from "@/lib/content";
import { Icon } from "./Art";
import { SubmitButton } from "./Button";
import { Reveal } from "./motion";

function ContactLine({ icon, title, href, note }: { icon: string; title: string; href: string; note: string }) {
  return (
    <div className="contact-line">
      <Icon name={icon} size={40} />
      <div>
        <a href={href} className="foot-link">{title}</a>
        <p className="contact-note">{note}</p>
      </div>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No newsletter service is connected yet, so the visitor's own mail app sends the request.
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Newsletter subscription")}&body=${encodeURIComponent(`Please subscribe ${email}`)}`;
  };
  const cols = [PAGE_GROUPS.main, PAGE_GROUPS.cms, PAGE_GROUPS.utility, PAGE_GROUPS.legal, PAGE_GROUPS.social];

  return (
    <footer className="footer">
      <div className="foot-inner">
      <div className="foot-top">
        <div className="foot-about">
          <Link href="/" className="foot-logo" aria-label="Gravio home">Gravio</Link>
          <p>{FOOTER_ABOUT}</p>
        </div>
        <div className="foot-news">
          <p className="foot-news-title">Subscribe to Our Newsletter</p>
          <form className="news-form" onSubmit={onSubmit}>
            <input
              type="email"
              name="Email"
              required
              placeholder="Enter your email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubmitButton label="Subscribe" />
          </form>
          <p className="foot-news-note">No spam. Just great content.</p>
        </div>
      </div>

      <div className="foot-cols">
        {cols.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1} className={`foot-col foot-col-${i}`}>
            <p className="foot-col-title">{c.title}</p>
            {c.links.map((l) =>
              l.href.startsWith("http") ? (
                <a key={l.label} href={l.href} className="foot-link" target="_blank" rel="noreferrer">{l.label}</a>
              ) : (
                <Link key={l.label} href={l.href} prefetch={l.href !== "/404/"} className="foot-link">{l.label}</Link>
              ),
            )}
          </Reveal>
        ))}
        <Reveal delay={0.5} className="foot-col foot-contact">
          <p className="foot-col-title">Have a question?</p>
          <ContactLine icon="phone" title={CONTACT.phone} href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} note="Monday to Friday, 9am to 5pm" />
          <ContactLine icon="mail" title={CONTACT.email} href={`mailto:${CONTACT.email}`} note="We aim to reply in 24 hours" />
        </Reveal>
      </div>

      <Reveal className="foot-wordmark">
        <svg viewBox="0 0 1360 221" width="100%" role="img" aria-label="Gravio">
          <defs>
            <linearGradient id="wordmark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d473" />
              <stop offset="100%" stopColor="#05130c" />
            </linearGradient>
          </defs>
          <text x="0" y="214" fontSize="290" fontWeight="600" textLength="1360" lengthAdjust="spacing" fill="url(#wordmark)" fontFamily="var(--font-urbanist)">
            Gravio
          </text>
        </svg>
      </Reveal>
      </div>
    </footer>
  );
}

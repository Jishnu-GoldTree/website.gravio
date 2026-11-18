import Link from "next/link";
import type { Detail } from "@/lib/pages";
import { SITE_URL } from "@/lib/seo";
import { Button } from "./Button";
import { Reveal } from "./motion";

type Crumb = { name: string; path: string };

/** Inline JSON-LD; the objects come from our own content, with "<" escaped so a value can never close the tag. */
function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export type LinkCard = { href: string; kicker: string; name: string; summary: string };

/** A grid of linked cards, used for hub pages and "related" rows. */
export function LinkCards({ cards, title, text }: { cards: LinkCard[]; title?: string; text?: string }) {
  return (
    <section className="dp-links">
      <div className="wrap">
        {title && (
          <Reveal className="dp-links-head">
            <h2 className="h2">{title}</h2>
            {text && <p className="lead">{text}</p>}
          </Reveal>
        )}
        <div className="dp-cards">
          {cards.map((c, i) => (
            <Reveal key={c.href} delay={(i % 3) * 0.06}>
              <Link href={c.href} className="dp-card">
                <span className="dp-card-kicker">{c.kicker}</span>
                <span className="dp-card-name">{c.name}</span>
                <span className="dp-card-text">{c.summary}</span>
                <span className="dp-card-more" aria-hidden="true">Explore <span className="dp-card-arrow">→</span></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Long-form service, industry or market page: hero, content blocks, FAQs, related links and a closing call to action. */
export function DetailPage({ page, path, crumbs, related, serviceType }: { page: Detail; path: string; crumbs: Crumb[]; related?: { title: string; cards: LinkCard[] }; serviceType?: string }) {
  const trail = [{ name: "Home", path: "/" }, ...crumbs, { name: page.name, path }];
  const ld: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE_URL}${c.path}` })),
    },
  ];
  if (serviceType) {
    ld.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.name,
      serviceType,
      description: page.description,
      url: `${SITE_URL}${path}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"],
    });
  }
  if (page.faqs.length) {
    ld.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }

  return (
    <>
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}
      <section className="dp-hero">
        <div className="dp-hero-panel">
          <div className="wrap dp-hero-inner">
            <nav aria-label="Breadcrumb" className="dp-crumbs">
              <ol>
                {trail.slice(0, -1).map((c) => (
                  <li key={c.path}><Link href={c.path}>{c.name}</Link></li>
                ))}
                <li aria-current="page">{page.name}</li>
              </ol>
            </nav>
            <Reveal>
              <p className="dp-kicker"><i className="hero-tag-dot" aria-hidden="true" />{page.kicker}</p>
              <h1 className="dp-title">{page.h1}</h1>
            </Reveal>
            <Reveal delay={0.1} className="dp-intro">
              {page.intro.map((p, i) => <p key={i} className={i === 0 ? "dp-lede" : undefined}>{p}</p>)}
            </Reveal>
            <Reveal delay={0.2} className="dp-hero-btns">
              <Button href="/contact/" label={page.cta.label} variant="white" />
              <Button href="/services/" label="Explore our services" variant="ghost" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="dp-body">
        <div className="wrap">
          {page.blocks.map((b) => (
            <div key={b.heading} className="dp-block">
              <Reveal className="dp-block-head"><h2 className="dp-h2">{b.heading}</h2></Reveal>
              <div className="dp-block-main">
                {b.body?.map((p, i) => <Reveal key={i}><p className="dp-text">{p}</p></Reveal>)}
                {b.items && (
                  <ul className="dp-items">
                    {b.items.map((it, i) => (
                      <Reveal key={it.label} delay={(i % 2) * 0.06} as="li" className="dp-item">
                        <h3 className="dp-item-title">{it.label}</h3>
                        <p>{it.text}</p>
                      </Reveal>
                    ))}
                  </ul>
                )}
                {b.steps && (
                  <ol className="dp-steps">
                    {b.steps.map((s, i) => (
                      <Reveal key={s.label} delay={i * 0.06} as="li" className="dp-step">
                        <span className="dp-step-num" aria-hidden="true">0{i + 1}</span>
                        <h3 className="dp-item-title">{s.label}</h3>
                        <p>{s.text}</p>
                      </Reveal>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          ))}

          {page.faqs.length > 0 && (
            <div className="dp-block">
              <Reveal className="dp-block-head"><h2 className="dp-h2">Frequently asked questions</h2></Reveal>
              <div className="dp-block-main dp-faqs">
                {page.faqs.map((f, i) => (
                  <details key={f.q} className="faq-item dp-faq" open={i === 0}>
                    <summary className="faq-q">
                      <span className="faq-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                      <span className="faq-q-text">{f.q}</span>
                      <span className="faq-icon dp-faq-icon" aria-hidden="true">+</span>
                    </summary>
                    <p className="faq-a">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {related && related.cards.length > 0 && <LinkCards title={related.title} cards={related.cards} />}

      <section className="dp-cta">
        <div className="wrap">
          <Reveal className="dp-cta-box">
            <h2 className="h2">{page.cta.title}</h2>
            <p className="lead">{page.cta.text}</p>
            <Button href="/contact/" label={page.cta.label} variant="white" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

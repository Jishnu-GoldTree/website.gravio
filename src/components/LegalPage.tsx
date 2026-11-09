import type { LegalSection } from "@/lib/legal";

/** Long-form legal page: title, last-updated date, then numbered sections. */
export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <section className="legal">
      <div className="legal-inner">
        <h1 className="h1">{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        {sections.map((s, i) => (
          <section key={s.heading} className="legal-section">
            <h2 className="legal-heading">
              {i + 1}. {s.heading}
            </h2>
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.list && (
              <ul>
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}

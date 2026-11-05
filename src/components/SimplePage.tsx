import type { ReactNode } from "react";
import { Button } from "./Button";

/** A small page for destinations outside the five pages rebuilt from the original. */
export function SimplePage({ title, text, children }: { title: string; text: string; children?: ReactNode }) {
  return (
    <section className="simple">
      <div className="wrap head-center">
        <h1 className="h1">{title}</h1>
        <p className="lead">{text}</p>
        {children ?? <Button href="/contact/" label="Contact Us" />}
      </div>
    </section>
  );
}

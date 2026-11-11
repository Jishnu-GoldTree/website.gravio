import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Icon } from "@/components/Art";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { Reveal } from "@/components/motion";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  path: "/contact/",
  title: "Contact Gravio | Marketing Agency in Dubai",
  description:
    "Contact Gravio in Business Bay, Dubai, to discuss your brand, digital marketing or growth plans. Call +971 55 896 4319 or email marketing@gravio.ae.",
});

export default function ContactPage() {
  return (
    <>
      <section className="contact-top">
        <div className="wrap">
          <Reveal className="head-center">
            <h1 className="h1">Let&apos;s Talk</h1>
            <p className="lead">Contact Gravio in Business Bay, Dubai. Tell us about your brand and goals; we aim to reply within 2 working hours.</p>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-info">
              <div className="contact-block">
                <Icon name="pin" size={40} />
                <div>
                  <h3 className="contact-label">Address</h3>
                  <address>
                    {CONTACT.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
              </div>
              <div className="contact-block">
                <Icon name="phone" size={40} />
                <div>
                  <h3 className="contact-label">Phone</h3>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
                  <a href={`tel:${CONTACT.landline.replace(/\s/g, "")}`}>{CONTACT.landline}</a>
                  <p>Monday to Friday, 9am to 5pm</p>
                </div>
              </div>
              <div className="contact-block">
                <Icon name="mail" size={40} />
                <div>
                  <h3 className="contact-label">Email</h3>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  <p>We aim to reply within 2 working hours</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="contact-card">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
      <MapEmbed />
    </>
  );
}

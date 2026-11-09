"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/content";
import { SubmitButton } from "./Button";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const text = [
      "Hi Gravio, I'd like to start a project.",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not given"}`,
      `Company: ${value("company") || "Not given"}`,
      "",
      value("message"),
    ].join("\n");
    // The enquiry opens as a prefilled WhatsApp chat with Gravio; the visitor taps send.
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    const tab = window.open(url, "_blank");
    if (tab) tab.opener = null;
    else window.location.href = url; // Popup blocked: open WhatsApp in this tab instead.
    setOpened(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-fields">
        <label>
          Name
          <input type="text" name="name" required autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" required autoComplete="email" placeholder="you@company.com" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" placeholder="Optional" />
        </label>
        <label>
          Company
          <input type="text" name="company" autoComplete="organization" placeholder="Optional" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" required rows={5} placeholder="Tell us about your brand and goals" />
      </label>
      <SubmitButton label="Send on WhatsApp" onLight />
      <p className="contact-status" role="status">
        {opened ? `WhatsApp should now open with your message to ${CONTACT.phone}. Tap send to reach us.` : ""}
      </p>
    </form>
  );
}

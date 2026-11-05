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
    const body = [
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not given"}`,
      `Company: ${value("company") || "Not given"}`,
      "",
      value("message"),
    ].join("\n");
    // No mail service is connected yet, so the visitor's own mail app sends the message.
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Website enquiry from ${value("name")}`)}&body=${encodeURIComponent(body)}`;
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
      <SubmitButton label="Send Message" onLight />
      <p className="contact-status" role="status">
        {opened ? `Your email app should now open with this message, ready to send to ${CONTACT.email}.` : ""}
      </p>
    </form>
  );
}

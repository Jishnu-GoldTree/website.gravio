// Draft legal copy for the Privacy Policy and Terms & Conditions pages.
// Have these reviewed by a UAE-qualified lawyer before relying on them.

import { CONTACT } from "./content";

export type LegalSection = { heading: string; body: string[]; list?: string[] };

export const LEGAL_UPDATED = "9 November 2026";

const ADDRESS = CONTACT.addressLines.join(", ");

export const PRIVACY: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `Gravio ("Gravio", "we", "us") is a marketing agency based at ${ADDRESS}. This policy explains how we collect, use and protect personal data when you visit gravio.ae, contact us, subscribe to our updates, or work with us.`,
      "We handle personal data in line with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and, where it applies to you, other data protection laws such as the EU and UK GDPR and India's Digital Personal Data Protection Act 2023.",
    ],
  },
  {
    heading: "What we collect",
    body: ["We only collect what we need. Depending on how you interact with us, this may include:"],
    list: [
      "Contact details you give us: your name, email address, phone number and company name.",
      "The content of your messages, including project details you share through our contact form, WhatsApp, email or phone.",
      "Your email address and consent record if you subscribe to our newsletter or marketing emails.",
      "Basic technical data your browser sends when you visit the site, such as IP address, browser type and pages viewed, which our hosting provider records in standard server logs.",
      "If you apply for a job: your CV and any details you choose to send us.",
    ],
  },
  {
    heading: "How we use your data",
    body: ["We use personal data to:"],
    list: [
      "Reply to your enquiries and prepare proposals.",
      "Deliver and manage the services you engage us for, including invoicing.",
      "Send you newsletters and marketing emails, where you have agreed to receive them.",
      "Keep the website secure and working properly.",
      "Review job applications.",
      "Meet our legal, tax and accounting obligations.",
    ],
  },
  {
    heading: "Our legal basis",
    body: [
      "We process personal data because you have given consent (for example, to receive marketing emails), because it is needed to take steps toward or perform a contract with you, because we must comply with a legal obligation, or because we have a legitimate interest in running and improving our business in a way that does not override your rights.",
    ],
  },
  {
    heading: "Marketing emails",
    body: [
      "We only send marketing emails to people who have opted in, or to business contacts where the law allows it. Every marketing email includes an unsubscribe link, and you can also opt out at any time by emailing us. We will stop sending marketing emails promptly after you opt out.",
    ],
  },
  {
    heading: "WhatsApp and third-party services",
    body: [
      "When you submit our contact form, it opens a WhatsApp chat with your message filled in. If you send it, your message is handled by WhatsApp (Meta) under its own privacy policy. We also use trusted providers to run our business, such as website hosting, email (Zoho), and embedded Google Maps on our contact page, which may set its own cookies.",
      "These providers only process data on our instructions or under their own terms as independent services. We do not sell your personal data.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "Our website does not use advertising or analytics cookies at the moment. Embedded third-party content, such as Google Maps, may set cookies when it loads. If we add analytics or marketing cookies in future, we will update this policy and ask for your consent where required.",
    ],
  },
  {
    heading: "International transfers",
    body: [
      "We work across the UAE and India, and some of our service providers store data in other countries. When personal data leaves the UAE, we take steps to make sure it stays protected to the standard the PDPL requires.",
    ],
  },
  {
    heading: "How long we keep data",
    body: [
      "We keep enquiry details for up to two years after our last contact, client records for as long as the law requires for accounting and tax purposes, and marketing subscriptions until you unsubscribe. Job applications are kept for up to one year unless you ask us to delete them sooner.",
    ],
  },
  {
    heading: "Your rights",
    body: ["Subject to applicable law, you can ask us to:"],
    list: [
      "Tell you what personal data we hold about you and give you a copy.",
      "Correct data that is inaccurate or incomplete.",
      "Delete your data, or restrict how we use it.",
      "Stop using your data for direct marketing.",
      "Withdraw consent you have given, at any time.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use reasonable technical and organisational measures to protect personal data against loss, misuse and unauthorised access. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      `For any privacy question or request, email ${CONTACT.email}, call ${CONTACT.phone}, or write to us at ${ADDRESS}. We aim to respond within 30 days.`,
    ],
  },
];

export const TERMS: LegalSection[] = [
  {
    heading: "About these terms",
    body: [
      `These terms apply to your use of gravio.ae (the "website"), operated by Gravio, ${ADDRESS}. By using the website you agree to these terms. If you do not agree, please do not use the website.`,
    ],
  },
  {
    heading: "Our services",
    body: [
      "The website describes the marketing, branding, content and media services we offer. Nothing on the website is a binding offer. Any work we do for you is governed by a separate written proposal, quotation or agreement, which takes priority over these terms if they conflict.",
    ],
  },
  {
    heading: "Using the website",
    body: ["You agree not to:"],
    list: [
      "Use the website for any unlawful purpose or in breach of these terms.",
      "Try to gain unauthorised access to the website, its servers or any connected systems.",
      "Introduce viruses or other harmful code, or interfere with how the website works.",
      "Copy, scrape or reuse website content for commercial purposes without our written permission.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on the website, including text, graphics, logos, designs and code, belongs to Gravio or our licensors and is protected by intellectual property laws. Client names, logos and project work are shown with permission and remain the property of their owners. You may view and share pages for personal, non-commercial use only.",
    ],
  },
  {
    heading: "Enquiries and communications",
    body: [
      "When you contact us through the website, WhatsApp, email or phone, you confirm that the information you provide is accurate and that you are entitled to share it. Sending an enquiry does not create a contract between us.",
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "The website links to other sites, including client websites and social media. We do not control those sites and are not responsible for their content or how they handle your data.",
    ],
  },
  {
    heading: "Accuracy of information",
    body: [
      "We work to keep the website accurate and up to date, but we do not guarantee that all information is complete or current. Results described on the website reflect past work and do not guarantee similar results for your business.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "The website is provided \"as is\". To the fullest extent permitted by law, Gravio is not liable for any indirect or consequential loss, or for any loss of profit, revenue or data, arising from your use of the website. Nothing in these terms limits liability that cannot be limited under UAE law.",
    ],
  },
  {
    heading: "Privacy",
    body: ["How we handle personal data is explained in our Privacy Policy."],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The latest version will always be on this page, with the date it was last updated. Continuing to use the website after a change means you accept the updated terms.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. The courts of Dubai have exclusive jurisdiction over any dispute arising from them.",
    ],
  },
  {
    heading: "Contact us",
    body: [`Questions about these terms? Email ${CONTACT.email} or call ${CONTACT.phone}.`],
  },
];

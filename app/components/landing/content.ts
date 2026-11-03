export const PILLARS = [
  {
    key: "brand",
    name: "Brand",
    tagline: "Identity that holds up under scrutiny.",
    services: [
      "Brand Strategy",
      "Visual Identity",
      "Social Media Management",
      "Brand Guidelines",
    ],
  },
  {
    key: "content",
    name: "Content",
    tagline: "Stories built to stop the scroll.",
    services: [
      "Creative Direction",
      "Content Production",
      "Influencer Marketing",
      "Short-Form Video",
    ],
  },
  {
    key: "growth",
    name: "Growth",
    tagline: "Spend that proves itself.",
    services: [
      "Paid Media",
      "Performance Marketing",
      "Analytics & Reporting",
      "Web & Apps",
    ],
  },
] as const;

export const BELIEFS = [
  "We are distinct, never derivative.",
  "We build for change, not comfort.",
  "We don't chase trends, we set the pace for communities.",
  "We pair bold storytelling with sharp execution.",
  "We're not a one-trick shop, we're a collective of specialists.",
] as const;

export const WORK_PROJECTS = [
  { name: "Placeholder Project 01", category: "Brand Identity" },
  { name: "Placeholder Project 02", category: "Social Campaign" },
  { name: "Placeholder Project 03", category: "Content Production" },
  { name: "Placeholder Project 04", category: "Performance Marketing" },
  { name: "Placeholder Project 05", category: "Web & App" },
  { name: "Placeholder Project 06", category: "Influencer Marketing" },
] as const;

export const REGIONS = [
  { name: "United Arab Emirates", city: "Dubai" },
  { name: "India", city: "Mumbai" },
] as const;

export const INDUSTRIES = [
  "FMCG",
  "Food & Beverage",
  "Retail & E-commerce",
  "Beauty & Fashion",
  "Financial Services",
  "Travel & Hospitality",
  "Entertainment & Leisure",
  "Real Estate",
] as const;

export const TEAM_SLOTS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
}));

export const FAQS = [
  {
    q: "What services does Gravio offer?",
    a: "Brand strategy and identity, content production, social media management, influencer marketing, and performance marketing, grouped under Brand, Content, and Growth.",
  },
  {
    q: "How do I start a project with Gravio?",
    a: "Reach out through the contact form or email us directly. We'll set up a call to understand your goals before scoping the work.",
  },
  {
    q: "Which industries do you work with?",
    a: "We work across FMCG, retail, beauty, hospitality, finance, and more, wherever a brand needs sharper identity and stronger reach.",
  },
  {
    q: "Where is Gravio based?",
    a: "We operate out of the UAE and India, serving clients across both regions and beyond.",
  },
  {
    q: "Do you work with early-stage brands?",
    a: "Yes. We work with brands at every stage, from first identity to scaled performance marketing.",
  },
] as const;

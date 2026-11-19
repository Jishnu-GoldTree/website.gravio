// All Gravio wording lives here. Anything marked "sample" is a stand-in to replace with real details.

export const CONTACT = {
  email: "marketing@gravio.ae",
  phone: "+971 55 896 4319",
  landline: "+971 4 584 6245",
  // WhatsApp number in international format, digits only (used for wa.me links).
  whatsapp: "971558964319",
  location: "Dubai, UAE",
  addressLines: ["Churchill Tower, Al Amal St", "Business Bay, Dubai", "United Arab Emirates"],
};

export const FOOTER_ABOUT =
  "Gravio is a Dubai-based brand, content and growth agency. We help businesses build clearer brands, create more effective content and connect marketing activity to measurable growth.";

// Sections switched off for now. Set to true to bring a section back everywhere:
// its home page block, its page, its nav and footer links, and its sitemap entry.
export const FEATURES = { work: false, blog: false };

const HIDDEN_PATHS = [...(FEATURES.work ? [] : ["/work/"]), ...(FEATURES.blog ? [] : ["/blog/"])];
export const isHidden = (href: string) => HIDDEN_PATHS.includes(href);
const visible = <T extends { href: string }>(links: T[]) => links.filter((l) => !isHidden(l.href));

export const NAV_LINKS = visible([
  { label: "Home", href: "/", desktopOnly: true },
  { label: "Services", href: "/services/" },
  { label: "Work", href: "/work/", desktopOnly: true },
  { label: "Portfolio", href: "/portfolio/", desktopOnly: true },
  { label: "Industries", href: "/industries/", desktopOnly: true },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/", desktopOnly: true },
  { label: "Career", href: "/career/", desktopOnly: true },
]);

export const PAGE_GROUPS = {
  main: {
    title: "Main Pages",
    links: visible([
      { label: "About", href: "/about/" },
      { label: "Work", href: "/work/" },
      { label: "Services", href: "/services/" },
      { label: "Portfolio", href: "/portfolio/" },
      { label: "Industries", href: "/industries/" },
      { label: "Markets", href: "/markets/" },
      { label: "Blog", href: "/blog/" },
      { label: "Career", href: "/career/" },
      { label: "Contact", href: "/contact/" },
    ]),
  },
  services: {
    title: "Services",
    links: [
      { label: "Brand & Marketing Strategy", href: "/services/brand-marketing-strategy/" },
      { label: "Paid & Performance", href: "/services/paid-campaigns-performance-marketing/" },
      { label: "SEO & AI Search", href: "/services/seo-ai-search-visibility/" },
      { label: "Social Media", href: "/services/social-media-community-marketing/" },
      { label: "Production & Ads", href: "/services/media-production-product-shoots-advertisements/" },
      { label: "Talent & Creators", href: "/services/models-talent-creator-collaboration/" },
      { label: "Publishing & PR", href: "/services/media-publishing-pr-distribution/" },
      { label: "AI & CRM Automation", href: "/services/ai-automation-customer-relationship-support/" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-condition/" },
    ],
  },
  social: {
    title: "Social Links",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/graviomarketing" },
    ],
  },
};

export const HERO_STATS = [
  { value: "2h", label: "Average Reply Time" },
  { value: "40M+", label: "Impressions Delivered" },
  { value: "UAE", label: "Headquartered" },
];

export const HERO_TEXT =
  "Gravio is a brand, content and growth agency in Dubai. We help businesses find their position, express it clearly and turn it into consistent activity across identity, content, social, search and paid media.";

export const HERO_TAGS = [
  ["Brand & Strategy"],
  ["Creative & Production"],
  ["Growth & Distribution", "AI & CRM"],
];

export const TICKER = [
  "Brand Strategy",
  "Visual Identity",
  "Content Production",
  "Social Media",
  "Performance Marketing",
  "SEO & AI Search",
  "Product Shoots",
  "Creator Collaboration",
];

export const PLACES = ["SINCE 2020", "DUBAI", "UAE", "GCC"];

export const MANIFESTO =
  "Build a brand people understand, and a marketing system that moves it forward. We replace disconnected activity with clear strategy, useful creative and evidence-led decisions.";

export const PROCESS_TEXT =
  "The Gravio growth framework: four steps that connect brand clarity, creative execution and performance before the budget goes live.";

export const PROCESS = [
  { n: "01", title: "Discover", text: "We study the brand, market, audience and rivals to find the real constraint, not just the visible problem.", outputs: ["Brand & market audit", "Audience research", "Competitor review"] },
  { n: "02", title: "Strategize", text: "We define positioning, messaging, channels, budget logic and milestones before any spend begins.", outputs: ["Positioning & messaging", "Channel & budget plan", "Milestones"] },
  { n: "03", title: "Execute", text: "Strategists, creators, designers and media buyers turn the plan into content, campaigns and search work.", outputs: ["Identity & content", "Campaign launch", "Search work"] },
  { n: "04", title: "Optimize", text: "We keep what earns its place, fix what creates friction and scale only when evidence supports it.", outputs: ["Performance reviews", "Testing", "Scaling what works"] },
];

export const VALUES_TEXT = "We back bold ideas and move them forward with sharp thinking";

export const VALUES = [
  {
    icon: "bulb",
    title: "Innovation",
    text: "Every brief is a chance to build something that did not exist before. We test new formats and channels early, and keep only what earns its place, so your brand sets the pace.",
  },
  {
    icon: "people",
    title: "Collaboration",
    text: "A collective of specialists, not a one-trick shop. Strategists, designers, and media buyers work with your team from first call to launch, tied to the goal you set.",
  },
  {
    icon: "link",
    title: "Integrity",
    text: "We report honestly and speak plainly. Results are shared openly, good or bad, and every recommendation starts from what your brand actually needs.",
  },
];

export const SERVICES_TEXT =
  "Eight connected pillars. Strategy sets the direction, brand and content make it visible, and distribution and optimisation help it compound.";

export const SERVICES = [
  {
    n: "01",
    kicker: "Brand & Strategy",
    title: "Brand Strategy & Analysis",
    art: "s3",
    href: "/services/brand-marketing-strategy/",
    text: "We clarify what your brand stands for, who it is for, how it should be differentiated and what needs to change in the market.",
    chips: ["Positioning", "Audience & Competitor Analysis", "Growth Roadmap"],
  },
  {
    n: "02",
    kicker: "Brand & Strategy",
    title: "Identity & Creative Systems",
    art: "s2",
    href: "/contact/",
    text: "We turn strategic direction into a recognisable identity, with logo systems, typography, colour, campaign concepts and guidelines your teams can use consistently.",
    chips: ["Visual Identity", "Logo Systems", "Brand Guidelines"],
  },
  {
    n: "03",
    kicker: "Creative & Production",
    title: "Content & Media Production",
    art: "s1",
    href: "/services/media-production-product-shoots-advertisements/",
    text: "We plan and produce content that gives your strategy something useful to say and show, from product shoots and advertisements to publishing workflows.",
    chips: ["Product Shoots", "Video Ads", "Content Marketing"],
  },
  {
    n: "04",
    kicker: "Growth & Distribution",
    title: "Social Media & Community",
    art: "s4",
    href: "/services/social-media-community-marketing/",
    text: "A consistent social presence through content planning, creative direction, publishing and performance review, so each platform supports the wider objective.",
    chips: ["Content Calendars", "Community Management", "Reporting"],
  },
  {
    n: "05",
    kicker: "Growth & Distribution",
    title: "Paid & Performance Marketing",
    art: "s1",
    href: "/services/paid-campaigns-performance-marketing/",
    text: "Media strategy, channel selection, budget planning, creative testing and reporting, structured around the outcome that matters, so each dirham has a clear job.",
    chips: ["Media Planning", "Paid Search & Social", "Creative Testing"],
  },
  {
    n: "06",
    kicker: "Growth & Distribution",
    title: "SEO & AI Search Visibility",
    art: "s3",
    href: "/services/seo-ai-search-visibility/",
    text: "Search visibility built on useful information, sound technical foundations and clear commercial intent, ready for AI Overviews and other AI-led search.",
    chips: ["Technical SEO", "Content Strategy", "AI Search Readiness"],
  },
  {
    n: "07",
    kicker: "AI & Customer Systems",
    title: "AI Automation & CRM",
    art: "s2",
    href: "/services/ai-automation-customer-relationship-support/",
    text: "Practical AI and automation workflows that reduce response friction: enquiry handling, lead routing, follow-up sequences and CRM-connected reporting.",
    chips: ["Lead Routing", "WhatsApp & Email Flows", "CRM Mapping"],
  },
  {
    n: "08",
    kicker: "Creative & Production",
    title: "Models, Talent & Platforms",
    art: "s4",
    href: "/services/models-talent-creator-collaboration/",
    text: "Model, talent and creator collaboration for campaigns, plus a consistent brand presence across the platforms and directories where customers find you.",
    chips: ["Casting", "Creator Partnerships", "Platform Presence"],
  },
];

export const WORK_TEXT =
  "A closer look at how we help brands solve problems, improve performance, and achieve measurable growth.";

// Gravio case studies, written from each live site.
export const PROJECTS = [
  {
    name: "Rut Gold",
    text: "A storefront for a Dubai bespoke diamond and gold jewellery house. Shoppers browse collections and the catalogue, share an idea to be modelled in 3D, and enquire straight over WhatsApp, with a separate route for B2B bulk supply.",
    client: "Rut Gold",
    services: ["Web Design", "Development", "E-commerce"],
    art: "work-rutgold",
    url: "https://rutgold.com/",
  },
  {
    name: "Model Tree",
    text: "A marketplace for ready-to-cast 3D jewellery models, modelled in-house by Goldtree. Jewellers search the library, license and download models instantly, or commission a custom piece, with memberships, a bilingual interface, and secure checkout in shekels.",
    client: "Goldtree",
    services: ["Web Design", "Development", "E-commerce"],
    art: "work-modeltree",
    url: "https://modeltree.co.il/",
  },
];

export const TESTIMONIAL_TEXT =
  "See how our work has made a lasting impact on brands and businesses just like yours.";

export const TESTIMONIALS = [
  { bold: "Excellent Experience", text: "Gravio made the entire process incredibly smooth. Their team was professional, responsive, and attentive to every detail. Highly recommended!", name: "Ahmed K.", role: "Dubai, UAE" },
  { bold: "Professional & Reliable", text: "Really impressed with the quality of service and attention to detail. Communication was excellent, and everything was delivered exactly as promised.", name: "Sarah M.", role: "Abu Dhabi, UAE" },
  { bold: "Beyond Expectations", text: "From the first interaction to the final delivery, the experience was seamless. It's refreshing to work with a team that genuinely cares about quality.", name: "Mohammed R.", role: "Sharjah, UAE" },
  { bold: "Great Customer Support", text: "The team was always available to answer questions and provide updates. Their commitment to customer satisfaction really stands out.", name: "Daniel T.", role: "Dubai, UAE" },
  { bold: "Highly Recommended", text: "A great experience overall! Professional service, timely delivery, and excellent attention to detail. I'll definitely be coming back.", name: "Fatima A.", role: "UAE" },
  { bold: "Outstanding Service", text: "Gravio exceeded our expectations. The team understood exactly what we needed and delivered a solution that worked perfectly for us.", name: "James P.", role: "Dubai, UAE" },
];

export const FAQ_TEXT = "Frequently asked questions about Gravio's marketing services";

export const FAQ_TABS: Record<string, { q: string; a: string }[]> = {
  General: [
    { q: "What does Gravio do?", a: "Gravio brings together brand strategy and identity, content and media production, social media, SEO and AI search, performance marketing, media planning, and AI-assisted customer systems, connected in one plan." },
    { q: "Is Gravio a branding agency or a digital marketing agency?", a: "Both, but what matters is how the work connects. We start with positioning and strategy, then link identity, content, distribution and performance so your marketing has one coherent direction." },
    { q: "Does Gravio work with businesses outside Dubai?", a: "Yes. Gravio is Dubai-based and supports businesses across the UAE, the GCC and international markets. The right scope depends on the audience, market, channels and operating requirements." },
    { q: "Can Gravio help with SEO and AI search?", a: "Yes. We combine technical SEO, useful content and AI-search readiness for Google AI Overviews and AI Mode. No platform inclusion or ranking is guaranteed, and every recommendation is reviewed by people." },
    { q: "How do we start a project?", a: "Start with a conversation about your objective, current challenge, audience, market and timing. We then recommend the right mix of strategy, creative, content, media and optimisation, rather than forcing every brief into the same package." },
  ],
  Features: [
    { q: "Can I hire you for one service only?", a: "Yes. Many clients start with one service, such as social media or paid media, and add more as results come in." },
    { q: "Do you produce content in-house?", a: "Our team handles creative direction and production, bringing in trusted specialists when a project calls for them." },
    { q: "Do you work with influencers?", a: "Yes. We match brands with suitable creators, write the briefs, and track how each partnership performs." },
    { q: "Do you build websites and apps?", a: "Yes, Web & Apps sits within our Growth services, so your site supports your campaigns." },
    { q: "Do you manage ad budgets?", a: "Yes. We plan and run paid media across the major platforms and report on spend openly." },
  ],
  Payments: [
    { q: "How does your pricing work?", a: "Every engagement is quoted individually. After a first call we send a proposal with a clear scope and a fixed fee." },
    { q: "Is ad spend included in your fee?", a: "No. Media budgets are separate, so you always see exactly what goes to the platforms." },
    { q: "Do you offer retainers?", a: "Yes. Ongoing work such as social media and paid media usually runs on a monthly retainer." },
    { q: "Can we change the scope later?", a: "Yes. We review the scope with you regularly and adjust it as your needs change." },
    { q: "Are there setup fees?", a: "We will confirm any setup costs in your proposal before work starts." },
  ],
  Process: [
    { q: "How long until we see results?", a: "It depends on the channel. Paid media can move quickly, while brand and content work builds over months." },
    { q: "How often will we get reports?", a: "You get a report each month, and a clear view of the key numbers between reports." },
    { q: "Who will I work with day to day?", a: "You will have one main contact, backed by specialists across brand, content, and growth." },
    { q: "How do you begin a new project?", a: "We start with discovery, studying your brand, market, and audience before building a plan." },
    { q: "Can you work with our in-house team?", a: "Yes. We often work alongside in-house teams and fit around how you already operate." },
  ],
};

export const BLOG_TEXT =
  "Explore marketing trends, strategies, and expert tips to help your brand grow faster and smarter in the region.";

export const BLOG = [
  { tag: "Marketing Strategy", title: "Why Most Digital Marketing Campaigns Fail", text: "A brand is more than a logo. Here is what makes an identity last, and how to test whether yours will.", art: "b1" },
  { tag: "Brand Strategy", title: "Design That Sells: The Psychology Behind Branding", text: "Attention is earned in seconds. Learn what makes short-form content work for brands in the Gulf.", art: "b2" },
  { tag: "Media Planning", title: "Media Planning 101: Spend Smarter, Not More", text: "Smarter allocation beats bigger budgets. Here's how to tie media spend to clear outcomes.", art: "b3" },
];

export const CTA = { title: "Ready to Grow Your Brand?", text: "Let's build something that actually works." };

export const SERVICES_HERO = {
  title: "Drive measurable results through smart, targeted marketing strategies",
  text: "Marketing services in Dubai, the UAE and the GCC: strategy, creative, distribution and customer systems working as one connected plan.",
  eyebrow: "Opportunity",
  reveal: "Turn strategy into measurable growth with a clear roadmap, focused execution, and systems designed to scale so every action adds to stronger positioning, better performance, and long term results.",
  card1Title: "Growth Insight",
  card1Stat: 120,
  card1Text: "Brands grown through our strategy and marketing work",
  card2Title: "Brand & Marketing Growth",
  card2Text: "Discover the patterns and strategies that consistently drive real growth for brands.",
  card3Title: "Creating alignment between strategy, design, and performance",
};

export const ABOUT = {
  eyebrow: "About Us",
  reveal: "We're not just a marketing agency, we're a growth partner. We help brands find their position, express it clearly, and scale it through smart execution. Every decision we make is rooted in strategy, driven by data, and designed for real, lasting impact.",
  impactText: "We fuse scale and precision to help you redefine your brand equity, turning attention into real loyalty.",
  quote: "We see every project as more than just marketing. It's a partnership founded on trust, shaped by creativity, and powered by ambition.",
  quoteName: "The Gravio Team",
  quoteRole: "Dubai, UAE",
  stats: [
    { value: 120, suffix: "+", label: "Satisfied Clients" },
    { value: 40, suffix: "M+", label: "Impressions Delivered" },
    { value: 80, suffix: "%", label: "Average engagement growth" },
    { value: "UAE", suffix: "", label: "Headquartered" },
  ],
  peopleText: "A team of strategists, creators, and marketers working together to move brands forward.",
  joinKicker: "JOIN THE TEAM",
  joinTitle: "Want to shape the future of marketing?",
  joinText: "Join us in Dubai and create bold, creative work that moves brands forward",
  people: [
    { name: "Raj", role: "Founder & Strategy Lead" },
    { name: "Hitesh", role: "Creative Director" },
    { name: "Janisha", role: "Content & Brand Manager" },
    { name: "Manu", role: "Graphics Design Head" },
  ],
  whyText: "We're just getting started, and this is what we stand for.",
  why: [
    { label: "Distinct", text: "We are distinct, never derivative." },
    { label: "Bold", text: "We build for change, not comfort." },
    { label: "Community", text: "We don't chase trends, we set the pace for communities." },
    { label: "Craft", text: "We pair bold storytelling with sharp execution." },
    { label: "Collective", text: "We're not a one-trick shop, we're a collective of specialists." },
  ],
};

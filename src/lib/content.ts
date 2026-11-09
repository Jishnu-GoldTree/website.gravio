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
  "Gravio is a modern agency in Dubai focused on building brands through strategy, design, and marketing, creating systems that drive clarity, consistency, and real growth.";

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
      { label: "Blog", href: "/blog/" },
      { label: "Career", href: "/career/" },
      { label: "Contact", href: "/contact/" },
    ]),
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
  "Brand strategy, content production, and performance marketing from Dubai, crafted to grow your market share";

export const HERO_TAGS = [
  ["Clarity in positioning"],
  ["Performance-Driven Marketing"],
  ["Media Planning", "Growth Systems"],
];

export const TICKER = [
  "VISUAL IDENTITY",
  "PERFORMANCE ADS",
  "SOCIAL MEDIA",
  "SEO & GROWTH",
  "BRAND STRATEGY",
  "DIGITAL MARKETING",
  "VISUAL IDENTITY",
];

export const PLACES = ["SINCE 2020", "DUBAI", "UAE", "INDIA"];

export const MANIFESTO =
  "We are distinct, never derivative. Every brand we touch gets a strategy of its own, shaped with data, and executed with care, until the numbers genuinely shift.";

export const PROCESS_TEXT =
  "A clear four step framework that replaces guesswork with steady, measurable growth.";

export const PROCESS = [
  { n: "01", title: "Discover", text: "We study your brand, market, audience, and rivals to find what others overlook." },
  { n: "02", title: "Strategize", text: "We map channels, budget, messaging, and milestones, before any spend goes live." },
  { n: "03", title: "Execute", text: "Our strategists, creators, and media buyers launch every campaign with sharp detail." },
  { n: "04", title: "Optimize", text: "We watch each metric, drop what fails, scale what wins, and report it all openly." },
];

export const VALUES_TEXT = "We back bold ideas and move them forward with sharp thinking";

export const VALUES = [
  {
    icon: "bulb",
    title: "Innovation",
    text: "We have a passion for creative problem-solving. Every brief is a chance to build something that did not exist before, shaped by bold storytelling and the newest tools, so your brand sets the pace rather than follows it. New formats and channels get tested early, and kept only when they earn it.",
  },
  {
    icon: "people",
    title: "Collaboration",
    text: "We are a collective of specialists, not a one-trick shop. Strategists, designers, and media buyers work closely with your team from first call to launch, so every piece of work stays tied to the wider goal you set.",
  },
  {
    icon: "link",
    title: "Integrity",
    text: "We report honestly and speak plainly. Results are shared openly, good or bad, and every recommendation comes from what your brand needs, which builds the long-term trust that all of our work depends on, with every client we serve and each audience we reach.",
  },
];

export const SERVICES_TEXT = "End to end solutions to build, grow, and scale your brand.";

export const SERVICES = [
  {
    n: "01",
    kicker: "Marketing Service",
    title: "Digital Marketing",
    art: "s1",
    stat: "48+",
    statLabel: "projects done",
    text: "Stories built to stop the scroll and spend that proves itself, across social, content, and paid channels for your audience.",
    chips: ["Content Marketing", "Email Marketing Campaigns", "Analytics & Reporting"],
  },
  {
    n: "02",
    kicker: "Design Service",
    title: "Visual Identity",
    art: "s2",
    stat: "35+",
    statLabel: "projects done",
    text: "Identity that holds up under scrutiny: a clear visual system and guidelines your whole team can rally behind.",
    chips: ["Brand Strategy & Discovery", "Logo Design Suite", "Color Palette & Typography"],
  },
  {
    n: "03",
    kicker: "Design Service",
    title: "Brand Strategy",
    art: "s3",
    stat: "26+",
    statLabel: "projects done",
    text: "Sharp positioning and messaging that turn attention into loyalty, and give every campaign one clear direction to follow.",
    chips: ["Logo Design", "Brand Identity System", "Typography & Color System"],
  },
  {
    n: "04",
    kicker: "Media Service",
    title: "Media Planning",
    art: "s4",
    stat: "31+",
    statLabel: "projects done",
    text: "We plan, launch, and tune paid media around outcomes you can see in the numbers, so each dirham has a clear job.",
    chips: ["Media Strategy Planning", "Budget Strategy", "Channel Selection"],
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
    { q: "What services does Gravio offer?", a: "Brand strategy and identity, content production, social media management, influencer marketing, and performance marketing, grouped under Brand, Content, and Growth." },
    { q: "How do I start a project with Gravio?", a: "Reach out through the contact page or email us directly. We'll set up a call to understand your goals before scoping the work." },
    { q: "Which industries do you work with?", a: "We work across FMCG, retail, beauty, hospitality, finance, and more, wherever a brand needs sharper identity and stronger reach." },
    { q: "Where is Gravio based?", a: "We are based in Dubai, UAE, and serve clients across the region and in India." },
    { q: "Do you work with early-stage brands?", a: "Yes. We work with brands at every stage, from first identity to scaled performance marketing." },
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
  text: "Bringing trust, clarity, and long term value to your business growth",
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

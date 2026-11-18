// Gravio portfolio. Copy is taken from each live site (read 13 Nov 2026).
// `image` (card) and `banner` (panel) are optional: until mockups are added, a seeded SVG gradient stands in.
// `scope` lists what Gravio delivered; fill it in per project once confirmed, it only renders when present.
// Import this file only from server components: pages pass their own list to <Portfolio>, so the
// private projects never ship in the public page's JavaScript.

export type Project = {
  slug: string;
  name: string;
  url: string;
  industry: string;
  location: string;
  summary: string;
  about: string;
  features: string[];
  offerings: string[];
  scope?: string[];
  image?: string;
  banner?: string;
};

export const PORTFOLIO_TEXT =
  "Websites and digital experiences built for businesses across Dubai, the UAE and beyond, each shaped around how its customers find, compare and get in touch.";

/** Unlisted projects, shown only at /portfolio/pvt/ (not linked anywhere, noindex, not in the sitemap) after the public ones. */
export const PRIVATE_PORTFOLIO: Project[] = [
  {
    slug: "aab-garage",
    name: "AAB Garage",
    url: "https://aabgarage.com",
    industry: "Automotive",
    location: "Al Qusais, Dubai",
    summary: "A car and motorbike workshop site for servicing, repairs, hybrid care and body work.",
    about:
      "AAB Garage is a Dubai workshop for cars and motorbikes, from routine oil changes to engine overhauls, accident repair and specialist hybrid care. The site organises every service by repair type and puts a WhatsApp quote one tap away.",
    features: ["WhatsApp \"Get Quote\" buttons on every service", "Service menu grouped by repair type", "Dedicated hybrid car section", "Location and opening hours up front"],
    offerings: ["Hybrid car care", "Oil change", "Engine overhauling", "Accident repair", "Brake & AC repair", "Dent & paint"],
  },
  {
    slug: "savax-ventures",
    name: "Savax Ventures",
    url: "https://savaxventures.com",
    industry: "Real Estate Investment",
    location: "London, UK · Dubai",
    summary: "A real estate investment platform offering curated property projects from £500.",
    about:
      "Savax Ventures makes property investment accessible, with curated projects across Dubai, London, Saudi Arabia, Bahrain and Europe starting from £500. The site guides investors from first look to sign-up, with tools to estimate returns before committing.",
    features: ["Investor sign-up and login to the Savax app", "Return calculator", "Referral programme", "FAQ and transparent fee pages"],
    offerings: ["Buy & sell properties", "Investment assistance", "Rental management", "Global property opportunities"],
  },
  {
    slug: "dats-interior",
    name: "DATs Interior",
    url: "https://datsinterior.com",
    industry: "Interior Fit-Out",
    location: "Karama, Dubai",
    summary: "An interior fit-out and renovation company's site, built around free quotes and past projects.",
    about:
      "DATs Interior has delivered custom interior fit-out, renovation and outdoor living projects in Dubai since 2014. The site pairs a clear service range with a gallery of completed work and a project enquiry form for free quotes.",
    features: ["Free quote call to action", "Project enquiry form", "Gallery and portfolio of completed work", "Office hours and location"],
    offerings: ["Interior design", "Decoration & fit-outs", "Villa renovation", "Extensions & modifications", "Pergolas & gazebos", "Outdoor living & pools"],
  },
  {
    slug: "bellacures",
    name: "Bellacures",
    url: "https://bellacuresnailsalon.ae",
    industry: "Beauty & Wellness",
    location: "Al Jaddaf, Dubai",
    summary: "A nail and beauty salon site with a published price list and WhatsApp booking.",
    about:
      "Bellacures is a nail and beauty salon in Al Jaddaf, Dubai. The site lists every treatment with its price in AED, gives each service its own page, and turns booking into a pre-filled WhatsApp message.",
    features: ["Published AED price list", "A page for every treatment", "Pre-filled WhatsApp booking", "Lookbook gallery and FAQ", "First-visit offer"],
    offerings: ["Manicure", "Pedicure & foot care", "Eyelash extensions", "Lash & brow lamination", "Waxing & threading", "Facials"],
  },
  {
    slug: "mideatek",
    name: "Mideatek",
    url: "https://mideatek.com",
    industry: "IT & Systems Integration",
    location: "Dubai · London · Karachi",
    summary: "An IT and AV integrator's site with a product catalogue, quotes and project gallery.",
    about:
      "Mideatek is an IT and AV systems integrator and authorised reseller, covering CCTV, networking, boardroom systems, broadcasting, smart homes and LED screens. The site brings services, products and past projects together, with quote requests and WhatsApp chat throughout.",
    features: ["Get-a-quote page and query form", "Product catalogue with cart", "Projects gallery and blog", "WhatsApp chat", "Careers page"],
    offerings: ["CCTV surveillance", "Structured cabling", "Access control", "Video conferencing & boardrooms", "Network infrastructure", "Smart home & LED screens"],
  },
  {
    slug: "shopaarel",
    name: "Shopaarel",
    url: "https://shopaarel.com",
    industry: "Beauty E-Commerce",
    location: "Dubai · Mumbai",
    summary: "An online makeup store bringing pro makeup from Dubai to shoppers in India.",
    about:
      "Shopaarel started as pro makeup in Dubai and now sells across India. The store is built for quick decisions: shop by occasion or price, pro combo bundles, and a fast checkout with the address pre-filled.",
    features: ["Online store with bag and checkout", "Fast checkout with pre-filled address", "Shop by occasion and by price", "Pro combo bundles", "WhatsApp and call support"],
    offerings: ["Liquid foundation", "Matte lipstick", "Concealer palette", "Setting powder", "Lip palette", "Liquid highlighter"],
  },
  {
    slug: "advancemed-clinic",
    name: "AdvanceMed Clinic",
    url: "https://advancemedclinics.com",
    industry: "Healthcare",
    location: "Dubai Festival City, Dubai",
    summary: "A dental, aesthetics and laser clinic site with online booking and doctor profiles.",
    about:
      "AdvanceMed Clinic offers dental, aesthetic and dermatology care and laser hair removal at Dubai Festival City Mall. The site helps patients choose a treatment, meet the doctors and book an appointment online or over WhatsApp.",
    features: ["Online appointment booking", "24/7 WhatsApp contact", "Doctor profiles", "Offers page", "Insurance partners and Google reviews"],
    offerings: ["General dentistry", "Braces & aligners", "Dental implants", "Aesthetic care", "Laser hair removal", "Facial treatments"],
  },
  {
    slug: "akkaas-media",
    name: "AKKAAS Media",
    url: "https://www.akkaas.com",
    industry: "Video Production",
    location: "Sharjah Media City, UAE",
    summary: "A video and photo production studio's site with clear pricing and discovery-call booking.",
    about:
      "AKKAAS Media produces monthly video and photo content for UAE clinics, real estate developers, hospitality brands and commercial companies. The site leads with sector-specific services and transparent starting prices, then books a free discovery call.",
    features: ["Free discovery call booking", "Transparent starting prices", "Sector-specific service pages", "Portfolio and blog", "WhatsApp contacts"],
    offerings: ["Clinic & medical content", "Real estate films & drone", "Hospitality & F&B reels", "Brand campaigns", "Monthly content retainers"],
  },
];

/** Public projects, shown at /portfolio/ and first on /portfolio/pvt/. */
export const PORTFOLIO: Project[] = [
  {
    slug: "rut-gold",
    name: "Rut Gold",
    url: "https://www.rutgold.com",
    industry: "Jewellery",
    location: "Dubai, UAE",
    summary: "A gold and diamond jewellery store for wholesale, retail and custom 3D-modelled pieces.",
    about:
      "Rut Gold is a Dubai gold and diamond jewellery house serving wholesale, retail and custom clients. The site lets shoppers browse collections and the catalogue, share an idea to be modelled in 3D, and enquire straight over WhatsApp, with a separate route for B2B bulk supply.",
    features: ["Collections and catalogue browsing", "Custom design requests modelled in 3D", "WhatsApp enquiries", "Dedicated B2B bulk supply route"],
    offerings: ["Gold jewellery", "Diamond jewellery", "Wholesale supply", "Retail collections", "Custom 3D modelling"],
  },
  {
    slug: "model-tree",
    name: "Model Tree",
    url: "https://modeltree.co.il",
    industry: "Jewellery 3D Marketplace",
    location: "Israel",
    summary: "A platform in Israel for buying ready-to-cast jewellery 3D models, or commissioning custom ones.",
    about:
      "Model Tree is a marketplace for ready-to-cast 3D jewellery models, modelled in-house. Jewellers search the library, license and download models instantly, or commission a custom piece, with memberships, a bilingual interface and secure checkout in shekels.",
    features: ["Searchable 3D model library", "Instant licence and download", "Custom model commissions", "Memberships", "Bilingual interface", "Secure checkout in shekels"],
    offerings: ["Ready-to-cast 3D models", "Custom jewellery modelling", "Model licensing", "Memberships"],
  },
];

// Copy for the service, industry and market pages, taken from the Gravio premium content revision (11 Nov 2026).
// Each entry renders through <DetailPage>; titles and descriptions follow the revised SEO keyword map.

export type Item = { label: string; text: string };
export type Block = {
  heading: string;
  body?: string[];
  items?: Item[];
  steps?: Item[];
};
export type Detail = {
  slug: string;
  /** Short name for links, cards and breadcrumbs. */
  name: string;
  /** Group label shown above the H1. */
  kicker: string;
  /** One-line summary for cards on hub pages. */
  summary: string;
  title: string;
  description: string;
  keyword: string;
  h1: string;
  intro: string[];
  blocks: Block[];
  faqs: { q: string; a: string }[];
  cta: { title: string; text: string; label: string };
};

const steps = (discover: string, strategize: string, execute: string, optimize: string): Item[] => [
  { label: "Discover", text: discover },
  { label: "Strategize", text: strategize },
  { label: "Execute", text: execute },
  { label: "Optimize", text: optimize },
];

export const SERVICE_GROUPS = [
  { name: "Brand & Strategy", slugs: ["brand-marketing-strategy"] },
  { name: "Creative & Production", slugs: ["media-production-product-shoots-advertisements", "models-talent-creator-collaboration"] },
  {
    name: "Growth & Distribution",
    slugs: ["paid-campaigns-performance-marketing", "seo-ai-search-visibility", "social-media-community-marketing", "media-publishing-pr-distribution"],
  },
  { name: "AI & Customer Systems", slugs: ["ai-automation-customer-relationship-support"] },
];

export const SERVICE_PAGES: Detail[] = [
  {
    slug: "brand-marketing-strategy",
    name: "Brand & Marketing Strategy",
    kicker: "Brand & Strategy",
    summary: "Positioning, audience insight and a growth roadmap that give every campaign one clear direction.",
    title: "Brand & Marketing Strategy Agency in Dubai | Gravio",
    description: "Clarify your positioning, priorities and growth plan with Gravio's brand and marketing strategy team in Dubai.",
    keyword: "brand strategy agency Dubai",
    h1: "Brand and marketing strategy that gives growth a clear direction",
    intro: [
      "Gravio helps brands define where they can win, what they should say and how marketing should move the business forward. As a Dubai-headquartered brand, content and growth agency, we connect positioning, audience insight and execution.",
    ],
    blocks: [
      {
        heading: "Our promise",
        body: [
          "Turn scattered ideas, channels and opinions into one usable strategic direction for the UAE, GCC or international market. The work is grounded in evidence, shaped around your commercial priorities and designed to guide decisions beyond a single campaign.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "When positioning is unclear, creative becomes inconsistent and budgets drift. A strong strategy gives leadership, marketing and sales a shared view of the audience, proposition, competitive context and next action.",
        ],
      },
      {
        heading: "What the work covers",
        items: [
          { label: "Brand discovery and audit", text: "Review your current identity, communications, touchpoints and market context." },
          { label: "Positioning and differentiation", text: "Define the space you want to own and the reasons to believe." },
          { label: "Audience and customer insight", text: "Segment priority audiences and map needs, objections and decision stages." },
          { label: "Message architecture", text: "Build core messages, proof points, tone and market-specific adaptations." },
          { label: "Marketing strategy and roadmap", text: "Prioritise channels, campaigns, content and milestones." },
          { label: "Competitor and category analysis", text: "Identify patterns, gaps and opportunities without copying the market." },
          { label: "Funnel and customer-journey analysis", text: "Connect awareness, consideration, enquiry and conversion." },
        ],
      },
      {
        heading: "How we work",
        steps: steps(
          "We study the business, market, audience and rivals.",
          "We define the positioning, messages, channel roles, budget logic and milestones.",
          "We deliver the agreed priorities with the relevant strategists, creators and specialists.",
          "We report, learn and make informed revisions.",
        ),
      },
      {
        heading: "What you receive",
        body: [
          "A strategic diagnosis, positioning statement, audience summary, competitor view, messaging framework, channel priorities, measurement plan and a sequenced roadmap. Deliverables are tailored to the brief.",
        ],
      },
      {
        heading: "How we measure",
        body: [
          "Possible indicators include branded-search demand, relevant visibility, engagement quality, qualified enquiries, conversion rate, customer acquisition cost and channel contribution. Baselines, attribution limits, time horizon and data access are agreed before measurement. No outcome is guaranteed.",
        ],
      },
    ],
    faqs: [
      { q: "Can you work with an existing brand identity?", a: "Yes. The engagement can focus on positioning, messaging and marketing direction without replacing assets that already work." },
      { q: "Do you support market entry into the GCC?", a: "We can structure research, positioning and go-to-market priorities around the markets in scope. Local assumptions are validated with available evidence and client insight." },
      { q: "Is this only for established companies?", a: "No. The scope can suit an early-stage brand, a repositioning, a new offer or a business that needs greater alignment across teams." },
      { q: "Will you execute the strategy?", a: "Where useful, strategy can connect to Gravio's content, digital marketing, media planning, SEO and performance work. The exact implementation is agreed separately." },
    ],
    cta: { title: "Find your clearest direction", text: "Tell us what is unclear in your market, brand or marketing plan.", label: "Start a strategy conversation" },
  },
  {
    slug: "paid-campaigns-performance-marketing",
    name: "Paid Campaigns & Performance Marketing",
    kicker: "Growth & Distribution",
    summary: "Media planning, creative testing and honest reporting so every dirham has a defined job.",
    title: "Paid Campaigns & Performance Marketing Agency in Dubai | Gravio",
    description: "Plan, launch and improve paid campaigns with Gravio, a Dubai performance marketing agency focused on useful measurement and better decisions.",
    keyword: "performance marketing agency Dubai",
    h1: "Paid campaigns built around decisions, not vanity metrics",
    intro: [
      "Gravio plans, launches and improves paid media around the action that matters to your business. The approach connects media planning, creative, landing experience and reporting so every dirham has a defined job.",
    ],
    blocks: [
      {
        heading: "Our promise",
        body: [
          "Make paid activity more accountable without pretending that one dashboard can explain the whole customer journey. We build a clear testing and optimisation system suited to your audience, offer, market and available data.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Clicks and impressions can look positive while qualified demand remains weak. Performance improves when targeting, proposition, creative, tracking and sales feedback are considered together.",
        ],
      },
      {
        heading: "What the work covers",
        items: [
          { label: "Paid media strategy", text: "Objectives, audience, funnel role, channel and budget recommendations." },
          { label: "Search campaigns", text: "Intent-led paid search structures, ad messaging and query review where appropriate." },
          { label: "Paid social campaigns", text: "Audience, format, creative and placement planning for selected platforms." },
          { label: "Campaign setup and governance", text: "Naming, structure, permissions, tracking checks and launch controls." },
          { label: "Creative and offer testing", text: "Variations in message, format, hook, proof and call to action." },
          { label: "Landing-page alignment", text: "Recommendations for relevance, friction, forms and next-step clarity." },
          { label: "Conversion measurement and reporting", text: "Agreed events, dashboards, analysis and decision notes." },
        ],
      },
      {
        heading: "How we work",
        steps: steps(
          "We begin with the objective, economics, available assets and tracking health.",
          "We plan audience, channel, budget, creative and milestones.",
          "We launch and review delivery, quality and conversion signals.",
          "We adjust budget, audiences, creative or the post-click journey.",
        ),
      },
      {
        heading: "What you receive",
        body: [
          "Paid-media strategy, channel and budget plan, campaign architecture, audience and keyword recommendations where relevant, ad and creative briefs, tracking and conversion checklist, landing-page recommendations, reporting dashboard or report, test register and optimisation actions. Media spend and management fees are scoped separately.",
        ],
      },
      {
        heading: "How we measure",
        body: [
          "Depending on the objective, measurement may include reach, click-through rate, cost per click, cost per lead, qualified-lead rate, conversion rate, cost per acquisition, revenue or pipeline contribution. Reporting distinguishes platform metrics from business outcomes and states data limitations. No performance or return is guaranteed.",
        ],
      },
    ],
    faqs: [
      { q: "Which platforms do you manage?", a: "Channel selection depends on audience, objective, market and account readiness. The recommended mix is agreed after discovery rather than assumed in advance." },
      { q: "Can you work with an in-house marketing team?", a: "Yes. Gravio can complement internal owners, creative partners or sales teams, with responsibilities and approval steps defined upfront." },
      { q: "Is ad spend included in the fee?", a: "No assumption is made. Media investment and management scope are set out separately in the proposal." },
      { q: "How quickly will results appear?", a: "Early delivery and tracking signals can be reviewed after launch, but meaningful learning depends on budget, conversion volume, market conditions and the sales cycle. Results cannot be guaranteed." },
    ],
    cta: { title: "Make paid media accountable", text: "Share your objectives, current campaigns and measurement gaps.", label: "Discuss paid campaigns" },
  },
  {
    slug: "seo-ai-search-visibility",
    name: "SEO & AI Search Visibility",
    kicker: "Growth & Distribution",
    summary: "Technical SEO, useful content and AI-search readiness for the way people discover brands now.",
    title: "SEO, AI Implementation & AI Search Visibility Agency | Gravio",
    description: "Strengthen technical SEO, useful content and AI-search visibility with Gravio for Dubai, GCC and international growth.",
    keyword: "AI search visibility agency Dubai",
    h1: "Search visibility for the way people discover brands now",
    intro: [
      "Gravio combines technical SEO, content clarity and practical AI implementation to help your website serve audiences and modern discovery journeys. The work can support conventional search, AI Overviews and AI Mode visibility, but inclusion or ranking cannot be guaranteed.",
    ],
    blocks: [
      {
        heading: "Our promise",
        body: [
          "Build a credible, crawlable and useful digital presence that search engines, AI systems and people can understand. Where relevant, we can also assess eligible discovery platforms and knowledge profiles; inclusion remains subject to platform eligibility and policy.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Visibility is shaped by more than publishing keywords. Technical access, page structure, evidence, entity clarity and content quality influence whether a brand is discoverable and trusted. AI-assisted discovery adds another reason to make information consistent and easy to verify.",
        ],
      },
      {
        heading: "What the work covers",
        items: [
          { label: "Technical SEO audit", text: "Crawlability, indexation, rendering, site structure and experience priorities." },
          { label: "Search-intent and content mapping", text: "Connect queries, audience needs and pages across the funnel." },
          { label: "On-page and internal-link optimisation", text: "Improve titles, headings, metadata, links and page usefulness." },
          { label: "Content strategy and production", text: "Plan or create service, location, comparison and thought-leadership content." },
          { label: "Local and regional SEO", text: "Structure relevant Dubai, UAE and GCC signals where appropriate." },
          { label: "AI implementation", text: "Identify useful workflow, content, analytics or knowledge-base applications, with human review." },
          { label: "AI search visibility readiness", text: "Improve factual consistency, structured information, entity signals and answer-oriented content." },
          { label: "Platform discovery presence", text: "Assess eligible profiles, directories and knowledge platforms; implement only where access and requirements allow." },
        ],
      },
      {
        heading: "How we work",
        steps: steps(
          "We audit the site, search data, content, technical setup and priorities.",
          "We prioritise the work by value and feasibility.",
          "We implement or brief the agreed fixes, pages and content.",
          "We monitor visibility, indexing, query themes and user actions, separating completed work from platform behaviour.",
        ),
      },
      {
        heading: "What you receive",
        body: [
          "Technical findings and a prioritised backlog, keyword and intent map, information-architecture recommendations, on-page and internal-link plan, content briefs or pages, structured-data recommendations, AI workflow and governance recommendations, AI-search readiness checklist, discovery-platform assessment and a measurement report.",
        ],
      },
      {
        heading: "How we measure",
        body: [
          "Possible indicators include indexed pages, technical health, branded and non-branded visibility, relevant organic sessions, qualified enquiries, assisted conversions, content engagement, entity consistency and observable appearance or citation signals. AI Overviews and AI Mode may not expose complete reporting; no inclusion, ranking or traffic outcome is promised.",
        ],
      },
    ],
    faqs: [
      { q: "Can you guarantee visibility in AI Overviews or AI Mode?", a: "No. Gravio can improve technical, content and knowledge signals, but inclusion and presentation are controlled by the relevant platforms." },
      { q: "Do you submit a brand to every AI platform?", a: "No. Any listing or knowledge-presence work depends on platform eligibility, policies, access and actual implementation." },
      { q: "Will AI replace human content review?", a: "No. AI may support research, workflows or production, but accuracy, originality, brand fit, compliance and approval remain essential." },
      { q: "How long does SEO take?", a: "Timing varies with the site, competition, authority, implementation speed and search changes. Some fixes are immediate; meaningful visibility gains often take longer and cannot be guaranteed." },
    ],
    cta: { title: "Be easier to find and trust", text: "Identify the technical, content or AI-discovery barriers limiting your visibility.", label: "Start an SEO conversation" },
  },
  {
    slug: "social-media-community-marketing",
    name: "Social Media & Community Marketing",
    kicker: "Growth & Distribution",
    summary: "Channel strategy, content, community care and reporting that give each platform a clear role.",
    title: "Social Media & Community Marketing in Dubai | Gravio",
    description: "Build a clearer social presence with strategy, content, community management and reporting from Gravio, a Dubai-based brand, content and growth agency.",
    keyword: "social media and community marketing Dubai",
    h1: "Social media that gives your brand a place in people's lives",
    intro: [
      "A strong social presence is more than a queue of posts. It connects positioning, useful content, community care and learning. Gravio gives each channel a clear role, from awareness through conversation and action.",
      "As a Dubai-based, UAE-headquartered agency, we bring strategy, content and growth thinking together, with social media management, content marketing, email campaigns and analytics shaped for UAE, GCC or international audiences.",
    ],
    blocks: [
      {
        heading: "What the work covers",
        body: [
          "We begin with your objective, audience, channels and approval reality. The engagement may include channel strategy, content pillars, calendars, copywriting and creative direction, social assets, publishing coordination, message triage, community prompts, escalation rules and performance reporting.",
          "Community support follows agreed boundaries. We define response tone, FAQs, escalation paths and handoff rules. The work does not promise 24/7 response, guaranteed virality or a growth number. Posting frequency, platforms, production volume, creator activity, paid amplification and response windows are confirmed in the proposal.",
        ],
      },
      {
        heading: "How we work",
        steps: steps(
          "We review the brand, market, audience, rivals, current content and available data, and find where community attention is being lost.",
          "We set channel roles, audience priorities, content pillars, tone, campaign themes, approval workflow and measurement. For GCC work, we clarify language, cultural context and business hours first.",
          "Strategists, creators and media specialists coordinate the agreed content and community activity, each asset tied back to the brief.",
          "We read the signals that matter, refine the content mix and report what worked, what did not and what should change next.",
        ),
      },
      {
        heading: "What you receive",
        body: [
          "Depending on scope: a channel audit, social strategy and positioning recommendations, content pillars, a monthly calendar, caption and creative briefs, approved social assets, publishing or scheduling support, community response guidelines, an escalation matrix, campaign support and a performance report with next steps. Paid media, creator activity, email support or integration work is listed separately so ownership and budget stay clear.",
        ],
      },
    ],
    faqs: [
      { q: "Can Gravio manage social media for a UAE or GCC brand?", a: "Yes. The programme can be planned around UAE or GCC audiences, priorities and approved language needs. Regional relevance is addressed in discovery." },
      { q: "Do you create the content as well as manage the channels?", a: "The scope can combine strategy, copy, creative direction, content production, publishing coordination and community support. Formats, quantities, production responsibilities and approval rounds are agreed before work starts." },
      { q: "Will social media management include replying to every message?", a: "Community management can include agreed monitoring, response guidance, triage and escalation. Response hours, platforms, languages and sensitive-case handling are specified in the scope; no always-on response is implied." },
      { q: "How will success be measured?", a: "Against the approved objective. Reporting may cover reach, engagement quality, audience actions, content learnings, community themes and traffic or lead signals. Baselines, attribution and platform data access come before any performance claim." },
    ],
    cta: { title: "Make social easier to run", text: "Tell us what you are building, which markets matter and where your current social system gets stuck.", label: "Start your project" },
  },
  {
    slug: "media-publishing-pr-distribution",
    name: "Media Publishing, PR & Distribution",
    kicker: "Growth & Distribution",
    summary: "Owned, paid and earned channel plans that put each story where it can do its job.",
    title: "Media Publishing, PR & Distribution | Gravio",
    description: "Plan and publish brand stories across owned, paid and earned channels with clear messaging, approvals and distribution governance from Dubai.",
    keyword: "media publishing and PR agency Dubai",
    h1: "Put the story in the right channel, with the right proof",
    intro: [
      "A finished asset is not a distribution strategy. Gravio helps brands turn approved stories into channel-specific plans that distinguish what you own, what you pay to place and what independent media may choose to cover.",
      "From a Dubai launch to UAE, GCC or international communications, the work is grounded in relevance and responsible expectations, not guaranteed coverage.",
    ],
    blocks: [
      {
        heading: "What the work covers",
        items: [
          { label: "Channel and publishing strategy", text: "Map objectives, audiences, formats, timing and approvers." },
          { label: "Owned-channel publishing", text: "Prepare website, blog, email and social content." },
          { label: "Paid-media distribution", text: "Adapt approved assets for sponsored placements." },
          { label: "PR story development", text: "Shape angles, press materials, messages and spokesperson preparation." },
          { label: "Media list and outreach planning", text: "Identify relevant publications, creators or editors." },
          { label: "Press kit and newsroom assets", text: "Organise releases, images, facts, bios and links." },
          { label: "Creator and partner amplification", text: "Coordinate agreed publishing with visible disclosures." },
          { label: "Monitoring and reporting", text: "Track publication status, links, activity and agreed indicators." },
        ],
      },
      {
        heading: "How we work",
        steps: steps(
          "We study the story, proof points, audience, market and risks.",
          "We set the channel mix: owned channels the brand controls, paid media it buys, and earned media that depends on editorial judgment.",
          "We deliver an approved calendar, press materials, platform-ready assets and documented outreach.",
          "We review responses and agreed signals, then refine the next wave.",
        ),
      },
      {
        heading: "What you receive",
        body: [
          "Channel map, publishing calendar, press release, media pitch, spokesperson notes, press kit, social and email copy, paid variants, creator brief, outreach tracker, live owned-content links and a summary report, as agreed. Third-party publication stays outside our control unless contracted as a defined media buy.",
        ],
      },
      {
        heading: "Governance and disclosure",
        body: [
          "Paid, earned and owned media are labelled and governed differently. Sponsored content and creator partnerships carry the relevant disclosures. Outreach does not guarantee publication, sentiment or inclusion. Clients approve claims, substantiation, embargoes, sensitive language and quotes.",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between paid, earned and owned media?", a: "Paid media is purchased placement. Earned media is third-party coverage or conversation. Owned media is published through brand-controlled channels such as a website, email or social account." },
      { q: "Can you guarantee press coverage?", a: "No. Gravio can improve the story, materials, targeting and follow-up without promising independent coverage." },
      { q: "Can distribution cover GCC and international audiences?", a: "Yes, when markets, languages, media relevance, budgets and approvals are confirmed." },
      { q: "Can paid amplification support earned coverage?", a: "Yes, but the two stay separate in planning, labelling and reporting. Paid promotion is not independent editorial coverage." },
    ],
    cta: { title: "Have a story that needs more than a post?", text: "Send us the angle, market, timing and the channels you control.", label: "Contact Gravio" },
  },
  {
    slug: "media-production-product-shoots-advertisements",
    name: "Media Production, Product Shoots & Ads",
    kicker: "Creative & Production",
    summary: "Product photography, branded video and ads planned as a channel-ready asset library.",
    title: "Media Production, Product Shoots & Ads | Gravio",
    description: "Produce product photography, branded video and advertisements with a clear brief, efficient shoot process and channel-ready delivery from Dubai.",
    keyword: "product photography and video production Dubai",
    h1: "Product shoots and advertisements made for every useful frame",
    intro: [
      "Premium production is not only a polished hero film. It is a coherent library of images, edits and cutdowns that explain the product, carry the brand and work where your audience sees it.",
      "Gravio brings strategy, creative direction and production discipline together for product shoots, branded content and advertisements for social, digital, paid, PR and owned channels.",
    ],
    blocks: [
      {
        heading: "What the work covers",
        items: [
          { label: "Creative and production concepting", text: "Turn the objective into a treatment and practical shoot plan." },
          { label: "Product photography", text: "Packshots, styled still life, detail images and campaign frames." },
          { label: "Lifestyle and brand photography", text: "Place the product in a relevant human or commercial context." },
          { label: "Video advertisements", text: "Short-form commercial concepts, social ads and campaign films." },
          { label: "Reels, vertical video and cutdowns", text: "Plan hooks, captions, durations and mobile-first framing." },
          { label: "Art direction and set styling", text: "Align location, props, lighting, wardrobe and composition." },
          { label: "Post-production and finishing", text: "Selects, editing, colour, sound, motion and versioning." },
          { label: "Production asset libraries", text: "Organise approved masters and derivatives for future use." },
        ],
      },
      {
        heading: "How we work",
        steps: steps(
          "We study the product, proposition, audience, market and channel requirements.",
          "We plan the treatment, shot list, budget assumptions, schedule, approvals and deliverables.",
          "We shoot with a coordinated crew, talent, set and production plan.",
          "We check specifications, message clarity, platform crops and version usefulness before handover.",
        ),
      },
      {
        heading: "What you receive",
        body: [
          "Creative treatment, moodboard, shot list, call sheet, still-image selects, hero images, product details, master video, vertical edits, cutdowns, captions or supers, thumbnails, resized versions and a structured delivery folder, as agreed.",
        ],
      },
      {
        heading: "Budgets and usage rights",
        body: [
          "Estimates separate creative fees, crew, locations, props, talent, post-production, media spend and third-party costs. Music, stock, fonts, locations, artwork, voiceover and talent carry separate permissions. Master-file approval does not automatically grant every platform, territory, duration or paid-media right. Clients approve claims, disclaimers and demonstrations before release.",
        ],
      },
    ],
    faqs: [
      { q: "Can one shoot create social and advertising assets?", a: "Yes, if aspect ratios, hooks, durations, safe areas and cutdowns are planned from the start." },
      { q: "Do you produce only video?", a: "No. Scope can include product photography, lifestyle stills, branded content, advertisements and post-production." },
      { q: "Can you produce in Dubai or elsewhere in the UAE?", a: "Yes, with location, permits, crew and travel confirmed project by project." },
      { q: "Do you handle media buying too?", a: "Production and media buying are separate decisions. Gravio's performance marketing and media planning can be scoped alongside production." },
    ],
    cta: { title: "Plan a shoot that keeps working", text: "Bring the product, launch date and channels.", label: "Talk to us about a production brief" },
  },
  {
    slug: "models-talent-creator-collaboration",
    name: "Models, Talent & Creator Collaboration",
    kicker: "Creative & Production",
    summary: "Casting, creator partnerships and talent management that protect the idea and keep it human.",
    title: "Models, Talent & Creator Collaboration | Gravio",
    description: "Source and manage models, talent and creators for brand campaigns, social content and commercial productions from Dubai, the UAE and beyond.",
    keyword: "models and creator collaboration Dubai",
    h1: "Models, talent and creators for work people want to watch",
    intro: [
      "The right face is not a strategy on its own. Gravio connects your brief, audience and brand world to suitable models, on-camera talent and creators, then manages the collaboration with enough structure to protect the idea and enough flexibility to keep the work human.",
      "For Dubai, UAE, GCC or international briefs, we help you make a considered casting decision.",
    ],
    blocks: [
      {
        heading: "What the work covers",
        items: [
          { label: "Casting direction and shortlisting", text: "Define the role, look, tone, language and audience fit." },
          { label: "Model and on-camera talent sourcing", text: "Identify talent for stills, video, demonstrations and events." },
          { label: "Creator partnerships", text: "Match content style and community context to the brief." },
          { label: "Influencer campaign coordination", text: "Organise outreach, briefing, approvals and handovers." },
          { label: "UGC and testimonial direction", text: "Shape natural content while keeping claims and brand cues clear." },
          { label: "Shoot-day talent management", text: "Coordinate call times, wardrobe notes and production communication." },
          { label: "Multi-market adaptation", text: "Plan Arabic, English and culturally specific executions when required." },
        ],
      },
      {
        heading: "How we work",
        steps: steps(
          "We study the audience, message, platform and intended use.",
          "We set the talent profile, selection criteria, deliverables and approval route.",
          "We coordinate the agreed talent and production team.",
          "We review what can work across organic social, paid placements, PR materials and owned channels.",
        ),
      },
      {
        heading: "What you receive",
        body: [
          "Casting brief, shortlist, selection rationale, collaboration brief, deliverables schedule, usage-rights checklist, production plan, approved files and a handover summary. Final outputs depend on the agreed scope.",
        ],
      },
      {
        heading: "Usage rights",
        body: [
          "Availability, exclusivity, category conflicts, rates, cancellation terms, disclosure requirements and usage periods are confirmed in writing. An organic post, a brand-owned edit and paid-media boosting are different rights. We never imply perpetual, worldwide, paid, broadcast or platform usage unless expressly agreed.",
        ],
      },
    ],
    faqs: [
      { q: "Can you source Arabic- and English-speaking talent?", a: "Yes, where the brief and availability support it. Specify language, accent, cultural fit and market at briefing stage." },
      { q: "Can creator content be used in paid ads?", a: "Only when paid usage, duration, territory, edits and whitelisting terms are agreed." },
      { q: "Do you represent an exclusive roster?", a: "No. Gravio builds a brief-led shortlist for each approved project." },
      { q: "Can you work with talent outside the UAE?", a: "Yes, subject to availability, logistics and confirmed rights." },
    ],
    cta: { title: "Need the right people on screen?", text: "Share the audience, market, format and intended usage.", label: "Start a project" },
  },
  {
    slug: "ai-automation-customer-relationship-support",
    name: "AI Automation & Customer Relationships",
    kicker: "AI & Customer Systems",
    summary: "Practical AI workflows for enquiries, lead routing and follow-up, with human handoff built in.",
    title: "AI Automation & Customer Relationship Support | Gravio",
    description: "Design practical AI-assisted customer relationship workflows for marketing and support, with clear handoffs, approvals and measurable reporting from Gravio.",
    keyword: "AI automation and customer relationship support",
    h1: "Make every customer interaction clearer, faster and easier to follow",
    intro: [
      "AI is most useful when it removes avoidable friction without removing human judgment. Gravio helps scope customer relationship and marketing workflows that organise enquiries, support consistent replies and give teams a clearer view of what happens next.",
      "A workflow may involve WhatsApp, a CRM, email, forms, calendars, analytics or other approved tools. Integrations depend on availability, permissions, data review, testing and client sign-off, and human escalation stays in place for sensitive or ambiguous conversations.",
    ],
    blocks: [
      {
        heading: "What the work covers",
        body: [
          "Customer-journey mapping, enquiry and lead-flow review, approved knowledge and tone guidelines, FAQ and prompt design, lead routing, follow-up sequences, CRM recommendations, email or WhatsApp workflow concepts, dashboard requirements, quality checks and operating documentation.",
          "Gravio's role, the client's role and any technology partner's role are defined before build. AI is not a substitute for a complete CRM, legal advice or trained support staff, and no integration is claimed until it is tested in your environment.",
        ],
      },
      {
        heading: "How we work",
        steps: steps(
          "We map the customer journey, enquiry sources, repetitive tasks, data fields, handoffs and failure points, and decide where a person must stay in control.",
          "We design the future-state workflow, message architecture, escalation rules, data ownership, permissions and reporting, starting with a few useful journeys.",
          "We prepare the approved content, logic and integrations, then test edge cases and handoffs.",
          "We review response quality, routing accuracy, completion rates and team feedback, and refine as things change.",
        ),
      },
      {
        heading: "What you receive",
        body: [
          "A customer-journey map, automation opportunity assessment, approved response library, prompt and guardrail set, lead-routing map, CRM field and pipeline recommendations, WhatsApp or email workflow specification, integration requirements, test plan, escalation matrix, reporting specification, operating playbook and handover notes. Build, subscription, API and messaging costs are quoted separately.",
        ],
      },
    ],
    faqs: [
      { q: "Can Gravio connect WhatsApp, CRM and email?", a: "These are scoped case by case. Feasibility depends on the platforms, account permissions, APIs, data requirements, message rules and implementation ownership. No connection is promised before discovery and approval." },
      { q: "Will AI answer customers without human review?", a: "The level of automation is a design decision. A responsible scope includes approved answers, confidence thresholds, human handoff and escalation for sensitive or uncertain cases." },
      { q: "Is this suitable for an international business as well as a UAE company?", a: "Yes. Markets, languages, business hours, consent requirements, data handling and escalation ownership are defined for each deployment." },
      { q: "How do we know whether automation is worth doing?", a: "We start with the current journey and baseline, then weigh task volume, error cost, response expectations, data quality and team capacity, not AI novelty." },
    ],
    cta: { title: "Does your customer journey feel fragmented?", text: "Share the channel, workflow and handoff you want to improve.", label: "Talk to Gravio" },
  },
];

export const INDUSTRY_PAGES: Detail[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    kicker: "Industry",
    summary: "Property campaigns connected to qualified enquiries, broker follow-up and viewings.",
    title: "Real Estate Marketing Agency Dubai | Gravio",
    description: "Looking for a real estate marketing agency in Dubai? Gravio connects property campaigns, qualified enquiries and sales follow-up. Book a strategy call.",
    keyword: "real estate marketing agency Dubai",
    h1: "Real estate marketing agency in Dubai",
    intro: [
      "Connect property campaigns to conversations that matter, from first enquiry to viewing.",
      "Property buyers rarely decide after one interaction. Developers and brokerages need clear project positioning, useful information and a way to tell serious enquiries from early interest. Gravio coordinates campaign planning, creative, lead capture and broker follow-up, with reporting that links enquiries to qualified leads and viewings where your data allows.",
    ],
    blocks: [
      {
        heading: "Property marketing, managed from campaign to sales",
        items: [
          { label: "Launch planning", text: "Shape project messaging, audience priorities and channel plans around the properties available." },
          { label: "Lead capture", text: "Build property landing pages with relevant budget, location and buying-timeline questions." },
          { label: "Sales hand-off", text: "Map form and WhatsApp enquiries into an agreed CRM follow-up process." },
          { label: "Performance review", text: "Compare spend, qualified enquiries and viewings against agreed sales definitions." },
        ],
      },
    ],
    faqs: [
      { q: "What makes a property lead qualified?", a: "Qualification depends on the brief. Budget, preferred location, buying timeline and financing position help your team decide which enquiries need immediate follow-up." },
      { q: "Can you support an off-plan launch?", a: "Yes. A launch can combine project messaging, landing pages and follow-up. We confirm project details, advertising permissions and delivery scope before campaigns begin." },
    ],
    cta: { title: "Book a strategy call", text: "Discuss your property portfolio, lead journey and priorities.", label: "Book a strategy call" },
  },
  {
    slug: "ecommerce-retail",
    name: "E-Commerce & Retail",
    kicker: "Industry",
    summary: "Acquisition, store experience and retention brought into one commercial plan.",
    title: "E-Commerce Marketing Agency Dubai | Gravio",
    description: "Choose an e-commerce marketing agency in Dubai to connect product campaigns, store experience and customer retention. Talk to Gravio about your goals.",
    keyword: "ecommerce marketing agency Dubai",
    h1: "E-commerce marketing agency in Dubai",
    intro: [
      "Bring acquisition, store experience and retention into one plan for healthier customer relationships.",
      "Campaigns attract shoppers, but product pages, checkout and post-purchase experiences shape what happens next. Gravio connects creative and media with store data and customer communication, and agrees the commercial signals to review against your catalogue, inventory and tracking.",
    ],
    blocks: [
      {
        heading: "E-commerce marketing from discovery to repeat purchase",
        items: [
          { label: "Product visibility", text: "Organise catalogue feeds and campaigns around available products and business goals." },
          { label: "Paid media", text: "Test audiences, product messages and creative variations across agreed advertising channels." },
          { label: "Store conversion", text: "Review product pages and checkout for friction that may interrupt a purchase." },
          { label: "Retention", text: "Plan consent-based email or WhatsApp messages for post-purchase and returning customers." },
        ],
      },
    ],
    faqs: [
      { q: "How should we read return on ad spend?", a: "ROAS divides attributed advertising revenue by ad spend. It does not prove profit, so review it alongside margin and attribution limits." },
      { q: "Where should an online store start?", a: "Start with your commercial goal and data. Demand, checkout friction and repeat purchases show whether acquisition, conversion or retention needs attention first." },
    ],
    cta: { title: "Book a strategy call", text: "Explore the opportunities across your store and customer journey.", label: "Book a strategy call" },
  },
  {
    slug: "hospitality-luxury",
    name: "Hospitality & Luxury",
    kicker: "Industry",
    summary: "Brand storytelling, guest discovery and reservation journeys for distinctive brands.",
    title: "Hospitality Marketing Agency Dubai | Gravio",
    description: "Explore hospitality and luxury marketing in Dubai with Gravio, connecting brand storytelling, guest discovery and reservations.",
    keyword: "hospitality marketing agency Dubai",
    h1: "Hospitality marketing for distinctive brands in Dubai",
    intro: [
      "Make the experience compelling before a guest books, visits or gets in touch.",
      "Restaurants, hotels and luxury businesses sell an experience as much as a product, and indiscriminate promotions can weaken brand value. Gravio links positioning and creative with discovery, enquiries and reservations, whether the next step is a table booking, a stay or a private consultation.",
    ],
    blocks: [
      {
        heading: "Hospitality and luxury marketing, from discovery to booking",
        items: [
          { label: "Brand storytelling", text: "Develop campaign messages and visual direction that reflect the experience offered." },
          { label: "Discovery", text: "Align search, location information and social content with guests' plans." },
          { label: "Reservation journeys", text: "Review landing pages and booking paths for clarity and friction." },
          { label: "Reputation and reporting", text: "Plan review responses and assess booking sources, where tracking permits." },
        ],
      },
    ],
    faqs: [
      { q: "How can marketing protect premium positioning?", a: "Lead with qualities guests value, use considered imagery and choose offers carefully. Experience-led messages are often more appropriate than frequent discounts." },
      { q: "What should we measure beyond reservations?", a: "Useful signals include qualified enquiries, booking completion and repeat visits. Tracking availability and source quality puts the numbers in context." },
    ],
    cta: { title: "Book a strategy call", text: "Discuss your brand, guest journey and commercial priorities.", label: "Book a strategy call" },
  },
  {
    slug: "b2b-technology",
    name: "B2B & Technology",
    kicker: "Industry",
    summary: "Positioning, demand generation and sales hand-off measured against pipeline, not lead volume.",
    title: "B2B Marketing Agency Dubai | Gravio",
    description: "Work with a B2B marketing agency in Dubai to connect positioning, demand generation and sales conversations. Discuss your growth priorities with Gravio.",
    keyword: "B2B marketing agency Dubai",
    h1: "B2B marketing agency in Dubai",
    intro: [
      "Connect your positioning to conversations and opportunities your sales team can act on.",
      "B2B and technology purchases often involve several stakeholders and long evaluations. Gravio coordinates positioning, content, paid channels and sales hand-off, and agrees qualification and reporting with sales so activity is reviewed against pipeline stages, not lead volume alone.",
    ],
    blocks: [
      {
        heading: "B2B marketing, connected to the sales journey",
        items: [
          { label: "Account strategy", text: "Define priority segments, buying roles and messages for each evaluation stage." },
          { label: "Demand generation", text: "Plan search and LinkedIn campaigns around audience needs and offers." },
          { label: "Sales enablement", text: "Develop landing pages and content for demos, enquiries and sales conversations." },
          { label: "CRM and reporting", text: "Map lead hand-off and review qualified opportunities using your recorded data." },
        ],
      },
    ],
    faqs: [
      { q: "How do we measure marketing during a long sales cycle?", a: "Review leading signals such as qualified enquiries and opportunity creation alongside pipeline progress. Attribution depends on complete, reliable CRM data." },
      { q: "Is account-based marketing right for every B2B business?", a: "Not necessarily. An account programme suits a defined set of high-value prospects; broader demand generation can fit a larger audience better." },
    ],
    cta: { title: "Book a strategy call", text: "Discuss your audience and pipeline.", label: "Book a strategy call" },
  },
];

export const MARKETS_PAGE: Detail = {
  slug: "markets",
  name: "Markets We Serve",
  kicker: "Markets",
  summary: "Marketing support across Dubai, the UAE, the GCC, India and international markets.",
  title: "Marketing Across the UAE, GCC & Beyond | Gravio",
  description: "Explore marketing support for businesses across Dubai, the UAE, GCC and international markets. Discuss your market and delivery needs with Gravio.",
  keyword: "GCC marketing agency",
  h1: "Marketing across the UAE, GCC and beyond",
  intro: [
    "A clear plan for the markets you want to reach, with scope agreed before work begins.",
    "Gravio is based in Dubai and welcomes enquiries about marketing support across the UAE, the GCC and international markets. We consider your target audience, commercial goals and delivery requirements before recommending an approach.",
  ],
  blocks: [
    {
      heading: "United Arab Emirates",
      items: [
        { label: "Dubai", text: "Marketing management, campaign planning and sales alignment for a Dubai-based business or a campaign aimed at Dubai audiences." },
        { label: "Abu Dhabi", text: "A brief for an Abu Dhabi audience, with objectives, channels and delivery requirements agreed in advance." },
        { label: "Across the UAE", text: "For other emirates or UAE-wide activity, we discuss the locations, audiences and practical scope your project needs." },
      ],
    },
    {
      heading: "Gulf Cooperation Council",
      body: ["For projects targeting the Gulf, we discuss the audiences and support required in each market."],
      items: [
        { label: "Saudi Arabia", text: "Riyadh and other locations, with scope and any local delivery requirements confirmed before we proceed." },
        { label: "Qatar", text: "The intended audience, campaign scope and any local execution needs." },
        { label: "Kuwait", text: "The scope and resources needed to reach your intended audience." },
        { label: "Bahrain", text: "The audience, channels and practical delivery requirements for your brief." },
        { label: "Oman", text: "The proposed activity and any requirements for delivery in the market." },
      ],
    },
    {
      heading: "India",
      body: ["For businesses connecting the UAE and India, we discuss the audience, objectives and practical delivery arrangements for each project."],
    },
    {
      heading: "International clients and campaigns",
      body: [
        "Whether your organisation is based outside the region or wants to reach audiences beyond it, share your target markets and commercial objectives. Delivery arrangements, time zones, languages, partners and any on-the-ground requirements are agreed for each engagement.",
        "For international businesses entering the region, the priority is not simply translation. It is understanding how the offer, proof, creative and customer journey should adapt.",
      ],
    },
    {
      heading: "What we confirm before a market launch",
      body: [
        "Services, capacity, delivery arrangements, language support and any partner involvement are confirmed for each market. Depending on the brief, advertising rules, permissions, data handling and platform availability are checked with qualified advisers or local partners before work begins.",
      ],
    },
  ],
  faqs: [],
  cta: { title: "Book a strategy call", text: "Tell us where you want to reach customers and what support you need.", label: "Book a strategy call" },
};

export const serviceBySlug = (slug: string) => SERVICE_PAGES.find((p) => p.slug === slug);
export const industryBySlug = (slug: string) => INDUSTRY_PAGES.find((p) => p.slug === slug);
export const SERVICE_PATHS = SERVICE_PAGES.map((p) => `/services/${p.slug}/`);
export const INDUSTRY_PATHS = INDUSTRY_PAGES.map((p) => `/industries/${p.slug}/`);

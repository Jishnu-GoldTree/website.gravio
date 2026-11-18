import type { Metadata } from "next";
import { CONTACT, isHidden } from "./content";
import { INDUSTRY_PATHS, SERVICE_PATHS } from "./pages";

export const SITE_URL = "https://www.gravio.ae";
export const SITE_NAME = "Gravio";
const OG_IMAGE = "/opengraph-image.png";

/**
 * Metadata for one page. `path` uses the site's trailing-slash form ("/work/").
 * `title` is the full browser title, brand included, as set in the SEO keyword map.
 * Thin placeholder pages pass `noindex` so they stay out of search results until they have content.
 */
export function pageMeta({
  path,
  title,
  description,
  noindex = false,
}: {
  path: string;
  title?: string;
  description: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = title;
  return {
    ...(title ? { title: { absolute: title } } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      ...(fullTitle ? { title: fullTitle } : {}),
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", ...(fullTitle ? { title: fullTitle } : {}), description, images: [OG_IMAGE] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Pages listed in the sitemap. Placeholder pages marked noindex are left out. */
export const INDEXED_PAGES = [
  "/",
  "/services/",
  ...SERVICE_PATHS,
  "/industries/",
  ...INDUSTRY_PATHS,
  "/markets/",
  "/portfolio/",
  "/work/",
  "/about/",
  "/contact/",
  "/career/",
  "/privacy-policy/",
  "/terms-condition/",
].filter((p) => !isHidden(p));

/** schema.org description of the business, rendered once in the root layout. */
export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  description:
    "Gravio is a brand, content and growth agency in Business Bay, Dubai. Since 2020 it has brought brand strategy, design, content production, social media, SEO, paid media and AI-assisted customer systems together for businesses across the UAE, the GCC and international markets.",
  knowsAbout: [
    "Brand strategy",
    "Marketing strategy",
    "Visual identity",
    "Content production",
    "Product photography",
    "Video advertising",
    "Social media marketing",
    "Performance marketing",
    "Media planning",
    "Search engine optimization",
    "AI search visibility",
    "Influencer marketing",
    "Public relations",
    "Marketing automation",
  ],
  email: CONTACT.email,
  telephone: CONTACT.phone.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Churchill Tower, Al Amal St, Business Bay",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: ["AE", "SA", "QA", "KW", "BH", "OM", "IN"],
  sameAs: ["https://www.instagram.com/graviomarketing"],
  contactPoint: [
    { "@type": "ContactPoint", telephone: CONTACT.phone.replace(/\s/g, ""), contactType: "sales", areaServed: "AE", availableLanguage: ["en"] },
    { "@type": "ContactPoint", telephone: CONTACT.landline.replace(/\s/g, ""), contactType: "customer service", areaServed: "AE", availableLanguage: ["en"] },
  ],
};

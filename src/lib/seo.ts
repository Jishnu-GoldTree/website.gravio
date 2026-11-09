import type { Metadata } from "next";
import { CONTACT } from "./content";

export const SITE_URL = "https://www.gravio.ae";
export const SITE_NAME = "Gravio";
const OG_IMAGE = "/opengraph-image.png";

/**
 * Metadata for one page. `path` uses the site's trailing-slash form ("/work/").
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
  const fullTitle = title ? `${title} | ${SITE_NAME}` : undefined;
  return {
    ...(title ? { title } : {}),
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
export const INDEXED_PAGES = ["/", "/services/", "/work/", "/about/", "/contact/", "/career/"];

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
    "Gravio is a Dubai marketing agency for brand, content and growth: brand strategy, visual identity, social media, digital marketing and media planning.",
  email: CONTACT.email,
  telephone: CONTACT.phone.replace(/\s/g, ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Churchill Tower, Al Amal St, Business Bay",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: ["AE", "IN"],
  contactPoint: [
    { "@type": "ContactPoint", telephone: CONTACT.phone.replace(/\s/g, ""), contactType: "sales", areaServed: "AE", availableLanguage: ["en"] },
    { "@type": "ContactPoint", telephone: CONTACT.landline.replace(/\s/g, ""), contactType: "customer service", areaServed: "AE", availableLanguage: ["en"] },
  ],
};

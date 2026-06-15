import { site } from "@/content/site";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://psicochiaralodovici.it";

/** Absolute URL for a path. */
export function url(path = "/"): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/** Stable @id anchors for the site-wide entities (linked from page nodes). */
export const ID = {
  website: `${SITE_URL}/#website`,
  chiara: `${SITE_URL}/#chiara`,
  studio: `${SITE_URL}/#studio`,
} as const;

const LANG = "it-IT";

/**
 * Site-wide JSON-LD: the website, the person (Chiara) and her practice (a
 * local Psychologist business). Local fields are emitted only when filled in
 * `site.business`.
 */
export function siteJsonLd() {
  const b = site.business;

  const address =
    b.streetAddress || b.addressLocality
      ? {
          "@type": "PostalAddress",
          ...(b.streetAddress ? { streetAddress: b.streetAddress } : {}),
          ...(b.addressLocality ? { addressLocality: b.addressLocality } : {}),
          ...(b.addressRegion ? { addressRegion: b.addressRegion } : {}),
          ...(b.postalCode ? { postalCode: b.postalCode } : {}),
          addressCountry: "IT",
        }
      : null;

  const sameAs = b.sameAs.length > 0 ? { sameAs: b.sameAs } : {};
  // The person also points to the public Albo register entry, a strong trust signal.
  const personSameAs = [...b.sameAs, ...(b.alboUrl ? [b.alboUrl] : [])];

  const website = {
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE_URL,
    name: site.name,
    inLanguage: LANG,
    publisher: { "@id": ID.chiara },
  };

  const person = {
    "@type": "Person",
    "@id": ID.chiara,
    name: site.name,
    jobTitle: "Psicologa",
    url: SITE_URL,
    image: url("/chiara.jpg"),
    email: `mailto:${site.email}`,
    description:
      "Psicologa e specializzanda in Psicoterapia Sistemico-Dialogica. Percorsi psicologici per adulti e adolescenti, individuali, di coppia e familiari.",
    knowsAbout: [
      "Psicologia",
      "Psicoterapia sistemico-dialogica",
      "Percorsi psicologici individuali",
      "Sostegno di coppia",
      "Percorsi familiari",
      "Adolescenti",
    ],
    ...(b.alboNumber
      ? {
          identifier: {
            "@type": "PropertyValue",
            name: "Iscrizione Albo degli Psicologi",
            value: b.alboNumber,
            ...(b.alboRegion ? { description: b.alboRegion } : {}),
          },
        }
      : {}),
    ...(personSameAs.length > 0 ? { sameAs: personSameAs } : {}),
  };

  const practice = {
    "@type": ["ProfessionalService", "Psychologist"],
    "@id": ID.studio,
    name: `${site.name} — Psicologa`,
    url: SITE_URL,
    image: url("/chiara.jpg"),
    email: `mailto:${site.email}`,
    founder: { "@id": ID.chiara },
    description:
      "Studio di psicologia: percorsi individuali, di coppia e familiari, formazioni esperienziali e laboratori.",
    ...(b.telephone ? { telephone: b.telephone } : {}),
    ...(b.areaServed ? { areaServed: b.areaServed } : {}),
    ...(address ? { address } : {}),
    ...sameAs,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, person, practice],
  };
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList for a page. Pass the trail starting at Home. */
export function breadcrumbJsonLd(trail: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: url(c.path),
    })),
  };
}

/** Chi sono → ProfilePage whose mainEntity is the Person. */
export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url("/chi-sono")}#profilepage`,
    url: url("/chi-sono"),
    name: `${site.chiSono.title} — ${site.name}`,
    inLanguage: LANG,
    isPartOf: { "@id": ID.website },
    mainEntity: { "@id": ID.chiara },
    about: { "@id": ID.chiara },
  };
}

/** Cosa faccio → catalog of the services, each provided by the practice. */
export function servicesJsonLd() {
  const b = site.business;
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${url("/cosa-faccio")}#servizi`,
    url: url("/cosa-faccio"),
    name: `Servizi di ${site.name}`,
    itemListElement: site.cosaFaccio.services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.text,
        serviceType: "Servizio psicologico",
        provider: { "@id": ID.studio },
        ...(b.areaServed ? { areaServed: b.areaServed } : {}),
      },
    })),
  };
}

/** Progetti (list) → CollectionPage with an ItemList of the projects. */
export function projectsCollectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url("/progetti")}#collection`,
    url: url("/progetti"),
    name: `${site.progetti.title} — ${site.name}`,
    inLanguage: LANG,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.chiara },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: site.progetti.items.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: url(`/progetti/${p.slug}`),
        name: p.title,
      })),
    },
  };
}

type Project = (typeof site.progetti.items)[number];

/** Progetto (detail) → CreativeWork created by the Person. */
export function projectJsonLd(project: Project) {
  const path = `/progetti/${project.slug}`;
  const image = project.image || project.logo;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url(path)}#project`,
    url: url(path),
    name: project.title,
    description: project.summary,
    inLanguage: LANG,
    isPartOf: { "@id": ID.website },
    creator: { "@id": ID.chiara },
    author: { "@id": ID.chiara },
    ...(image ? { image: url(image) } : {}),
  };
}

/** Contatti → ContactPage about the practice. */
export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url("/contatti")}#contactpage`,
    url: url("/contatti"),
    name: `Contatti — ${site.name}`,
    inLanguage: LANG,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.studio },
  };
}

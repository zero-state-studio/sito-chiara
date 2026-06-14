import { site } from "@/content/site";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://psicochiaralodovici.it";

/** Absolute URL for a path. */
export function url(path = "/"): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Site-wide JSON-LD: the person (Chiara) and her practice (a local
 * Psychologist business). Local fields are emitted only when filled in
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
          ...(b.postalCode ? { postalCode: b.postalCode } : {}),
          addressCountry: "IT",
        }
      : null;

  const sameAs = b.sameAs.length > 0 ? { sameAs: b.sameAs } : {};

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#chiara`,
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
    ...sameAs,
  };

  const practice = {
    "@type": ["ProfessionalService", "Psychologist"],
    "@id": `${SITE_URL}/#studio`,
    name: `${site.name} — Psicologa`,
    url: SITE_URL,
    image: url("/chiara.jpg"),
    email: `mailto:${site.email}`,
    founder: { "@id": `${SITE_URL}/#chiara` },
    description:
      "Studio di psicologia: percorsi individuali, di coppia e familiari, formazioni esperienziali e laboratori.",
    ...(b.telephone ? { telephone: b.telephone } : {}),
    ...(b.areaServed ? { areaServed: b.areaServed } : {}),
    ...(address ? { address } : {}),
    ...sameAs,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, practice],
  };
}

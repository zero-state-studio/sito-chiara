import type { Metadata } from "next";
import Script from "next/script";
import { Literata, Nunito, Caveat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { site } from "@/content/site";
import { SITE_URL, siteJsonLd } from "@/lib/seo";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const description =
  "Chiara Lodovici, psicologa: percorsi individuali, di coppia e familiari, formazioni e laboratori. Uno spazio per osservarsi e acquisire consapevolezza.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description,
    type: "website",
    locale: "it_IT",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${literata.variable} ${nunito.variable} ${caveat.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2 focus:text-ink"
        >
          Salta al contenuto
        </a>
        <ScrollToTop />
        <Navbar />
        <main id="main" className="flex-1 pt-[4.5rem]">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="0ad99cb2-0917-48bd-93a3-d9628b2b2c67"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import "../styles/globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} · ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Bluhmwerk",
    "software sob medida",
    "logística",
    "Compartilha",
    "Pallet Control",
    "rastreabilidade",
    "automação operacional",
    "São Paulo",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.shortName} · ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} · Tecnologia sob medida`,
    description: site.tagline,
  },
  icons: {
    icon: "/logo-mark.svg",
    shortcut: "/logo-mark.svg",
    apple: "/logo-mark.svg",
  },
  alternates: {
    canonical: site.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/assets/BluhmwerkLogo.png`,
      foundingDate: String(site.founded),
      founder: { "@type": "Person", name: site.founder },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.contact.phoneRaw,
        email: site.contact.email,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.shortName,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "pt-BR",
    },
    ...products.map((product) => ({
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      offers: { "@type": "Offer", priceCurrency: "BRL" },
      provider: { "@id": `${site.url}/#organization` },
      url: `${site.url}/produtos/${product.slug}`,
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSans.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

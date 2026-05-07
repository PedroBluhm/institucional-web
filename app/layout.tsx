import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
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
  metadataBase: new URL("https://www.bluhmwerk.com"),
  title: {
    default: "Bluhmwerk · Inteligência que rastreia, tecnologia que entrega",
    template: "%s · Bluhmwerk",
  },
  description:
    "Bluhmwerk Tecnologia Ltda. desenvolve software sob medida para operações logísticas e corporativas que não podem parar. Suite Compartilha, integração sistêmica e controle real.",
  keywords: [
    "Bluhmwerk",
    "software sob medida",
    "logística",
    "Compartilha",
    "Pallet Control",
    "rastreabilidade",
    "automação operacional",
  ],
  authors: [{ name: "Bluhmwerk Tecnologia Ltda." }],
  openGraph: {
    title: "Bluhmwerk · Inteligência que rastreia, tecnologia que entrega",
    description:
      "Software sob medida para operações que precisam de controle real, integração e visibilidade contínua.",
    url: "https://www.bluhmwerk.com",
    siteName: "Bluhmwerk",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluhmwerk · Tecnologia sob medida",
    description:
      "Inteligência que rastreia, tecnologia que entrega. Software para operações que não podem parar.",
  },
  icons: {
    icon: "/logo-mark.svg",
    shortcut: "/logo-mark.svg",
    apple: "/logo-mark.svg",
  },
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
      <body>{children}</body>
    </html>
  );
}

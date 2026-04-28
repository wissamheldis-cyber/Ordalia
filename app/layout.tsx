import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { organizationJsonLd, serviceJsonLd } from "@/lib/seo";
import { faqJsonLd } from "@/lib/faq";
import { ParallaxGlow } from "@/components/motion/ParallaxGlow";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ordalia.fr"),
  title: { default: "Ordalia — Audit de visibilité IA dès 290€ HT", template: "%s | Ordalia" },
  description: "Ordalia aide les entreprises à comprendre comment elles sont perçues, sélectionnées ou ignorées par ChatGPT, Claude, Gemini et Perplexity.",
  openGraph: { title: "Ordalia — AI Trust & Visibility Systems", description: "Audit de visibilité, perception algorithmique, recommandation et réputation IA.", url: "https://ordalia.fr", siteName: "Ordalia", locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "Ordalia", description: "Rendre visible ce qui se décide ailleurs. Audit IA premium." },
  keywords: ["audit visibilité IA", "audit IA entreprise", "audit ChatGPT entreprise", "visibilité IA entreprise", "perception IA entreprise", "réputation IA entreprise", "GEO France", "AI SEO", "Ordalia"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geist.variable} font-sans antialiased`}>
        <div className="noise" /><div className="bg-orb" /><ParallaxGlow />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        {children}
      </body>
    </html>
  );
}

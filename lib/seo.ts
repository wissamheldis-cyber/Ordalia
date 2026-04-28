export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ordalia",
  url: "https://ordalia.fr",
  logo: "https://ordalia.fr/assets/brand/ordalia-logo-main.svg",
  description:
    "Ordalia aide les entreprises à comprendre comment elles sont perçues, sélectionnées ou ignorées par les plateformes d'IA comme ChatGPT, Claude et Gemini.",
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit de visibilité IA & GEO",
  provider: { "@type": "Organization", name: "Ordalia" },
  areaServed: "France",
  offers: {
    "@type": "Offer",
    price: "290",
    priceCurrency: "EUR",
    description: "Audit stratégique de visibilité IA à partir de 290€ HT.",
  },
};

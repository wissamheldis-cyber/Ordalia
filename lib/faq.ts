export const faqs = [
  {
    q: "Qu’est-ce qu’un audit de visibilité ?",
    a: "C’est un diagnostic qui observe comment votre entreprise est comprise, citée ou absente dans les nouveaux environnements de réponse et de recommandation.",
  },
  {
    q: "Est-ce différent du SEO ?",
    a: "Oui. Le SEO travaille la présence dans les moteurs de recherche. Ordalia mesure aussi la perception, la recommandation, l’exactitude et la concurrence dans les réponses.",
  },
  {
    q: "Garantissez-vous une recommandation ?",
    a: "Non. Personne ne peut garantir sérieusement cela. Ordalia vend une mesure, une compréhension et des leviers d’amélioration.",
  },
  {
    q: "Que contient l’Audit Express à 290€ HT ?",
    a: "Une première lecture : requêtes essentielles, présence ou absence, concurrents visibles, premières observations et rapport synthétique.",
  },
  {
    q: "À qui s’adresse Ordalia ?",
    a: "Aux entreprises où la confiance, la réputation et la recommandation comptent : avocats, experts-comptables, immobilier premium, conseil, praticiens privés, agences spécialisées.",
  },
  {
    q: "Que se passe-t-il après l’audit ?",
    a: "Vous pouvez corriger les fondations : pages de preuve, contenus d’autorité, FAQ, données structurées, cohérence multi-source et monitoring.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

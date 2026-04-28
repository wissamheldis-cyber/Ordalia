export type ArticleSection = {
  heading: string;
  body: string;
  image?: string;
  note?: string;
};

export type Article = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readingTime: string;
  coverImage: string;
  images: string[];
  excerpt: string;
  sections: ArticleSection[];
  metaTitle?: string;
  metaDescription?: string;
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "pourquoi-les-moteurs-de-reponse-changent-la-visibilite-des-entreprises",
    title: "Pourquoi les moteurs de réponse changent la visibilité des entreprises",
    subtitle: "Le choix peut commencer avant le clic. C’est discret, mais stratégique.",
    category: "Marché",
    date: "2026-04-28",
    readingTime: "7 min",
    coverImage: "/assets/resources/article-01-cover.png",
    images: [
      "/assets/resources/article-01-image-a.png",
      "/assets/resources/article-01-image-b.png",
      "/assets/resources/article-01-image-c.png"
    ],
    excerpt: "Les moteurs de réponse déplacent une partie de la décision avant le clic. Pour les entreprises, la visibilité ne consiste plus seulement à être trouvées, mais à être correctement comprises et recommandées.",
    metaTitle: "Pourquoi les moteurs de réponse changent la visibilité des entreprises",
    metaDescription: "Découvrez comment ChatGPT, Claude, Gemini et Perplexity transforment la visibilité des entreprises, et pourquoi l’audit de visibilité IA devient stratégique.",
    sections: [
      {
        heading: "Le basculement de la recherche vers la réponse",
        body: "Pendant des décennies, le SEO consistait à apparaître dans une liste de liens. Aujourd'hui, ChatGPT ou Perplexity synthétisent l'information pour offrir une réponse unique. L'enjeu n'est plus d'être dans le top 10, mais d'être la réponse.",
        note: "Point clé : la visibilité devient une question de sémantique et de confiance algorithmique."
      },
      {
        heading: "La recommandation algorithmique",
        body: "Lorsqu'une IA recommande un cabinet d'avocats ou une agence, elle se base sur des signaux de confiance qu'elle a ingérés. Si vos données sont obsolètes ou absentes, vous n'existez tout simplement pas dans sa recommandation.",
        image: "/assets/resources/article-01-image-a.png"
      },
      {
        heading: "Pourquoi l'audit devient indispensable",
        body: "Sans mesure, il est impossible de savoir ce que l'IA dit de vous. L'audit de visibilité IA permet de cartographier votre présence et d'identifier les angles morts avant que vos concurrents ne s'en emparent."
      }
    ]
  },
  {
    id: 2,
    slug: "seo-geo-perception-comprendre-ce-qui-change-vraiment",
    title: "SEO, GEO, perception : comprendre ce qui change vraiment",
    subtitle: "Le sujet ne se résume pas à un acronyme. Il touche à la confiance et à la recommandation.",
    category: "Méthode",
    date: "2026-04-28",
    readingTime: "8 min",
    coverImage: "/assets/resources/article-02-cover.png",
    images: [
      "/assets/resources/article-02-image-a.png",
      "/assets/resources/article-02-image-b.png",
      "/assets/resources/article-02-image-c.png"
    ],
    excerpt: "SEO, GEO et perception IA ne s’opposent pas. Ce sont trois couches complémentaires pour comprendre comment une entreprise est trouvée, citée et réellement comprise.",
    metaTitle: "SEO, GEO, perception IA : comprendre les différences",
    metaDescription: "Comprenez la différence entre SEO, GEO et perception IA, et pourquoi la visibilité sur ChatGPT, Claude, Gemini et Perplexity devient une nouvelle couche stratégique.",
    sections: [
      {
        heading: "Le SEO : la fondation technique",
        body: "Le SEO classique reste la base. Il assure que votre site est explorable et indexable par les robots. Sans un bon SEO, l'IA aura du mal à accéder à vos sources officielles.",
      },
      {
        heading: "Le GEO : l'optimisation pour l'IA",
        body: "Le Generative Engine Optimization (GEO) est l'art de structurer vos contenus pour qu'ils soient facilement citables par les LLMs. C'est une couche de lisibilité machine qui s'ajoute au SEO.",
        image: "/assets/resources/article-02-image-a.png"
      },
      {
        heading: "La Perception : le signal de confiance",
        body: "Au-delà de la technique, l'IA évalue la perception de votre marque à travers le web. C'est ici que la réputation et l'autorité deviennent des facteurs techniques de classement.",
        note: "L'IA ne cherche pas le meilleur site, mais la source la plus crédible."
      }
    ]
  },
  {
    id: 3,
    slug: "ce-que-les-analytics-ne-voient-pas-quand-la-recommandation-se-deplace",
    title: "Ce que les analytics ne voient pas quand la recommandation se déplace",
    subtitle: "Certains signaux disparaissent avant même de devenir du trafic.",
    category: "Analyse",
    date: "2026-04-28",
    readingTime: "6 min",
    coverImage: "/assets/resources/article-03-cover.png",
    images: [
      "/assets/resources/article-03-image-a.png",
      "/assets/resources/article-03-image-b.png",
      "/assets/resources/article-03-image-c.png"
    ],
    excerpt: "Les analytics mesurent ce qui arrive sur votre site. Ils ne mesurent pas toujours les décisions qui ont empêché certains prospects d’arriver.",
    metaTitle: "Ce que les analytics ne voient pas quand la recommandation se déplace",
    metaDescription: "Découvrez pourquoi les analytics classiques ne captent pas toutes les opportunités invisibles créées par ChatGPT, Perplexity et les moteurs de réponse.",
    sections: [
      {
        heading: "Le silence des données classiques",
        body: "Google Analytics voit le clic. Mais il est aveugle face à l'utilisateur qui a posé une question à ChatGPT, a reçu une recommandation pour un concurrent, et a pris sa décision sans jamais visiter votre site.",
      },
      {
        heading: "Le parcours utilisateur sans clic",
        body: "Nous entrons dans l'ère du 'Zero-Click'. L'information circule directement dans l'interface de l'IA. Si vous n'êtes pas dans la réponse, vous perdez un prospect sans même savoir qu'il existait.",
        image: "/assets/resources/article-03-image-a.png"
      },
      {
        heading: "Mesurer l'impact réel",
        body: "Pour capter cette perte invisible, il faut changer d'outil. L'audit Ordalia simule ces parcours pour vous donner une visibilité sur ce que vos analytics ignorent par définition.",
        note: "Note technique : le trafic direct augmente souvent au détriment de l'organique identifié."
      }
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

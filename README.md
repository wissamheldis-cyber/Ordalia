# ORDALIA — Final Premium v3

Site Next.js 15 + TypeScript + Tailwind + Framer Motion.

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Pages

- `/` : landing page
- `/resources` : catalogue d’articles
- `/resources/[slug]` : template dynamique d’article

## Assets

Les médias sont volontairement en slots discrets. Ajoute tes vrais fichiers dans `/public/assets`.

## Ajouter un article

Modifie `lib/articles.ts` et ajoute un objet article. La page dynamique est générée automatiquement.

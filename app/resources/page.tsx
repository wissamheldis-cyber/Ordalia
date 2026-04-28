import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { AnimatedLiquidGlassFrame } from "@/components/motion/AnimatedLiquidGlassFrame";
import { ImageSlot } from "@/components/ImageSlot";
import { articles } from "@/lib/articles";

export const metadata: Metadata = { title: "Ressources & recherches", description: "Tendances, analyses et ressources Ordalia." };

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 pb-24 pt-36 sm:px-8">
        <section className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-cyan/70">Ressources & recherches</p>
            <h1 className="gradient-text text-4xl font-black tracking-[-0.06em] sm:text-6xl">Tendances, analyses & ressources.</h1>
            <p className="mt-5 text-lg leading-8 text-mist/60">Des lectures sobres sur la visibilité, la réputation et les moteurs de réponse.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <Link href={`/resources/${article.slug}`} key={article.slug}>
                <AnimatedLiquidGlassFrame className="p-3">
                  <div className="h-44 overflow-hidden rounded-[1.45rem]"><ImageSlot src={article.coverImage} name={article.title} imageClassName="h-full w-full object-cover" /></div>
                  <div className="p-3"><p className="text-xs font-black uppercase tracking-[0.18em] text-cyan/70">{article.category} · {article.readingTime}</p><h2 className="mt-3 text-xl font-black tracking-[-0.045em] text-mist">{article.title}</h2><p className="mt-3 text-sm leading-6 text-mist/54">{article.excerpt}</p><p className="mt-5 text-sm font-black text-cyan">Lire</p></div>
                </AnimatedLiquidGlassFrame>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

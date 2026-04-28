import Link from "next/link";
import { articles } from "@/lib/articles";
import { ImageSlot } from "./ImageSlot";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";

export function ResourcesPreview() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader title="Ressources & recherches." subtitle="Des analyses sobres sur la visibilité, la réputation et les moteurs de réponse." />
        <div className="grid gap-5 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <Link key={article.slug} href={`/resources/${article.slug}`}>
              <AnimatedLiquidGlassFrame className="p-3 transition hover:-translate-y-1">
                <div className="h-44 overflow-hidden rounded-[1.45rem]"><ImageSlot src={article.coverImage} name={article.title} imageClassName="h-full w-full object-cover" /></div>
                <div className="p-3">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan/70">{article.category} · {article.readingTime}</p>
                  <h3 className="mt-3 text-xl font-black tracking-[-0.045em] text-mist">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-mist/54">{article.excerpt}</p>
                </div>
              </AnimatedLiquidGlassFrame>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

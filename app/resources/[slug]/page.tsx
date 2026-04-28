import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { AnimatedLiquidGlassFrame } from "@/components/motion/AnimatedLiquidGlassFrame";
import { ImageSlot } from "@/components/ImageSlot";
import { articles, getArticleBySlug } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { 
    title: article.metaTitle || article.title, 
    description: article.metaDescription || article.excerpt 
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen px-6 pb-24 pt-36 sm:px-8">
        <article className="mx-auto max-w-[1120px]">
          <Link href="/resources" className="text-sm font-black text-cyan">← Ressources</Link>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div><p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-cyan/70">{article.category} · {article.readingTime}</p><h1 className="gradient-text text-4xl font-black tracking-[-0.06em] sm:text-6xl">{article.title}</h1><p className="mt-5 text-lg leading-8 text-mist/60">{article.subtitle}</p></div>
            <AnimatedLiquidGlassFrame className="min-h-[280px] p-3"><ImageSlot src={article.coverImage} name={article.title} imageClassName="h-full min-h-[260px] w-full object-cover rounded-[1.4rem]" /></AnimatedLiquidGlassFrame>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_310px]">
            <div className="space-y-7">
              {article.sections.map((section) => (
                <AnimatedLiquidGlassFrame key={section.heading} className="p-6">
                  <h2 className="text-2xl font-black tracking-[-0.045em] text-mist">{section.heading}</h2>
                  <p className="mt-4 leading-8 text-mist/62">{section.body}</p>
                  {section.note && <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 p-5"><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan/70">Note Ordalia</p><p className="mt-2 text-mist/70">{section.note}</p></div>}
                  {section.image && <div className="mt-6 h-64"><ImageSlot src={section.image} name={section.heading} imageClassName="h-full w-full object-cover rounded-2xl" /></div>}
                </AnimatedLiquidGlassFrame>
              ))}
            </div>
            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              {article.images.map((img, i) => <AnimatedLiquidGlassFrame key={img} className="h-44 p-2"><ImageSlot src={img} name={`Image ${i + 1}`} imageClassName="h-full w-full object-cover rounded-[1.2rem]" /></AnimatedLiquidGlassFrame>)}
            </aside>
          </div>
          <AnimatedLiquidGlassFrame className="mt-14 p-8 text-center sm:p-12" intensity="high"><h2 className="gradient-text mx-auto max-w-2xl text-3xl font-black tracking-[-0.05em] sm:text-5xl">Commencer votre analyse.</h2><p className="mt-4 text-mist/58">À partir de 290€ HT.</p><a href="/#contact" className="liquid-edge mt-8 inline-flex rounded-xl border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-black uppercase tracking-[0.05em] text-mist">Demander un audit</a></AnimatedLiquidGlassFrame>
        </article>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

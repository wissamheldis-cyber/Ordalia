"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";
import { fadeUp, staggerContainer } from "@/lib/motion";

const plans = [
  { name: "Audit Express", price: "290€ HT", label: "Point d’entrée", text: "Première lecture de votre exposition.", items: ["Requêtes essentielles", "Présence / absence", "Concurrents visibles", "Rapport synthétique"] },
  { name: "Audit Standard", price: "490€ HT", label: "Recommandé", text: "Analyse complète, benchmark et priorités.", featured: true, items: ["Tests multi-systèmes", "Benchmark concurrents", "Scores Ordalia", "Plan 30 jours", "Rapport premium"] },
  { name: "Audit Executive", price: "890€ HT", label: "Stratégique", text: "Restitution poussée et roadmap.", items: ["Tout le Standard", "Réputation", "Audit site rapide", "Restitution 30 min", "Roadmap"] },
];

export function Pricing() {
  return (
    <section id="offres" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader title="Mesurer. Comprendre. Prioriser." subtitle="Un premier diagnostic à partir de 290€ HT. Sans promesse magique. Avec méthode." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp} className={plan.featured ? "lg:-mt-5" : ""}>
              <AnimatedLiquidGlassFrame className="p-6" intensity={plan.featured ? "high" : "medium"}>
                <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan">{plan.label}</p>
                <h3 className="text-2xl font-black tracking-[-0.05em] text-mist">{plan.name}</h3>
                <p className="mt-2 text-sm leading-6 text-mist/58">{plan.text}</p>
                <p className="mt-7 text-4xl font-black tracking-[-0.06em] text-mist">{plan.price}</p>
                <div className="mt-7 space-y-3">{plan.items.map((item) => <div key={item} className="flex gap-3 text-sm text-mist/62"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{item}</div>)}</div>
                <a href="#contact" className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/14 bg-white/[0.06] text-sm font-black uppercase tracking-[0.04em] text-mist transition hover:-translate-y-1 hover:bg-white/[0.10]">Demander</a>
              </AnimatedLiquidGlassFrame>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

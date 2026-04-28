"use client";
import { assets } from "@/lib/assets";
import { ImageSlot } from "./ImageSlot";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Search, Users, AlertCircle, TrendingUp, ShieldCheck } from "lucide-react";

const reportFeatures = [
  { title: "Requêtes testées", icon: Search, desc: "Analyse des questions critiques posées par vos clients." },
  { title: "Concurrents visibles", icon: Users, desc: "Identification des acteurs qui captent votre audience." },
  { title: "Absences & Erreurs", icon: AlertCircle, desc: "Détection des hallucinations ou omissions graves." },
  { title: "Signaux de confiance", icon: ShieldCheck, desc: "Vérification de la lisibilité de vos preuves par l'IA." },
  { title: "Scores Ordalia", icon: BadgeCheck, desc: "Mesure précise de votre indice de recommandation." },
  { title: "Plan d'action 30j", icon: TrendingUp, desc: "Corrections prioritaires pour réintégrer les réponses." },
];

export function Report() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  
  return (
    <section id="rapport" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader 
          eyebrow="Le Livrable"
          title="Un rapport stratégique. Pas un jargon de technicien." 
          subtitle="Présence, absence, benchmark concurrentiel et roadmap de correction. Conçu pour être actionnable immédiatement." 
        />
        
        <div ref={ref} className="grid items-start gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div style={{ y }} className="sticky top-32">
            <AnimatedLiquidGlassFrame className="aspect-[4/5] sm:aspect-auto sm:min-h-[520px] p-4" intensity="high">
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-black/40">
                <ImageSlot src={assets.report.preview} name="Aperçu rapport Ordalia" imageClassName="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-xs font-black uppercase tracking-widest text-cyan/80">Audit Executive</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Analyse de Perception Multi-Modèles</h3>
                </div>
              </div>
            </AnimatedLiquidGlassFrame>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-1">
            {reportFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimatedLiquidGlassFrame key={feature.title} className="p-6 transition-all hover:translate-x-2" intensity="low">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <Icon className="h-6 w-6 text-cyan" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black tracking-tight text-mist">{feature.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-mist/50">{feature.desc}</p>
                    </div>
                  </div>
                </AnimatedLiquidGlassFrame>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

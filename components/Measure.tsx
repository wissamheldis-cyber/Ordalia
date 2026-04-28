"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Eye, Shield, Target, UsersRound } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";

const cards = [
  { title: "Visibilité", icon: Eye, text: "Présence dans les réponses pertinentes.", value: 68, color: "text-cyan" },
  { title: "Exactitude", icon: BadgeCheck, text: "Justesse des informations citées.", value: 42, color: "text-blue-400" },
  { title: "Confiance", icon: Shield, text: "Lisibilité de vos preuves d'autorité.", value: 15, color: "text-amber-400" },
  { title: "Concurrence", icon: UsersRound, text: "Part de voix face aux challengers.", value: 84, color: "text-rose-400" },
  { title: "Recommandation", icon: Target, text: "Indice de préférence algorithmique.", value: 22, color: "text-emerald-400" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Measure() {
  return (
    <section id="methode" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader 
          eyebrow="Méthodologie"
          title="Ce qu’Ordalia mesure." 
          subtitle="Peu de bruit. Des signaux clairs. Une lecture exploitable pour vos décisions stratégiques." 
        />
        
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="grid gap-5 md:grid-cols-5"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={fadeUp}>
                <AnimatedLiquidGlassFrame className="group min-h-[260px] p-6 transition-all hover:-translate-y-2" intensity="low">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                      <Icon className={`h-5 w-5 ${card.color}`} />
                    </div>
                    <span className={`text-2xl font-black tabular-nums ${card.color}`}>{card.value}%</span>
                  </div>
                  
                  <h3 className="text-xl font-black tracking-tight text-mist">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/40">{card.text}</p>
                  
                  {/* Jauge de niveau */}
                  <div className="mt-8">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${card.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className={`h-full rounded-full bg-gradient-to-r from-white/20 to-current ${card.color.replace('text-', 'bg-')}`}
                        style={{ backgroundColor: 'currentColor' }}
                      />
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] font-black uppercase tracking-widest text-mist/20">
                      <span>Critique</span>
                      <span>Optimal</span>
                    </div>
                  </div>
                </AnimatedLiquidGlassFrame>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

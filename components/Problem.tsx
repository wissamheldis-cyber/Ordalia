"use client";

import { motion } from "framer-motion";
import { ArrowRight, EyeOff, MousePointerClick, Search, UserRoundCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";

const steps = [
  { label: "Question posée", icon: Search, desc: "L'utilisateur interroge l'IA." },
  { label: "Choix orienté", icon: UserRoundCheck, desc: "L'algorithme suggère des noms." },
  { label: "Site jamais visité", icon: MousePointerClick, desc: "La décision est prise sans clic." },
  { label: "Perte invisible", icon: EyeOff, desc: "Zéro trace dans vos analytics." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8, // Temps entre chaque bloc pour bien voir la chaîne se former
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const arrowVariants = {
  hidden: { opacity: 0, scale: 0, x: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { delay: 0.4, duration: 0.4, ease: "backOut" }
  },
};

export function Problem() {
  return (
    <section id="probleme" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader 
          eyebrow="Problème" 
          title="Ce que vous perdez n’apparaît peut-être nulle part." 
          subtitle="Une recommandation peut avoir lieu ailleurs, sans passer par votre site, sans appel manqué, sans formulaire abandonné." 
        />
        
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="grid gap-6 md:grid-cols-4"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="relative flex flex-col items-center md:block">
                {/* Flèche entre les blocs */}
                {i < steps.length - 1 && (
                  <motion.div 
                    variants={arrowVariants}
                    className="absolute -right-6 top-[85px] z-20 hidden md:block"
                  >
                    <ArrowRight className="h-6 w-6 text-cyan/40" />
                  </motion.div>
                )}
                
                {/* Flèche pour le mobile (verticale) */}
                {i < steps.length - 1 && (
                  <motion.div 
                    variants={arrowVariants}
                    className="z-20 my-4 rotate-90 md:hidden"
                  >
                    <ArrowRight className="h-6 w-6 text-cyan/40" />
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <AnimatedLiquidGlassFrame className="group min-h-[200px] p-6 transition-all hover:border-cyan/30" intensity="low">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors group-hover:bg-cyan/5">
                      <Icon className="h-6 w-6 text-cyan" />
                    </div>
                    <p className="text-xl font-black tracking-tight text-mist">{step.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-mist/40">{step.desc}</p>
                  </AnimatedLiquidGlassFrame>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

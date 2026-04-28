"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Search, XCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";

export function Demo() {
  const findings = [
    { 
      label: "Concurrent cité", 
      value: "Présence forte", 
      Icon: CheckCircle2, 
      color: "text-emerald-400", 
      bg: "bg-emerald-500/10", 
      border: "border-emerald-500/20" 
    },
    { 
      label: "Source faible", 
      value: "Données obsolètes", 
      Icon: AlertCircle, 
      color: "text-amber-400", 
      bg: "bg-amber-500/10", 
      border: "border-amber-500/20" 
    },
    { 
      label: "Votre nom", 
      value: "Totalement absent", 
      Icon: XCircle, 
      color: "text-rose-400", 
      bg: "bg-rose-500/10", 
      border: "border-rose-500/20" 
    },
  ];

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeader title="Une seule requête peut révéler un angle mort." />
        
        <AnimatedLiquidGlassFrame className="mx-auto max-w-4xl p-6 sm:p-8" intensity="high">
          {/* Barre de recherche simulée avec effet de scan */}
          <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-6">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan/10 to-transparent"
            />
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan/10">
                <Search className="h-5 w-5 text-cyan" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan/70">Requête en cours d'analyse</p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl"
                >
                  “Quel cabinet recommander à Paris pour un litige immobilier ?”
                </motion.p>
              </div>
            </div>
          </div>

          {/* Grille de résultats avec couleurs sémantiques */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {findings.map((item, i) => {
              const Icon = item.Icon;
              return (
                <motion.div 
                  key={item.label} 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                  className={`group relative rounded-2xl border ${item.border} ${item.bg} p-6 backdrop-blur-xl transition-all hover:scale-[1.02]`}
                >
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border ${item.border} bg-black/20`}>
                    <Icon className={`h-6 w-6 ${item.color} transition-transform group-hover:scale-110`} />
                  </div>
                  
                  <p className="text-sm font-black uppercase tracking-widest text-mist/40">{item.label}</p>
                  <p className={`mt-2 text-lg font-black tracking-tight ${item.color}`}>{item.value}</p>
                  
                  {/* Petit pulse discret pour les alertes */}
                  {(item.color === "text-rose-400" || item.color === "text-amber-400") && (
                    <motion.div 
                      animate={{ opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute right-4 top-4 h-2 w-2 rounded-full ${item.color.replace('text-', 'bg-')}`}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-mist/30 italic">Analyse effectuée sur 4 modèles d'IA (GPT-4, Claude 3.5, Gemini 1.5, Perplexity)</p>
          </div>
        </AnimatedLiquidGlassFrame>
      </div>
    </section>
  );
}

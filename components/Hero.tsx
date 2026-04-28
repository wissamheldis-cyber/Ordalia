"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Paperclip, Send } from "lucide-react";
import { assets } from "@/lib/assets";
import { VideoSlot } from "./VideoSlot";
import { ImageSlot } from "./ImageSlot";
import { HeroStats } from "./HeroStats";
import { MagneticButton } from "./motion/MagneticButton";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-8 pt-28 sm:px-8 lg:pt-32">
      <div className="mx-auto grid w-full max-w-[1260px] flex-1 items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={reduce ? undefined : { opacity: 0, y: 28, filter: "blur(10px)" }} animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .72 }} className="text-center lg:text-left">
          <h1 className="gradient-text mx-auto max-w-[720px] text-4xl font-black leading-[1.05] tracking-[-0.065em] sm:text-6xl lg:mx-0 lg:text-[4.35rem]">
            Et si certaines décisions étaient prises avant même que vous ne soyez trouvé ?
          </h1>
          <p className="mt-8 text-lg font-medium leading-relaxed text-mist/80 sm:text-xl lg:max-w-[580px]">
            Le SEO vous rend visible sur Google. <br className="hidden sm:block" />
            Ordalia vous rend <span className="text-white font-bold">lisible</span> par ChatGPT, Claude, Gemini et Perplexity.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start">
            <MagneticButton href="#contact" className="px-8 py-4 text-base sm:px-10 sm:text-xl">Demander un audit IA</MagneticButton>
          </div>
          <p className="mx-auto mt-5 max-w-md text-sm font-medium text-mist/50 lg:mx-0 italic">Audit de visibilité IA à partir de 290€ HT, sans engagement long.</p>
        </motion.div>

        <motion.div initial={reduce ? undefined : { opacity: 0, y: 34, scale: .98, filter: "blur(10px)" }} animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} transition={{ duration: .8, delay: .15 }} className="lg:justify-self-end">
          <motion.div animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="liquid-frame liquid-edge relative mx-auto min-h-[380px] max-w-[560px] rounded-[2.5rem] p-5 sm:min-h-[440px] sm:p-8">
            <div className="absolute inset-0 z-0">
              <VideoSlot src={assets.hero.video} poster={assets.hero.poster} name="Hero Ordalia demo" videoClassName="h-full w-full object-cover opacity-35" />
            </div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10" />
                <div className="rounded-2xl border border-white/16 bg-white/[0.08] px-4 py-3 text-xs font-medium text-mist/90 backdrop-blur-md">
                  Quel cabinet recommander à Paris pour un litige immobilier ?
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-[auto_1fr] items-start gap-4">
                <div className="mt-1 h-10 w-10 rounded-full border border-white/15 bg-black/40 p-1.5 shadow-glow">
                  <ImageSlot src={assets.brand.mark} name="Symbole Ordalia" imageClassName="h-full w-full object-contain" />
                </div>
                <div className="rounded-[1.5rem] border border-white/13 bg-white/[0.07] p-5 text-left text-[13px] leading-relaxed text-mist/88 shadow-liquid backdrop-blur-xl">
                  <p className="mb-3 font-semibold text-cyan">Réponse de l'IA :</p>
                  <p className="mb-3">Voici 3 cabinets régulièrement cités pour leur expertise :</p>
                  <ul className="space-y-1.5 opacity-70">
                    <li className="flex gap-2"><span>•</span> <span className="blur-[2px]">Cabinet Dupont & Associés</span></li>
                    <li className="flex gap-2"><span>•</span> <span className="blur-[2px]">Cabinet Lefebvre Immobilier</span></li>
                    <li className="flex gap-2"><span>•</span> <span className="blur-[2px]">Groupe Juris-Immo</span></li>
                  </ul>
                  <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-mist/90">
                    <span className="font-bold text-red-400 block mb-1">Alerte Visibilité :</span>
                    Votre cabinet n'apparaît pas dans cette sélection stratégique.
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-mist/40 backdrop-blur-xl">
                <span className="h-5 w-px animate-pulse bg-mist/40" />
                <div className="ml-auto flex items-center gap-3">
                  <Paperclip className="h-5 w-5" />
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-mist"><Send className="h-4 w-4" /></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <HeroStats />
      <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.12em] text-mist/42">ORDALIA © 2026 — L'AUDIT DE VISIBILITÉ IA PREMIUM</p>
    </section>
  );
}

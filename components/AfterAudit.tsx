"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";

const steps = ["Audit", "Diagnostic", "Priorisation", "Corrections", "Monitoring"];

export function AfterAudit() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 35%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1080px]">
        <SectionHeader title="Mesurer d’abord. Corriger ensuite." />
        <div ref={ref} className="relative grid gap-4 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-white/10 md:block" />
          <motion.div style={{ scaleX }} className="absolute left-0 right-0 top-1/2 hidden h-px origin-left bg-gradient-to-r from-cyan to-violet md:block" />
          {steps.map((step, i) => (
            <AnimatedLiquidGlassFrame key={step} className="p-5 text-center" intensity={i === 0 ? "medium" : "low"}>
              <p className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-black text-cyan">{i + 1}</p>
              <p className="font-black text-mist">{step}</p>
            </AnimatedLiquidGlassFrame>
          ))}
        </div>
      </div>
    </section>
  );
}

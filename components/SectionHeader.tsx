"use client";
import { motion } from "framer-motion";
import { blurIn } from "@/lib/motion";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div variants={blurIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-cyan/70">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black tracking-[-0.06em] text-mist sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg leading-8 text-mist/62">{subtitle}</p>}
    </motion.div>
  );
}

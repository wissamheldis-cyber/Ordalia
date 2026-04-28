"use client";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { faqs, faqJsonLd } from "@/lib/faq";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-6 py-24 sm:px-8 sm:py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <SectionHeader title="Questions fréquentes." />
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <AnimatedLiquidGlassFrame key={item.q} className="p-5" intensity="low">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-5 text-left text-base font-black text-mist">
                {item.q}
                <motion.span animate={{ rotate: open === i ? 180 : 0 }}><ChevronDown className="h-5 w-5 text-cyan" /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-4 leading-7 text-mist/58">{item.a}</motion.p>}
              </AnimatePresence>
            </AnimatedLiquidGlassFrame>
          ))}
        </div>
      </div>
    </section>
  );
}

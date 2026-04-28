"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ParallaxGlow() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute left-[8%] top-[18%] h-80 w-80 rounded-full bg-cyan/5 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute right-[5%] top-[45%] h-96 w-96 rounded-full bg-violet/5 blur-3xl" />
    </div>
  );
}

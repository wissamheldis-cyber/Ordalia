"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollProgressLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <div ref={ref} className={`h-px origin-left bg-white/10 ${className}`}><motion.div style={{ scaleX }} className="h-px origin-left bg-gradient-to-r from-cyan to-violet" /></div>;
}

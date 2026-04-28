"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function MagneticButton({ children, href, className = "" }: { children: ReactNode; href: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={href}
      whileHover={reduce ? undefined : { y: -4 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      className={`liquid-edge inline-flex items-center justify-center rounded-[1.05rem] border border-white/20 bg-white/[0.04] font-black uppercase tracking-[0.05em] text-mist shadow-button backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.a>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  intensity?: "low" | "medium" | "high";
  hoverable?: boolean;
  animated?: boolean;
  className?: string;
};

export function AnimatedLiquidGlassFrame({
  children,
  intensity = "medium",
  hoverable = true,
  animated = true,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const glow = intensity === "high" ? "shadow-glow" : intensity === "low" ? "" : "shadow-liquid";
  return (
    <motion.div
      className={`liquid-frame liquid-edge rounded-[2rem] ${glow} ${className}`}
      initial={animated && !reduce ? { opacity: 0, y: 20, filter: "blur(8px)" } : undefined}
      whileInView={animated && !reduce ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hoverable && !reduce ? { y: -6 } : undefined}
    >
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}

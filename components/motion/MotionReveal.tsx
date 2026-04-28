"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { blurIn } from "@/lib/motion";

export function MotionReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : blurIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

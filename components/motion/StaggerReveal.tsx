"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer } from "@/lib/motion";

export function StaggerReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

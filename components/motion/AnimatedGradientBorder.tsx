"use client";

import { ReactNode } from "react";

export function AnimatedGradientBorder({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`liquid-edge ${className}`}>{children}</div>;
}

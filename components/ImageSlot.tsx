"use client";

import { useState } from "react";

export function ImageSlot({ src, name, className = "", imageClassName = "h-full w-full object-contain" }: { src: string; name: string; className?: string; imageClassName?: string }) {
  const [missing, setMissing] = useState(false);
  if (missing) return <div className={`silent-placeholder ${className}`} aria-label={`${name}. Asset attendu : ${src}`} title={`${name} — ${src}`} />;
  return <img src={src} alt={name} className={`${imageClassName} ${className}`} onError={() => setMissing(true)} />;
}

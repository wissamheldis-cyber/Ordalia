"use client";

import { useState } from "react";

export function VideoSlot({ src, poster, name, className = "", videoClassName = "h-full w-full object-cover" }: { src: string; poster?: string; name: string; className?: string; videoClassName?: string }) {
  const [missing, setMissing] = useState(false);
  if (missing) return <div className={`silent-placeholder ${className}`} aria-label={`${name}. Asset attendu : ${src}`} title={`${name} — ${src}`} />;
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      className={`${videoClassName} ${className}`}
      onError={() => setMissing(true)}
      aria-label={name}
    />
  );
}

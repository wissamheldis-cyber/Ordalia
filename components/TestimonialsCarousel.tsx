"use client";

import { testimonialSlots } from "@/lib/assets";
import { ImageSlot } from "./ImageSlot";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const items = testimonialSlots;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1260px]">
        <SectionHeader 
          eyebrow="Témoignages"
          title="Les entreprises qui mesurent tôt prennent de l’avance." 
        />
        
        <div className="relative mt-12 flex h-[320px] items-center justify-center perspective-[1200px]">
          <AnimatePresence initial={false}>
            {items.map((src, i) => {
              // Calcul de la position relative par rapport à l'index actif
              let position = i - index;
              if (position < -1) position = position + items.length;
              if (position > items.length - 2) position = position - items.length;

              // On ne montre que l'actif, le précédent et le suivant
              if (Math.abs(position) > 1) return null;

              return (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.8, x: position * 300, z: -200 }}
                  animate={{ 
                    opacity: position === 0 ? 1 : 0.4, 
                    scale: position === 0 ? 1 : 0.85,
                    x: position * (typeof window !== 'undefined' && window.innerWidth < 640 ? 240 : 340),
                    z: position === 0 ? 0 : -150,
                    filter: position === 0 ? "blur(0px)" : "blur(8px)",
                    rotateY: position * 15,
                    zIndex: position === 0 ? 20 : 10
                  }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className="absolute w-full max-w-[320px] sm:max-w-[440px]"
                >
                  <AnimatedLiquidGlassFrame className="p-4" intensity={position === 0 ? "high" : "low"}>
                    {i < 4 ? (
                      <div className="aspect-video overflow-hidden rounded-[1.5rem]">
                        <ImageSlot 
                          src={src} 
                          name={`Témoignage ${i + 1}`} 
                          imageClassName="h-full w-full object-cover" 
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-video items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/40 p-8 text-center">
                        <p className="text-lg font-black leading-tight tracking-tight text-mist">
                          Soyez parmi les premiers à mesurer ce que l’on dit déjà de vous.
                        </p>
                      </div>
                    )}
                  </AnimatedLiquidGlassFrame>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation - Cercles simples */}
        <div className="mt-16 flex justify-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                index === i 
                  ? "bg-cyan scale-125 shadow-[0_0_12px_rgba(138,246,255,0.6)]" 
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Aller à la slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

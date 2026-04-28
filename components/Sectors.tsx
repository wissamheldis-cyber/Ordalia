"use client";

import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";
import { ImageSlot } from "./ImageSlot";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sectors = [
  { name: "Avocats", image: "/assets/sectors/avocats.png" },
  { name: "Experts-comptables", image: "/assets/sectors/comptables.png" },
  { name: "Immobilier premium", image: "/assets/sectors/immobilier.png" },
  { name: "Conseil & Stratégie", image: "/assets/sectors/conseil.png" },
  { name: "Consultants B2B", image: "/assets/sectors/consultants.png" },
  { name: "Praticiens privés", image: "/assets/sectors/praticiens.png" },
  { name: "Agences spécialisées", image: "/assets/sectors/agences.png" },
];

export function Sectors() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sectors.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1260px]">
        <SectionHeader title="Pour les entreprises où la confiance décide." />
        
        <div className="relative mt-16 flex h-[400px] items-center justify-center perspective-[1200px]">
          <AnimatePresence initial={false}>
            {sectors.map((sector, i) => {
              let position = i - index;
              if (position < -1) position = position + sectors.length;
              if (position > sectors.length - 2) position = position - sectors.length;

              if (Math.abs(position) > 1) return null;

              return (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, scale: 0.8, x: position * 300, z: -200 }}
                  animate={{ 
                    opacity: position === 0 ? 1 : 0.3, 
                    scale: position === 0 ? 1 : 0.8,
                    x: position * (typeof window !== 'undefined' && window.innerWidth < 640 ? 260 : 380),
                    z: position === 0 ? 0 : -150,
                    filter: position === 0 ? "blur(0px)" : "blur(10px)",
                    rotateY: position * 20,
                    zIndex: position === 0 ? 20 : 10
                  }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute w-full max-w-[300px] sm:max-w-[400px]"
                >
                  <AnimatedLiquidGlassFrame className="p-4" intensity={position === 0 ? "high" : "low"}>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                      <ImageSlot 
                        src={sector.image} 
                        name={sector.name} 
                        imageClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">{sector.name}</h3>
                        <p className="mt-2 text-xs font-medium uppercase tracking-widest text-cyan/80">Secteur d'intervention</p>
                      </div>
                    </div>
                  </AnimatedLiquidGlassFrame>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation - Cercles simples */}
        <div className="mt-12 flex justify-center gap-3">
          {sectors.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                index === i 
                  ? "bg-cyan w-6 shadow-[0_0_12px_rgba(138,246,255,0.6)]" 
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Secteur ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

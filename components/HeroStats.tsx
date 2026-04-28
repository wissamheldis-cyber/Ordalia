"use client";

import { motion, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { platformLogos } from "@/lib/assets";
import { ImageSlot } from "./ImageSlot";
import { useEffect, useRef, useState } from "react";

export function HeroStats() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const BASE_VALUE = 1928438;
  const [displayValue, setDisplayValue] = useState("0");
  const countRef = useRef(0);

  useEffect(() => {
    // Phase 1 : Impression initiale (8 secondes)
    // On monte de 0 à BASE_VALUE avec une courbe organique et un peu d'aléatoire
    const controls = animate(0, BASE_VALUE, {
      duration: 8,
      ease: [0.16, 1, 0.3, 1], // Custom ease pour un départ lent mais puissant
      onUpdate: (latest) => {
        // Ajout d'un léger jitter aléatoire pour simuler du "temps réel"
        const jitter = Math.sin(Date.now() / 100) * 50;
        const val = Math.max(0, Math.floor(latest + jitter));
        countRef.current = val;
        setDisplayValue(val.toLocaleString("fr-FR"));
      }
    });

    // Phase 2 : Animation toutes les 30 secondes après la phase initiale
    const interval = setInterval(() => {
      const surge = Math.floor(Math.random() * 150) + 50;
      const target = countRef.current + surge;
      
      animate(countRef.current, target, {
        duration: 2,
        onUpdate: (latest) => {
          countRef.current = Math.floor(latest);
          setDisplayValue(countRef.current.toLocaleString("fr-FR"));
        }
      });
    }, 30000);

    return () => {
      controls.stop();
      clearInterval(interval);
    };
  }, []);

  // Influence subtile du scroll sur le chiffre (effet parallaxe de donnée)
  // On décale la valeur de +/- 500 selon le scroll pour garder le côté "dynamique"
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const springOffset = useSpring(scrollOffset, { stiffness: 20, damping: 30 });

  useEffect(() => {
    return springOffset.on("change", (offset) => {
      const valWithScroll = Math.floor(countRef.current + offset);
      setDisplayValue(valWithScroll.toLocaleString("fr-FR"));
    });
  }, [springOffset]);

  return (
    <motion.div 
      ref={targetRef}
      initial={{ opacity: 0, y: 26 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.85, duration: 0.75 }} 
      className="mx-auto mt-12 w-full max-w-5xl text-center md:mt-14"
    >
      <p className="gradient-text text-2xl font-medium tracking-[-0.035em] sm:text-4xl">
        Actuellement, <span className="font-black tabular-nums">{displayValue}</span> personnes demandent des informations auprès de
      </p>
      
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
        {platformLogos.map((logo, i) => (
          <motion.div 
            key={logo.name} 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1 + i * 0.06 }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              filter: "brightness(1.3) drop-shadow(0 0 20px rgba(138,246,255,0.4))",
            }}
            className="group relative h-12 w-12 cursor-pointer sm:h-16 sm:w-16"
          >
            <div className="absolute inset-0 rounded-full bg-cyan/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <ImageSlot 
              src={logo.src} 
              name={`Logo ${logo.name}`} 
              imageClassName="h-full w-full object-contain transition-transform" 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

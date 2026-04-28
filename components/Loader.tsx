"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const names = ["ChatGPT", "Gemini", "Claude", "Perplexity", "Copilot"];
const words = ["une recherche", "une recommandation", "un nom cité", "un choix orienté", "une opportunité invisible"];

export function Loader() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("ordalia-loader-v3")) return;
    sessionStorage.setItem("ordalia-loader-v3", "true");
    setShow(true);
    const timers = [
      window.setTimeout(() => setPhase(1), 1200),
      window.setTimeout(() => setPhase(2), 3200),
      window.setTimeout(() => setShow(false), 4800),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[100] overflow-hidden bg-black/25 backdrop-blur-2xl" initial={{ opacity: 1 }} exit={{ opacity: 0, backdropFilter: "blur(0px)" }} transition={{ duration: 0.65 }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_12%,rgba(76,139,255,.2),transparent_34rem),radial-gradient(circle_at_25%_70%,rgba(64,221,211,.10),transparent_30rem)]" />
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 54 }).map((_, i) => (
            <motion.span key={i} className="absolute h-1 w-1 rounded-full bg-cyan/70" style={{ left: `${(i * 41) % 100}%`, top: `${(i * 67) % 100}%` }} animate={{ x: [0, (50 - ((i * 41) % 100)) * 2.2], y: [0, (50 - ((i * 67) % 100)) * 2.2], opacity: [0.06, 0.7, 0.12], scale: [0.8, 1.4, 0.8] }} transition={{ duration: 4.2, ease: "easeInOut" }} />
          ))}
        </div>

        <button onClick={() => setShow(false)} className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/45 transition hover:text-white md:hidden">Passer</button>

        <div className="flex h-full items-center justify-center px-6 text-center">
          <AnimatePresence mode="wait">
            {phase === 0 && <motion.h2 key="p0" initial={{ opacity: 0, y: 16, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(12px)" }} className="max-w-3xl text-3xl font-black tracking-[-0.05em] text-mist sm:text-5xl">À chaque instant, des décisions commencent ailleurs.</motion.h2>}
            {phase === 1 && (
              <motion.div key="p1" initial={{ opacity: 0, y: 16, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(12px)" }} className="max-w-4xl">
                <div className="mb-7 flex flex-wrap justify-center gap-3">{names.map((name, i) => <motion.span key={name} initial={{ opacity: 0, y: 10, scale: .92 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: i * .11 }} className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-black text-mist/90 backdrop-blur-xl">{name}</motion.span>)}</div>
                <p className="gradient-text text-xl font-black tracking-[-0.04em] sm:text-3xl">{words.join(" · ")}</p>
              </motion.div>
            )}
            {phase === 2 && <motion.div key="p2" initial={{ opacity: 0, scale: .97, filter: "blur(12px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0 }}><p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-cyan/70">Bienvenue chez</p><h1 className="text-6xl font-black tracking-[0.2em] text-mist sm:text-8xl">ORDALIA</h1></motion.div>}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

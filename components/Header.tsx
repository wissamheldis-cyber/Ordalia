"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { assets } from "@/lib/assets";
import { ImageSlot } from "./ImageSlot";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  ["Problème", "/#probleme"],
  ["Méthode", "/#methode"],
  ["Offres", "/#offres"],
  ["Rapport", "/#rapport"],
  ["Ressources", "/resources"],
  ["FAQ", "/#faq"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex h-24 max-w-[1260px] items-center justify-between px-6 sm:px-8">
        <button onClick={() => setOpen(true)} className="flex h-11 w-11 items-center justify-center text-mist lg:hidden" aria-label="Ouvrir le menu">
          <Menu className="h-8 w-8" />
        </button>

        <Link href="/" className="flex items-center gap-4">
          <div className="h-14 w-44 sm:w-52">
            <ImageSlot src={assets.brand.main} name="Logo Ordalia" imageClassName="h-full w-full object-contain object-left" />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] font-medium uppercase tracking-[0.08em] text-mist/78 lg:flex">
          {links.map(([label, href]) => <Link key={label} href={href} className="transition hover:text-white">{label}</Link>)}
        </nav>

        <Link
          href="/#contact"
          className="liquid-edge inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.035] px-4 text-xs font-black uppercase tracking-[0.06em] text-mist shadow-button backdrop-blur-xl transition hover:-translate-y-0.5 sm:px-6 sm:text-sm"
        >
          <span className="hidden sm:inline">Demander un audit</span>
          <span className="sm:hidden">Audit</span>
          <ArrowRight className="ml-2 hidden h-4 w-4 sm:block" />
        </Link>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] bg-black/35 p-5 backdrop-blur-2xl lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -18, opacity: 0 }} className="liquid-frame liquid-edge rounded-[2rem] p-6">
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xl font-black tracking-[0.18em] text-mist">ORDALIA</span>
                <button onClick={() => setOpen(false)} aria-label="Fermer"><X className="h-6 w-6" /></button>
              </div>
              <nav className="relative z-10 mt-8 grid gap-4">
                {links.map(([label, href], i) => (
                  <motion.div key={label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link onClick={() => setOpen(false)} href={href} className="block border-b border-white/10 py-3 text-lg font-black text-mist">{label}</Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";
import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { AnimatedLiquidGlassFrame } from "./motion/AnimatedLiquidGlassFrame";

export function FinalCTA() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  return (
    <section id="contact" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[880px]">
        <SectionHeader title="Commencer votre analyse." subtitle="À partir de 290€ HT." />
        <AnimatedLiquidGlassFrame className="p-6 sm:p-8" intensity="high">
          {sent ? (
            <div className="py-16 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-cyan" /><h3 className="mt-5 text-2xl font-black tracking-[-0.05em] text-mist">Demande reçue.</h3><p className="mt-2 text-mist/58">Nous revenons vers vous avec les prochaines étapes.</p></div>
          ) : (
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Nom" required /><Field label="Email professionnel" type="email" required /><Field label="Entreprise" required /><Field label="Site web" /><Field label="Secteur" className="sm:col-span-2" />
              <label className="sm:col-span-2"><span className="text-sm font-semibold text-mist/82">Message optionnel</span><textarea className="mt-2 min-h-32 w-full resize-none rounded-2xl border border-white/12 bg-black/20 px-4 py-3 text-mist outline-none placeholder:text-mist/30 focus:border-cyan/60" placeholder="Contexte, concurrents, objectif..." /></label>
              <button className="sm:col-span-2 mt-2 h-12 rounded-xl border border-white/15 bg-white/[0.07] text-sm font-black uppercase tracking-[0.06em] text-mist transition hover:bg-white/[0.12]">Demander mon audit</button>
            </form>
          )}
        </AnimatedLiquidGlassFrame>
      </div>
    </section>
  );
}
function Field({ label, type = "text", required, className = "" }: { label: string; type?: string; required?: boolean; className?: string }) {
  return <label className={className}><span className="text-sm font-semibold text-mist/82">{label}{required ? " *" : ""}</span><input required={required} type={type} className="mt-2 h-12 w-full rounded-2xl border border-white/12 bg-black/20 px-4 text-mist outline-none placeholder:text-mist/30 focus:border-cyan/60" /></label>;
}

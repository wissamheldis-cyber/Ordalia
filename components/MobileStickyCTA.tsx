export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
      <a 
        href="/#contact" 
        className="liquid-edge flex h-14 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.08] text-sm font-black uppercase tracking-[0.08em] text-mist shadow-button backdrop-blur-2xl transition active:scale-[0.98]"
      >
        Audit IA — Dès 290€ HT
      </a>
    </div>
  );
}

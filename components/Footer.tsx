import Link from "next/link";
export function Footer() {
  return <footer className="border-t border-white/8 px-6 py-10 sm:px-8"><div className="mx-auto flex max-w-[1180px] flex-col gap-5 text-sm text-mist/42 md:flex-row md:items-center md:justify-between"><p>ORDALIA © 2026. TOUS DROITS RÉSERVÉS.</p><div className="flex flex-wrap gap-5"><a href="/#offres">Offres</a><a href="/#rapport">Rapport</a><Link href="/resources">Ressources</Link><a href="/#faq">FAQ</a></div></div></footer>;
}

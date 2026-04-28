import { ReactNode } from "react";
export function MediaFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`liquid-frame liquid-edge rounded-[2rem] ${className}`}><div className="relative z-10 h-full w-full">{children}</div></div>;
}

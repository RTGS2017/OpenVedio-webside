import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

type ScaleInProps = {
  children: ReactNode;
  className?: string;
};

export function ScaleIn({ children, className = "" }: ScaleInProps) {
  return (
    <ScrollReveal variant="scale" className={className}>
      {children}
    </ScrollReveal>
  );
}

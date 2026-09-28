import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

type SlideInProps = {
  children: ReactNode;
  className?: string;
  from?: "left" | "right";
};

export function SlideIn({ children, className = "", from = "left" }: SlideInProps) {
  return (
    <ScrollReveal variant={from} className={className}>
      {children}
    </ScrollReveal>
  );
}

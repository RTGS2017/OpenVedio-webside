import { Children, type ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className = "" }: StaggerProps) {
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, index) => (
        <ScrollReveal key={index} delay={Math.min(index, 3) * 0.12}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

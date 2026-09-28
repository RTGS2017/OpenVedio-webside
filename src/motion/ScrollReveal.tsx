import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Variant = "up" | "scale" | "left" | "right";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
};

const variantClass: Record<Variant, string> = {
  up: "reveal-up",
  scale: "reveal-scale",
  left: "reveal-left",
  right: "reveal-right",
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}s` } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass[variant]} ${shown ? "is-shown" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}

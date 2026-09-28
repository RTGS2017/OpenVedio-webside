import { useEffect, useRef, useState } from "react";

export function useInViewKey(ids: readonly string[]) {
  const key = ids.join("|");
  const [active, setActive] = useState(ids[0] ?? "");
  const lock = useRef(0);

  useEffect(() => {
    const list = key.split("|").filter(Boolean);
    const nodes = list
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (performance.now() < lock.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.35, 0.6], rootMargin: "-18% 0px -28% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [key]);

  const select = (id: string) => {
    lock.current = performance.now() + 800;
    setActive(id);
    const node = document.getElementById(id);
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
  };

  return { active, select };
}

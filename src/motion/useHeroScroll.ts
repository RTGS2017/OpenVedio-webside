import { useEffect, type RefObject } from "react";

export function useHeroScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.style.setProperty("--hero-scroll", "0");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height * 0.65, 1), 0), 1);
      node.style.setProperty("--hero-scroll", progress.toFixed(3));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ref]);
}

import { useEffect, type RefObject } from "react";

export function useScrollProgress(ref: RefObject<HTMLElement | null>, variable = "--flow-progress") {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.style.setProperty(variable, "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const view = window.innerHeight;
      const start = view * 0.85;
      const end = view * 0.35;
      const total = Math.max(rect.height + (start - end), 1);
      const passed = start - rect.top;
      const progress = Math.min(Math.max(passed / total, 0), 1);
      node.style.setProperty(variable, progress.toFixed(3));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ref, variable]);
}

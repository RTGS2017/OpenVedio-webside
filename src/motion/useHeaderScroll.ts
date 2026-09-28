import { useEffect } from "react";

export function useHeaderScroll() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(window.scrollY / 48, 1);
      document.documentElement.style.setProperty("--header-progress", progress.toFixed(3));
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
  }, []);
}

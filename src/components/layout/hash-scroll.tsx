import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export function HashScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return null;
}

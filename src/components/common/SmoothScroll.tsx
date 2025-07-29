// src/components/common/SmoothScroll.tsx
"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with minimal configuration
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default SmoothScroll;
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const wrapper = document.querySelector<HTMLElement>('.page-scroll');
    if (!wrapper) return;

    let cancelled = false;
    let rafId = 0;
    let lenisRef: { destroy: () => void; raf: (t: number) => void } | null = null;

    (async () => {
      try {
        const { default: Lenis } = await import('lenis');
        if (cancelled) return;
        const lenis = new Lenis({
          duration: 1.05,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.9,
          wrapper,
          content: (wrapper.querySelector<HTMLElement>('.pi') ?? wrapper),
        });
        lenisRef = lenis as unknown as { destroy: () => void; raf: (t: number) => void };
        const animate = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);
      } catch {
        // Lenis failed — page-scroll keeps native overflow scrolling.
      }
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      lenisRef?.destroy();
    };
  }, [pathname]);

  return null;
}

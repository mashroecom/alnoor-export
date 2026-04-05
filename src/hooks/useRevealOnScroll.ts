"use client";

import { useEffect, useRef } from "react";

const REVEAL_SELECTORS = ".reveal, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .reveal-clip, .stagger-children";

export function useRevealOnScroll(staggerDelay = 80) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = ref.current?.querySelectorAll(REVEAL_SELECTORS);
    if (!reveals) return;

    // Group .reveal elements by their parent to stagger siblings
    const parentGroups = new Map<Element | null, Element[]>();
    reveals.forEach((el) => {
      if (!el.classList.contains("reveal")) return;
      const parent = el.parentElement;
      if (!parentGroups.has(parent)) parentGroups.set(parent, []);
      parentGroups.get(parent)!.push(el);
    });

    // Apply stagger delay within each group
    parentGroups.forEach((children) => {
      children.forEach((el, i) => {
        if (i > 0) {
          (el as HTMLElement).style.transitionDelay = `${i * staggerDelay}ms`;
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
}

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  targetId?: string;
  className?: string;
  delay?: number;
}

export default function SectionTransition({
  children,
  targetId,
  className = "",
  delay = 0,
}: SectionTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [navKey, setNavKey] = useState(0);

  useEffect(() => {
    if (!targetId || shouldReduceMotion) return;

    const handleNav = (e: Event) => {
      const customEvent = e as CustomEvent<{ href: string }>;
      if (customEvent.detail?.href === `#${targetId}`) {
        // Trigger a fresh subtle page-reveal transition for the destination section
        setNavKey((k) => k + 1);
      }
    };

    window.addEventListener("unos-nav-transition", handleNav);
    return () => window.removeEventListener("unos-nav-transition", handleNav);
  }, [targetId, shouldReduceMotion]);

  // Subtle, fast, and elegant transition parameters (around 350-400ms)
  const variants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      key={navKey}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06, margin: "-30px" }}
      variants={variants}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

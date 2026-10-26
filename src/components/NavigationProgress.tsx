"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function NavigationProgress() {
  const [isNavigating, setIsNavigating] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Listen for custom navigation events triggered from Navbar, CTAs, or hash changes
    const handleNavStart = () => {
      if (shouldReduceMotion) return;
      setIsNavigating(true);
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 450); // Fast 450ms transition
      return () => clearTimeout(timer);
    };

    window.addEventListener("unos-nav-transition", handleNavStart);
    window.addEventListener("hashchange", handleNavStart);

    return () => {
      window.removeEventListener("unos-nav-transition", handleNavStart);
      window.removeEventListener("hashchange", handleNavStart);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          key="nav-progress-bar"
          initial={{ scaleX: 0, opacity: 0.9, originX: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            scaleX: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.15 },
          }}
          className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 shadow-[0_0_10px_rgba(249,115,22,0.8)] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}

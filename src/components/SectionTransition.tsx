"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  targetId?: string;
  className?: string;
  delay?: number;
}

export default function SectionTransition({
  children,
  className = "",
  delay = 0,
}: SectionTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Fast, lightweight, and hardware-efficient entrance animation
  const variants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.45,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

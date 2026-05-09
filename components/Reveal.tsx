"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article";
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Component>
  );
}

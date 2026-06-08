"use client";

import { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}

export default function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}

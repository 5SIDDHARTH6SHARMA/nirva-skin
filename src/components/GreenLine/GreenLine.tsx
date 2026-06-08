"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface GreenLineProps {
  orientation?: "horizontal" | "vertical";
  width?: number;
  className?: string;
}

export default function GreenLine({ orientation = "horizontal", width, className = "" }: GreenLineProps) {
  const { ref, isVisible } = useScrollReveal();

  const isVertical = orientation === "vertical";
  const style = width
    ? isVertical
      ? { height: `${width}px` }
      : { width: `${width}px` }
    : undefined;

  return (
    <span
      ref={ref as never}
      className={`green-line ${isVertical ? "green-line--vertical" : ""} ${
        isVisible ? "is-visible" : ""
      } ${className}`.trim()}
      style={style}
      aria-hidden="true"
    />
  );
}

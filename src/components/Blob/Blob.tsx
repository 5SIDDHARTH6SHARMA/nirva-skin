"use client";

import { CSSProperties, ReactNode } from "react";
import styles from "./Blob.module.css";

const SHAPES = [
  "60% 40% 55% 45% / 50% 60% 40% 55%",
  "45% 55% 60% 40% / 55% 45% 55% 50%",
  "55% 45% 40% 60% / 45% 55% 60% 45%",
  "40% 60% 50% 50% / 60% 40% 60% 40%",
];

interface BlobProps {
  shapeIndex?: 0 | 1 | 2 | 3;
  gradient?: [string, string];
  angle?: number;
  label?: string;
  children?: ReactNode;
  className?: string;
  morph?: boolean;
  style?: CSSProperties;
}

export default function Blob({
  shapeIndex = 0,
  gradient = ["var(--color-blob-1)", "var(--color-blob-2)"],
  angle = 160,
  label,
  children,
  className = "",
  morph = false,
  style,
}: BlobProps) {
  const shape = SHAPES[shapeIndex];
  const altShape = SHAPES[(shapeIndex + 1) % SHAPES.length];

  return (
    <div
      className={`${styles.blob} ${morph ? styles.morph : ""} ${className}`.trim()}
      style={
        {
          borderRadius: shape,
          background: `linear-gradient(${angle}deg, ${gradient[0]}, ${gradient[1]})`,
          "--blob-shape": shape,
          "--blob-shape-alt": altShape,
          ...style,
        } as CSSProperties
      }
    >
      {children}
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}

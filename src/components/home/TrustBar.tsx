"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import styles from "./TrustBar.module.css";

const STATS = [
  { value: 2400, suffix: "+", label: "Patients Treated" },
  { value: 12, suffix: "", label: "Treatments Offered" },
  { value: 8, suffix: "", label: "Years Combined Experience" },
  { value: 100, suffix: "%", label: "Dermatologist-Led" },
];

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, active);
  return (
    <div className={styles.stat}>
      <span className={styles.number}>
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function TrustBar() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={styles.bar} ref={ref as never}>
      <span className={`${styles.blob} blob-fill`} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat) => (
          <Stat key={stat.label} {...stat} active={isVisible} />
        ))}
      </div>
    </section>
  );
}

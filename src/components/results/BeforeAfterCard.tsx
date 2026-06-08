"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import styles from "./BeforeAfterCard.module.css";

export interface BeforeAfterCase {
  title: string;
  patient: string;
  duration: string;
  note: string;
  before: [string, string];
  after: [string, string];
}

export default function BeforeAfterCard({ data }: { data: BeforeAfterCase }) {
  const [position, setPosition] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className={styles.card}>
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className={styles.layer}
          style={{ background: `linear-gradient(135deg, ${data.before[0]}, ${data.before[1]})` }}
        >
          <span className={styles.layerLabel}>Before</span>
        </div>
        <div
          className={styles.layer}
          style={{
            background: `linear-gradient(135deg, ${data.after[0]}, ${data.after[1]})`,
            clipPath: `inset(0 0 0 ${position}%)`,
          }}
        >
          <span className={styles.layerLabel}>After</span>
        </div>

        <div className={styles.divider} style={{ left: `${position}%` }}>
          <span className={styles.handle}>
            <ChevronsLeftRight size={16} strokeWidth={1.5} />
          </span>
        </div>

        <span className={styles.badge}>{data.duration}</span>
      </div>

      <div className={styles.meta}>
        <p className={styles.label}>
          {data.title} — {data.patient}
        </p>
        <p className={styles.note}>&ldquo;{data.note}&rdquo;</p>
      </div>
    </div>
  );
}

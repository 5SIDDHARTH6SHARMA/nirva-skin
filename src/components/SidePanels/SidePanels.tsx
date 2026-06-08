"use client";

import { ArrowUpRight } from "lucide-react";
import styles from "./SidePanels.module.css";

interface PanelSpec {
  label: string;
  swatch: string;
}

interface SidePanelsProps {
  panels: PanelSpec[];
  className?: string;
}

export default function SidePanels({ panels, className = "" }: SidePanelsProps) {
  return (
    <div className={`${styles.panels} ${className}`.trim()} aria-hidden="true">
      {panels.map((panel) => (
        <div className={styles.panel} key={panel.label}>
          <button className={styles.arrow} type="button" tabIndex={-1}>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>
          <span className={styles.label}>{panel.label}</span>
          <span className={styles.swatch} style={{ background: panel.swatch }} />
        </div>
      ))}
    </div>
  );
}

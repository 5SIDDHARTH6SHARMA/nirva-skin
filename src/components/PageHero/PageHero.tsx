import { ReactNode } from "react";
import SidePanels from "@/components/SidePanels/SidePanels";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  eyebrow: string;
  headline: ReactNode;
  subtext: string;
  panels?: { label: string; swatch: string }[];
}

export default function PageHero({ eyebrow, headline, subtext, panels }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <span className={`${styles.sparkle} ${styles.sparkleOne}`} aria-hidden="true">✦</span>
      <span className={`${styles.sparkle} ${styles.sparkleTwo}`} aria-hidden="true">✦</span>

      {panels && <SidePanels panels={panels} className={styles.sidePanels} />}

      <div className={`container ${styles.inner}`}>
        <p className="eyebrow eyebrow--on-green">{eyebrow}</p>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subtext}>{subtext}</p>
      </div>
    </section>
  );
}

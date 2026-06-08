import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./StoryTeaser.module.css";

export default function StoryTeaser() {
  return (
    <section className={styles.section}>
      <span className={`${styles.sparkle} ${styles.sparkleOne}`} aria-hidden="true">✦</span>
      <span className={`${styles.sparkle} ${styles.sparkleTwo}`} aria-hidden="true">✦</span>

      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className={styles.quote}>
            &ldquo;I&apos;d had acne for eleven years. I&apos;d tried everything. Nirva Skin was
            the first place that actually listened to me before suggesting anything.&rdquo;
          </p>
          <p className={styles.attribution}>Priya M., 31 — Acne Treatment Patient</p>
        </Reveal>

        <Reveal delay={100}>
          <Link href="/results" className="btn btn--outline-cream">
            Read More Stories →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

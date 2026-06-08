import Blob from "@/components/Blob/Blob";
import Reveal from "@/components/Reveal/Reveal";
import GreenLine from "@/components/GreenLine/GreenLine";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <Blob
        shapeIndex={1}
        gradient={["var(--color-blob-2)", "var(--color-blob-2)"]}
        className={styles.decorBlob}
        style={{ opacity: 0.5 }}
      />
      <span className={`glyph-sparkle ${styles.sparkle1}`}>✦</span>
      <span className={`glyph-sparkle ${styles.sparkle2}`}>✦</span>

      <div className={`container`}>
        <div className={styles.inner}>
        <Reveal>
          <p className="eyebrow">Our Story</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className={styles.headline}>
            <em>
              We built Nirva Skin
              <br />
              because patients
              <br />
              deserved better.
            </em>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <GreenLine width={64} />
        </Reveal>
        <Reveal delay={160}>
          <p className={`body-text ${styles.subtext}`}>
            Not a chain. Not a franchise. A single clinic, built by a dermatologist who got
            tired of watching patients get rushed, upsold, and undertreated.
          </p>
        </Reveal>
        </div>
      </div>
    </section>
  );
}

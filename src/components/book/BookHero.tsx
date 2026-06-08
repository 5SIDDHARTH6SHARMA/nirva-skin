import Blob from "@/components/Blob/Blob";
import Reveal from "@/components/Reveal/Reveal";
import GreenLine from "@/components/GreenLine/GreenLine";
import styles from "./BookHero.module.css";

export default function BookHero() {
  return (
    <section className={styles.section}>
      <Blob
        shapeIndex={0}
        gradient={["var(--color-blob-1)", "var(--color-blob-1)"]}
        className={styles.decorBlob}
        style={{ opacity: 0.5, filter: "blur(2px)" }}
      />

      <div className={`container ${styles.containerOuter}`}>
        <div className={styles.inner}>
          <Reveal>
            <p className="eyebrow">Book a Consultation</p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className={styles.headline}>
              <em>
                Let&apos;s talk about
                <br />
                your skin.
              </em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <GreenLine width={64} />
          </Reveal>
          <Reveal delay={160}>
            <p className={`body-text ${styles.subtext}`}>
              A 45-minute consultation with Dr. Mehta. We&apos;ll look at your skin, listen
              to your history, and tell you honestly what we&apos;d recommend — and why.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Blob from "@/components/Blob/Blob";
import Reveal from "@/components/Reveal/Reveal";
import GreenLine from "@/components/GreenLine/GreenLine";
import styles from "./Clinic.module.css";

export default function Clinic() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <Reveal>
            <p className="eyebrow">Our Space</p>
            <h2 className={styles.headline}>
              <em>
                &ldquo;Designed to feel like
                <br />a deep breath.&rdquo;
              </em>
            </h2>
            <GreenLine width={64} className={styles.line} />
          </Reveal>
          <Reveal delay={80} className={styles.body}>
            <p className="body-text">
              We spent a long time designing Nirva Skin&apos;s physical space. We wanted it to
              feel neither clinical-cold nor spa-soft — but something in between. Warm stone
              walls. Natural light. No harsh overhead fluorescents. No waiting room anxiety.
            </p>
            <p className="body-text">
              You&apos;ll be offered water when you arrive. You&apos;ll never feel rushed. And
              you&apos;ll leave knowing exactly what happens next.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className={styles.imageCol}>
          <Blob
            shapeIndex={3}
            gradient={["var(--color-blob-3)", "var(--color-blob-1)"]}
            label="[ Nirva Skin clinic interior — warm stone, natural light ]"
            morph
            className={styles.image}
          />
        </Reveal>
      </div>
    </section>
  );
}

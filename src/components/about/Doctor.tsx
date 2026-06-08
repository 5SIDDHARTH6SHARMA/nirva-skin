import Blob from "@/components/Blob/Blob";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Doctor.module.css";

const CREDENTIALS = [
  "MD Dermatology — AIIMS Delhi",
  "Fellowship in Cosmetic Dermatology",
  "8+ Years Clinical Experience",
  "Member, Indian Association of Dermatologists",
];

export default function Doctor() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.imageCol}>
          <Blob
            shapeIndex={2}
            gradient={["var(--color-blob-2)", "var(--color-blob-3)"]}
            label="[ Dr. Aarav Mehta — warm studio portrait ]"
            morph
            className={styles.image}
          />
        </Reveal>

        <div className={styles.textCol}>
          <Reveal>
            <p className="eyebrow">Meet Your Dermatologist</p>
            <h2 className={styles.name}>Dr. Aarav Mehta</h2>
            <p className={styles.qualification}>MD Dermatology, AIIMS Delhi</p>
          </Reveal>

          <Reveal delay={80} className={styles.bio}>
            <p className="body-text">
              Dr. Mehta trained at AIIMS Delhi and completed a fellowship in cosmetic
              dermatology in Singapore before returning to India to build the kind of clinic he
              always wished existed for his own patients.
            </p>
            <p className="body-text">
              He started Nirva Skin with one principle: every patient deserves the same
              quality of attention, whether they&apos;re coming in for a mole check or a full
              skin transformation.
            </p>
            <p className="body-text">
              He does not delegate consultations. He does not upsell. He will tell you, with
              honesty, what your skin needs — and what it doesn&apos;t.
            </p>
          </Reveal>

          <Reveal delay={140} className={styles.tags}>
            {CREDENTIALS.map((tag) => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

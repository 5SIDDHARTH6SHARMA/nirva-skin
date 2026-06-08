import Blob from "@/components/Blob/Blob";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./WhyNirva.module.css";

const ROWS = [
  {
    number: "01",
    title: "Dermatologist-Led, Always",
    body: "Every treatment is prescribed and supervised by a qualified dermatologist — never delegated.",
  },
  {
    number: "02",
    title: "No Upselling, Ever",
    body: "We'll recommend what your skin needs. If it doesn't need something, we'll say so.",
  },
  {
    number: "03",
    title: "Evidence-Based Treatments",
    body: "We use only clinically proven protocols. No fads, no miracle machines, no empty promises.",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    body: "You'll know the cost before the consultation ends. No surprise bills, no hidden packages.",
  },
];

export default function WhyNirva() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.imageCol}>
          <Blob
            shapeIndex={1}
            gradient={["var(--color-blob-2)", "var(--color-blob-1)"]}
            label="[ Doctor in consultation, warm lighting ]"
            morph
            className={styles.image}
          />
        </Reveal>

        <div className={styles.textCol}>
          <Reveal>
            <p className="eyebrow">Why Patients Choose Us</p>
            <h2 className="headline-sub" style={{ marginTop: "8px" }}>
              <em>A clinic that</em>
              <br />
              <em>takes its time.</em>
            </h2>
          </Reveal>

          <div className={styles.rows}>
            {ROWS.map((row, i) => (
              <Reveal key={row.number} delay={i * 80} className={styles.row}>
                <span className={styles.rowNumber}>{row.number}</span>
                <div>
                  <h3 className={styles.rowTitle}>{row.title}</h3>
                  <p className={styles.rowBody}>{row.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

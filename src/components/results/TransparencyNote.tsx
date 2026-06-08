import Reveal from "@/components/Reveal/Reveal";
import styles from "./TransparencyNote.module.css";

export default function TransparencyNote() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.box}>
          <h2 className={styles.heading}>
            <em>A note on our results.</em>
          </h2>
          <p className={styles.body}>
            All before/after photographs are from real Nirva Skin patients with written
            consent. Results vary based on skin type, concern severity, adherence to
            protocol, and individual biology. We will never show you a result we cannot
            realistically replicate. If your case is significantly different, we will tell
            you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

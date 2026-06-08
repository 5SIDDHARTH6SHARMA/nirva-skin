import LeafIcon from "@/components/LeafIcon/LeafIcon";
import GreenLine from "@/components/GreenLine/GreenLine";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className="section">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.center}>
          <LeafIcon size={24} color="var(--color-moss)" className={styles.leaf} />
          <p className="eyebrow">Our Philosophy</p>
          <h2 className={`headline-sub ${styles.headline}`}>
            &ldquo;We don&apos;t chase trends.
            <br />
            We treat skin.&rdquo;
          </h2>
        </Reveal>

        <Reveal delay={120} className={styles.body}>
          <p className="body-text">
            Most clinics will tell you everything is possible. We&apos;ll tell you what&apos;s
            right for <em>your</em> skin — because no two patients are the same, and no
            treatment should be either.
          </p>
          <p className="body-text">
            At Nirva Skin, every consultation begins with listening. We take the time to
            understand your skin history, your concerns, and what you actually want — before
            we recommend anything at all.
          </p>
        </Reveal>

        <div className={styles.lineWrap}>
          <GreenLine width={120} />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className={styles.headline}>
            <em>Come and meet us.</em>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className={`body-text ${styles.subtext}`}>
            A consultation is just a conversation. You&apos;ll leave with clarity — whether
            or not you book a treatment.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <Link href="/book" className="btn btn--primary btn--lg">
            Book a Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

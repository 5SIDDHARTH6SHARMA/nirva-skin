import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <span className={`${styles.glow} blob-fill`} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className={`headline-section ${styles.headline}`}>
            Your skin consultation
            <br />
            begins with a conversation.
          </h2>
          <p className={styles.subtext}>
            Book a 45-minute consultation with our dermatologist. No packages, no pressure —
            just an honest assessment of your skin and a clear plan forward.
          </p>
          <Link href="/book" className="btn btn--primary btn--lg">
            Book Your Consultation
          </Link>
          <p className={styles.fineprint}>Consultations available Mon–Sat. Online and in-clinic options.</p>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./ConsultationNote.module.css";

export default function ConsultationNote() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className={styles.box}>
          <p className={styles.lead}>Every treatment begins with a consultation.</p>
          <p className={styles.body}>
            We don&apos;t book treatments directly. First, we understand your skin. Then, we
            build your plan. This is not a delay — it&apos;s the most important part of your
            care.
          </p>
          <Link href="/book" className="btn btn--primary">
            Book a Consultation →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { treatments } from "@/data/treatments";
import TreatmentCard from "@/components/TreatmentCard/TreatmentCard";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./FeaturedTreatments.module.css";

const FEATURED = [treatments[0], treatments[1], treatments[2]];

export default function FeaturedTreatments() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.heading}>
          <p className="eyebrow">What We Treat</p>
          <h2 className="headline-section">
            Every concern.
            <br />
            <em>A considered answer.</em>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {FEATURED.map((treatment, i) => (
            <Reveal key={treatment.number} delay={i * 80}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.viewAll}>
          <Link href="/treatments" className="text-link">
            <span className="text-link__underline">View All 12 Treatments →</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

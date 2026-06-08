import { treatments } from "@/data/treatments";
import TreatmentCard from "@/components/TreatmentCard/TreatmentCard";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./TreatmentGrid.module.css";

export default function TreatmentGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          {treatments.map((treatment, i) => (
            <Reveal key={treatment.number} delay={(i % 3) * 80}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal/Reveal";
import BeforeAfterCard, { BeforeAfterCase } from "./BeforeAfterCard";
import styles from "./BeforeAfterGrid.module.css";

const CASES: BeforeAfterCase[] = [
  {
    title: "Acne & Scarring",
    patient: "Female, 26",
    duration: "12 weeks",
    note: "Chemical peels + topical protocol.",
    before: ["#C4956A", "#8A6048"],
    after: ["#E8C4A0", "#C9A880"],
  },
  {
    title: "Melasma",
    patient: "Female, 38",
    duration: "6 months",
    note: "Laser + topical depigmentation.",
    before: ["#B8896A", "#8A5A40"],
    after: ["#D9B090", "#C4906A"],
  },
  {
    title: "Hair Loss",
    patient: "Male, 34",
    duration: "4 months",
    note: "PRP + oral supplements.",
    before: ["#A88E72", "#6E5640"],
    after: ["#D2BFA4", "#B69E7C"],
  },
  {
    title: "Anti-Ageing",
    patient: "Female, 45",
    duration: "3 months",
    note: "Skin booster + microneedling.",
    before: ["#BFA088", "#8C6E54"],
    after: ["#E5D2BC", "#CBAF92"],
  },
  {
    title: "Acne Scars",
    patient: "Male, 29",
    duration: "5 sessions",
    note: "Fractional laser + subcision.",
    before: ["#B58F72", "#7C5C44"],
    after: ["#DEC6AA", "#C2A481"],
  },
  {
    title: "Under-Eye Hollowness",
    patient: "Female, 41",
    duration: "Single session",
    note: "Filler + PRP.",
    before: ["#AE8E78", "#73584A"],
    after: ["#DBC3AE", "#C0A28A"],
  },
];

export default function BeforeAfterGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.heading}>
          <p className="eyebrow">Drag To Compare</p>
          <h2 className="headline-section">Six journeys, in their own words.</h2>
        </Reveal>

        <div className={styles.grid}>
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <BeforeAfterCard data={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

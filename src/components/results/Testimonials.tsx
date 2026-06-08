import Reveal from "@/components/Reveal/Reveal";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    quote:
      "I was nervous about coming in — I'd had bad experiences at other clinics where I felt judged for my acne. The first consultation with Dr. Mehta felt completely different. He just... listened.",
    name: "Anika S., 27",
    location: "Delhi",
  },
  {
    quote:
      "I'd been living with melasma for six years and had given up. Nirva Skin was the first place that gave me an honest answer about what was possible — and then actually delivered it.",
    name: "Rohini K., 39",
    location: "Pune",
  },
  {
    quote:
      "As someone who was skeptical about going to a cosmetic clinic — too much 'anti-ageing' noise out there — I appreciated that nobody tried to sell me anything beyond what I asked about.",
    name: "Sameer T., 42",
    location: "Bengaluru",
  },
  {
    quote:
      "The before/after photos don't fully capture it. It's not just the skin — it's the confidence. I stopped wearing concealer to work for the first time in eight years.",
    name: "Meera D., 30",
    location: "Mumbai",
  },
  {
    quote:
      "My hair loss was affecting me badly. Three other clinics had given me generic advice. Dr. Mehta ran actual tests, found an underlying cause, and then treated that. Six months later my hair is back.",
    name: "Karan V., 35",
    location: "Hyderabad",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.heading}>
          <p className="eyebrow">Patient Voices</p>
          <h2 className="headline-section">Stories, not statistics.</h2>
        </Reveal>

        <div className={styles.row}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className={styles.card}>
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <p className={styles.quote}>{t.quote}</p>
              <p className={styles.attribution}>
                — {t.name}, {t.location}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

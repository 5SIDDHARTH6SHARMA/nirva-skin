import Reveal from "@/components/Reveal/Reveal";
import styles from "./Values.module.css";

const VALUES = [
  {
    title: "Honesty before everything",
    body: "We will tell you if a treatment won't work for your skin. We will tell you if you don't need something. We have turned away patients who wanted treatments that weren't right for them. We'd rather lose the booking.",
  },
  {
    title: "Evidence, not trends",
    body: "We don't add treatments to our menu because they're trendy. We add them when the clinical evidence is strong enough. If something isn't proven, we don't offer it.",
  },
  {
    title: "Your skin, for life",
    body: "We're not trying to create repeat dependency. We're trying to give your skin the foundation to stay healthy with minimum intervention. The goal is for you to need us less over time.",
  },
];

export default function Values() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.heading}>
          <p className="eyebrow eyebrow--on-green">Our Values</p>
        </Reveal>
        <div className={styles.grid}>
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 100} className={styles.col}>
              <h3 className={styles.title}>
                <em>{value.title}</em>
              </h3>
              <p className={styles.body}>{value.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

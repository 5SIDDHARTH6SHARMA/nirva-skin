import Reveal from "@/components/Reveal/Reveal";
import styles from "./WhatToExpect.module.css";

const STEPS = [
  {
    number: "01",
    title: "Fill in the form below",
    body: "Takes two minutes. Tell us your primary concern and preferred timing.",
  },
  {
    number: "02",
    title: "We confirm within 24 hours",
    body: "A member of our team will call or WhatsApp to confirm your slot.",
  },
  {
    number: "03",
    title: "Come in (or join online)",
    body: "In-clinic or video consultation available. 45 minutes. No rushing.",
  },
];

export default function WhatToExpect() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.heading}>
          <p className="eyebrow">What to Expect</p>
          <h2 className="headline-section">Three steps. No surprises.</h2>
        </Reveal>

        <div className={styles.row}>
          <span className={styles.connector} aria-hidden="true" />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>
                <em>{step.title}</em>
              </h3>
              <p className={styles.body}>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

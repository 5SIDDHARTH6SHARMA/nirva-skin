import { Lock, MessageCircle, CheckCircle } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./ReassuranceBlock.module.css";

const ITEMS = [
  {
    icon: Lock,
    title: "Private & Confidential",
    body: "Your consultation details and skin history are strictly confidential.",
  },
  {
    icon: MessageCircle,
    title: "No Pressure, Ever",
    body: "You are under no obligation to book a treatment after your consultation.",
  },
  {
    icon: CheckCircle,
    title: "Free First Consultation*",
    body: "Your first consultation is complimentary. *Valid for new patients only.",
  },
];

export default function ReassuranceBlock() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.row}`}>
        {ITEMS.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 80} className={styles.item}>
            <Icon size={24} strokeWidth={1.5} className={styles.icon} aria-hidden="true" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

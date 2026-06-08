import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./ContactCard.module.css";

export default function ContactCard() {
  return (
    <Reveal as="div" className={styles.card}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <MapPin size={16} strokeWidth={1.5} className={styles.icon} aria-hidden="true" />
          <span>Nirva Skin, 24 Lodhi Estate Road, New Delhi — 110003</span>
        </li>
      </ul>

      <div className={styles.mapWrap}>
        <span className={styles.mapLabel}>[ Map — Nirva Skin, Lodhi Estate, New Delhi ]</span>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Phone size={16} strokeWidth={1.5} className={styles.icon} aria-hidden="true" />
          <span>+91 98XXX XXXXX</span>
        </li>
        <li className={styles.item}>
          <Mail size={16} strokeWidth={1.5} className={styles.icon} aria-hidden="true" />
          <span>hello@nirvaskin.in</span>
        </li>
        <li className={`${styles.item} ${styles.itemMultiline}`}>
          <Clock size={16} strokeWidth={1.5} className={styles.icon} aria-hidden="true" />
          <span>
            Mon–Sat: 10:00 AM – 7:00 PM
            <br />
            Sunday: 11:00 AM – 3:00 PM
          </span>
        </li>
      </ul>
    </Reveal>
  );
}

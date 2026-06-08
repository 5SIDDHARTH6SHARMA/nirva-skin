import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import LeafIcon from "@/components/LeafIcon/LeafIcon";
import styles from "./Footer.module.css";

const QUICK_LINKS = [
  { href: "/treatments", label: "Treatments" },
  { href: "/about", label: "About Us" },
  { href: "/results", label: "Patient Stories" },
  { href: "/book", label: "Book a Consultation" },
  { href: "/", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.column}>
          <div className={styles.brand}>
            <LeafIcon size={20} color="var(--color-on-green)" />
            <span className={styles.brandName}>Nirva Skin</span>
          </div>
          <p className={styles.tagline}>Skin that tells your story, beautifully.</p>
          <p className={styles.blurb}>
            Nirva Skin is a dermatology and cosmetic clinic offering evidence-based skin
            treatments. We believe great skin is earned through care, not promises.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Explore</h3>
          <ul className={styles.linkList}>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Find Us</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={14} strokeWidth={1.5} className={styles.icon} />
              <span>Clinic address, City — 000 000</span>
            </li>
            <li>
              <Phone size={14} strokeWidth={1.5} className={styles.icon} />
              <span>+91 98XXX XXXXX</span>
            </li>
            <li>
              <Mail size={14} strokeWidth={1.5} className={styles.icon} />
              <span>hello@nirvaskin.in</span>
            </li>
          </ul>
          <div className={styles.hours}>
            <p className={styles.hoursLabel}>Clinic Hours</p>
            <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
            <p>Sunday: 11:00 AM – 3:00 PM</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Nirva Skin. All rights reserved.</p>
      </div>
    </footer>
  );
}

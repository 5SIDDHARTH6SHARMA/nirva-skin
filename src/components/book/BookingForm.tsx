"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./BookingForm.module.css";

const CONCERNS = [
  "Acne & Scarring",
  "Pigmentation & Melasma",
  "Anti-Ageing",
  "Hair Loss",
  "Chemical Peel",
  "Laser Treatment",
  "Other",
];

const TIME_SLOTS = ["Morning (10am–1pm)", "Afternoon (1pm–4pm)", "Evening (4pm–7pm)"];

const CONSULTATION_TYPES = [
  { value: "in-clinic", label: "In-Clinic" },
  { value: "video", label: "Video Call" },
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consultationType, setConsultationType] = useState("in-clinic");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Consultation request:", { ...data, consultationType });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <span className={styles.successGlyph} aria-hidden="true">
            ✦
          </span>
          <h2 className={styles.successHeadline}>
            <em>We&apos;ll be in touch.</em>
          </h2>
          <p className={styles.successBody}>
            We&apos;ve received your request and will confirm within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fullName">
            Full Name *
          </label>
          <input className={styles.input} type="text" id="fullName" name="fullName" required />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone Number *
          </label>
          <input className={styles.input} type="tel" id="phone" name="phone" required />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email Address *
          </label>
          <input className={styles.input} type="email" id="email" name="email" required />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="concern">
            Primary Concern *
          </label>
          <div className={styles.selectWrap}>
            <select className={styles.select} id="concern" name="concern" required defaultValue="">
              <option value="" disabled>
                Select a concern
              </option>
              {CONCERNS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className={styles.selectIcon} size={18} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="date">
            Preferred Date *
          </label>
          <input className={styles.input} type="date" id="date" name="date" required />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="time">
            Preferred Time *
          </label>
          <div className={styles.selectWrap}>
            <select className={styles.select} id="time" name="time" required defaultValue="">
              <option value="" disabled>
                Select a time slot
              </option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown className={styles.selectIcon} size={18} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>

        <div className={styles.field}>
          <span className={styles.label}>Consultation Type *</span>
          <div className={styles.radioGroup} role="radiogroup">
            {CONSULTATION_TYPES.map((type) => (
              <label className={styles.radioOption} key={type.value}>
                <input
                  type="radio"
                  name="consultationType"
                  value={type.value}
                  checked={consultationType === type.value}
                  onChange={() => setConsultationType(type.value)}
                  className={styles.radioInput}
                />
                <span className={styles.radioCircle} aria-hidden="true">
                  <span className={styles.radioDot} />
                </span>
                {type.label}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="notes">
            Anything else?
          </label>
          <textarea className={styles.textarea} id="notes" name="notes" rows={3} />
        </div>

        <button type="submit" className={styles.submit}>
          Request My Consultation
          <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <p className={styles.footnote}>
          We&apos;ll confirm within 24 hours. Your information is never shared.
          <br />
          Prefer WhatsApp?{" "}
          <Link href="#" className={styles.whatsapp}>
            Message us directly →
          </Link>
        </p>
      </form>
    </div>
  );
}

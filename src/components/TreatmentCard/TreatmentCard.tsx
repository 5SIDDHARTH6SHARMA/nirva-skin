"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Treatment } from "@/data/treatments";
import GreenLine from "@/components/GreenLine/GreenLine";
import styles from "./TreatmentCard.module.css";

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[treatment.icon] ?? Icons.Sparkles;

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <Icon size={24} strokeWidth={1.5} color="var(--color-moss)" />
        <span className={styles.number}>{treatment.number}</span>
      </div>

      <GreenLine width={40} className={styles.line} />

      <h3 className={styles.title}>{treatment.title}</h3>
      <p className={styles.body}>{treatment.description}</p>

      <Link href="/treatments" className={styles.explore}>
        Explore
        <span className={styles.arrowCircle}>
          <ArrowRight size={14} strokeWidth={1.5} />
        </span>
      </Link>
    </article>
  );
}

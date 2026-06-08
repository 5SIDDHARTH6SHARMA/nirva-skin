"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import GreenLine from "@/components/GreenLine/GreenLine";
import Blob from "@/components/Blob/Blob";
import SidePanels from "@/components/SidePanels/SidePanels";
import styles from "./Hero.module.css";

const HEADLINE_LINES = ["The skin you're in", "deserves more", "than a quick fix."];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={`${styles.glowBlob} ${styles.glowBlobOne} blob-fill blob-breathe`} aria-hidden="true" />
      <span className={`${styles.glowBlob} ${styles.glowBlobTwo} blob-fill blob-breathe`} aria-hidden="true" />

      <SidePanels
        panels={[
          { label: "Skin Care", swatch: "var(--color-blob-1)" },
          { label: "Consultation", swatch: "var(--color-blush)" },
        ]}
        className={styles.sidePanels}
      />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>NIRVA SKIN — EST. 2024</p>
          <GreenLine width={40} className={styles.line} />

          <h1 className={styles.headline}>
            {HEADLINE_LINES.map((line, i) => (
              <span className={styles.lineWrap} key={line}>
                <span className={styles.lineInner} style={{ animationDelay: `${i * 100}ms` }}>
                  {line}
                </span>
              </span>
            ))}
            <span className={`${styles.sparkle} ${styles.sparkleOne}`} aria-hidden="true">✦</span>
          </h1>

          <div className={styles.subtextWrap}>
            <p className={styles.subtext}>
              We&apos;re a dermatology and cosmetic clinic built around one belief: real results
              come from understanding your skin, not rushing it.
            </p>
            <span className={`${styles.sparkle} ${styles.sparkleTwo}`} aria-hidden="true">✦</span>
          </div>

          <div className={styles.ctas}>
            <Link href="/book" className="btn btn--primary">
              Book a Consultation
            </Link>
            <Link href="/treatments" className="btn btn--secondary">
              See Our Treatments
            </Link>
          </div>
        </div>

        <div className={styles.collage}>
          <Blob
            shapeIndex={0}
            gradient={["var(--color-blob-1)", "var(--color-blob-2)"]}
            label="[ Glowing skin, close-up — warm light ]"
            morph
            className={styles.imgOne}
          />
          <Blob
            shapeIndex={1}
            gradient={["var(--color-blob-3)", "var(--color-blob-2)"]}
            label="[ Serum drop, product texture ]"
            morph
            className={styles.imgTwo}
          />
          <Blob
            shapeIndex={2}
            gradient={["var(--color-blob-2)", "var(--color-blob-1)"]}
            label="[ Portrait, eyes closed, peaceful ]"
            morph
            className={styles.imgThree}
          />
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <ArrowDown size={18} strokeWidth={1.5} color="var(--color-moss)" />
      </div>
    </section>
  );
}

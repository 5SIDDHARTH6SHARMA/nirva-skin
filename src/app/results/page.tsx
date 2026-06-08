import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import BeforeAfterGrid from "@/components/results/BeforeAfterGrid";
import Testimonials from "@/components/results/Testimonials";
import TransparencyNote from "@/components/results/TransparencyNote";

export const metadata: Metadata = {
  title: "Patient Results — Nirva Skin",
  description:
    "Real patients. Real skin. Real time. Honest before/after results and stories from Nirva Skin patients — no touch-ups, no shortcuts.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Results"
        headline={
          <>
            <em>Real patients.</em>
            <br />
            <em>Real skin. Real time.</em>
          </>
        }
        subtext="These are not touched-up photographs. These are honest results from patients who agreed to share their journey. Some took 3 months. Some took a year. Skin takes its time."
        panels={[
          { label: "120+ Stories", swatch: "var(--color-blob-3)" },
          { label: "Book Now", swatch: "var(--color-blush)" },
        ]}
      />
      <BeforeAfterGrid />
      <Testimonials />
      <TransparencyNote />
    </>
  );
}

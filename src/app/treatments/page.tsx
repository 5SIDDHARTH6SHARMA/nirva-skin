import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import TreatmentGrid from "@/components/treatments/TreatmentGrid";
import ConsultationNote from "@/components/treatments/ConsultationNote";

export const metadata: Metadata = {
  title: "Treatments — Nirva Skin",
  description:
    "Twelve treatments. One philosophy: your skin, understood. Explore the full range of evidence-based dermatology and cosmetic treatments at Nirva Skin.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Treatments"
        headline={
          <>
            <em>Twelve treatments.</em>
            <br />
            <em>One philosophy: your skin, understood.</em>
          </>
        }
        subtext="Every treatment at Nirva Skin is preceded by a consultation. We don't offer treatments in isolation — we build a plan."
        panels={[
          { label: "12 Treatments", swatch: "var(--color-blob-1)" },
          { label: "Book Now", swatch: "var(--color-blush)" },
        ]}
      />
      <TreatmentGrid />
      <ConsultationNote />
    </>
  );
}

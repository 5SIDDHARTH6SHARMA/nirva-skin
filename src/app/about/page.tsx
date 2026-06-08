import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Doctor from "@/components/about/Doctor";
import Clinic from "@/components/about/Clinic";
import Values from "@/components/about/Values";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About — Nirva Skin",
  description:
    "We built Nirva Skin because patients deserved better. Meet Dr. Aarav Mehta and learn what makes our clinic different.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Doctor />
      <Clinic />
      <Values />
      <AboutCTA />
    </>
  );
}

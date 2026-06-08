import type { Metadata } from "next";
import BookHero from "@/components/book/BookHero";
import WhatToExpect from "@/components/book/WhatToExpect";
import BookingSection from "@/components/book/BookingSection";
import ReassuranceBlock from "@/components/book/ReassuranceBlock";

export const metadata: Metadata = {
  title: "Book a Consultation — Nirva Skin",
  description:
    "Let's talk about your skin. Book a 45-minute consultation with Dr. Aarav Mehta — honest, unhurried, and free for new patients.",
};

export default function BookPage() {
  return (
    <>
      <BookHero />
      <WhatToExpect />
      <BookingSection />
      <ReassuranceBlock />
    </>
  );
}

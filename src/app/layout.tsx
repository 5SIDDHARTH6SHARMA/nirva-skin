import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nirva Skin — Dermatology & Cosmetic Clinic",
  description:
    "Skin that tells your story, beautifully. Nirva Skin is a dermatology and cosmetic clinic offering evidence-based skin treatments, led by Dr. Aarav Mehta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

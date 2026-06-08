import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Philosophy from "@/components/home/Philosophy";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import WhyNirva from "@/components/home/WhyNirva";
import StoryTeaser from "@/components/home/StoryTeaser";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Philosophy />
      <FeaturedTreatments />
      <WhyNirva />
      <StoryTeaser />
      <CTABanner />
    </>
  );
}

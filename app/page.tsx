import HeroSection from "@/components/home/HeroSection";
import FeaturedStories from "@/components/home/FeaturedStories";
import TransformationGrid from "@/components/home/TransformationGrid";
import WisdomSection from "@/components/home/WisdomSection";
import BecomingJourney from "@/components/home/BecomingJourney";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />

      <FeaturedStories />

      <TransformationGrid />

      <WisdomSection />

      <BecomingJourney />

      <CTASection />
    </main>
  );
}
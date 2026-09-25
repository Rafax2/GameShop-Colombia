import HeroCarousel from "@/components/HeroCarousel";
import CategoryNavigation from "@/components/CategoryNavigation";
import FeaturedGames from "@/components/FeaturedGames";
import PlatformBanners from "@/components/PlatformBanners";
import BenefitsSection from "@/components/BenefitsSection";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroCarousel />
      <CategoryNavigation />
      <FeaturedGames />
      <PlatformBanners />
      <BenefitsSection />
    </div>
  );
}

import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import ModulesSection from "@/components/ModulesSection";
import ResourcesSection from "@/components/ResourcesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <HeroCarousel />
        <FeaturesSection />
        <ModulesSection />
        <ResourcesSection />
        <WhyChooseSection />
        <IndustriesSection />
      </main>
      <Footer />
    </div>
  );
}

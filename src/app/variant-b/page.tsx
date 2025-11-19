import Navigation from "@/components/sections/Navigation";
import HeroSectionVariantB from "@/components/sections/HeroSectionVariantB";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function VariantB() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSectionVariantB />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CaseStudySection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

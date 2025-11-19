import Navigation from "@/components/sections/Navigation";
import HeroSectionVariantC from "@/components/sections/HeroSectionVariantC";
import SolutionSection from "@/components/sections/SolutionSection";
import CaseStudySectionVariantC from "@/components/sections/CaseStudySectionVariantC";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSectionVariantC from "@/components/sections/PricingSectionVariantC";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function VariantC() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSectionVariantC />
      <SolutionSection />
      <CaseStudySectionVariantC />
      <FeaturesSection />
      <PricingSectionVariantC />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

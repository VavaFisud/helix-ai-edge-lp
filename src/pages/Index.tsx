
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionPreview from '@/components/SolutionPreview';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FAQSection from '@/components/FAQSection';
import UrgencySection from '@/components/UrgencySection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionPreview />
        <FeaturesShowcase />
        <TestimonialsSection />
        <PricingSection />
        <HowItWorksSection />
        <FAQSection />
        <UrgencySection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

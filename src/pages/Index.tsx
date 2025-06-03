
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionPreview from '@/components/SolutionPreview';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import InteractiveDemoSection from '@/components/InteractiveDemoSection';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FAQSection from '@/components/FAQSection';
import ModernFinalCTA from '@/components/ModernFinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionPreview />
        <FeaturesShowcase />
        <InteractiveDemoSection />
        <TechnologyShowcase />
        <TestimonialsSection />
        <PricingSection />
        <HowItWorksSection />
        <FAQSection />
        <ModernFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

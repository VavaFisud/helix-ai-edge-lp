
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionPreview from '@/components/SolutionPreview';
import FeaturesCarousel from '@/components/FeaturesCarousel';
import InteractiveDemoSection from '@/components/InteractiveDemoSection';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProfessionalPricingSection from '@/components/ProfessionalPricingSection';
import ProfessionalHowItWorks from '@/components/ProfessionalHowItWorks';
import ProfessionalFAQSection from '@/components/ProfessionalFAQSection';
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
        <FeaturesCarousel />
        <InteractiveDemoSection />
        <TechnologyShowcase />
        <TestimonialsSection />
        <ProfessionalPricingSection />
        <ProfessionalHowItWorks />
        <ProfessionalFAQSection />
        <ModernFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

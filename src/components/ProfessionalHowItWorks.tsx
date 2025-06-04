
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Brain, TrendingUp } from 'lucide-react';

const ProfessionalHowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: 'Access Daily Intelligence',
      description: 'Connect to 30+ institutional-grade data sources and AI-powered market analysis',
      details: 'Real-time feeds from Trading Economics, Reuters, central banks, and social sentiment aggregation.'
    },
    {
      icon: Brain,
      title: 'Enhance with Your Insights',
      description: 'Collaborate with AI by sharing your market observations and trading hypotheses',
      details: 'The AI learns from your successful predictions and adapts to your unique trading style.'
    },
    {
      icon: TrendingUp,
      title: 'Execute with Confidence',
      description: 'Make informed trading decisions backed by personalized AI recommendations',
      details: 'Get bias-scored predictions, risk assessments, and optimal entry/exit points.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Professional Trading Intelligence in 3 Steps
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            Transform from manual analysis to AI-powered trading intelligence with our sophisticated platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-[#1A1A1A] border border-[#333333] hover:border-[#0066CC]/50 transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-[#0066CC] text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              <CardHeader className="pt-8">
                <div className="mb-4 text-[#0066CC] flex justify-center">
                  <step.icon size={40} />
                </div>
                <CardTitle className="text-white text-xl text-center">{step.title}</CardTitle>
                <CardDescription className="text-[#E2E8F0] text-center">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#E2E8F0] text-sm leading-relaxed">
                  {step.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0066CC]/10 to-[#1A1A1A] border border-[#0066CC]/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Professional Trading Intelligence?
            </h3>
            <p className="text-[#E2E8F0] mb-6">
              Join thousands of traders who've transformed their analysis with Helix Terminal
            </p>
            <button className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#0066CC]/25">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHowItWorks;

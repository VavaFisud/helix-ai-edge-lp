
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Brain, TrendingUp, ArrowDown } from 'lucide-react';

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
    <section className="py-20 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0A0F1C] to-[#1A2332]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-[#0066CC]/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#0066CC]/15 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 shadow-2xl shadow-[#0066CC]/50">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent">
            Professional Trading Intelligence in 3 Steps
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed">
            Transform from manual analysis to AI-powered trading intelligence with our sophisticated platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-transparent via-[#0066CC]/50 to-transparent"></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Card className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border border-[#0066CC]/30 hover:border-[#0066CC]/60 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl shadow-black/50 hover:shadow-[#0066CC]/20 backdrop-blur-sm">
                {/* Step Number */}
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-2xl shadow-[#0066CC]/50 border-4 border-[#1A1A1A]">
                    {index + 1}
                  </div>
                </div>

                <CardHeader className="pt-12 pb-6">
                  <div className="mb-6 text-[#0066CC] flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 rounded-2xl flex items-center justify-center border border-[#0066CC]/30 shadow-xl">
                      <step.icon size={32} />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl text-center mb-3 group-hover:text-[#E2E8F0] transition-colors duration-300">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-[#E2E8F0] text-center leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#0066CC]/30 to-transparent mb-4"></div>
                  <p className="text-[#E2E8F0] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {step.details}
                  </p>
                </CardContent>
              </Card>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6 mb-2">
                  <div className="w-8 h-8 bg-[#0066CC]/20 rounded-full flex items-center justify-center">
                    <ArrowDown className="w-4 h-4 text-[#0066CC]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Professional CTA */}
        <div className="text-center mt-20">
          <div className="relative group max-w-2xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066CC]/30 to-[#0052A3]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border border-[#0066CC]/40 rounded-3xl p-8 shadow-2xl shadow-[#0066CC]/20 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent">
                Ready to Experience Professional Trading Intelligence?
              </h3>
              <p className="text-[#E2E8F0] mb-6 text-lg leading-relaxed">
                Join thousands of traders who've transformed their analysis with Helix Terminal
              </p>
              <div className="relative group/button inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-lg blur opacity-75 group-hover/button:opacity-100 transition duration-300"></div>
                <button className="relative bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-2xl shadow-[#0066CC]/25 hover:shadow-[#0066CC]/50 transform hover:scale-105">
                  Start Your Elite Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHowItWorks;

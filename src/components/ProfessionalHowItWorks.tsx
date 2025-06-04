
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
      {/* Enhanced Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
      
      {/* Enhanced Floating Elements with Glow */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#0066CC]/25 rounded-full blur-3xl animate-float animate-glow"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#0066CC]/20 rounded-full blur-3xl animate-float animate-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0066CC]/8 rounded-full blur-3xl animate-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 shadow-2xl shadow-[#0066CC]/50 animate-glow">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent animate-glow">
            Professional Trading Intelligence in 3 Steps
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed animate-glow">
            Transform from manual analysis to AI-powered trading intelligence with our sophisticated platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Enhanced Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-transparent via-[#0066CC]/60 to-transparent shadow-lg shadow-[#0066CC]/30 animate-glow"></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0066CC]/30 to-[#0052A3]/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow"></div>
              
              <Card className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/40 hover:border-[#0066CC]/70 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl shadow-[#0066CC]/20 hover:shadow-[#0066CC]/40 backdrop-blur-sm animate-glow">
                {/* Enhanced Step Number */}
                <div className="absolute -top-8 left-6">
                  <div className="relative group/number">
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full blur animate-glow"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-2xl shadow-[#0066CC]/50 border-4 border-[#1A1A1A] animate-glow">
                      {index + 1}
                    </div>
                  </div>
                </div>

                <CardHeader className="pt-16 pb-6">
                  <div className="mb-8 text-[#0066CC] flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0066CC]/25 to-[#0052A3]/25 rounded-2xl flex items-center justify-center border-2 border-[#0066CC]/40 shadow-2xl shadow-[#0066CC]/25 group-hover:shadow-[#0066CC]/50 transition-all duration-300 animate-glow">
                      <step.icon size={40} />
                    </div>
                  </div>
                  <CardTitle className="text-white text-2xl text-center mb-4 group-hover:text-[#E2E8F0] transition-colors duration-300 animate-glow">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-[#E2E8F0] text-center leading-relaxed text-lg animate-glow">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-10">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#0066CC]/40 to-transparent mb-6 shadow-lg shadow-[#0066CC]/20 animate-glow"></div>
                  <p className="text-[#E2E8F0] text-base leading-relaxed group-hover:text-white transition-colors duration-300 animate-glow">
                    {step.details}
                  </p>
                </CardContent>
              </Card>

              {/* Enhanced Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-8 mb-2">
                  <div className="relative group/arrow">
                    <div className="absolute -inset-2 bg-[#0066CC]/30 rounded-full blur animate-glow"></div>
                    <div className="relative w-12 h-12 bg-[#0066CC]/20 rounded-full flex items-center justify-center border-2 border-[#0066CC]/40 shadow-xl shadow-[#0066CC]/25 group-hover/arrow:shadow-[#0066CC]/50 transition-all duration-300 animate-glow">
                      <ArrowDown className="w-5 h-5 text-[#0066CC]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Professional CTA */}
        <div className="text-center mt-24">
          <div className="relative group max-w-3xl mx-auto">
            {/* Ultra Enhanced Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#0066CC]/40 to-[#0052A3]/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#0066CC]/30 to-[#0052A3]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow"></div>
            
            <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/50 rounded-3xl p-10 shadow-2xl shadow-[#0066CC]/30 backdrop-blur-sm animate-glow">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent animate-glow">
                Ready to Experience Professional Trading Intelligence?
              </h3>
              <p className="text-[#E2E8F0] mb-8 text-xl leading-relaxed animate-glow">
                Join thousands of traders who've transformed their analysis with Helix Terminal
              </p>
              <div className="relative group/button inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-xl blur-lg opacity-75 group-hover/button:opacity-100 transition duration-300 animate-glow"></div>
                <button className="relative bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-[#0066CC]/30 hover:shadow-[#0066CC]/60 transform hover:scale-105 animate-glow">
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

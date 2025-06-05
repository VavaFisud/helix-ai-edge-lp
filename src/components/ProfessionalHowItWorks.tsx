
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Brain, Target } from 'lucide-react';

const ProfessionalHowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Market Data",
      description: "Integrate 30+ premium financial data sources into one unified platform. Real-time feeds from central banks, economic calendars, and institutional-grade analytics.",
      icon: Terminal,
      features: ["Real-time market data", "Central bank feeds", "Economic calendars", "Institutional analytics"]
    },
    {
      number: "02", 
      title: "AI Learns Your Trading Style",
      description: "Our advanced machine learning algorithms analyze your trading patterns, preferences, and successful strategies to create personalized market insights.",
      icon: Brain,
      features: ["Pattern recognition", "Strategy analysis", "Personalized insights", "Continuous learning"]
    },
    {
      number: "03",
      title: "Execute With Confidence",
      description: "Receive AI-powered analysis, trade recommendations, and risk assessments tailored to your trading profile and market conditions.",
      icon: Target,
      features: ["Trade recommendations", "Risk analysis", "Market predictions", "Performance tracking"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#0066CC]/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0066CC]/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent">
            Professional Trading Intelligence in 3 Steps
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed">
            Transform your trading with institutional-grade AI that learns from your strategies and enhances your decision-making process
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-[#0066CC] to-transparent z-0 transform translate-x-4"></div>
              )}
              
              {/* Clean Card Design */}
              <Card className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/30 hover:border-[#0066CC]/60 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-[#0066CC]/20 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-6">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6 text-[#0066CC] flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 rounded-2xl flex items-center justify-center border-2 border-[#0066CC]/30 transition-all duration-300 hover:scale-110">
                      <step.icon size={32} />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-[#E2E8F0] leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-[#E2E8F0]">
                        <div className="w-2 h-2 bg-[#0066CC] rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHowItWorks;

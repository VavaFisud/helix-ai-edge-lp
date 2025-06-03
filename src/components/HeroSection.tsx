
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChartLine, Brain, Clock } from 'lucide-react';

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#1A2332] to-[#0066CC]/10 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px] opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066CC]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2B7CE5]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0066CC]/20 to-[#2B7CE5]/20 border border-[#0066CC]/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#E2E8F0] text-sm font-medium">Trusted by 2,500+ Professional Traders Worldwide</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Professional Forex{' '}
                <span className="bg-gradient-to-r from-[#2B7CE5] via-[#0066CC] to-[#2B7CE5] bg-clip-text text-transparent animate-gradient">
                  Intelligence
                </span>
                <br />
                <span className="text-[#E2E8F0] text-4xl sm:text-5xl lg:text-6xl">
                  Powered by AI
                </span>
              </h1>
              
              <p className="text-xl text-[#E2E8F0] leading-relaxed max-w-2xl">
                Transform raw market data into profitable trading insights. Get institutional-grade 
                analysis that learns from your expertise and adapts to your trading style.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-4">
              {[
                { icon: Brain, text: 'AI that adapts to YOUR trading style and market observations' },
                { icon: ChartLine, text: 'Real-time analysis of 30+ institutional-grade data sources' },
                { icon: Clock, text: '10x faster fundamental analysis with collaborative intelligence' }
              ].map((prop, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 text-[#10B981] mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <prop.icon size={24} />
                  </div>
                  <span className="text-[#E2E8F0] text-lg">{prop.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] hover:from-[#0052A3] hover:to-[#0066CC] text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your 3-Day Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white px-10 py-6 text-lg rounded-lg backdrop-blur-sm transition-all duration-300"
                onClick={() => setShowDemo(true)}
              >
                Watch Platform Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-[#E2E8F0]">
              <div className="flex items-center">
                <div className="w-4 h-4 text-[#10B981] mr-2">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 text-[#10B981] mr-2">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Setup in 60 Seconds
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 text-[#10B981] mr-2">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Cancel Anytime
              </div>
            </div>
          </div>

          {/* Right Column - Terminal Preview */}
          <div className="relative lg:scale-110">
            <div className="bg-gradient-to-br from-[#1A2332] to-[#243142] rounded-2xl border border-[#243142]/50 p-8 shadow-2xl backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-3">
                  <div className="w-3 h-3 bg-[#FF5F57] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#28CA42] rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                  <span className="text-[#E2E8F0] text-sm font-mono">Live Market Data</span>
                </div>
              </div>

              {/* Market Overview */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0A0F1C] p-4 rounded-lg border border-[#243142]">
                  <div className="text-[#10B981] font-mono text-sm mb-1">EUR/USD</div>
                  <div className="text-white font-bold text-2xl">1.0847</div>
                  <div className="text-[#10B981] text-sm">+0.23% ↗</div>
                </div>
                <div className="bg-[#0A0F1C] p-4 rounded-lg border border-[#243142]">
                  <div className="text-[#2B7CE5] font-mono text-sm mb-1">GBP/USD</div>
                  <div className="text-white font-bold text-2xl">1.2634</div>
                  <div className="text-red-400 text-sm">-0.15% ↘</div>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="bg-gradient-to-r from-[#0066CC]/20 to-[#2B7CE5]/20 border border-[#0066CC]/30 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] rounded-full flex items-center justify-center mr-3">
                    <Brain size={16} className="text-white" />
                  </div>
                  <span className="text-[#2B7CE5] font-semibold">AI Market Intelligence</span>
                </div>
                <p className="text-[#E2E8F0] text-sm leading-relaxed">
                  ECB's dovish tone shift detected in today's speech pattern analysis. 
                  Adjusting EUR strength probability to 72% bearish. Your recent observation 
                  about Lagarde's body language correlation confirmed.
                </p>
                <div className="mt-3 flex items-center">
                  <span className="text-xs text-[#10B981] bg-[#10B981]/20 px-2 py-1 rounded">
                    Confidence: 94%
                  </span>
                </div>
              </div>

              {/* Live Data Stream */}
              <div className="space-y-2">
                <div className="font-mono text-xs text-[#10B981]">
                  <span className="text-[#2B7CE5]">►</span> Fed Minutes: Rate pause probability 78% (+5%)
                </div>
                <div className="font-mono text-xs text-[#10B981]">
                  <span className="text-[#2B7CE5]">►</span> Your insight: "Powell seemed hesitant" - Learning...
                </div>
                <div className="font-mono text-xs text-[#10B981]">
                  <span className="text-[#2B7CE5]">►</span> ECB Speech sentiment: Hawkish → Neutral shift
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#10B981] to-[#0066CC] text-white px-4 py-3 rounded-lg shadow-lg">
              <div className="text-lg font-bold">+28%</div>
              <div className="text-xs opacity-90">Accuracy Boost</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] text-white px-4 py-3 rounded-lg shadow-lg">
              <div className="text-lg font-bold">€20k+</div>
              <div className="text-xs opacity-90">Annual Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-[#1A2332] rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden border border-[#243142] shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-[#243142]">
              <h3 className="text-2xl font-bold text-white">Helix Terminal Platform Demo</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="text-[#E2E8F0] hover:text-white transition-colors p-2 hover:bg-[#243142] rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="aspect-video bg-[#0A0F1C] rounded-xl flex items-center justify-center border border-[#243142]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Interactive Platform Walkthrough</h4>
                  <p className="text-[#E2E8F0] mb-4">See how professional traders use Helix Terminal</p>
                  <p className="text-sm text-[#E2E8F0]/70">3-minute comprehensive demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Pre-headline */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Trusted by 2,500+ Professional Traders Worldwide
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Helix Terminal: Where{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Human Intelligence
              </span>{' '}
              Meets AI Precision
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The first collaborative forex terminal that learns from your trading insights to deliver unmatched fundamental analysis accuracy. 
              Stop paying €24,000/year for Bloomberg - get superior intelligence for <span className="text-blue-400 font-semibold">€299/month</span>.
            </p>

            {/* Value Props */}
            <div className="space-y-4 mb-8">
              {[
                'AI that adapts to YOUR trading style and improves with every insight',
                'Real-time analysis of 30+ premium data sources in one unified platform',
                '10x more accurate predictions through human-AI collaboration'
              ].map((prop, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{prop}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Start Your 3-Day Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg"
                onClick={() => setShowDemo(true)}
              >
                Watch 2-Min Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-sm text-gray-400 space-y-1">
              <p>✓ No Credit Card Required • ✓ Cancel Anytime • ✓ Setup in 60 Seconds</p>
            </div>
          </div>

          {/* Right Column - Terminal Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 p-6 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">Helix Terminal v2.1</span>
              </div>

              {/* Terminal Content */}
              <div className="space-y-4">
                {/* Market Data */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 p-4 rounded border border-gray-600">
                    <div className="text-green-400 font-mono text-lg">EUR/USD</div>
                    <div className="text-white font-bold text-xl">1.0847</div>
                    <div className="text-green-400 text-sm">+0.23%</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded border border-gray-600">
                    <div className="text-blue-400 font-mono text-lg">GBP/USD</div>
                    <div className="text-white font-bold text-xl">1.2634</div>
                    <div className="text-red-400 text-sm">-0.15%</div>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="bg-blue-900/30 border border-blue-500/30 p-4 rounded">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-blue-300 font-semibold">AI Insight</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Based on your observation about Powell's tone, adjusting USD predictions. 
                    Confidence: 87%
                  </p>
                </div>

                {/* Live Data Stream */}
                <div className="font-mono text-xs text-green-400 space-y-1">
                  <div>► ECB Speech Analysis: Hawkish sentiment detected</div>
                  <div>► Fed Minutes: Rate pause probability 78%</div>
                  <div>► Your insight: "Lagarde seemed confident" - Learning...</div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
              +28% Accuracy
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
              €20k Saved
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">Helix Terminal Demo</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Demo video would play here</p>
                  <p className="text-sm text-gray-500 mt-2">2-minute product walkthrough</p>
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

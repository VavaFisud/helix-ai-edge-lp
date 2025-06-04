
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Building, Brain, Handshake, Terminal, Database } from 'lucide-react';

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      title: 'Ghost Trading Intelligence',
      icon: Zap,
      description: 'Backtest your insights virtually before risking capital',
      details: 'AI learns from your successful predictions to improve accuracy with real market data validation.'
    },
    {
      title: 'Central Bank Whisperer',
      icon: Building,
      description: 'Behavioral analysis of Fed, ECB, BoJ, BoE speeches in real-time',
      details: 'Detect subtle tone changes that move markets before others notice with advanced sentiment analysis.'
    },
    {
      title: 'Market Psychology Engine',
      icon: Brain,
      description: 'Aggregate sentiment from 30+ sources with custom Fear & Greed index',
      details: 'Social media, broker data, and institutional flows analysis for market sentiment prediction.'
    },
    {
      title: 'Collaborative AI Brain',
      icon: Handshake,
      description: 'Your insights make the AI smarter for everyone (anonymously)',
      details: 'Personalized bias scoring and continuous learning from global community of elite traders.'
    },
    {
      title: 'Premium Data Integration',
      icon: Database,
      description: '30+ institutional-grade sources in one unified platform',
      details: 'Trading Economics, Reuters, Fed, ECB direct feeds with AI-powered impact predictions.'
    },
    {
      title: 'Real-time Analysis',
      icon: Terminal,
      description: 'Professional-grade terminal designed for serious traders',
      details: 'Lightning-fast data processing, advanced charting with 50+ technical indicators.'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, features.length]);

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-[#0A0F1C] to-[#1A2332]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Revolutionary Features That Give You The Edge
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            Each feature is designed to amplify your trading intelligence and 
            give you unfair advantages in the forex markets.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-[#1A2332] to-[#243142] border border-[#243142] mx-4">
                    <CardHeader className="text-center pb-6">
                      <div className="mb-6 text-[#0066CC] flex justify-center">
                        <feature.icon size={48} />
                      </div>
                      <CardTitle className="text-white text-2xl mb-4">{feature.title}</CardTitle>
                      <CardDescription className="text-[#E2E8F0] text-lg">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-[#E2E8F0] leading-relaxed">
                        {feature.details}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#0066CC] scale-125' 
                    : 'bg-[#333333] hover:bg-[#0066CC]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;

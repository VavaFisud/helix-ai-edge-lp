
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Building, Brain, Handshake, Terminal, Database, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section id="features" className="py-16 bg-gradient-to-br from-[#0A0F1C] via-[#1A2332] to-[#0A0F1C] relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#0066CC]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0066CC]/25 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent">
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Clean Navigation Arrows with subtle glow */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-[#0066CC]/20 to-[#0052A3]/20 border-2 border-[#0066CC]/30 rounded-full flex items-center justify-center text-white hover:bg-[#0066CC]/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0066CC]/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-[#0066CC]/20 to-[#0052A3]/20 border-2 border-[#0066CC]/30 rounded-full flex items-center justify-center text-white hover:bg-[#0066CC]/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0066CC]/30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container with subtle card glow */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/30 hover:border-[#0066CC]/60 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-[#0066CC]/20 backdrop-blur-sm">
                    <CardHeader className="text-center pb-6">
                      <div className="mb-6 text-[#0066CC] flex justify-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 rounded-2xl flex items-center justify-center border-2 border-[#0066CC]/30 transition-all duration-300 hover:scale-110">
                          <feature.icon size={40} />
                        </div>
                      </div>
                      <CardTitle className="text-white text-2xl mb-4">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-[#E2E8F0] text-lg leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center pb-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#0066CC]/40 to-transparent mb-6"></div>
                      <p className="text-[#E2E8F0] leading-relaxed">
                        {feature.details}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Navigation Dots with subtle glow */}
          <div className="flex justify-center mt-8 space-x-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 h-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-full shadow-lg shadow-[#0066CC]/30' 
                    : 'w-3 h-3 bg-[#0066CC]/30 rounded-full hover:bg-[#0066CC]/60 hover:shadow-sm hover:shadow-[#0066CC]/20'
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

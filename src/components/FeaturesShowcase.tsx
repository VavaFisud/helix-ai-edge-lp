
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Ghost Trading Intelligence',
      icon: '👻',
      description: 'Backtest your insights virtually before risking capital',
      details: [
        'AI learns from your successful predictions to improve accuracy',
        'See exactly how your observations would have performed historically',
        'Risk-free strategy validation with real market data',
        'Virtual portfolio tracking with real-time P&L simulation'
      ],
      color: 'blue'
    },
    {
      title: 'Central Bank Whisperer',
      icon: '🏛️',
      description: 'Behavioral analysis of Fed, ECB, BoJ, BoE speeches in real-time',
      details: [
        'Detect subtle tone changes that move markets before others notice',
        'Historical correlation between banker behavior and currency movements',
        'Live sentiment scoring during press conferences',
        'Voice pattern analysis and body language detection'
      ],
      color: 'green'
    },
    {
      title: 'Market Psychology Engine',
      icon: '🧠',
      description: 'Aggregate sentiment from 30+ sources with custom Fear & Greed index',
      details: [
        'Social media, broker data, and institutional flows analysis',
        'Custom Fear & Greed index specifically for forex markets',
        'Retail vs professional sentiment comparison',
        'Predict reversals before crowd sentiment shifts'
      ],
      color: 'purple'
    },
    {
      title: 'Collaborative AI Brain',
      icon: '🤝',
      description: 'Your insights make the AI smarter for everyone (anonymously)',
      details: [
        'Personalized bias scoring (-5 to +5) based on your trading style',
        'Continuous learning from global community of elite traders',
        'AI explanations for every recommendation',
        'Privacy-first anonymous insight sharing'
      ],
      color: 'cyan'
    },
    {
      title: 'Bloomberg-Killer Interface',
      icon: '💻',
      description: 'Professional-grade terminal designed for serious traders',
      details: [
        'Fully customizable dashboards and alert systems',
        'Multi-timeframe analysis (24H, 1W, 1M, 3M perspectives)',
        'Lightning-fast data processing and visualization',
        'Advanced charting with 50+ technical indicators'
      ],
      color: 'orange'
    },
    {
      title: 'Premium Data Integration',
      icon: '📊',
      description: '30+ institutional-grade sources in one unified platform',
      details: [
        'Trading Economics, Reuters, Fed, ECB direct feeds',
        'Economic calendar with AI-powered impact predictions',
        'Breaking news analysis with instant sentiment classification',
        'Central bank meeting transcripts with behavioral insights'
      ],
      color: 'red'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
    red: 'from-red-500/20 to-red-600/20 border-red-500/30'
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Revolutionary Features That Give You The Edge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each feature is designed to amplify your trading intelligence and 
            give you unfair advantages in the forex markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${colorClasses[feature.color]} border cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                activeFeature === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.details.slice(0, 2).map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start text-sm text-gray-300">
                      <svg className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Deep Dive */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{features[activeFeature].icon}</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {features[activeFeature].title}
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {features[activeFeature].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Key Capabilities</h4>
              <div className="space-y-3">
                {features[activeFeature].details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-600">
              <h4 className="text-xl font-bold text-white mb-4">Feature Demo</h4>
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">{features[activeFeature].icon}</span>
                  </div>
                  <p className="text-gray-300">Interactive demo coming soon</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Experience this feature in your free trial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFeature === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {feature.icon} {feature.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;

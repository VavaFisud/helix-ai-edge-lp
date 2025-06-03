
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '1',
      title: 'Sign Up & Connect',
      description: 'Create your account and connect your preferred data sources in under 60 seconds',
      details: [
        'Instant account creation with email',
        'Connect to MT4/MT5 or other platforms',
        'Import your trading history',
        'Setup personalized alerts'
      ],
      icon: '🚀'
    },
    {
      step: '2', 
      title: 'Share Insights',
      description: 'Add your observations and let our AI learn your unique trading style',
      details: [
        'Share market observations in real-time',
        'AI analyzes your successful patterns',
        'Build your personalized trading profile',
        'Collaborate with elite trader community'
      ],
      icon: '🧠'
    },
    {
      step: '3',
      title: 'Trade Smarter',
      description: 'Get personalized predictions and execute trades with confidence',
      details: [
        'Receive AI-powered trade recommendations',
        'Access real-time market analysis',
        'Execute trades with higher accuracy',
        'Track and improve your performance'
      ],
      icon: '💰'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            From Setup to Profit in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined onboarding gets you trading smarter in minutes, not hours.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-gray-900">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-6xl text-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time to Value */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Seeing Results Immediately
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">60 sec</div>
                <div className="text-gray-300 text-sm">Setup time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24 hours</div>
                <div className="text-gray-300 text-sm">AI learns your style</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">7 days</div>
                <div className="text-gray-300 text-sm">Measurable improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

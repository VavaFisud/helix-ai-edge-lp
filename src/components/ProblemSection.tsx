
import React from 'react';
import { DollarSign, Brain, Clock, TrendingUp, Eye } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: 'Bloomberg costs €24,000/year',
      description: 'But treats you like just another data point with generic analysis',
      color: 'text-red-400'
    },
    {
      icon: Brain,
      title: 'Generic AI tools',
      description: "Don't understand YOUR unique trading insights and market observations",
      color: 'text-orange-400'
    },
    {
      icon: Clock,
      title: 'Hours wasted manually correlating',
      description: 'News, data, and central bank signals across multiple platforms',
      color: 'text-yellow-400'
    },
    {
      icon: TrendingUp,
      title: 'Missing profitable opportunities',
      description: 'While competitors use better intelligence and faster analysis',
      color: 'text-red-400'
    },
    {
      icon: Eye,
      title: 'Isolated analysis leads to blind spots',
      description: 'Costly emotional decisions without collaborative intelligence',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-20 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            The Traditional Trading Analysis Problem
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            Professional traders waste thousands of hours and miss countless opportunities 
            due to outdated, expensive, and disconnected analysis tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="professional-card p-6 hover-lift group"
            >
              <div className={`mb-4 ${problem.color} group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-[#E2E8F0] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="mt-16 bg-gradient-to-r from-red-900/20 to-[#1A2332] border border-red-500/30 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Hidden Cost of Outdated Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">€24,000/year</div>
                <div className="text-[#E2E8F0]">Bloomberg Terminal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+ hours</div>
                <div className="text-[#E2E8F0]">Wasted on manual analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">Countless</div>
                <div className="text-[#E2E8F0]">Missed opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

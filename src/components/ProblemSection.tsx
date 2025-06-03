
import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      icon: '💰',
      title: 'Bloomberg costs €24,000/year',
      description: 'But treats you like just another data point with generic analysis'
    },
    {
      icon: '🤖',
      title: 'Generic AI tools',
      description: "Don't understand YOUR unique trading insights and market observations"
    },
    {
      icon: '⏰',
      title: 'Hours wasted manually correlating',
      description: 'News, data, and central bank signals across multiple platforms'
    },
    {
      icon: '📈',
      title: 'Missing profitable opportunities',
      description: 'While competitors use better intelligence and faster analysis'
    },
    {
      icon: '👁️',
      title: 'Isolated analysis leads to blind spots',
      description: 'Costly emotional decisions without collaborative intelligence'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            The Traditional Trading Analysis Problem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional traders waste thousands of hours and miss countless opportunities 
            due to outdated, expensive, and disconnected analysis tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cost Comparison */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-gray-900/30 border border-red-500/30 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              The Hidden Cost of Outdated Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">€24,000/year</div>
                <div className="text-gray-300">Bloomberg Terminal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+ hours</div>
                <div className="text-gray-300">Wasted on manual analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">Countless</div>
                <div className="text-gray-300">Missed opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

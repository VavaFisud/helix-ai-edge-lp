
import React from 'react';
import { Database, Brain, ChartLine, Shield, Zap, Terminal } from 'lucide-react';

const TechnologyShowcase = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'Advanced AI Infrastructure',
      description: 'Powered by state-of-the-art machine learning algorithms trained on decades of market data',
      features: ['Gemini 2.5 AI Integration', 'Real-time Pattern Recognition', 'Predictive Analytics Engine']
    },
    {
      icon: Database,
      title: 'Premium Data Pipeline',
      description: 'Real-time processing from 30+ institutional-grade sources with millisecond latency',
      features: ['Reuters & Bloomberg Feeds', 'Central Bank Direct APIs', 'Economic Calendar Integration']
    },
    {
      icon: ChartLine,
      title: 'Collaborative Intelligence',
      description: 'Human-AI collaboration that learns from trader insights to improve market predictions',
      features: ['Behavioral Analysis', 'Sentiment Correlation', 'Community Learning Network']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption',
      features: ['256-bit Encryption', 'Multi-factor Authentication', 'Privacy-first Architecture']
    },
    {
      icon: Zap,
      title: 'Cloud-Native Performance',
      description: 'Globally distributed infrastructure ensuring instant access and 99.9% uptime',
      features: ['Sub-second Response Times', 'Auto-scaling Infrastructure', 'Global CDN Network']
    },
    {
      icon: Terminal,
      title: 'Professional API Suite',
      description: 'Comprehensive APIs for institutional integration with existing trading systems',
      features: ['REST & WebSocket APIs', 'MT4/MT5 Integration', 'Custom Dashboard SDKs']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1A2332] to-[#0A0F1C] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(43,124,229,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,102,204,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Powered by Advanced AI Infrastructure
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed">
            Built on cutting-edge technology stack that processes millions of data points 
            per second to deliver institutional-grade market intelligence.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#1A2332] to-[#243142] rounded-2xl border border-[#243142] p-8 hover:border-[#0066CC]/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#0066CC]/25 transition-all duration-300">
                <tech.icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2B7CE5] transition-colors duration-300">
                {tech.title}
              </h3>
              <p className="text-[#E2E8F0] mb-6 leading-relaxed">
                {tech.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3 group-hover:bg-[#2B7CE5] transition-colors duration-300"></div>
                    <span className="text-[#E2E8F0] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-[#0066CC]/10 to-[#2B7CE5]/10 border border-[#0066CC]/20 rounded-2xl p-12 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Performance That Powers Professional Trading
            </h3>
            <p className="text-[#E2E8F0] text-lg">
              Real-time metrics from our global infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#10B981] mb-2">
                <span className="bg-gradient-to-r from-[#10B981] to-[#0066CC] bg-clip-text text-transparent">
                  30+
                </span>
              </div>
              <div className="text-[#E2E8F0] text-sm font-medium">Premium Data Sources</div>
              <div className="text-[#E2E8F0]/70 text-xs mt-1">Real-time feeds</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2B7CE5] mb-2">
                <span className="bg-gradient-to-r from-[#2B7CE5] to-[#0066CC] bg-clip-text text-transparent">
                  &lt;200ms
                </span>
              </div>
              <div className="text-[#E2E8F0] text-sm font-medium">Response Time</div>
              <div className="text-[#E2E8F0]/70 text-xs mt-1">Global average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#10B981] mb-2">
                <span className="bg-gradient-to-r from-[#10B981] to-[#2B7CE5] bg-clip-text text-transparent">
                  99.9%
                </span>
              </div>
              <div className="text-[#E2E8F0] text-sm font-medium">Uptime SLA</div>
              <div className="text-[#E2E8F0]/70 text-xs mt-1">Guaranteed availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0066CC] mb-2">
                <span className="bg-gradient-to-r from-[#0066CC] to-[#10B981] bg-clip-text text-transparent">
                  50M+
                </span>
              </div>
              <div className="text-[#E2E8F0] text-sm font-medium">Data Points/Day</div>
              <div className="text-[#E2E8F0]/70 text-xs mt-1">Processed & analyzed</div>
            </div>
          </div>
        </div>

        {/* Integration Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Seamless Integration with Your Workflow
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A2332] border border-[#243142] rounded-xl p-6 hover:border-[#0066CC]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#0066CC]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal size={24} className="text-[#0066CC]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Trading Platforms</h4>
              <p className="text-[#E2E8F0] text-sm">MetaTrader 4/5, cTrader, TradingView integration</p>
            </div>
            <div className="bg-[#1A2332] border border-[#243142] rounded-xl p-6 hover:border-[#0066CC]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database size={24} className="text-[#10B981]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Management</h4>
              <p className="text-[#E2E8F0] text-sm">Portfolio management systems and risk engines</p>
            </div>
            <div className="bg-[#1A2332] border border-[#243142] rounded-xl p-6 hover:border-[#0066CC]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#2B7CE5]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain size={24} className="text-[#2B7CE5]" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI Models</h4>
              <p className="text-[#E2E8F0] text-sm">Custom model training and strategy backtesting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;

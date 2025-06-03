
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, ChartLine, Clock, Terminal } from 'lucide-react';

const InteractiveDemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Hello! I\'m your AI trading assistant. Ask me about any currency pair or market condition.' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const demoFeatures = [
    {
      id: 'morning-briefing',
      title: 'Daily Fundamental Reports',
      icon: ChartLine,
      description: 'Get comprehensive morning market analysis',
      preview: {
        title: 'EUR/USD Morning Briefing',
        content: 'Bearish sentiment (-2.3) detected following ECB dovish signals. Key resistance at 1.0890, support at 1.0820. Fed speech at 14:00 GMT may trigger volatility.',
        confidence: 89
      }
    },
    {
      id: 'ghost-trading',
      title: 'Ghost Trading Simulator',
      icon: Terminal,
      description: 'Test strategies risk-free before execution',
      preview: {
        title: 'Virtual Portfolio Performance',
        content: 'Your EUR/USD short strategy would have generated +2.4% this week. Risk: Low. Max drawdown: -0.8%.',
        confidence: 94
      }
    },
    {
      id: 'ai-chat',
      title: 'Collaborative AI Interface',
      icon: Brain,
      description: 'Real-time market intelligence conversation',
      preview: {
        title: 'AI Market Assistant',
        content: 'Based on your trading style, I recommend monitoring USD/JPY for potential long opportunity. BoJ intervention probability: 23%.',
        confidence: 87
      }
    },
    {
      id: 'central-bank',
      title: 'Central Bank Analysis',
      icon: Clock,
      description: 'Live speech sentiment and behavioral insights',
      preview: {
        title: 'Fed Chair Powell Analysis',
        content: 'Voice pattern analysis shows 78% confidence level. Tone shift at 14:32 suggests dovish lean. Historical correlation: 94% accuracy.',
        confidence: 96
      }
    }
  ];

  const sampleQuestions = [
    "What's your view on EUR/USD?",
    "How will the Fed meeting affect USD?",
    "Show me GBP technical analysis",
    "What are the key risks today?"
  ];

  const aiResponses = {
    "What's your view on EUR/USD?": "EUR/USD is showing bearish momentum (-2.1 bias) following ECB dovish signals. Key level: 1.0850 resistance. My analysis suggests 68% probability of testing 1.0800 support within 24h. Would you like detailed fundamental breakdown?",
    "How will the Fed meeting affect USD?": "Fed meeting probability matrix shows 73% chance of dovish surprise based on recent employment data. USD could weaken 0.5-1.2% across majors. I recommend monitoring USD/JPY 148.50 level for intervention signals.",
    "Show me GBP technical analysis": "GBP/USD technical setup: Bullish flag pattern targeting 1.2750. RSI(14) = 58.7, MACD showing momentum build. However, UK inflation data tomorrow poses 34% downside risk. Risk/reward: 1:2.4 favorable.",
    "What are the key risks today?": "Top 3 risks: 1) ECB speech at 15:30 (volatility probability: 67%), 2) US retail sales deviation >0.3% (USD impact), 3) China property sector news (AUD/NZD correlation). Recommended position sizing: Conservative."
  };

  const handleQuestionClick = (question: string) => {
    setUserInput(question);
    handleSendMessage(question);
  };

  const handleSendMessage = (message: string = userInput) => {
    if (!message.trim()) return;

    const newUserMessage = { type: 'user', content: message };
    setChatMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsTyping(true);

    // Simulate AI typing
    setTimeout(() => {
      const response = aiResponses[message] || "I'd be happy to analyze that for you! Sign up for your free trial to access my full market intelligence capabilities and get personalized insights based on your trading style.";
      const aiMessage = { type: 'ai', content: response };
      setChatMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0F1C] to-[#1A2332] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,204,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience Helix Intelligence
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed">
            Interact with our AI-powered platform and see how professional traders 
            are revolutionizing their market analysis workflow.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demoFeatures.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveDemo(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] text-white shadow-lg'
                  : 'bg-[#1A2332] text-[#E2E8F0] hover:bg-[#243142] border border-[#243142]'
              }`}
            >
              <feature.icon size={20} />
              <span className="hidden sm:block">{feature.title}</span>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Feature Demo */}
          <div className="bg-gradient-to-br from-[#1A2332] to-[#243142] rounded-2xl border border-[#243142] p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] rounded-lg flex items-center justify-center mr-4">
                {React.createElement(demoFeatures[activeDemo].icon, { size: 24, className: 'text-white' })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{demoFeatures[activeDemo].title}</h3>
                <p className="text-[#E2E8F0]">{demoFeatures[activeDemo].description}</p>
              </div>
            </div>

            <div className="bg-[#0A0F1C] rounded-xl p-6 border border-[#243142]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">{demoFeatures[activeDemo].preview.title}</h4>
                <span className="bg-[#10B981]/20 text-[#10B981] px-3 py-1 rounded-full text-sm font-medium">
                  {demoFeatures[activeDemo].preview.confidence}% Confidence
                </span>
              </div>
              <p className="text-[#E2E8F0] leading-relaxed mb-4">
                {demoFeatures[activeDemo].preview.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#E2E8F0]">Live Analysis</span>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white"
                >
                  Try Full Analysis
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Interactive AI Chat */}
          <div className="bg-gradient-to-br from-[#1A2332] to-[#243142] rounded-2xl border border-[#243142] p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#0066CC] rounded-lg flex items-center justify-center mr-4">
                <Brain size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AI Market Assistant</h3>
                <p className="text-[#E2E8F0]">Ask me anything about forex markets</p>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="bg-[#0A0F1C] rounded-xl border border-[#243142] h-80 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-[#0066CC] text-white' 
                        : 'bg-[#1A2332] text-[#E2E8F0] border border-[#243142]'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-[#1A2332] text-[#E2E8F0] border border-[#243142] p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#0066CC] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#0066CC] rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-[#0066CC] rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-[#243142]">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about EUR/USD, Fed policy, or any market..."
                    className="flex-1 bg-[#1A2332] border border-[#243142] text-white placeholder-[#E2E8F0]/50 px-4 py-2 rounded-lg focus:outline-none focus:border-[#0066CC]"
                  />
                  <Button 
                    onClick={() => handleSendMessage()}
                    size="sm"
                    className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-6"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>

            {/* Sample Questions */}
            <div className="mt-6">
              <p className="text-sm text-[#E2E8F0] mb-3">Try these sample questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="text-left text-sm text-[#2B7CE5] hover:text-white bg-[#0066CC]/10 hover:bg-[#0066CC]/20 p-2 rounded border border-[#0066CC]/20 transition-all duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#E2E8F0] mb-6">
            Ready to access the full power of Helix Terminal?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] hover:from-[#0052A3] hover:to-[#0066CC] text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Free Trial - Full AI Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;


import React from 'react';

const SolutionPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Helix Changes Everything
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Imagine an AI that learns from your observations - when you notice Powell seemed nervous, 
            it adjusts USD predictions in real-time. That's the power of 
            <span className="text-blue-400 font-semibold"> collaborative intelligence</span>.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Demo Container */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 shadow-2xl">
            {/* Demo Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Live Collaboration Demo</h3>
                  <p className="text-gray-400 text-sm">Your insight improving AI predictions</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Live</span>
              </div>
            </div>

            {/* Demo Content */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Your Input */}
              <div className="space-y-6">
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-blue-300 font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Your Observation
                  </h4>
                  <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-gray-300 italic">
                      "Powell seemed unusually nervous during the Q&A. His voice pattern changed 
                      when discussing inflation targets. Usually means dovish surprise coming."
                    </p>
                    <div className="mt-3 text-xs text-gray-400">
                      Submitted: 2 minutes ago
                    </div>
                  </div>
                </div>

                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-green-300 font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    AI Learning Confirmation
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Insight Processing:</span>
                      <span className="text-green-400">Complete ✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Historical Correlation:</span>
                      <span className="text-green-400">87% match</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Model Update:</span>
                      <span className="text-green-400">Applied ✓</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - AI Response */}
              <div className="space-y-6">
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-purple-300 font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Updated Prediction
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">USD Index Forecast</span>
                        <span className="text-red-400 font-bold">↓ Bearish</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Previous: Neutral → New: Bearish (Based on your behavioral analysis)
                      </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Confidence Level</span>
                        <span className="text-green-400 font-bold">91%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{width: '91%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-6">
                  <h4 className="text-orange-300 font-semibold mb-3">Trade Recommendations</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
                      <span className="text-gray-300">EUR/USD Long</span>
                      <span className="text-green-400 font-bold">+89% prob</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
                      <span className="text-gray-300">GBP/USD Long</span>
                      <span className="text-green-400 font-bold">+76% prob</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
                      <span className="text-gray-300">USD/JPY Short</span>
                      <span className="text-green-400 font-bold">+82% prob</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">+23%</div>
                <div className="text-sm text-gray-400">Accuracy Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">1.2s</div>
                <div className="text-sm text-gray-400">Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">2,847</div>
                <div className="text-sm text-gray-400">Traders Learning</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold animate-bounce">
            Real-time Learning
          </div>
          <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold animate-pulse">
            Collaborative AI
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionPreview;

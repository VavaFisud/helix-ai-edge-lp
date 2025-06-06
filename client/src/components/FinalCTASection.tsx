
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the revolution of collaborative AI trading intelligence. 
            Stop paying €24,000/year for Bloomberg's generic data when you can get 
            <span className="text-cyan-400 font-bold"> personalized AI insights for €299/month</span>.
          </p>

          {/* Value Props Showcase */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">28% More Accurate</h3>
              <p className="text-gray-300">AI learns from YOUR insights</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">€20,412 Saved</h3>
              <p className="text-gray-300">vs Bloomberg Terminal annually</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">60 Sec Setup</h3>
              <p className="text-gray-300">Start trading smarter today</p>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <Link to="/auth?form=signup">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-16 py-8 text-2xl font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Start Your 3-Day Free Trial
              </Button>
            </Link>
          </div>

          {/* Risk Reversal */}
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-6 max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              🛡️ No Risk, No Commitment, Just Results
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-green-400 font-bold text-lg">✓ 3-Day Free Trial</div>
                <div className="text-gray-300 text-sm">Full access, no restrictions</div>
              </div>
              <div>
                <div className="text-green-400 font-bold text-lg">✓ No Credit Card</div>
                <div className="text-gray-300 text-sm">Required to start</div>
              </div>
              <div>
                <div className="text-green-400 font-bold text-lg">✓ 30-Day Guarantee</div>
                <div className="text-gray-300 text-sm">Money back if not satisfied</div>
              </div>
            </div>
          </div>

          {/* Urgency Elements */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="bg-red-900/30 border border-red-500/50 rounded-lg px-6 py-3">
              <div className="text-red-400 font-bold">⏰ Beta pricing ends soon</div>
              <div className="text-gray-300 text-sm">Lock in €299/month forever</div>
            </div>
            <div className="bg-orange-900/30 border border-orange-500/50 rounded-lg px-6 py-3">
              <div className="text-orange-400 font-bold">🔥 47 spots remaining</div>
              <div className="text-gray-300 text-sm">Out of 100 beta positions</div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300">
              <span className="text-blue-400 font-bold">2,500+ professional traders</span> trust Helix Terminal
            </p>
            <p className="text-gray-400 text-sm mt-2">
              "Best trading tool investment I've ever made" - James Thompson, Former JP Morgan
            </p>
          </div>

          {/* Final Push */}
          <div className="mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-600 rounded-2xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't Let Your Competitors Get There First
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              While you're reading this, other traders are already using Helix to gain unfair advantages in the markets.
            </p>
            <Link to="/auth?form=signup">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold"
              >
                Claim Your Competitive Edge Now →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

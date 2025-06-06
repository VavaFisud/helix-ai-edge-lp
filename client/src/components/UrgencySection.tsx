
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UrgencySection = () => {
  const [spotsRemaining, setSpotsRemaining] = useState(47);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate spots decreasing
  useEffect(() => {
    const spotsTimer = setInterval(() => {
      setSpotsRemaining(prev => Math.max(25, prev - Math.floor(Math.random() * 2)));
    }, 30000);

    return () => clearInterval(spotsTimer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-orange-500/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Urgent Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
            ⚠️ LIMITED TIME ONLY
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Limited Beta Access - Join Now
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're currently in exclusive beta with limited spots available. 
                Secure your access before we open to the general public at 
                <span className="text-red-400 font-bold"> higher pricing</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Spots Remaining */}
              <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Beta Spots Remaining
                </h3>
                <div className="text-6xl font-bold text-red-400 mb-4">
                  {spotsRemaining}
                </div>
                <div className="text-gray-300 mb-4">
                  Out of 100 exclusive beta positions
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${spotsRemaining}%` }}
                  ></div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 border border-orange-500/30 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Beta Ends In
                </h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-400">{timeLeft.days}</div>
                    <div className="text-xs text-gray-400">DAYS</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-400">{timeLeft.hours}</div>
                    <div className="text-xs text-gray-400">HOURS</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-400">{timeLeft.minutes}</div>
                    <div className="text-xs text-gray-400">MIN</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-400">{timeLeft.seconds}</div>
                    <div className="text-xs text-gray-400">SEC</div>
                  </div>
                </div>
                <div className="text-gray-300">
                  After beta: €499/month
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                🎯 Exclusive Beta Benefits
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="text-white font-semibold">Lock in €299/month</div>
                  <div className="text-gray-400 text-sm">Forever pricing guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-white font-semibold">VIP Support</div>
                  <div className="text-gray-400 text-sm">Direct line to our dev team</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-white font-semibold">Feature Influence</div>
                  <div className="text-gray-400 text-sm">Shape the product roadmap</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/auth?form=signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-200 shadow-2xl"
                >
                  🔥 Secure My Beta Access Now
                </Button>
              </Link>
              <div className="mt-4 text-sm text-gray-400">
                ✓ No Credit Card Required • ✓ 3-Day Free Trial • ✓ Lock in Beta Pricing
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 text-center">
              <div className="text-gray-400 text-sm mb-2">
                Recently joined beta users:
              </div>
              <div className="flex justify-center items-center space-x-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs text-white">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <span className="text-gray-400 text-sm ml-2">+2,839 others</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

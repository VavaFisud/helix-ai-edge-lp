
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PricingSection = () => {
  const features = [
    'Unlimited platform access and analysis',
    'Full AI collaboration and learning',
    'Complete customization and personalization',
    'All premium data sources included',
    'Priority customer support',
    'Early access to new features',
    'Mobile and desktop applications',
    'API access for institutional clients',
    'White-glove onboarding and training'
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Simple Pricing, Extraordinary Value
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to dominate forex markets. No hidden fees, no limits.
          </p>
        </div>

        {/* Value Comparison */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Stop Overpaying for Outdated Tools
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-6">
                  <div className="text-sm text-red-300 mb-2">Bloomberg Terminal</div>
                  <div className="text-3xl font-bold text-red-400 mb-2">€24,000</div>
                  <div className="text-sm text-gray-400">per year</div>
                  <div className="mt-4 space-y-2 text-sm text-gray-300">
                    <div>❌ Generic data for everyone</div>
                    <div>❌ No AI collaboration</div>
                    <div>❌ Outdated interface</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <div className="text-white font-bold">VS</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-900/50 to-green-900/50 border border-blue-500/50 rounded-lg p-6 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Save 85%
                  </div>
                  <div className="text-sm text-blue-300 mb-2">Helix Terminal</div>
                  <div className="text-3xl font-bold text-green-400 mb-2">€3,588</div>
                  <div className="text-sm text-gray-400">per year</div>
                  <div className="mt-4 space-y-2 text-sm text-gray-300">
                    <div>✅ AI learns from YOU</div>
                    <div>✅ Collaborative intelligence</div>
                    <div>✅ Modern, intuitive design</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="text-2xl font-bold text-green-400">
                Your Annual Savings: €20,412
              </div>
              <div className="text-gray-300 mt-2">
                Enough to hire a junior analyst for a year
              </div>
            </div>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/50 border-2 relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
              Only Plan Available
            </div>
            
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-white">Pro Plan</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                The Complete Helix Experience
              </CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold text-white">€299</span>
                <span className="text-gray-300 text-xl">/month</span>
              </div>
              <div className="text-gray-400 text-sm mt-2">
                Billed monthly • Cancel anytime
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
                  Start Pro Trial - 3 Days Free
                </Button>
                <div className="text-center">
                  <div className="inline-flex items-center text-green-400 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    30-Day Money-Back Guarantee
                  </div>
                </div>
              </div>

              {/* Additional Benefits */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-white font-bold mb-4">What's Included in Your Trial:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Complete access to all Pro features
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      No credit card required to start
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Personal onboarding session included
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Cancel anytime with one click
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Keep insights and analysis you've created
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Priority support during trial
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Signal */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-2">
            <span className="text-blue-400 font-semibold">2,847 traders</span> started their trial this month
          </p>
          <div className="flex justify-center items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-400 text-sm ml-2">4.9/5 from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

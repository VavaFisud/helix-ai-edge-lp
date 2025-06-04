
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Check } from 'lucide-react';

const ProfessionalPricingSection = () => {
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
    <section id="pricing" className="py-20 bg-[#000000]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Simple Pricing, Extraordinary Value
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            Everything you need to dominate forex markets. No hidden fees, no limits.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto">
          <Card className="bg-[#1A1A1A] border-[#0066CC] border-2 relative shadow-2xl shadow-[#0066CC]/20">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0066CC] text-white px-6 py-2 rounded-full text-sm font-bold">
              Most Popular
            </div>
            
            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-3xl font-bold text-white">Pro Plan</CardTitle>
              <CardDescription className="text-[#E2E8F0] text-lg mt-2">
                The Complete Helix Experience
              </CardDescription>
              <div className="mt-8">
                <span className="text-5xl font-bold text-white">€299</span>
                <span className="text-[#E2E8F0] text-xl">/month</span>
              </div>
              <div className="text-[#E2E8F0] text-sm mt-2">
                Billed monthly • Cancel anytime
              </div>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-[#0066CC] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#E2E8F0]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-[#0066CC]/25 hover:scale-105"
                >
                  Start Pro Trial - 3 Days Free
                </Button>
                <div className="text-center">
                  <div className="inline-flex items-center text-[#10B981] text-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    30-Day Money-Back Guarantee
                  </div>
                </div>
              </div>

              {/* Additional Benefits */}
              <div className="mt-8 pt-6 border-t border-[#333333]">
                <h4 className="text-white font-bold mb-4 text-center">What's Included in Your Trial:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center text-[#E2E8F0]">
                      <Check className="w-4 h-4 text-[#0066CC] mr-2" />
                      Complete access to all Pro features
                    </div>
                    <div className="flex items-center text-[#E2E8F0]">
                      <Check className="w-4 h-4 text-[#0066CC] mr-2" />
                      No credit card required to start
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-[#E2E8F0]">
                      <Check className="w-4 h-4 text-[#0066CC] mr-2" />
                      Cancel anytime with one click
                    </div>
                    <div className="flex items-center text-[#E2E8F0]">
                      <Check className="w-4 h-4 text-[#0066CC] mr-2" />
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
          <p className="text-[#E2E8F0] text-sm mb-2">
            <span className="text-[#0066CC] font-semibold">2,847 traders</span> started their trial this month
          </p>
          <div className="flex justify-center items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-[#E2E8F0] text-sm ml-2">4.9/5 from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPricingSection;

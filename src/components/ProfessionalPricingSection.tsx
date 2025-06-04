
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Check, Star, Zap, Crown } from 'lucide-react';

const ProfessionalPricingSection = () => {
  const features = [
    'Unlimited platform access and analysis',
    'Full AI collaboration and learning',
    'Complete customization and personalization',
    'All premium data sources included',
    'Priority customer support',
    'Early access to new features',
    'Mobile and desktop applications',
    'API access for custom trading applications',
    'White-glove onboarding and training'
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Stunning Background with Enhanced Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#0066CC]/15 rounded-full blur-3xl animate-float animate-glow"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#0066CC]/20 rounded-full blur-3xl animate-float animate-glow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0066CC]/8 rounded-full blur-3xl animate-glow"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 shadow-2xl shadow-[#0066CC]/50 animate-glow">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent animate-glow">
            Premium Trading Intelligence
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed animate-glow">
            Join elite traders who've transformed their analysis with institutional-grade AI
          </p>
        </div>

        {/* Enhanced Premium Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            {/* Ultra Enhanced Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#0066CC]/50 via-[#0052A3]/40 to-[#0066CC]/50 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#0066CC]/30 via-[#0052A3]/20 to-[#0066CC]/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow"></div>
            
            <Card className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/40 shadow-2xl shadow-[#0066CC]/30 hover:shadow-[#0066CC]/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm animate-glow">
              {/* Enhanced Premium Badge */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="relative group/badge">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-full blur animate-glow"></div>
                  <div className="relative bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white px-8 py-3 rounded-full text-sm font-bold shadow-2xl shadow-[#0066CC]/50 flex items-center space-x-2 animate-glow">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Elite Plan</span>
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="text-center pb-8 pt-20">
                <CardTitle className="text-4xl font-bold text-white mb-2 animate-glow">Pro Plan</CardTitle>
                <CardDescription className="text-[#E2E8F0] text-xl animate-glow">
                  Complete Helix Experience
                </CardDescription>
                <div className="mt-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066CC]/30 to-transparent rounded-2xl blur-xl animate-glow"></div>
                  <div className="relative bg-gradient-to-r from-[#0066CC]/15 to-[#0052A3]/15 rounded-2xl p-8 border-2 border-[#0066CC]/40 shadow-2xl shadow-[#0066CC]/25 animate-glow">
                    <span className="text-7xl font-bold text-white bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent animate-glow">€299</span>
                    <span className="text-[#E2E8F0] text-2xl ml-2 animate-glow">/month</span>
                    <div className="text-[#E2E8F0] text-base mt-3 flex items-center justify-center space-x-3 animate-glow">
                      <Shield className="w-5 h-5 text-[#10B981]" />
                      <span>Billed monthly • Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                {/* Enhanced Features List */}
                <div className="space-y-5 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center mr-4 mt-0.5 shadow-xl shadow-[#0066CC]/40 group-hover/item:shadow-[#0066CC]/60 transition-all duration-300 animate-glow">
                        <Check className="w-4 h-4 text-white font-bold" />
                      </div>
                      <span className="text-[#E2E8F0] leading-relaxed text-lg group-hover/item:text-white transition-colors duration-300 animate-glow">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <div className="space-y-8">
                  <div className="relative group/button">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-xl blur-lg opacity-75 group-hover/button:opacity-100 transition duration-300 animate-glow"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-xl blur opacity-50 group-hover/button:opacity-75 transition duration-300 animate-glow"></div>
                    <Button 
                      size="lg" 
                      className="relative w-full bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white py-8 text-xl font-bold transition-all duration-300 shadow-2xl shadow-[#0066CC]/30 hover:shadow-[#0066CC]/60 border-0 group-hover/button:scale-105 animate-glow"
                    >
                      <Zap className="w-6 h-6 mr-3" />
                      Start Elite Trial - 3 Days Free
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center text-[#10B981] text-base bg-[#10B981]/15 px-6 py-3 rounded-full border-2 border-[#10B981]/40 shadow-lg shadow-[#10B981]/25 animate-glow">
                      <Shield className="w-5 h-5 mr-2" />
                      30-Day Money-Back Guarantee
                    </div>
                  </div>
                </div>

                {/* Enhanced Trial Benefits */}
                <div className="mt-10 pt-8 border-t border-[#0066CC]/30">
                  <h4 className="text-white font-bold mb-6 text-center text-xl animate-glow">Elite Trial Includes:</h4>
                  <div className="grid md:grid-cols-2 gap-6 text-base">
                    <div className="space-y-4">
                      <div className="flex items-center text-[#E2E8F0] animate-glow">
                        <div className="w-3 h-3 bg-[#0066CC] rounded-full mr-4 shadow-lg shadow-[#0066CC]/50"></div>
                        Complete access to all Pro features
                      </div>
                      <div className="flex items-center text-[#E2E8F0] animate-glow">
                        <div className="w-3 h-3 bg-[#0066CC] rounded-full mr-4 shadow-lg shadow-[#0066CC]/50"></div>
                        No credit card required to start
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center text-[#E2E8F0] animate-glow">
                        <div className="w-3 h-3 bg-[#0066CC] rounded-full mr-4 shadow-lg shadow-[#0066CC]/50"></div>
                        Cancel anytime with one click
                      </div>
                      <div className="flex items-center text-[#E2E8F0] animate-glow">
                        <div className="w-3 h-3 bg-[#0066CC] rounded-full mr-4 shadow-lg shadow-[#0066CC]/50"></div>
                        Priority support during trial
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Trust Signals */}
        <div className="text-center mt-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066CC]/20 to-[#0052A3]/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
            <div className="relative bg-gradient-to-r from-[#0066CC]/10 to-[#0052A3]/10 border-2 border-[#0066CC]/30 rounded-2xl p-8 backdrop-blur-sm shadow-xl shadow-[#0066CC]/20 animate-glow">
              <p className="text-[#E2E8F0] text-lg mb-4 animate-glow">
                <span className="text-[#0066CC] font-semibold text-2xl">2,847 traders</span> started their elite trial this month
              </p>
              <div className="flex justify-center items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#F59E0B] fill-current shadow-lg shadow-[#F59E0B]/30 animate-glow" />
                ))}
                <span className="text-[#E2E8F0] text-lg ml-4 animate-glow">4.9/5 from 500+ elite traders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPricingSection;

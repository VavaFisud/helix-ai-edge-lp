
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChartLine, Shield, Zap } from 'lucide-react';

const ModernFinalCTA = () => {
  const benefits = [
    {
      icon: ChartLine,
      title: '28% More Accurate',
      description: 'AI learns from YOUR insights',
      color: 'from-[#10B981] to-[#0066CC]'
    },
    {
      icon: Shield,
      title: '€20,412 Saved',
      description: 'vs Bloomberg Terminal annually', 
      color: 'from-[#0066CC] to-[#2B7CE5]'
    },
    {
      icon: Zap,
      title: '60 Sec Setup',
      description: 'Start trading smarter today',
      color: 'from-[#2B7CE5] to-[#10B981]'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A0F1C] via-[#1A2332] to-[#0066CC]/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(43,124,229,0.15),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Trading Intelligence
          </h2>
          <p className="text-2xl text-[#E2E8F0] mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the revolution of collaborative AI trading intelligence. Stop paying 
            €24,000/year for Bloomberg's generic data when you can get{' '}
            <span className="bg-gradient-to-r from-[#2B7CE5] to-[#10B981] bg-clip-text text-transparent font-bold">
              personalized AI insights for €299/month
            </span>.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-[#1A2332]/80 to-[#243142]/80 border border-[#243142] rounded-2xl p-8 backdrop-blur-sm hover:border-[#0066CC]/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}>
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-[#E2E8F0]">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] hover:from-[#0052A3] hover:to-[#0066CC] text-white px-16 py-8 text-2xl font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#0066CC]/25"
            >
              Start Your 3-Day Free Trial
            </Button>
          </div>

          {/* Risk Reversal */}
          <div className="bg-gradient-to-r from-[#10B981]/10 to-[#0066CC]/10 border border-[#10B981]/20 rounded-2xl p-8 max-w-4xl mx-auto mb-16 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Shield size={28} className="text-[#10B981] mr-3" />
              No Risk, No Commitment, Just Results
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#10B981]/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-[#10B981] font-bold text-lg">3-Day Free Trial</div>
                <div className="text-[#E2E8F0] text-sm">Full access, no restrictions</div>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#10B981]/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-[#10B981] font-bold text-lg">No Credit Card</div>
                <div className="text-[#E2E8F0] text-sm">Required to start</div>
              </div>
              <div className="group">
                <div className="w-12 h-12 bg-[#10B981]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#10B981]/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-[#10B981] font-bold text-lg">30-Day Guarantee</div>
                <div className="text-[#E2E8F0] text-sm">Money back if not satisfied</div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[#E2E8F0] text-lg">
              <span className="text-[#2B7CE5] font-bold">2,500+ professional traders</span> trust Helix Terminal
            </p>
            <p className="text-[#E2E8F0]/70 mt-2">
              "Best trading tool investment I've ever made" - James Thompson, Former JP Morgan
            </p>
          </div>

          {/* Urgency Element */}
          <div className="bg-gradient-to-r from-[#0066CC]/20 to-[#2B7CE5]/20 border border-[#0066CC]/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Let Your Competitors Get There First
            </h3>
            <p className="text-xl text-[#E2E8F0] mb-8">
              While you're reading this, other traders are already using Helix to gain unfair advantages in the markets.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#2B7CE5] to-[#10B981] hover:from-[#0066CC] hover:to-[#2B7CE5] text-white px-12 py-6 text-xl font-bold rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              Claim Your Competitive Edge Now →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFinalCTA;

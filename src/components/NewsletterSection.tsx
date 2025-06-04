
import React from 'react';
import { Mail, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsletterSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#1A2332] to-[#0A0F1C]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#0066CC]/15 rounded-full blur-3xl animate-float animate-glow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0066CC]/20 rounded-full blur-3xl animate-float animate-glow" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative group">
          {/* Main Glow Effect */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#0066CC]/30 to-[#0052A3]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
          
          <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#0066CC]/20 backdrop-blur-sm animate-glow">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 shadow-2xl shadow-[#0066CC]/50 animate-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent animate-glow">
                Get Daily Market Intelligence in Your Inbox
              </h2>
              
              <p className="text-xl text-[#E2E8F0] mb-8 leading-relaxed animate-glow">
                Join 15,000+ professional traders receiving exclusive market insights and analysis every morning at 7:00 AM CET
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center group/item">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[#0066CC]/30 shadow-lg group-hover/item:shadow-[#0066CC]/50 transition-all duration-300 animate-glow">
                    <Clock className="w-6 h-6 text-[#0066CC]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover/item:text-[#E2E8F0] transition-colors duration-300 animate-glow">Daily at 7:00 AM</h3>
                  <p className="text-[#E2E8F0] text-sm animate-glow">Consistent delivery every trading day</p>
                </div>
                
                <div className="text-center group/item">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[#0066CC]/30 shadow-lg group-hover/item:shadow-[#0066CC]/50 transition-all duration-300 animate-glow">
                    <TrendingUp className="w-6 h-6 text-[#0066CC]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover/item:text-[#E2E8F0] transition-colors duration-300 animate-glow">AI-Powered Analysis</h3>
                  <p className="text-[#E2E8F0] text-sm animate-glow">Advanced market intelligence insights</p>
                </div>
                
                <div className="text-center group/item">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[#0066CC]/30 shadow-lg group-hover/item:shadow-[#0066CC]/50 transition-all duration-300 animate-glow">
                    <Mail className="w-6 h-6 text-[#0066CC]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover/item:text-[#E2E8F0] transition-colors duration-300 animate-glow">Exclusive Content</h3>
                  <p className="text-[#E2E8F0] text-sm animate-glow">Professional trader insights only</p>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative group/input">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC]/50 to-[#0052A3]/30 rounded-lg blur opacity-0 group-hover/input:opacity-100 transition duration-300 animate-glow"></div>
                    <input
                      type="email"
                      placeholder="Enter your professional email"
                      className="relative w-full px-4 py-3 bg-[#1A1A1A] border-2 border-[#0066CC]/30 rounded-lg text-white placeholder-[#E2E8F0]/60 focus:outline-none focus:border-[#0066CC] focus:ring-4 focus:ring-[#0066CC]/20 transition-all duration-300 shadow-lg animate-glow"
                    />
                  </div>
                  <div className="relative group/button">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-lg blur opacity-75 group-hover/button:opacity-100 transition duration-300 animate-glow"></div>
                    <Button className="relative bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white px-6 py-3 font-semibold transition-all duration-300 shadow-2xl shadow-[#0066CC]/25 hover:shadow-[#0066CC]/50 transform hover:scale-105 whitespace-nowrap animate-glow">
                      Get Intelligence
                    </Button>
                  </div>
                </div>
                
                <p className="text-[#E2E8F0]/60 text-sm mt-3 animate-glow">
                  Unsubscribe anytime. Your email stays private and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

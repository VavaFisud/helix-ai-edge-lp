
import React from 'react';
import { Clock, TrendingUp, Globe, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DailyIntelligenceReports = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
      
      {/* Enhanced Ambient Lighting */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#0066CC]/20 rounded-full blur-3xl animate-float animate-glow"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#0066CC]/25 rounded-full blur-3xl animate-float animate-glow" style={{animationDelay: '2s'}}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 shadow-2xl shadow-[#0066CC]/50 animate-glow">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent animate-glow">
            Professional Analysis Delivered Daily at 7:00 AM (Paris Time)
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed animate-glow">
            Start your trading day with institutional-grade analysis and AI-powered market intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Report Preview */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066CC]/30 to-[#0052A3]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
            
            <Card className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/30 shadow-2xl shadow-[#0066CC]/20 hover:shadow-[#0066CC]/40 transition-all duration-500 backdrop-blur-sm animate-glow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-bold text-white flex items-center animate-glow">
                    <TrendingUp className="w-6 h-6 mr-3 text-[#0066CC]" />
                    HELIX DAILY BRIEFING
                  </CardTitle>
                  <div className="text-[#0066CC] font-bold text-sm bg-[#0066CC]/10 px-3 py-1 rounded-full border border-[#0066CC]/30 animate-glow">
                    LIVE
                  </div>
                </div>
                <div className="text-[#E2E8F0] text-sm mb-4 animate-glow">
                  June 4th, 2025 | 07:00 CET
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Currency Analysis */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-[#0066CC]/5 rounded-lg border border-[#0066CC]/20 animate-glow">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg animate-glow">
                      $
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold animate-glow">USD: Bullish</span>
                        <span className="text-[#10B981] font-bold text-lg animate-glow">+2.3</span>
                      </div>
                      <p className="text-[#E2E8F0] text-sm leading-relaxed animate-glow">
                        Fed hawkish stance strengthens dollar. Powell's comments on persistent inflation concerns.
                      </p>
                      <p className="text-[#0066CC] text-sm mt-2 animate-glow">
                        Technical: Breaking 1.0850 resistance on EUR/USD
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-[#DC2626]/5 rounded-lg border border-[#DC2626]/20 animate-glow">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg animate-glow">
                      €
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold animate-glow">EUR: Bearish</span>
                        <span className="text-[#DC2626] font-bold text-lg animate-glow">-1.8</span>
                      </div>
                      <p className="text-[#E2E8F0] text-sm leading-relaxed animate-glow">
                        ECB dovish signals dominate sentiment. Lagarde hints at extended pause.
                      </p>
                      <p className="text-[#0066CC] text-sm mt-2 animate-glow">
                        Watch: German PMI data at 10:00 CET (forecast: 47.2)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Events */}
                <div className="border-t border-[#0066CC]/20 pt-4">
                  <h4 className="text-white font-bold mb-3 flex items-center animate-glow">
                    <AlertCircle className="w-4 h-4 mr-2 text-[#0066CC]" />
                    Today's Key Events
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm animate-glow">
                      <span className="text-[#E2E8F0]">16:00 - Fed Powell Speech</span>
                      <span className="text-[#DC2626] font-bold">High Impact</span>
                    </div>
                    <div className="flex justify-between items-center text-sm animate-glow">
                      <span className="text-[#E2E8F0]">18:30 - EU Consumer Confidence</span>
                      <span className="text-[#F59E0B] font-bold">Medium Impact</span>
                    </div>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="bg-gradient-to-r from-[#0066CC]/10 to-[#0052A3]/10 p-4 rounded-lg border border-[#0066CC]/30 animate-glow">
                  <h4 className="text-[#0066CC] font-bold mb-2 animate-glow">💡 AI Insight</h4>
                  <p className="text-[#E2E8F0] text-sm leading-relaxed animate-glow">
                    USD strength likely to continue on Fed divergence theme. EUR/USD targeting 1.0800 support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features & Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-lg flex items-center justify-center shadow-xl shadow-[#0066CC]/30 group-hover:shadow-[#0066CC]/50 transition-all duration-300 animate-glow">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E2E8F0] transition-colors duration-300 animate-glow">
                    Multi-Currency Analysis
                  </h3>
                  <p className="text-[#E2E8F0] leading-relaxed animate-glow">
                    Complete coverage of major currency pairs with AI-powered sentiment scoring and technical analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-lg flex items-center justify-center shadow-xl shadow-[#0066CC]/30 group-hover:shadow-[#0066CC]/50 transition-all duration-300 animate-glow">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E2E8F0] transition-colors duration-300 animate-glow">
                    Event Impact Predictions
                  </h3>
                  <p className="text-[#E2E8F0] leading-relaxed animate-glow">
                    AI-powered impact scoring for economic events with precise timing and market reaction forecasts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-lg flex items-center justify-center shadow-xl shadow-[#0066CC]/30 group-hover:shadow-[#0066CC]/50 transition-all duration-300 animate-glow">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E2E8F0] transition-colors duration-300 animate-glow">
                    Technical Confluence
                  </h3>
                  <p className="text-[#E2E8F0] leading-relaxed animate-glow">
                    Advanced technical analysis combining multiple timeframes with key support and resistance levels.
                  </p>
                </div>
              </div>
            </div>

            {/* Timestamp */}
            <div className="bg-gradient-to-r from-[#10B981]/10 to-[#059669]/10 border border-[#10B981]/30 rounded-lg p-4 animate-glow">
              <div className="flex items-center justify-between">
                <span className="text-[#10B981] font-bold animate-glow">Last Report:</span>
                <span className="text-white font-bold animate-glow">Today 07:00 CET</span>
              </div>
              <p className="text-[#E2E8F0] text-sm mt-2 animate-glow">
                Next report in 23 hours 42 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyIntelligenceReports;

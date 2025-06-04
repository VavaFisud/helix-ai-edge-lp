
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const ProfessionalFAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'How is Helix different from other trading platforms?',
      answer: 'Helix learns from YOUR insights and adapts to your trading style, while other platforms give everyone the same generic data. Our AI becomes smarter as you use it, providing personalized predictions based on your observations and trading patterns. Plus, we cost significantly less than institutional platforms while providing superior collaborative intelligence.'
    },
    {
      question: 'Can I customize the analysis parameters for my trading strategy?',
      answer: 'Absolutely. Helix offers comprehensive customization options including custom bias scoring, personalized risk parameters, preferred timeframes, and specific currency pair focus. The AI adapts to your trading style and preferences, creating a truly personalized trading intelligence experience.'
    },
    {
      question: 'Is Helix suitable for beginner traders?',
      answer: 'Yes, Helix is designed for traders of all levels. Our AI provides educational insights and explanations for every recommendation. Beginners benefit from the collaborative intelligence of experienced traders, while our intuitive interface makes complex analysis accessible without overwhelming new users.'
    },
    {
      question: 'Which trading platforms integrate with Helix?',
      answer: 'Helix offers comprehensive API access for custom trading applications and allows you to export analysis to your preferred trading platform. Our professional analysis helps you make informed manual trading decisions, regardless of which platform you use for execution.'
    },
    {
      question: 'What makes Helix unique in the market?',
      answer: 'Helix is the only platform that combines institutional-grade data with collaborative AI that learns from your personal insights. Unlike generic tools, our AI becomes more accurate for YOUR trading style over time, while anonymously benefiting from the collective intelligence of our trading community.'
    },
    {
      question: 'Are there technical requirements to use Helix?',
      answer: 'Helix runs in any modern web browser and offers native mobile apps for iOS and Android. No special hardware or software installation is required. Our platform is cloud-based, ensuring you have access to your personalized AI from anywhere with an internet connection.'
    },
    {
      question: 'Do you guarantee performance results?',
      answer: 'While we cannot guarantee trading profits (no legitimate platform can), we do guarantee that our AI will improve in accuracy for your specific trading style over time. We offer a 30-day money-back guarantee if you\'re not satisfied with the platform\'s intelligence and insights.'
    },
    {
      question: 'Can we request a refund?',
      answer: 'Yes, we offer a 30-day money-back guarantee with no questions asked. If Helix doesn\'t improve your trading analysis or you\'re not completely satisfied, we\'ll refund your entire payment. We\'re confident in our AI\'s ability to enhance your trading performance.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
      
      {/* Enhanced Ambient Lighting Effects with Glow */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#0066CC]/15 rounded-full blur-3xl animate-float animate-glow"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#0066CC]/20 rounded-full blur-3xl animate-float animate-glow" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0066CC]/8 rounded-full blur-3xl animate-glow"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 shadow-2xl shadow-[#0066CC]/50 animate-glow">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent animate-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#E2E8F0] leading-relaxed animate-glow">
            Everything you need to know about Helix Terminal
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Enhanced Glow Effect on Hover */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#0066CC]/25 to-[#0052A3]/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC]/15 to-[#0052A3]/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-glow"></div>
              
              <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/30 hover:border-[#0066CC]/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl shadow-[#0066CC]/10 hover:shadow-[#0066CC]/25 backdrop-blur-sm animate-glow">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-8 text-left flex justify-between items-center hover:bg-[#0066CC]/5 transition-colors duration-300 group/button"
                >
                  <span className="text-white font-semibold text-xl pr-8 group-hover/button:text-[#E2E8F0] transition-colors duration-300 animate-glow">
                    {faq.question}
                  </span>
                  <div className={`w-12 h-12 rounded-full border-2 border-[#0066CC] flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-xl shadow-[#0066CC]/25 animate-glow ${
                    openItems.includes(index) 
                      ? 'bg-[#0066CC] text-white rotate-180 shadow-[#0066CC]/50' 
                      : 'text-[#0066CC] group-hover/button:bg-[#0066CC]/20 group-hover/button:shadow-[#0066CC]/40'
                  }`}>
                    {openItems.includes(index) ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#0066CC]/50 to-transparent mb-6 shadow-lg shadow-[#0066CC]/20 animate-glow"></div>
                    <p className="text-[#E2E8F0] leading-relaxed text-lg animate-glow">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact CTA */}
        <div className="mt-20 text-center">
          <div className="relative group max-w-3xl mx-auto">
            {/* Ultra Enhanced Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#0066CC]/40 to-[#0052A3]/25 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#0066CC]/30 to-[#0052A3]/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow"></div>
            
            <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/50 rounded-3xl p-10 shadow-2xl shadow-[#0066CC]/30 backdrop-blur-sm animate-glow">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent animate-glow">
                Still have questions?
              </h3>
              <p className="text-[#E2E8F0] mb-8 text-xl leading-relaxed animate-glow">
                Our team of trading experts is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative group/button">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-xl blur-lg opacity-75 group-hover/button:opacity-100 transition duration-300 animate-glow"></div>
                  <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white rounded-xl font-medium text-lg transition-all duration-300 shadow-2xl shadow-[#0066CC]/25 transform hover:scale-105 animate-glow">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Support
                  </button>
                </div>
                <button className="inline-flex items-center px-8 py-4 bg-[#1A1A1A] hover:bg-[#0066CC]/20 text-white border-2 border-[#0066CC]/40 hover:border-[#0066CC]/70 rounded-xl font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-[#0066CC]/30 transform hover:scale-105 animate-glow">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalFAQSection;

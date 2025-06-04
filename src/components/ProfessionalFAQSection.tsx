
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
      answer: 'Helix integrates seamlessly with MT4, MT5, and most major trading platforms through our comprehensive API. You can automate trade execution based on our AI recommendations, set up custom alerts, and build sophisticated trading strategies using our collaborative intelligence data.'
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
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Ambient Lighting Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#0066CC]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#0066CC]/15 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0066CC]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 shadow-2xl shadow-[#0066CC]/50">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#E2E8F0] leading-relaxed">
            Everything you need to know about Helix Terminal
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0066CC]/20 to-[#0052A3]/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border border-[#0066CC]/20 hover:border-[#0066CC]/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-[#0066CC]/10 backdrop-blur-sm">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-8 text-left flex justify-between items-center hover:bg-[#0066CC]/5 transition-colors duration-300 group/button"
                >
                  <span className="text-white font-semibold text-lg pr-8 group-hover/button:text-[#E2E8F0] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full border-2 border-[#0066CC] flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-lg ${
                    openItems.includes(index) 
                      ? 'bg-[#0066CC] text-white rotate-180 shadow-[#0066CC]/50' 
                      : 'text-[#0066CC] group-hover/button:bg-[#0066CC]/20 group-hover/button:shadow-[#0066CC]/30'
                  }`}>
                    {openItems.includes(index) ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#0066CC]/40 to-transparent mb-6"></div>
                    <p className="text-[#E2E8F0] leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="relative group max-w-2xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066CC]/30 to-[#0052A3]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border border-[#0066CC]/40 rounded-3xl p-8 shadow-2xl shadow-[#0066CC]/20 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-[#E2E8F0] bg-clip-text text-transparent">
                Still have questions?
              </h3>
              <p className="text-[#E2E8F0] mb-6 text-lg leading-relaxed">
                Our team of trading experts is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative group/button">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-lg blur opacity-75 group-hover/button:opacity-100 transition duration-300"></div>
                  <button className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white rounded-lg font-medium transition-all duration-300 shadow-xl shadow-[#0066CC]/25 transform hover:scale-105">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Support
                  </button>
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-[#1A1A1A] hover:bg-[#0066CC]/20 text-white border border-[#0066CC]/30 hover:border-[#0066CC]/60 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#0066CC]/20 transform hover:scale-105">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
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

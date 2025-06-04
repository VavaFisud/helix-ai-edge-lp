
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
    <section className="py-20 bg-[#000000]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#E2E8F0]">
            Everything you need to know about Helix Terminal
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#333333] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#0066CC]/50"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-[#1A1A1A]/80 transition-colors duration-300 group"
              >
                <span className="text-white font-medium text-lg pr-8">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border-2 border-[#0066CC] flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                  openItems.includes(index) 
                    ? 'bg-[#0066CC] text-white rotate-180' 
                    : 'text-[#0066CC] group-hover:bg-[#0066CC]/20'
                }`}>
                  {openItems.includes(index) ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openItems.includes(index) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-[#0066CC]/30 mb-4"></div>
                  <p className="text-[#E2E8F0] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#1A1A1A] border border-[#0066CC]/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-[#E2E8F0] mb-6">
              Our team of trading experts is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-[#0066CC] hover:bg-[#0052A3] text-white rounded-lg font-medium transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Support
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-[#1A1A1A] hover:bg-[#333333] text-white border border-[#333333] rounded-lg font-medium transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalFAQSection;

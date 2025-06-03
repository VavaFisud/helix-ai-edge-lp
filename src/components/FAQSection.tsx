
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How is this different from Bloomberg Terminal?',
      answer: 'Helix learns from YOUR insights and adapts to your trading style, while Bloomberg gives everyone the same generic data. Our AI becomes smarter as you use it, providing personalized predictions based on your observations and trading patterns. Plus, we cost 85% less than Bloomberg at €299/month vs their €24,000/year.'
    },
    {
      question: 'What if I\'m not satisfied with the results?',
      answer: 'We offer a 30-day money-back guarantee, no questions asked. If Helix doesn\'t improve your trading accuracy or you\'re not completely satisfied, we\'ll refund your entire payment. We\'re confident in our AI\'s ability to enhance your trading performance.'
    },
    {
      question: 'Do you support automated trading integration?',
      answer: 'Yes, our comprehensive API allows seamless integration with MT4, MT5, and custom trading systems. You can automate trade execution based on our AI recommendations, set up custom alerts, and build sophisticated trading strategies using our collaborative intelligence data.'
    },
    {
      question: 'How accurate are the AI predictions?',
      answer: 'Average users see a 28% improvement in trading accuracy within 60 days. Our AI\'s precision increases as it learns from your insights and trading style. The more you interact with the system, the more accurate it becomes for your specific approach to forex trading.'
    },
    {
      question: 'Is my trading data secure and private?',
      answer: 'Absolutely. We use bank-level encryption and are SOC 2 compliant. Your personal trading data never leaves our secure servers, and when insights are shared with our AI community, they\'re completely anonymous. We take privacy and security as seriously as our AI development.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel with one click at any time. There are no contracts, hidden fees, or cancellation penalties. You\'ll retain access to all features until the end of your current billing period, and you can keep any insights or analysis you\'ve created.'
    },
    {
      question: 'What data sources do you integrate with?',
      answer: 'We integrate with 30+ premium institutional-grade sources including Trading Economics, Reuters, Fed, ECB, BoJ, BoE, plus real-time social sentiment, broker data, and central bank communications. All data is processed through our AI for instant analysis and correlation.'
    },
    {
      question: 'Do you offer training or onboarding support?',
      answer: 'Yes, every Pro plan includes white-glove onboarding with a personal session to set up your account, customize your dashboard, and learn how to maximize the AI\'s learning from your insights. We also provide ongoing priority support and training resources.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about Helix Terminal
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-blue-400 text-left text-lg font-semibold py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team of trading experts is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@helixterminal.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Support
              </a>
              <a 
                href="tel:+1-555-123-4567"
                className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

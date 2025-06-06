import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const ProfessionalFAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        {
            question: "How does Helix Terminal's AI learn from my trading style?",
            answer: "Our machine learning algorithms analyze your trading patterns, successful strategies, and market preferences to create personalized insights. The AI continuously adapts to your evolving trading style while maintaining complete anonymity and data security."
        },
        {
            question: "What data sources does Helix Terminal integrate?",
            answer: "We integrate 30+ premium financial data sources including central bank feeds (Fed, ECB, BoJ, BoE), Trading Economics, Reuters, institutional sentiment data, and real-time market analytics. All data is processed through our AI engine for actionable insights."
        },
        {
            question: "Is my trading data secure and private?",
            answer: "Absolutely. We use bank-grade encryption and SOC 2 compliance standards. Your personal trading data never leaves your secure environment. Our collaborative AI learns from anonymized, aggregated patterns without compromising individual privacy."
        },
        {
            question: "Can I export analysis to my existing trading platform?",
            answer: "Yes, Helix Terminal provides API access for custom integrations and export capabilities. You can seamlessly incorporate our analysis into your existing workflow and trading platforms for informed manual trading decisions."
        },
        {
            question: "What makes Helix different from Bloomberg Terminal?",
            answer: "Unlike Bloomberg's static data feeds, Helix Terminal offers AI-powered, personalized analysis that learns from your trading style. Our platform costs 85% less while providing modern, intuitive interfaces and collaborative intelligence features."
        },
        {
            question: "Do you offer training and onboarding support?",
            answer: "Yes, every Pro plan includes white-glove onboarding with a dedicated specialist, personalized training sessions, and ongoing priority support to ensure you maximize the platform's potential for your trading strategy."
        }
    ];
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (_jsxs("section", { className: "py-20 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332]" }), _jsx("div", { className: "absolute inset-0 bg-grid-pattern opacity-15" }), _jsx("div", { className: "absolute top-20 left-20 w-32 h-32 bg-[#0066CC]/15 rounded-full blur-3xl animate-float" }), _jsx("div", { className: "absolute bottom-20 right-20 w-40 h-40 bg-[#0066CC]/20 rounded-full blur-3xl animate-float", style: { animationDelay: '2s' } }), _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent", children: "Frequently Asked Questions" }), _jsx("p", { className: "text-xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed", children: "Everything you need to know about professional trading intelligence with Helix Terminal" })] }), _jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => (_jsx("div", { className: "group", children: _jsxs("div", { className: "bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/30 hover:border-[#0066CC]/60 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#0066CC]/20 backdrop-blur-sm", children: [_jsx("button", { onClick: () => toggleFAQ(index), className: "w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 rounded-2xl", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-xl font-bold text-white pr-4", children: faq.question }), _jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center transition-transform duration-300", children: openIndex === index ? (_jsx(ChevronUp, { className: "w-5 h-5 text-white" })) : (_jsx(ChevronDown, { className: "w-5 h-5 text-white" })) })] }) }), _jsx("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`, children: _jsxs("div", { className: "px-8 pb-8", children: [_jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-[#0066CC]/40 to-transparent mb-6" }), _jsx("p", { className: "text-[#E2E8F0] leading-relaxed", children: faq.answer })] }) })] }) }, index))) })] })] }));
};
export default ProfessionalFAQSection;

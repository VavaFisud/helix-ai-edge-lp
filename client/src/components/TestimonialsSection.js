import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from '@/components/ui/card';
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'Senior FX Trader',
            company: 'Goldman Sachs',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face',
            quote: 'Helix increased my EUR/USD accuracy by 34% in just 2 months. The AI actually learns from my observations - it\'s like having a super-powered analyst.',
            linkedin: 'https://linkedin.com/in/sarahchen',
            metric: '+34% Accuracy',
            verified: true
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Portfolio Manager',
            company: 'Deutsche Bank',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            quote: 'Finally, an alternative to Bloomberg that doesn\'t treat me like a data point. The Central Bank Whisperer feature alone pays for itself.',
            linkedin: 'https://linkedin.com/in/marcusrodriguez',
            metric: '€50k Saved',
            verified: true
        },
        {
            name: 'James Thompson',
            role: 'Independent Trader',
            company: 'Former JP Morgan',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            quote: 'Ghost Trading helped me validate strategies without losing money. Made €50k profit last quarter using insights I tested virtually first.',
            linkedin: 'https://linkedin.com/in/jamesthompson',
            metric: '€50k Profit',
            verified: true
        }
    ];
    const stats = [
        { value: '2,500+', label: 'Professional Traders' },
        { value: '28%', label: 'Average Accuracy Improvement' },
        { value: '€4.2M', label: 'Protected Through Ghost Trading' },
        { value: '98%', label: 'Customer Satisfaction' }
    ];
    return (_jsx("section", { id: "testimonials", className: "py-20 bg-gradient-to-b from-gray-800 to-gray-900", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Trusted by Elite Traders Worldwide" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Join thousands of professional traders who have transformed their analysis and profitability with Helix Terminal's collaborative AI intelligence." })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-blue-400 mb-2", children: stat.value }), _jsx("div", { className: "text-gray-300 text-sm md:text-base", children: stat.label })] }, index))) }), _jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: testimonials.map((testimonial, index) => (_jsx(Card, { className: "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "w-16 h-16 rounded-full border-2 border-blue-500" }), testimonial.verified && (_jsx("div", { className: "absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center", children: _jsx("svg", { className: "w-4 h-4 text-white", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) }))] }), _jsxs("div", { className: "ml-4 flex-1", children: [_jsx("h4", { className: "text-white font-bold", children: testimonial.name }), _jsx("p", { className: "text-gray-400 text-sm", children: testimonial.role }), _jsx("p", { className: "text-blue-400 text-sm font-medium", children: testimonial.company })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-green-400 font-bold text-sm", children: testimonial.metric }), _jsx("a", { href: testimonial.linkedin, target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:text-blue-300 text-xs", children: "LinkedIn Profile" })] })] }), _jsxs("blockquote", { className: "text-gray-300 italic leading-relaxed mb-4", children: ["\"", testimonial.quote, "\""] }), _jsxs("div", { className: "flex items-center", children: [[...Array(5)].map((_, i) => (_jsx("svg", { className: "w-5 h-5 text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i))), _jsx("span", { className: "ml-2 text-gray-400 text-sm", children: "Verified Review" })] })] }) }, index))) }), _jsx("div", { className: "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-8", children: _jsxs("div", { className: "text-center", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Join the Elite Trading Community" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "flex items-center justify-center space-x-3", children: [_jsx("svg", { className: "w-8 h-8 text-green-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), _jsx("span", { className: "text-white", children: "Bank-Grade Security" })] }), _jsxs("div", { className: "flex items-center justify-center space-x-3", children: [_jsx("svg", { className: "w-8 h-8 text-blue-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), _jsx("span", { className: "text-white", children: "SOC 2 Compliant" })] }), _jsxs("div", { className: "flex items-center justify-center space-x-3", children: [_jsx("svg", { className: "w-8 h-8 text-purple-400", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }), _jsx("span", { className: "text-white", children: "Anonymous Insights" })] })] })] }) })] }) }));
};
export default TestimonialsSection;

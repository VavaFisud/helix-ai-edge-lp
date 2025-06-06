import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Brain, Target } from 'lucide-react';
const ProfessionalHowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Connect Your Market Data",
            description: "Integrate 30+ premium financial data sources into one unified platform. Real-time feeds from central banks, economic calendars, and institutional-grade analytics.",
            icon: Terminal,
            features: ["Real-time market data", "Central bank feeds", "Economic calendars", "Institutional analytics"]
        },
        {
            number: "02",
            title: "AI Learns Your Trading Style",
            description: "Our advanced machine learning algorithms analyze your trading patterns, preferences, and successful strategies to create personalized market insights.",
            icon: Brain,
            features: ["Pattern recognition", "Strategy analysis", "Personalized insights", "Continuous learning"]
        },
        {
            number: "03",
            title: "Execute With Confidence",
            description: "Receive AI-powered analysis, trade recommendations, and risk assessments tailored to your trading profile and market conditions.",
            icon: Target,
            features: ["Trade recommendations", "Risk analysis", "Market predictions", "Performance tracking"]
        }
    ];
    return (_jsxs("section", { className: "py-20 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0F1C] to-[#1A2332]" }), _jsx("div", { className: "absolute inset-0 bg-grid-pattern opacity-15" }), _jsx("div", { className: "absolute top-20 left-20 w-32 h-32 bg-[#0066CC]/15 rounded-full blur-3xl animate-float" }), _jsx("div", { className: "absolute bottom-20 right-20 w-40 h-40 bg-[#0066CC]/20 rounded-full blur-3xl animate-float", style: { animationDelay: '2s' } }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#E2E8F0] to-white bg-clip-text text-transparent", children: "Professional Trading Intelligence in 3 Steps" }), _jsx("p", { className: "text-xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed", children: "Transform your trading with institutional-grade AI that learns from your strategies and enhances your decision-making process" })] }), _jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: steps.map((step, index) => (_jsxs("div", { className: "relative group", children: [index < steps.length - 1 && (_jsx("div", { className: "hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-[#0066CC] to-transparent z-0 transform translate-x-4" })), _jsxs(Card, { className: "relative bg-gradient-to-br from-[#1A1A1A] via-[#1A2332] to-[#1A1A1A] border-2 border-[#0066CC]/30 hover:border-[#0066CC]/60 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-[#0066CC]/20 backdrop-blur-sm h-full", children: [_jsxs(CardHeader, { className: "text-center pb-6", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full mb-6 mx-auto", children: _jsx("span", { className: "text-2xl font-bold text-white", children: step.number }) }), _jsx("div", { className: "mb-6 text-[#0066CC] flex justify-center", children: _jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 rounded-2xl flex items-center justify-center border-2 border-[#0066CC]/30 transition-all duration-300 hover:scale-110", children: _jsx(step.icon, { size: 32 }) }) }), _jsx(CardTitle, { className: "text-2xl font-bold text-white mb-4", children: step.title })] }), _jsxs(CardContent, { className: "text-center", children: [_jsx("p", { className: "text-[#E2E8F0] leading-relaxed mb-6", children: step.description }), _jsx("div", { className: "space-y-3", children: step.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center justify-center text-sm text-[#E2E8F0]", children: [_jsx("div", { className: "w-2 h-2 bg-[#0066CC] rounded-full mr-3" }), _jsx("span", { children: feature })] }, featureIndex))) })] })] })] }, index))) })] })] }));
};
export default ProfessionalHowItWorks;

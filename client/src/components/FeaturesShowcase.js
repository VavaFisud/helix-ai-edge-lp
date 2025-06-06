import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Building, Brain, Handshake, Terminal, Database } from 'lucide-react';
const FeaturesShowcase = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const features = [
        {
            title: 'Ghost Trading Intelligence',
            icon: Zap,
            description: 'Backtest your insights virtually before risking capital',
            details: [
                'AI learns from your successful predictions to improve accuracy',
                'See exactly how your observations would have performed historically',
                'Risk-free strategy validation with real market data',
                'Virtual portfolio tracking with real-time P&L simulation'
            ]
        },
        {
            title: 'Central Bank Whisperer',
            icon: Building,
            description: 'Behavioral analysis of Fed, ECB, BoJ, BoE speeches in real-time',
            details: [
                'Detect subtle tone changes that move markets before others notice',
                'Historical correlation between banker behavior and currency movements',
                'Live sentiment scoring during press conferences',
                'Voice pattern analysis and body language detection'
            ]
        },
        {
            title: 'Market Psychology Engine',
            icon: Brain,
            description: 'Aggregate sentiment from 30+ sources with custom Fear & Greed index',
            details: [
                'Social media, broker data, and institutional flows analysis',
                'Custom Fear & Greed index specifically for forex markets',
                'Retail vs professional sentiment comparison',
                'Predict reversals before crowd sentiment shifts'
            ]
        },
        {
            title: 'Collaborative AI Brain',
            icon: Handshake,
            description: 'Your insights make the AI smarter for everyone (anonymously)',
            details: [
                'Personalized bias scoring (-5 to +5) based on your trading style',
                'Continuous learning from global community of elite traders',
                'AI explanations for every recommendation',
                'Privacy-first anonymous insight sharing'
            ]
        },
        {
            title: 'Bloomberg-Killer Interface',
            icon: Terminal,
            description: 'Professional-grade terminal designed for serious traders',
            details: [
                'Fully customizable dashboards and alert systems',
                'Multi-timeframe analysis (24H, 1W, 1M, 3M perspectives)',
                'Lightning-fast data processing and visualization',
                'Advanced charting with 50+ technical indicators'
            ]
        },
        {
            title: 'Premium Data Integration',
            icon: Database,
            description: '30+ institutional-grade sources in one unified platform',
            details: [
                'Trading Economics, Reuters, Fed, ECB direct feeds',
                'Economic calendar with AI-powered impact predictions',
                'Breaking news analysis with instant sentiment classification',
                'Central bank meeting transcripts with behavioral insights'
            ]
        }
    ];
    return (_jsx("section", { id: "features", className: "py-20 bg-gradient-to-b from-[#0A0F1C] to-[#1A2332]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Revolutionary Features That Give You The Edge" }), _jsx("p", { className: "text-xl text-[#E2E8F0] max-w-3xl mx-auto", children: "Each feature is designed to amplify your trading intelligence and give you unfair advantages in the forex markets." })] }), _jsx("div", { className: "grid lg:grid-cols-3 gap-8 mb-16", children: features.map((feature, index) => (_jsxs(Card, { className: `professional-card cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${activeFeature === index ? 'ring-2 ring-[#0066CC] border-[#0066CC]' : ''}`, onClick: () => setActiveFeature(index), children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "mb-4 text-[#0066CC]", children: _jsx(feature.icon, { size: 32 }) }), _jsx(CardTitle, { className: "text-white text-xl", children: feature.title }), _jsx(CardDescription, { className: "text-[#E2E8F0]", children: feature.description })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-2", children: feature.details.slice(0, 2).map((detail, detailIndex) => (_jsxs("div", { className: "flex items-start text-sm text-[#E2E8F0]", children: [_jsx("svg", { className: "w-4 h-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }), detail] }, detailIndex))) }) })] }, index))) }), _jsxs("div", { className: "bg-gradient-to-br from-[#1A2332] to-[#243142] rounded-2xl border border-[#243142] p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "text-[#0066CC] mb-4 flex justify-center", children: React.createElement(features[activeFeature].icon, { size: 48 }) }), _jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: features[activeFeature].title }), _jsx("p", { className: "text-xl text-[#E2E8F0] max-w-3xl mx-auto", children: features[activeFeature].description })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-xl font-bold text-white mb-4", children: "Key Capabilities" }), _jsx("div", { className: "space-y-3", children: features[activeFeature].details.map((detail, index) => (_jsxs("div", { className: "flex items-start", children: [_jsx("svg", { className: "w-5 h-5 text-[#10B981] mr-3 mt-0.5 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }), _jsx("span", { className: "text-[#E2E8F0]", children: detail })] }, index))) })] }), _jsxs("div", { className: "bg-[#0A0F1C] p-6 rounded-lg border border-[#243142]", children: [_jsx("h4", { className: "text-xl font-bold text-white mb-4", children: "Feature Demo" }), _jsx("div", { className: "aspect-video bg-[#1A2332] rounded-lg flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-16 h-16 bg-[#0066CC] rounded-full flex items-center justify-center mb-4 mx-auto", children: React.createElement(features[activeFeature].icon, { size: 24, color: 'white' }) }), _jsx("p", { className: "text-[#E2E8F0]", children: "Interactive demo coming soon" }), _jsx("p", { className: "text-sm text-gray-500 mt-2", children: "Experience this feature in your free trial" })] }) })] })] })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-2 mt-8", children: features.map((feature, index) => (_jsxs("button", { onClick: () => setActiveFeature(index), className: `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeFeature === index
                            ? 'bg-[#0066CC] text-white'
                            : 'bg-[#1A2332] text-[#E2E8F0] hover:bg-[#243142]'}`, children: [_jsx(feature.icon, { size: 16 }), feature.title] }, index))) })] }) }));
};
export default FeaturesShowcase;

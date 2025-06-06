import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Database, Brain, ChartLine, Shield, Zap, Terminal } from 'lucide-react';
const TechnologyShowcase = () => {
    const technologies = [
        {
            icon: Brain,
            title: 'Advanced AI Infrastructure',
            description: 'Powered by state-of-the-art machine learning algorithms trained on decades of market data',
            features: ['Gemini 2.5 AI Integration', 'Real-time Pattern Recognition', 'Predictive Analytics Engine']
        },
        {
            icon: Database,
            title: 'Premium Data Pipeline',
            description: 'Real-time processing from 30+ institutional-grade sources with millisecond latency',
            features: ['Reuters & Bloomberg Feeds', 'Central Bank Direct APIs', 'Economic Calendar Integration']
        },
        {
            icon: ChartLine,
            title: 'Collaborative Intelligence',
            description: 'Human-AI collaboration that learns from trader insights to improve market predictions',
            features: ['Behavioral Analysis', 'Sentiment Correlation', 'Community Learning Network']
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption',
            features: ['256-bit Encryption', 'Multi-factor Authentication', 'Privacy-first Architecture']
        },
        {
            icon: Zap,
            title: 'Cloud-Native Performance',
            description: 'Globally distributed infrastructure ensuring instant access and 99.9% uptime',
            features: ['Sub-second Response Times', 'Auto-scaling Infrastructure', 'Global CDN Network']
        },
        {
            icon: Terminal,
            title: 'Professional API Suite',
            description: 'Comprehensive APIs for institutional integration with existing trading systems',
            features: ['REST & WebSocket APIs', 'MT4/MT5 Integration', 'Custom Dashboard SDKs']
        }
    ];
    return (_jsxs("section", { className: "py-24 bg-gradient-to-b from-[#1A2332] to-[#0A0F1C] relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(43,124,229,0.1),transparent_50%)]" }), _jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,102,204,0.1),transparent_50%)]" }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [_jsxs("div", { className: "text-center mb-20", children: [_jsx("h2", { className: "text-5xl font-bold text-white mb-6", children: "Powered by Advanced AI Infrastructure" }), _jsx("p", { className: "text-xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed", children: "Built on cutting-edge technology stack that processes millions of data points per second to deliver institutional-grade market intelligence." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20", children: technologies.map((tech, index) => (_jsxs("div", { className: "group bg-gradient-to-br from-[#1A2332] to-[#243142] rounded-2xl border border-[#243142] p-8 hover:border-[#0066CC]/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-[#0066CC] to-[#2B7CE5] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#0066CC]/25 transition-all duration-300", children: _jsx(tech.icon, { size: 32, className: "text-white" }) }), _jsx("h3", { className: "text-2xl font-bold text-white mb-4 group-hover:text-[#2B7CE5] transition-colors duration-300", children: tech.title }), _jsx("p", { className: "text-[#E2E8F0] mb-6 leading-relaxed", children: tech.description }), _jsx("div", { className: "space-y-3", children: tech.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-2 h-2 bg-[#10B981] rounded-full mr-3 group-hover:bg-[#2B7CE5] transition-colors duration-300" }), _jsx("span", { className: "text-[#E2E8F0] text-sm", children: feature })] }, featureIndex))) })] }, index))) }), _jsxs("div", { className: "bg-gradient-to-r from-[#0066CC]/10 to-[#2B7CE5]/10 border border-[#0066CC]/20 rounded-2xl p-12 backdrop-blur-sm", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: "Performance That Powers Professional Trading" }), _jsx("p", { className: "text-[#E2E8F0] text-lg", children: "Real-time metrics from our global infrastructure" })] }), _jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl font-bold text-[#10B981] mb-2", children: _jsx("span", { className: "bg-gradient-to-r from-[#10B981] to-[#0066CC] bg-clip-text text-transparent", children: "30+" }) }), _jsx("div", { className: "text-[#E2E8F0] text-sm font-medium", children: "Premium Data Sources" }), _jsx("div", { className: "text-[#E2E8F0]/70 text-xs mt-1", children: "Real-time feeds" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl font-bold text-[#2B7CE5] mb-2", children: _jsx("span", { className: "bg-gradient-to-r from-[#2B7CE5] to-[#0066CC] bg-clip-text text-transparent", children: "<200ms" }) }), _jsx("div", { className: "text-[#E2E8F0] text-sm font-medium", children: "Response Time" }), _jsx("div", { className: "text-[#E2E8F0]/70 text-xs mt-1", children: "Global average" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl font-bold text-[#10B981] mb-2", children: _jsx("span", { className: "bg-gradient-to-r from-[#10B981] to-[#2B7CE5] bg-clip-text text-transparent", children: "99.9%" }) }), _jsx("div", { className: "text-[#E2E8F0] text-sm font-medium", children: "Uptime SLA" }), _jsx("div", { className: "text-[#E2E8F0]/70 text-xs mt-1", children: "Guaranteed availability" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-4xl font-bold text-[#0066CC] mb-2", children: _jsx("span", { className: "bg-gradient-to-r from-[#0066CC] to-[#10B981] bg-clip-text text-transparent", children: "50M+" }) }), _jsx("div", { className: "text-[#E2E8F0] text-sm font-medium", children: "Data Points/Day" }), _jsx("div", { className: "text-[#E2E8F0]/70 text-xs mt-1", children: "Processed & analyzed" })] })] })] }), _jsxs("div", { className: "mt-20 text-center", children: [_jsx("h3", { className: "text-3xl font-bold text-white mb-8", children: "Seamless Integration with Your Workflow" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "bg-[#1A2332] border border-[#243142] rounded-xl p-6 hover:border-[#0066CC]/50 transition-all duration-300", children: [_jsx("div", { className: "w-12 h-12 bg-[#0066CC]/20 rounded-lg flex items-center justify-center mx-auto mb-4", children: _jsx(Terminal, { size: 24, className: "text-[#0066CC]" }) }), _jsx("h4", { className: "text-lg font-semibold text-white mb-2", children: "Trading Platforms" }), _jsx("p", { className: "text-[#E2E8F0] text-sm", children: "MetaTrader 4/5, cTrader, TradingView integration" })] }), _jsxs("div", { className: "bg-[#1A2332] border border-[#243142] rounded-xl p-6 hover:border-[#0066CC]/50 transition-all duration-300", children: [_jsx("div", { className: "w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mx-auto mb-4", children: _jsx(Database, { size: 24, className: "text-[#10B981]" }) }), _jsx("h4", { className: "text-lg font-semibold text-white mb-2", children: "Data Management" }), _jsx("p", { className: "text-[#E2E8F0] text-sm", children: "Portfolio management systems and risk engines" })] }), _jsxs("div", { className: "bg-[#1A2332] border border-[#243142] rounded-xl p-6 hover:border-[#0066CC]/50 transition-all duration-300", children: [_jsx("div", { className: "w-12 h-12 bg-[#2B7CE5]/20 rounded-lg flex items-center justify-center mx-auto mb-4", children: _jsx(Brain, { size: 24, className: "text-[#2B7CE5]" }) }), _jsx("h4", { className: "text-lg font-semibold text-white mb-2", children: "AI Models" }), _jsx("p", { className: "text-[#E2E8F0] text-sm", children: "Custom model training and strategy backtesting" })] })] })] })] })] }));
};
export default TechnologyShowcase;

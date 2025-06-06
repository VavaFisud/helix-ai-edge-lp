import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const HowItWorksSection = () => {
    const steps = [
        {
            step: '1',
            title: 'Sign Up & Connect',
            description: 'Create your account and connect your preferred data sources in under 60 seconds',
            details: [
                'Instant account creation with email',
                'Connect to MT4/MT5 or other platforms',
                'Import your trading history',
                'Setup personalized alerts'
            ],
            icon: '🚀'
        },
        {
            step: '2',
            title: 'Share Insights',
            description: 'Add your observations and let our AI learn your unique trading style',
            details: [
                'Share market observations in real-time',
                'AI analyzes your successful patterns',
                'Build your personalized trading profile',
                'Collaborate with elite trader community'
            ],
            icon: '🧠'
        },
        {
            step: '3',
            title: 'Trade Smarter',
            description: 'Get personalized predictions and execute trades with confidence',
            details: [
                'Receive AI-powered trade recommendations',
                'Access real-time market analysis',
                'Execute trades with higher accuracy',
                'Track and improve your performance'
            ],
            icon: '💰'
        }
    ];
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-gray-800 to-gray-900", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "From Setup to Profit in 3 Simple Steps" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Our streamlined onboarding gets you trading smarter in minutes, not hours." })] }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2" }), _jsx("div", { className: "grid lg:grid-cols-3 gap-8 lg:gap-12", children: steps.map((step, index) => (_jsx("div", { className: "relative", children: _jsxs("div", { className: "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group", children: [_jsx("div", { className: "absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-gray-900", children: step.step }), _jsx("div", { className: "text-6xl text-center mb-6 group-hover:scale-110 transition-transform duration-300", children: step.icon }), _jsxs("div", { className: "text-center mb-6", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: step.title }), _jsx("p", { className: "text-gray-300 leading-relaxed", children: step.description })] }), _jsx("div", { className: "space-y-3", children: step.details.map((detail, detailIndex) => (_jsxs("div", { className: "flex items-start", children: [_jsx("svg", { className: "w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }), _jsx("span", { className: "text-gray-300 text-sm", children: detail })] }, detailIndex))) })] }) }, index))) })] }), _jsx("div", { className: "mt-16 text-center", children: _jsxs("div", { className: "bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Start Seeing Results Immediately" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-green-400 mb-2", children: "60 sec" }), _jsx("div", { className: "text-gray-300 text-sm", children: "Setup time" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: "24 hours" }), _jsx("div", { className: "text-gray-300 text-sm", children: "AI learns your style" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-purple-400 mb-2", children: "7 days" }), _jsx("div", { className: "text-gray-300 text-sm", children: "Measurable improvement" })] })] })] }) })] }) }));
};
export default HowItWorksSection;

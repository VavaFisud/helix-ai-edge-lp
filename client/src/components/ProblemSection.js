import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DollarSign, Brain, Clock, TrendingUp, Eye } from 'lucide-react';
const ProblemSection = () => {
    const problems = [
        {
            icon: DollarSign,
            title: 'Bloomberg costs €24,000/year',
            description: 'But treats you like just another data point with generic analysis',
            color: 'text-red-400'
        },
        {
            icon: Brain,
            title: 'Generic AI tools',
            description: "Don't understand YOUR unique trading insights and market observations",
            color: 'text-orange-400'
        },
        {
            icon: Clock,
            title: 'Hours wasted manually correlating',
            description: 'News, data, and central bank signals across multiple platforms',
            color: 'text-yellow-400'
        },
        {
            icon: TrendingUp,
            title: 'Missing profitable opportunities',
            description: 'While competitors use better intelligence and faster analysis',
            color: 'text-red-400'
        },
        {
            icon: Eye,
            title: 'Isolated analysis leads to blind spots',
            description: 'Costly emotional decisions without collaborative intelligence',
            color: 'text-purple-400'
        }
    ];
    return (_jsx("section", { className: "py-20 bg-[#0A0F1C]", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "The Traditional Trading Analysis Problem" }), _jsx("p", { className: "text-xl text-[#E2E8F0] max-w-3xl mx-auto", children: "Professional traders waste thousands of hours and miss countless opportunities due to outdated, expensive, and disconnected analysis tools." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: problems.map((problem, index) => (_jsxs("div", { className: "professional-card p-6 hover-lift group", children: [_jsx("div", { className: `mb-4 ${problem.color} group-hover:scale-110 transition-transform duration-300`, children: _jsx(problem.icon, { size: 32 }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: problem.title }), _jsx("p", { className: "text-[#E2E8F0] leading-relaxed", children: problem.description })] }, index))) }), _jsx("div", { className: "mt-16 bg-gradient-to-r from-[#0066CC]/10 to-[#1A2332] border border-[#0066CC]/30 rounded-xl p-8", children: _jsxs("div", { className: "text-center", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "The Hidden Cost of Outdated Tools" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8 max-w-4xl mx-auto", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-[#0066CC] mb-2", children: "\u20AC24,000/year" }), _jsx("div", { className: "text-[#E2E8F0]", children: "Bloomberg Terminal" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-[#0066CC] mb-2", children: "500+ hours" }), _jsx("div", { className: "text-[#E2E8F0]", children: "Wasted on manual analysis" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl font-bold text-[#0066CC] mb-2", children: "Countless" }), _jsx("div", { className: "text-[#E2E8F0]", children: "Missed opportunities" })] })] })] }) })] }) }));
};
export default ProblemSection;

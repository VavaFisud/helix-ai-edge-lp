import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const UrgencySection = () => {
    const [spotsRemaining, setSpotsRemaining] = useState(47);
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 32,
        seconds: 45
    });
    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                }
                else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                }
                else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    // Simulate spots decreasing
    useEffect(() => {
        const spotsTimer = setInterval(() => {
            setSpotsRemaining(prev => Math.max(25, prev - Math.floor(Math.random() * 2)));
        }, 30000);
        return () => clearInterval(spotsTimer);
    }, []);
    return (_jsx("section", { className: "py-20 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20", children: _jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-orange-500/50 rounded-2xl p-8 md:p-12 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-grid-pattern opacity-5" }), _jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse", children: "\u26A0\uFE0F LIMITED TIME ONLY" }), _jsxs("div", { className: "relative z-10", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Limited Beta Access - Join Now" }), _jsxs("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed", children: ["We're currently in exclusive beta with limited spots available. Secure your access before we open to the general public at", _jsx("span", { className: "text-red-400 font-bold", children: " higher pricing" }), "."] })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-12", children: [_jsxs("div", { className: "bg-gradient-to-br from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-6 text-center", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Beta Spots Remaining" }), _jsx("div", { className: "text-6xl font-bold text-red-400 mb-4", children: spotsRemaining }), _jsx("div", { className: "text-gray-300 mb-4", children: "Out of 100 exclusive beta positions" }), _jsx("div", { className: "w-full bg-gray-700 rounded-full h-4", children: _jsx("div", { className: "bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full transition-all duration-1000", style: { width: `${spotsRemaining}%` } }) })] }), _jsxs("div", { className: "bg-gradient-to-br from-orange-900/40 to-yellow-900/40 border border-orange-500/30 rounded-lg p-6 text-center", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Beta Ends In" }), _jsxs("div", { className: "grid grid-cols-4 gap-2 mb-4", children: [_jsxs("div", { className: "bg-gray-800 rounded-lg p-3", children: [_jsx("div", { className: "text-2xl font-bold text-orange-400", children: timeLeft.days }), _jsx("div", { className: "text-xs text-gray-400", children: "DAYS" })] }), _jsxs("div", { className: "bg-gray-800 rounded-lg p-3", children: [_jsx("div", { className: "text-2xl font-bold text-orange-400", children: timeLeft.hours }), _jsx("div", { className: "text-xs text-gray-400", children: "HOURS" })] }), _jsxs("div", { className: "bg-gray-800 rounded-lg p-3", children: [_jsx("div", { className: "text-2xl font-bold text-orange-400", children: timeLeft.minutes }), _jsx("div", { className: "text-xs text-gray-400", children: "MIN" })] }), _jsxs("div", { className: "bg-gray-800 rounded-lg p-3", children: [_jsx("div", { className: "text-2xl font-bold text-orange-400", children: timeLeft.seconds }), _jsx("div", { className: "text-xs text-gray-400", children: "SEC" })] })] }), _jsx("div", { className: "text-gray-300", children: "After beta: \u20AC499/month" })] })] }), _jsxs("div", { className: "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6 mb-8", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-4 text-center", children: "\uD83C\uDFAF Exclusive Beta Benefits" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl mb-2", children: "\uD83D\uDCB0" }), _jsx("div", { className: "text-white font-semibold", children: "Lock in \u20AC299/month" }), _jsx("div", { className: "text-gray-400 text-sm", children: "Forever pricing guarantee" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl mb-2", children: "\uD83C\uDFC6" }), _jsx("div", { className: "text-white font-semibold", children: "VIP Support" }), _jsx("div", { className: "text-gray-400 text-sm", children: "Direct line to our dev team" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl mb-2", children: "\uD83D\uDE80" }), _jsx("div", { className: "text-white font-semibold", children: "Feature Influence" }), _jsx("div", { className: "text-gray-400 text-sm", children: "Shape the product roadmap" })] })] })] }), _jsxs("div", { className: "text-center", children: [_jsx(Button, { size: "lg", className: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-200 shadow-2xl", children: "\uD83D\uDD25 Secure My Beta Access Now" }), _jsx("div", { className: "mt-4 text-sm text-gray-400", children: "\u2713 No Credit Card Required \u2022 \u2713 3-Day Free Trial \u2022 \u2713 Lock in Beta Pricing" })] }), _jsxs("div", { className: "mt-8 text-center", children: [_jsx("div", { className: "text-gray-400 text-sm mb-2", children: "Recently joined beta users:" }), _jsxs("div", { className: "flex justify-center items-center space-x-2", children: [[...Array(8)].map((_, i) => (_jsx("div", { className: "w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs text-white", children: String.fromCharCode(65 + i) }, i))), _jsx("span", { className: "text-gray-400 text-sm ml-2", children: "+2,839 others" })] })] })] })] }) }) }));
};
export default UrgencySection;

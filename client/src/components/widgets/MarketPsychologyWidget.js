import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight } from 'lucide-react';
const fearGreedIndex = 62;
const sentimentTrend = [30, 50, 60, 70, 80, 90, 85];
function getSentimentLabel(index) {
    if (index >= 75)
        return 'Extreme Greed';
    if (index >= 55)
        return 'Greed';
    if (index >= 45)
        return 'Neutral';
    if (index >= 25)
        return 'Fear';
    return 'Extreme Fear';
}
function getSentimentColor(value) {
    if (value >= 75)
        return 'bg-primary';
    if (value >= 55)
        return 'bg-green-400';
    if (value >= 45)
        return 'bg-yellow-400';
    if (value >= 25)
        return 'bg-yellow-500';
    return 'bg-red-400';
}
export function MarketPsychologyWidget() {
    const circumference = 2 * Math.PI * 40;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (fearGreedIndex / 100) * circumference;
    return (_jsxs(Card, { className: "glassmorphism widget-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-lg font-bold", children: "Market Psychology" }), _jsx(Brain, { className: "w-5 h-5 text-primary" })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Fear & Greed Index" }), _jsxs("div", { className: "relative w-24 h-24 mx-auto", children: [_jsxs("svg", { className: "w-24 h-24 transform -rotate-90", viewBox: "0 0 100 100", children: [_jsx("circle", { cx: "50", cy: "50", r: "40", stroke: "hsl(var(--muted))", strokeWidth: "8", fill: "none" }), _jsx(motion.circle, { cx: "50", cy: "50", r: "40", stroke: "hsl(var(--primary))", strokeWidth: "8", fill: "none", strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, strokeLinecap: "round", initial: { strokeDashoffset: circumference }, animate: { strokeDashoffset }, transition: { duration: 1, ease: 'easeOut' } })] }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsx("span", { className: "text-xl font-bold text-primary", children: fearGreedIndex }) })] }), _jsx("div", { className: "text-sm text-muted-foreground", children: getSentimentLabel(fearGreedIndex) })] }), _jsxs("div", { children: [_jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "24h Sentiment Trend" }), _jsx("div", { className: "h-12 bg-muted rounded-lg flex items-end space-x-1 p-2", children: sentimentTrend.map((value, index) => (_jsx(motion.div, { className: `w-1 rounded-t ${getSentimentColor(value)}`, style: { height: `${value}%` }, initial: { height: 0 }, animate: { height: `${value}%` }, transition: { delay: index * 0.1, duration: 0.5 } }, index))) })] }), _jsxs(Button, { variant: "link", className: "w-full text-primary hover:text-primary/80 text-sm p-0", children: ["Deep Dive Analysis ", _jsx(ArrowRight, { className: "w-4 h-4 ml-1" })] })] })] }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, MessageSquare, Clock, TrendingUp } from 'lucide-react';
const todayDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
const keyInsights = [
    {
        title: 'Fed Hawkish Rhetoric Strengthens USD',
        impact: 'HIGH',
        summary: 'Powell signals continued rate hikes amid persistent inflation concerns'
    },
    {
        title: 'ECB Dovish Shift Pressures EUR',
        impact: 'HIGH',
        summary: 'Lagarde emphasizes economic growth risks over inflation targets'
    },
    {
        title: 'BoJ Intervention Watch Intensifies',
        impact: 'MEDIUM',
        summary: 'USDJPY approaching critical 150 intervention threshold'
    },
    {
        title: 'UK Gilt Market Stabilizes',
        impact: 'MEDIUM',
        summary: 'BoE emergency measures restore confidence in GBP bonds'
    }
];
function getImpactColor(impact) {
    switch (impact) {
        case 'HIGH': return 'bg-red-500/20 text-red-400 border-red-500/30';
        case 'MEDIUM': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
        case 'LOW': return 'bg-green-500/20 text-green-400 border-green-500/30';
        default: return 'bg-muted text-muted-foreground';
    }
}
export function DailyFundamentalReportWidget() {
    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "col-span-full", children: _jsxs(Card, { className: "glassmorphism widget-hover border-primary/20 shadow-xl", children: [_jsx(CardHeader, { className: "pb-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "w-12 h-12 bg-primary rounded-xl flex items-center justify-center", children: _jsx(FileText, { className: "w-6 h-6 text-primary-foreground" }) }), _jsxs("div", { children: [_jsx(CardTitle, { className: "text-2xl font-bold text-foreground", children: "Helix Daily Fundamental Report" }), _jsxs("div", { className: "flex items-center space-x-2 text-sm text-muted-foreground", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsxs("span", { children: [todayDate, " \u2022 7:30 AM EST"] }), _jsx(Badge, { variant: "outline", className: "text-green-400 border-green-400/50", children: "Fresh Analysis" })] })] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(TrendingUp, { className: "w-5 h-5 text-primary" }), _jsx("span", { className: "text-sm text-muted-foreground", children: "AI-Generated" })] })] }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Key Market Insights" }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: keyInsights.map((insight, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1, duration: 0.4 }, className: "p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/30 transition-colors", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx("h4", { className: "font-medium text-foreground text-sm", children: insight.title }), _jsx(Badge, { variant: "outline", className: `text-xs ${getImpactColor(insight.impact)}`, children: insight.impact })] }), _jsx("p", { className: "text-xs text-muted-foreground", children: insight.summary })] }, index))) })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-4 border-t border-border", children: [_jsxs(Button, { className: "flex-1 h-12 text-sm font-medium", size: "lg", children: [_jsx(FileText, { className: "w-5 h-5 mr-2" }), "View Full Report (PDF)"] }), _jsxs(Button, { variant: "outline", className: "flex-1 h-12 text-sm font-medium border-primary/30 hover:bg-primary/10", size: "lg", children: [_jsx(MessageSquare, { className: "w-5 h-5 mr-2" }), "Analyze with Lya"] })] })] })] }) }));
}

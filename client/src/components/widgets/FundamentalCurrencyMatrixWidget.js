import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';
const currencies = ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD'];
const fundamentalData = {
    'EUR': {
        overall: 'bearish',
        interestRate: 'dovish',
        growth: 'weak',
        inflation: 'moderate',
        details: 'ECB dovish pivot amid growth concerns, rate hikes on hold'
    },
    'USD': {
        overall: 'bullish',
        interestRate: 'hawkish',
        growth: 'strong',
        inflation: 'elevated',
        details: 'Fed maintains hawkish stance, robust economic data supporting USD'
    },
    'JPY': {
        overall: 'neutral',
        interestRate: 'dovish',
        growth: 'moderate',
        inflation: 'low',
        details: 'BoJ maintains ultra-loose policy, intervention risks at 150 level'
    },
    'GBP': {
        overall: 'neutral',
        interestRate: 'neutral',
        growth: 'weak',
        inflation: 'elevated',
        details: 'BoE balancing inflation concerns with recession risks'
    },
    'CHF': {
        overall: 'neutral',
        interestRate: 'neutral',
        growth: 'moderate',
        inflation: 'moderate',
        details: 'SNB cautious approach, safe-haven demand supporting CHF'
    },
    'CAD': {
        overall: 'neutral',
        interestRate: 'neutral',
        growth: 'moderate',
        inflation: 'moderate',
        details: 'BoC pausing cycle, oil prices key driver for CAD direction'
    },
    'AUD': {
        overall: 'bearish',
        interestRate: 'neutral',
        growth: 'weak',
        inflation: 'moderate',
        details: 'RBA dovish tilt, China slowdown weighing on AUD outlook'
    },
    'NZD': {
        overall: 'bearish',
        interestRate: 'neutral',
        growth: 'weak',
        inflation: 'moderate',
        details: 'RBNZ cautious stance, housing market concerns persist'
    }
};
function getBiasIcon(bias) {
    switch (bias) {
        case 'bullish': return _jsx(TrendingUp, { className: "w-4 h-4 text-green-400" });
        case 'bearish': return _jsx(TrendingDown, { className: "w-4 h-4 text-red-400" });
        case 'neutral': return _jsx(Minus, { className: "w-4 h-4 text-yellow-400" });
        default: return _jsx(Minus, { className: "w-4 h-4 text-muted-foreground" });
    }
}
function getBiasColor(bias) {
    switch (bias) {
        case 'bullish': return 'text-green-400 bg-green-500/10 border-green-500/20';
        case 'bearish': return 'text-red-400 bg-red-500/10 border-red-500/20';
        case 'neutral': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
        case 'hawkish': return 'text-green-400 bg-green-500/10 border-green-500/20';
        case 'dovish': return 'text-red-400 bg-red-500/10 border-red-500/20';
        case 'strong': return 'text-green-400 bg-green-500/10 border-green-500/20';
        case 'weak': return 'text-red-400 bg-red-500/10 border-red-500/20';
        case 'moderate': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
        case 'elevated': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
        case 'low': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
        default: return 'text-muted-foreground bg-muted/10 border-border';
    }
}
export function FundamentalCurrencyMatrixWidget() {
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    return (_jsx(TooltipProvider, { children: _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.2 }, className: "col-span-full", children: _jsxs(Card, { className: "glassmorphism widget-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-xl font-bold", children: "Fundamental Currency Outlook Matrix" }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Badge, { variant: "outline", className: "text-primary border-primary/50", children: "Real-time Analysis" }), _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { children: _jsx(Info, { className: "w-4 h-4 text-muted-foreground" }) }), _jsx(TooltipContent, { children: _jsx("p", { children: "AI-powered fundamental analysis across major currencies" }) })] })] })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border", children: [_jsx("th", { className: "text-left py-3 px-2 text-sm font-medium text-muted-foreground", children: "Currency" }), _jsx("th", { className: "text-center py-3 px-2 text-sm font-medium text-muted-foreground", children: "Overall Bias" }), _jsx("th", { className: "text-center py-3 px-2 text-sm font-medium text-muted-foreground", children: "Interest Rate" }), _jsx("th", { className: "text-center py-3 px-2 text-sm font-medium text-muted-foreground", children: "Growth Outlook" }), _jsx("th", { className: "text-center py-3 px-2 text-sm font-medium text-muted-foreground", children: "Inflation" })] }) }), _jsx("tbody", { children: currencies.map((currency, index) => {
                                                const data = fundamentalData[currency];
                                                return (_jsxs(motion.tr, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.05, duration: 0.3 }, className: `border-b border-border/50 hover:bg-muted/30 transition-colors cursor-pointer ${selectedCurrency === currency ? 'bg-primary/10' : ''}`, onClick: () => setSelectedCurrency(currency), children: [_jsx("td", { className: "py-3 px-2", children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("span", { className: "font-semibold text-foreground text-sm", children: currency }), getBiasIcon(data.overall)] }) }), _jsx("td", { className: "py-3 px-2 text-center", children: _jsx(Badge, { variant: "outline", className: `text-xs ${getBiasColor(data.overall)}`, children: data.overall.toUpperCase() }) }), _jsx("td", { className: "py-3 px-2 text-center", children: _jsx(Badge, { variant: "outline", className: `text-xs ${getBiasColor(data.interestRate)}`, children: data.interestRate.toUpperCase() }) }), _jsx("td", { className: "py-3 px-2 text-center", children: _jsx(Badge, { variant: "outline", className: `text-xs ${getBiasColor(data.growth)}`, children: data.growth.toUpperCase() }) }), _jsx("td", { className: "py-3 px-2 text-center", children: _jsx(Badge, { variant: "outline", className: `text-xs ${getBiasColor(data.inflation)}`, children: data.inflation.toUpperCase() }) })] }, currency));
                                            }) })] }) }), selectedCurrency && (_jsxs(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, className: "p-4 bg-muted/50 rounded-lg border border-primary/20", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs("h4", { className: "font-semibold text-foreground", children: [selectedCurrency, " Analysis"] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setSelectedCurrency(null), className: "text-muted-foreground hover:text-foreground", children: "\u2715" })] }), _jsx("p", { className: "text-sm text-muted-foreground", children: fundamentalData[selectedCurrency].details })] })), _jsxs("div", { className: "flex flex-wrap gap-4 pt-4 border-t border-border text-xs", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(TrendingUp, { className: "w-3 h-3 text-green-400" }), _jsx("span", { className: "text-muted-foreground", children: "Bullish/Hawkish/Strong" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(TrendingDown, { className: "w-3 h-3 text-red-400" }), _jsx("span", { className: "text-muted-foreground", children: "Bearish/Dovish/Weak" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Minus, { className: "w-3 h-3 text-yellow-400" }), _jsx("span", { className: "text-muted-foreground", children: "Neutral/Moderate" })] })] })] })] }) }) }));
}

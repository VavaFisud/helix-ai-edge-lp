import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'CAD', 'AUD', 'NZD'];
const heatmapData = [
    [null, 1.2, 0.8, 1.8, 0.5, 1.1, -0.3, 0.7],
    [-1.2, null, -0.4, 0.6, -0.7, -0.1, -1.5, -0.9],
    [-0.8, 0.4, null, 1.4, -0.3, 0.3, -1.1, -0.5],
    [-1.8, -0.6, -1.4, null, -1.1, -0.9, -2.9, -2.1],
    [-0.5, 0.7, 0.3, 1.1, null, 0.2, -0.8, -0.2],
    [-1.1, 0.1, -0.3, 0.9, -0.2, null, -1.4, -0.6],
    [0.3, 1.5, 1.1, 2.9, 0.8, 1.4, null, 0.8],
    [-0.7, 0.9, 0.5, 2.1, 0.2, 0.6, -0.8, null]
];
function getColorForChange(change) {
    if (change === null)
        return 'bg-muted';
    if (change > 1.5)
        return 'bg-green-700';
    if (change > 1.0)
        return 'bg-green-600';
    if (change > 0.5)
        return 'bg-green-500';
    if (change > 0)
        return 'bg-green-400';
    if (change > -0.5)
        return 'bg-red-400';
    if (change > -1.0)
        return 'bg-red-500';
    if (change > -1.5)
        return 'bg-red-600';
    return 'bg-red-700';
}
export function HeatmapWidget() {
    const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
    const timeframes = ['1H', '1D', '1W', '1M'];
    return (_jsxs(Card, { className: "xl:col-span-2 glassmorphism widget-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-xl font-bold", children: "Forex Currency Strength Heatmap" }), _jsx("div", { className: "flex space-x-2", children: timeframes.map((tf) => (_jsx(Button, { variant: selectedTimeframe === tf ? 'default' : 'outline', size: "sm", onClick: () => setSelectedTimeframe(tf), className: "text-sm", children: tf }, tf))) })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-9 gap-1", children: [_jsx("div", { className: "text-center text-xs text-muted-foreground p-2" }), currencies.map((currency) => (_jsx("div", { className: "text-center text-xs text-muted-foreground p-2 font-medium", children: currency }, currency))), currencies.map((baseCurrency, rowIndex) => (_jsxs(React.Fragment, { children: [_jsx("div", { className: "text-center text-xs text-muted-foreground p-2 font-medium", children: baseCurrency }), heatmapData[rowIndex].map((change, colIndex) => (_jsx(motion.div, { className: `heatmap-cell rounded p-2 text-center text-xs text-white font-medium ${getColorForChange(change)}`, whileHover: { scale: 1.05, zIndex: 10 }, transition: { duration: 0.2 }, children: change === null ? '-' : `${change > 0 ? '+' : ''}${change.toFixed(1)}%` }, `${baseCurrency}-${currencies[colIndex]}`)))] }, baseCurrency)))] }), _jsxs("div", { className: "flex items-center justify-between text-sm pt-4 border-t border-border", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-3 h-3 bg-green-500 rounded" }), _jsx("span", { className: "text-muted-foreground", children: "Strongest: USD" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-3 h-3 bg-red-500 rounded" }), _jsx("span", { className: "text-muted-foreground", children: "Weakest: AUD" })] })] }), _jsxs(Button, { variant: "link", className: "text-primary hover:text-primary/80 p-0", children: ["View Detailed Analysis ", _jsx(ArrowRight, { className: "w-4 h-4 ml-1" })] })] })] })] }));
}

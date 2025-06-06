import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
const economicEvents = [
    {
        id: '1',
        title: 'US NFP',
        time: '14:30 EST',
        currency: 'USD',
        impact: 'HIGH',
        color: 'bg-red-500'
    },
    {
        id: '2',
        title: 'ECB Interest Rate',
        time: 'Tomorrow 8:00',
        currency: 'EUR',
        impact: 'MED',
        color: 'bg-yellow-500'
    },
    {
        id: '3',
        title: 'UK Retail Sales',
        time: 'Tomorrow 10:00',
        currency: 'GBP',
        impact: 'LOW',
        color: 'bg-green-500'
    }
];
function getImpactVariant(impact) {
    switch (impact) {
        case 'HIGH': return 'destructive';
        case 'MED': return 'secondary';
        case 'LOW': return 'outline';
        default: return 'outline';
    }
}
function getImpactColor(impact) {
    switch (impact) {
        case 'HIGH': return 'text-red-400';
        case 'MED': return 'text-yellow-400';
        case 'LOW': return 'text-green-400';
        default: return 'text-muted-foreground';
    }
}
export function EconomicCalendarWidget() {
    return (_jsxs(Card, { className: "glassmorphism widget-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-lg font-bold", children: "Economic Calendar" }), _jsxs(Button, { variant: "link", className: "text-primary hover:text-primary/80 text-sm p-0", children: ["View All ", _jsx(Calendar, { className: "w-4 h-4 ml-1" })] })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: economicEvents.map((event) => (_jsxs("div", { className: "flex items-center space-x-3 p-2 rounded hover:bg-muted transition-colors cursor-pointer", children: [_jsx("div", { className: `w-2 h-2 ${event.color} rounded-full flex-shrink-0` }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: "text-sm font-medium", children: event.title }), _jsx("div", { className: "text-xs text-muted-foreground", children: event.time })] }), _jsx("div", { className: `text-xs font-medium ${getImpactColor(event.impact)}`, children: event.impact })] }, event.id))) }) })] }));
}

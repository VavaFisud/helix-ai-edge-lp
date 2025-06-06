import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquare } from 'lucide-react';
const marketInsights = [
    'USD strengthens on hawkish Fed rhetoric',
    'EUR under pressure from ECB dovish stance',
    'JPY volatility expected around BoJ decision'
];
export function FundamentalReportWidget() {
    return (_jsxs(Card, { className: "glassmorphism widget-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-lg font-bold", children: "Daily Fundamental Report" }), _jsx("span", { className: "text-xs text-muted-foreground", children: "7:30 AM" })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [_jsx("h3", { className: "font-medium mb-2", children: "Key Market Insights" }), _jsx("ul", { className: "text-sm text-muted-foreground space-y-1", children: marketInsights.map((insight, index) => (_jsxs("li", { children: ["\u2022 ", insight] }, index))) })] }), _jsxs("div", { className: "flex space-x-2", children: [_jsxs(Button, { className: "flex-1 text-sm", size: "sm", children: [_jsx(FileText, { className: "w-4 h-4 mr-2" }), "Full Report"] }), _jsxs(Button, { variant: "outline", className: "flex-1 text-sm", size: "sm", children: [_jsx(MessageSquare, { className: "w-4 h-4 mr-2" }), "Analyze with Lya"] })] })] })] }));
}

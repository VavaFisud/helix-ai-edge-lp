import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
const watchlistData = [
    {
        symbol: 'EUR/USD',
        name: 'Euro / US Dollar',
        price: 1.0847,
        change: 0.21,
        isPositive: true
    },
    {
        symbol: 'GBP/JPY',
        name: 'British Pound / Japanese Yen',
        price: 184.52,
        change: -0.45,
        isPositive: false
    },
    {
        symbol: 'USD/CAD',
        name: 'US Dollar / Canadian Dollar',
        price: 1.3421,
        change: 0.12,
        isPositive: true
    }
];
export function WatchlistWidget() {
    return (_jsxs(Card, { className: "glassmorphism widget-hover", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-lg font-bold", children: "Watchlist" }), _jsx(Button, { variant: "ghost", size: "sm", className: "text-muted-foreground hover:text-primary", children: _jsx(Plus, { className: "w-4 h-4" }) })] }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-3", children: watchlistData.map((item, index) => (_jsxs("div", { className: "flex items-center justify-between p-2 rounded hover:bg-muted transition-colors cursor-pointer", children: [_jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: "font-medium text-sm", children: item.symbol }), _jsx("div", { className: "text-xs text-muted-foreground truncate", children: item.name })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "font-medium text-sm", children: item.price.toFixed(4) }), _jsxs("div", { className: `text-xs ${item.isPositive ? 'text-green-500' : 'text-red-500'}`, children: [item.isPositive ? '+' : '', item.change.toFixed(2), "%"] })] })] }, index))) }) })] }));
}

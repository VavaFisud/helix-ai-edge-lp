import React from 'react';
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
  return (
    <Card className="glassmorphism widget-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">Watchlist</CardTitle>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {watchlistData.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-2 rounded hover:bg-muted transition-colors cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{item.symbol}</div>
                <div className="text-xs text-muted-foreground truncate">{item.name}</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-sm">{item.price.toFixed(4)}</div>
                <div className={`text-xs ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {item.isPositive ? '+' : ''}{item.change.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

function getColorForChange(change: number | null): string {
  if (change === null) return 'bg-muted';
  if (change > 1.5) return 'bg-green-700';
  if (change > 1.0) return 'bg-green-600';
  if (change > 0.5) return 'bg-green-500';
  if (change > 0) return 'bg-green-400';
  if (change > -0.5) return 'bg-red-400';
  if (change > -1.0) return 'bg-red-500';
  if (change > -1.5) return 'bg-red-600';
  return 'bg-red-700';
}

export function HeatmapWidget() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');

  const timeframes = ['1H', '1D', '1W', '1M'];

  return (
    <Card className="xl:col-span-2 glassmorphism widget-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">
            Forex Currency Strength Heatmap
          </CardTitle>
          <div className="flex space-x-2">
            {timeframes.map((tf) => (
              <Button
                key={tf}
                variant={selectedTimeframe === tf ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTimeframe(tf)}
                className="text-sm"
              >
                {tf}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Heatmap Grid */}
        <div className="grid grid-cols-9 gap-1">
          {/* Header row */}
          <div className="text-center text-xs text-muted-foreground p-2"></div>
          {currencies.map((currency) => (
            <div key={currency} className="text-center text-xs text-muted-foreground p-2 font-medium">
              {currency}
            </div>
          ))}
          
          {/* Data rows */}
          {currencies.map((baseCurrency, rowIndex) => (
            <React.Fragment key={baseCurrency}>
              <div className="text-center text-xs text-muted-foreground p-2 font-medium">
                {baseCurrency}
              </div>
              {heatmapData[rowIndex].map((change, colIndex) => (
                <motion.div
                  key={`${baseCurrency}-${currencies[colIndex]}`}
                  className={`heatmap-cell rounded p-2 text-center text-xs text-white font-medium ${getColorForChange(change)}`}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {change === null ? '-' : `${change > 0 ? '+' : ''}${change.toFixed(1)}%`}
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </div>
        
        {/* Currency Strength Indicators */}
        <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-muted-foreground">Strongest: USD</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-muted-foreground">Weakest: AUD</span>
            </div>
          </div>
          <Button variant="link" className="text-primary hover:text-primary/80 p-0">
            View Detailed Analysis <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

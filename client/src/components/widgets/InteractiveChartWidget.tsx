import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Layers, Maximize } from 'lucide-react';

const candlestickData = [
  { x: 40, open: 80, high: 75, low: 120, close: 110, bullish: true },
  { x: 60, open: 70, high: 65, low: 110, close: 95, bullish: false },
  { x: 80, open: 75, high: 70, low: 105, close: 95, bullish: true },
  { x: 100, open: 72, high: 68, low: 98, close: 90, bullish: true },
  { x: 120, open: 85, high: 80, low: 115, close: 107, bullish: false },
];

export function InteractiveChartWidget() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1H');
  const timeframes = ['1H', '4H', '1D', '1W'];

  return (
    <Card className="xl:col-span-2 glassmorphism widget-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">EUR/USD Chart</CardTitle>
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
        {/* Chart Area */}
        <div className="h-64 bg-muted rounded-lg relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Grid Lines */}
            <defs>
              <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Candlesticks */}
            <g>
              {candlestickData.map((candle, index) => (
                <g key={index}>
                  {/* Wick */}
                  <line 
                    x1={candle.x + 3} 
                    y1={candle.high} 
                    x2={candle.x + 3} 
                    y2={candle.low} 
                    stroke={candle.bullish ? '#10B981' : '#EF4444'} 
                    strokeWidth="1"
                  />
                  {/* Body */}
                  <rect 
                    x={candle.x} 
                    y={Math.min(candle.open, candle.close)} 
                    width="6" 
                    height={Math.abs(candle.close - candle.open)} 
                    fill={candle.bullish ? '#10B981' : '#EF4444'}
                  />
                </g>
              ))}
            </g>
            
            {/* Current Price Line */}
            <line 
              x1="0" 
              y1="90" 
              x2="400" 
              y2="88" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2" 
              strokeDasharray="5,5"
            />
          </svg>
          
          {/* Price Labels */}
          <div className="absolute top-4 right-4 bg-background/80 rounded px-2 py-1 backdrop-blur-sm">
            <div className="text-sm font-medium">1.0847</div>
            <div className="text-xs text-green-500">+0.0023 (+0.21%)</div>
          </div>
        </div>
        
        {/* Chart Controls */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 text-sm">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <BarChart className="w-4 h-4 mr-1" />
              Indicators
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Layers className="w-4 h-4 mr-1" />
              Overlays
            </Button>
          </div>
          <Button variant="link" className="text-primary hover:text-primary/80 text-sm p-0">
            Full Chart View <Maximize className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

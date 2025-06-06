import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight } from 'lucide-react';

const fearGreedIndex = 62;
const sentimentTrend = [30, 50, 60, 70, 80, 90, 85];

function getSentimentLabel(index: number): string {
  if (index >= 75) return 'Extreme Greed';
  if (index >= 55) return 'Greed';
  if (index >= 45) return 'Neutral';
  if (index >= 25) return 'Fear';
  return 'Extreme Fear';
}

function getSentimentColor(value: number): string {
  if (value >= 75) return 'bg-primary';
  if (value >= 55) return 'bg-green-400';
  if (value >= 45) return 'bg-yellow-400';
  if (value >= 25) return 'bg-yellow-500';
  return 'bg-red-400';
}

export function MarketPsychologyWidget() {
  const circumference = 2 * Math.PI * 40;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (fearGreedIndex / 100) * circumference;

  return (
    <Card className="glassmorphism widget-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">
            Market Psychology
          </CardTitle>
          <Brain className="w-5 h-5 text-primary" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Fear & Greed Index */}
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Fear & Greed Index</div>
          <div className="relative w-24 h-24 mx-auto">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                stroke="hsl(var(--muted))" 
                strokeWidth="8" 
                fill="none"
              />
              <motion.circle 
                cx="50" 
                cy="50" 
                r="40" 
                stroke="hsl(var(--primary))" 
                strokeWidth="8" 
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">{fearGreedIndex}</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {getSentimentLabel(fearGreedIndex)}
          </div>
        </div>
        
        {/* 24h Sentiment Chart */}
        <div>
          <div className="text-sm text-muted-foreground mb-2">24h Sentiment Trend</div>
          <div className="h-12 bg-muted rounded-lg flex items-end space-x-1 p-2">
            {sentimentTrend.map((value, index) => (
              <motion.div
                key={index}
                className={`w-1 rounded-t ${getSentimentColor(value)}`}
                style={{ height: `${value}%` }}
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
        
        <Button variant="link" className="w-full text-primary hover:text-primary/80 text-sm p-0">
          Deep Dive Analysis <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
}

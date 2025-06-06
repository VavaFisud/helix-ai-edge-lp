import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const performanceData = [60, 80, 40, 20, 90, 100, 70];

export function GhostTradingWidget() {
  return (
    <Card className="glassmorphism widget-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">
            Ghost Trading System
          </CardTitle>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm text-muted-foreground">Active Strategy</div>
          <div className="font-medium">EUR/USD Momentum Alpha</div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Daily P&L</div>
            <div className="text-xl font-bold text-green-500">+$2,847.50</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Open Trades</div>
            <div className="text-xl font-bold">7</div>
          </div>
        </div>
        
        {/* Performance Sparkline */}
        <div className="h-16 bg-muted rounded-lg flex items-end justify-center space-x-1 p-2">
          {performanceData.map((height, index) => (
            <motion.div
              key={index}
              className={`w-2 rounded-t ${
                height > 50 ? 'bg-green-500' : 'bg-red-500'
              }`}
              style={{ height: `${height}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
        
        <Button variant="link" className="w-full text-primary hover:text-primary/80 text-sm p-0">
          View GhostView Details <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
}

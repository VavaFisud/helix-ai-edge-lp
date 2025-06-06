import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, ArrowRight } from 'lucide-react';

export function CentralBankWidget() {
  const sentimentPosition = 75; // 0-100 scale, represents position on gauge

  return (
    <Card className="glassmorphism widget-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">
            Central Bank Whisperer
          </CardTitle>
          <Building2 className="w-5 h-5 text-primary" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Sentiment Gauge */}
        <div className="relative">
          <div className="text-sm text-muted-foreground mb-2">Overall Sentiment</div>
          <div className="h-3 bg-muted rounded-full relative overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
            {/* Indicator */}
            <div 
              className="absolute top-0 w-1 h-full bg-white shadow-lg transition-all duration-500"
              style={{ left: `${sentimentPosition}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Dovish</span>
            <span>Neutral</span>
            <span>Hawkish</span>
          </div>
        </div>
        
        <div>
          <div className="text-sm text-muted-foreground">Latest Signal</div>
          <div className="text-sm font-medium">Fed signals continued tightening bias</div>
          <div className="text-xs text-muted-foreground">2 hours ago</div>
        </div>
        
        <Button variant="link" className="w-full text-primary hover:text-primary/80 text-sm p-0">
          View Detailed Analysis <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
}

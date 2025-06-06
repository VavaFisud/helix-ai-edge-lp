import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquare } from 'lucide-react';

const marketInsights = [
  'USD strengthens on hawkish Fed rhetoric',
  'EUR under pressure from ECB dovish stance',
  'JPY volatility expected around BoJ decision'
];

export function FundamentalReportWidget() {
  return (
    <Card className="glassmorphism widget-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">
            Daily Fundamental Report
          </CardTitle>
          <span className="text-xs text-muted-foreground">7:30 AM</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-medium mb-2">Key Market Insights</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            {marketInsights.map((insight, index) => (
              <li key={index}>• {insight}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex space-x-2">
          <Button className="flex-1 text-sm" size="sm">
            <FileText className="w-4 h-4 mr-2" />
            Full Report
          </Button>
          <Button variant="outline" className="flex-1 text-sm" size="sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            Analyze with Lya
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

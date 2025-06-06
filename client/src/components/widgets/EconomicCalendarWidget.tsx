import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

const economicEvents = [
  {
    id: '1',
    title: 'US NFP',
    time: '14:30 EST',
    currency: 'USD',
    impact: 'HIGH' as const,
    color: 'bg-red-500'
  },
  {
    id: '2',
    title: 'ECB Interest Rate',
    time: 'Tomorrow 8:00',
    currency: 'EUR',
    impact: 'MED' as const,
    color: 'bg-yellow-500'
  },
  {
    id: '3',
    title: 'UK Retail Sales',
    time: 'Tomorrow 10:00',
    currency: 'GBP',
    impact: 'LOW' as const,
    color: 'bg-green-500'
  }
];

function getImpactVariant(impact: string) {
  switch (impact) {
    case 'HIGH': return 'destructive';
    case 'MED': return 'secondary';
    case 'LOW': return 'outline';
    default: return 'outline';
  }
}

function getImpactColor(impact: string) {
  switch (impact) {
    case 'HIGH': return 'text-red-400';
    case 'MED': return 'text-yellow-400';
    case 'LOW': return 'text-green-400';
    default: return 'text-muted-foreground';
  }
}

export function EconomicCalendarWidget() {
  return (
    <Card className="glassmorphism widget-hover">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">Economic Calendar</CardTitle>
          <Button variant="link" className="text-primary hover:text-primary/80 text-sm p-0">
            View All <Calendar className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {economicEvents.map((event) => (
            <div 
              key={event.id}
              className="flex items-center space-x-3 p-2 rounded hover:bg-muted transition-colors cursor-pointer"
            >
              <div className={`w-2 h-2 ${event.color} rounded-full flex-shrink-0`}></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{event.title}</div>
                <div className="text-xs text-muted-foreground">{event.time}</div>
              </div>
              <div className={`text-xs font-medium ${getImpactColor(event.impact)}`}>
                {event.impact}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

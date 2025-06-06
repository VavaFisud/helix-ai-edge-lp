import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, MessageSquare, Clock, TrendingUp } from 'lucide-react';

const todayDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const keyInsights = [
  {
    title: 'Fed Hawkish Rhetoric Strengthens USD',
    impact: 'HIGH',
    summary: 'Powell signals continued rate hikes amid persistent inflation concerns'
  },
  {
    title: 'ECB Dovish Shift Pressures EUR',
    impact: 'HIGH', 
    summary: 'Lagarde emphasizes economic growth risks over inflation targets'
  },
  {
    title: 'BoJ Intervention Watch Intensifies',
    impact: 'MEDIUM',
    summary: 'USDJPY approaching critical 150 intervention threshold'
  },
  {
    title: 'UK Gilt Market Stabilizes',
    impact: 'MEDIUM',
    summary: 'BoE emergency measures restore confidence in GBP bonds'
  }
];

function getImpactColor(impact: string) {
  switch (impact) {
    case 'HIGH': return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'MEDIUM': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'LOW': return 'bg-green-500/20 text-green-400 border-green-500/30';
    default: return 'bg-muted text-muted-foreground';
  }
}

export function DailyFundamentalReportWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-full"
    >
      <Card className="glassmorphism widget-hover border-primary/20 shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Helix Daily Fundamental Report
                </CardTitle>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{todayDate} • 7:30 AM EST</span>
                  <Badge variant="outline" className="text-green-400 border-green-400/50">
                    Fresh Analysis
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Generated</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Key Market Insights */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Key Market Insights</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {keyInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground text-sm">{insight.title}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getImpactColor(insight.impact)}`}
                    >
                      {insight.impact}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{insight.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button className="flex-1 h-12 text-sm font-medium" size="lg">
              <FileText className="w-5 h-5 mr-2" />
              View Full Report (PDF)
            </Button>
            <Button variant="outline" className="flex-1 h-12 text-sm font-medium border-primary/30 hover:bg-primary/10" size="lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Analyze with Lya
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
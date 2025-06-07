import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { DailyFundamentalReportWidget } from '@/components/widgets/DailyFundamentalReportWidget';
import { MarketPsychologyWidget } from '@/components/widgets/MarketPsychologyWidget';
import { EconomicCalendarWidget } from '@/components/widgets/EconomicCalendarWidget';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Brain, 
  FileText, 
  Calendar, 
  BarChart3, 
  Download,
  Zap,
  Target,
  Shield,
  RefreshCw,
  AlertTriangle,
  Loader2
} from 'lucide-react';

const reportSummaries = [
  {
    id: '1',
    title: 'Weekly Market Outlook',
    date: '2024-01-15',
    type: 'Weekly',
    status: 'Published',
    keyPoints: [
      'USD strength continues amid Fed hawkish stance',
      'EUR under pressure from ECB dovish pivot',
      'JPY intervention risks at 150 level'
    ],
    confidence: 85
  },
  {
    id: '2',
    title: 'Central Bank Policy Review',
    date: '2024-01-12',
    type: 'Special',
    status: 'Published',
    keyPoints: [
      'Fed signals pause in rate hikes',
      'ECB maintains accommodative stance',
      'BoJ keeps ultra-loose policy'
    ],
    confidence: 92
  },
  {
    id: '3',
    title: 'Monthly Economic Indicators',
    date: '2024-01-10',
    type: 'Monthly',
    status: 'Draft',
    keyPoints: [
      'US inflation shows signs of cooling',
      'EU growth concerns persist',
      'Asian markets show resilience'
    ],
    confidence: 78
  }
];

const analyticsMetrics = [
  {
    title: 'Report Accuracy',
    value: '94.2%',
    change: '+2.1%',
    trend: 'up',
    description: 'AI prediction accuracy over last 30 days'
  },
  {
    title: 'Market Coverage',
    value: '8 Pairs',
    change: '+1',
    trend: 'up',
    description: 'Major currency pairs analyzed'
  },
  {
    title: 'Insights Generated',
    value: '156',
    change: '+23',
    trend: 'up',
    description: 'AI-powered insights this month'
  },
  {
    title: 'Confidence Score',
    value: '87%',
    change: '+5%',
    trend: 'up',
    description: 'Average AI confidence in predictions'
  }
];

export default function ReportsAnalytics() {
  const [activeTab, setActiveTab] = useState('reports');
  const [marketSentiment, setMarketSentiment] = useState<any>(null);
  const [tradingOpportunities, setTradingOpportunities] = useState<any[]>([]);
  const [riskAssessment, setRiskAssessment] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchAIAnalytics = async () => {
    setIsLoading(true);
    try {
      // Fetch market sentiment
      const sentimentResponse = await fetch('/api/reports-analytics/extract-sentiment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (sentimentResponse.ok) {
        const sentimentData = await sentimentResponse.json();
        setMarketSentiment(sentimentData);
      }

      // Fetch trading opportunities
      const opportunitiesResponse = await fetch('/api/reports-analytics/extract-opportunities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (opportunitiesResponse.ok) {
        const opportunitiesData = await opportunitiesResponse.json();
        setTradingOpportunities(opportunitiesData);
      }

      // Fetch risk assessment
      const riskResponse = await fetch('/api/reports-analytics/extract-risk-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (riskResponse.ok) {
        const riskData = await riskResponse.json();
        setRiskAssessment(riskData);
      }

      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching AI analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAIAnalytics();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
        <p className="text-muted-foreground">
          AI-powered market analysis and comprehensive reporting dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsMetrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glassmorphism border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <Activity className="h-4 w-4 text-muted-foreground" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {metric.change}
                  </span>
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reports">Daily Reports</TabsTrigger>
          <TabsTrigger value="summaries">Report Summaries</TabsTrigger>
          <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
          <TabsTrigger value="calendar">Economic Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-6">
          <DailyFundamentalReportWidget />
        </TabsContent>

        <TabsContent value="summaries" className="space-y-6">
          <div className="grid gap-6">
            {reportSummaries.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glassmorphism border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          {report.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span>{report.date}</span>
                          <Badge variant={report.type === 'Special' ? 'default' : 'secondary'}>
                            {report.type}
                          </Badge>
                          <Badge variant={report.status === 'Published' ? 'default' : 'outline'}>
                            {report.status}
                          </Badge>
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="text-sm font-medium">AI Confidence</div>
                          <div className="text-2xl font-bold text-primary">{report.confidence}%</div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-muted-foreground">Key Insights:</h4>
                      <ul className="space-y-2">
                        {report.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">AI-Powered Market Analytics</h3>
              <p className="text-sm text-muted-foreground">
                {lastUpdated ? `Last updated: ${lastUpdated.toLocaleTimeString()}` : 'Loading...'}
              </p>
            </div>
            <Button 
              onClick={fetchAIAnalytics} 
              disabled={isLoading}
              variant="outline"
              size="sm"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Refresh
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Market Sentiment Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-500" />
                  Market Sentiment Analysis
                  <Badge variant="secondary">AI-Powered</Badge>
                </CardTitle>
                <CardDescription>
                  Real-time sentiment extracted from latest reports
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {marketSentiment ? (
                  <>
                    <div className="text-center">
                      <div className="text-2xl font-bold capitalize">
                        {marketSentiment.overall}
                      </div>
                      <div className="text-sm text-muted-foreground">Overall Sentiment</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Bullish</span>
                        <span className="text-sm font-medium text-green-600">{marketSentiment.bullish}%</span>
                      </div>
                      <Progress value={marketSentiment.bullish} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Bearish</span>
                        <span className="text-sm font-medium text-red-600">{marketSentiment.bearish}%</span>
                      </div>
                      <Progress value={marketSentiment.bearish} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Neutral</span>
                        <span className="text-sm font-medium text-gray-600">{marketSentiment.neutral}%</span>
                      </div>
                      <Progress value={marketSentiment.neutral} className="h-2" />
                    </div>

                    {marketSentiment.factors && marketSentiment.factors.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Key Factors</h4>
                        <div className="space-y-2">
                          {marketSentiment.factors.slice(0, 3).map((factor: any, index: number) => (
                            <div key={index} className="flex items-center justify-between text-xs">
                              <span>{factor.factor}</span>
                              <Badge 
                                variant={factor.sentiment === 'bullish' ? 'default' : factor.sentiment === 'bearish' ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {factor.sentiment}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    {isLoading ? 'Loading sentiment data...' : 'No sentiment data available'}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  Risk Assessment
                  <Badge variant="secondary">AI-Powered</Badge>
                </CardTitle>
                <CardDescription>
                  AI-generated risk analysis from market reports
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {riskAssessment ? (
                  <>
                    <div className="text-center">
                      <div className="text-2xl font-bold capitalize flex items-center justify-center gap-2">
                        {riskAssessment.overallRisk === 'high' && <AlertTriangle className="h-6 w-6 text-red-500" />}
                        {riskAssessment.overallRisk}
                      </div>
                      <div className="text-sm text-muted-foreground">Risk Level</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Risk Score</span>
                        <span className="font-medium">{riskAssessment.riskLevel}/100</span>
                      </div>
                      <Progress value={riskAssessment.riskLevel} className="h-2" />
                    </div>

                    {riskAssessment.factors && riskAssessment.factors.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Risk Factors</h4>
                        <div className="space-y-2">
                          {riskAssessment.factors.slice(0, 3).map((factor: any, index: number) => (
                            <div key={index} className="text-xs">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium">{factor.factor}</span>
                                <Badge 
                                  variant={factor.level === 'high' ? 'destructive' : factor.level === 'medium' ? 'default' : 'secondary'}
                                  className="text-xs"
                                >
                                  {factor.level}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground">{factor.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {riskAssessment.recommendations && riskAssessment.recommendations.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                        <ul className="space-y-1">
                          {riskAssessment.recommendations.slice(0, 3).map((rec: string, index: number) => (
                            <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                              <span className="text-blue-500">•</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    {isLoading ? 'Loading risk assessment...' : 'No risk data available'}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Trading Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                AI Trading Opportunities
                <Badge variant="secondary">Live Analysis</Badge>
              </CardTitle>
              <CardDescription>
                AI-identified trading opportunities from market analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              {tradingOpportunities && tradingOpportunities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tradingOpportunities.map((opportunity: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{opportunity.pair}</span>
                        <Badge 
                          variant={opportunity.type === 'long' ? 'default' : 'destructive'}
                          className="text-xs"
                        >
                          {opportunity.type.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Entry:</span>
                          <span className="font-medium">{opportunity.entry}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Target:</span>
                          <span className="font-medium text-green-600">{opportunity.target}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Stop Loss:</span>
                          <span className="font-medium text-red-600">{opportunity.stopLoss}</span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        {opportunity.reasoning}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <Badge 
                          variant={opportunity.riskLevel === 'high' ? 'destructive' : opportunity.riskLevel === 'medium' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {opportunity.riskLevel} risk
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  {isLoading ? 'Loading trading opportunities...' : 'No trading opportunities available'}
                </div>
              )}
            </CardContent>
          </Card>

          {/* AI Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                AI Performance Metrics
              </CardTitle>
              <CardDescription>
                Real-time AI model performance and accuracy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Prediction Accuracy</span>
                    <span className="font-medium">94.2%</span>
                  </div>
                  <Progress value={94.2} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Model Confidence</span>
                    <span className="font-medium">87.8%</span>
                  </div>
                  <Progress value={87.8} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing Speed</span>
                    <span className="font-medium">1.2s avg</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <EconomicCalendarWidget />
        </TabsContent>
      </Tabs>
    </div>
  );
}
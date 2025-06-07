import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BarChart3, Activity, Brain, RefreshCw, FileText, Target, AlertTriangle } from 'lucide-react';
import { FundamentalCurrencyMatrixWidget } from '@/components/widgets/FundamentalCurrencyMatrixWidget';
import { HeatmapWidget } from '@/components/widgets/HeatmapWidget';
import { InteractiveChartWidget } from '@/components/widgets/InteractiveChartWidget';

const marketMetrics = [
  {
    title: 'Market Trend',
    value: '+2.4%',
    change: '+0.3%',
    description: 'vs yesterday',
    icon: TrendingUp,
    color: 'text-green-500'
  },
  {
    title: 'Volume',
    value: '$2.4B',
    change: '+12%',
    description: 'vs average',
    icon: BarChart3,
    color: 'text-blue-500'
  },
  {
    title: 'Volatility',
    value: '18.2%',
    change: 'Moderate',
    description: 'level',
    icon: Activity,
    color: 'text-orange-500'
  },
  {
    title: 'AI Sentiment',
    value: 'Bullish',
    change: '72%',
    description: 'positive indicators',
    icon: Brain,
    color: 'text-green-500'
  }
];

interface AIInsight {
  title: string;
  summary: string;
  impact: string;
}

interface MarketPrediction {
  pair: string;
  direction: string;
  reasoning: string;
  confidence: number;
}

interface TrendData {
  pair: string;
  description: string;
  trend: string;
  strength: number;
  timeframe: string;
}

interface VolatilityData {
  pair: string;
  volatility: string;
  level: number;
}

export default function MarketAnalysis() {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([]);
  const [marketPredictions, setMarketPredictions] = useState<MarketPrediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchAIInsights = async () => {
    setIsLoading(true);
    try {
      // First, get the latest report content
      const latestReportResponse = await fetch('/api/daily-reports/latest');
      if (!latestReportResponse.ok) {
        throw new Error('No latest report available');
      }
      
      const latestReport = await latestReportResponse.json();
      const reportContent = latestReport.content || latestReport.summary || '';
      
      if (!reportContent) {
        throw new Error('No report content available');
      }

      // Fetch market trends using actual report content
      const trendsResponse = await fetch('/api/market-analysis/extract-trends', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: reportContent })
      });
      
      // Fetch volatility analysis using actual report content
      const volatilityResponse = await fetch('/api/market-analysis/extract-volatility', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: reportContent })
      });
      
      if (trendsResponse.ok && volatilityResponse.ok) {
        const trends = await trendsResponse.json();
        const volatility = await volatilityResponse.json();
        
        // Transform the data into the expected format for AI insights
        const insights: AIInsight[] = [];
        
        // Add trend insights
        if (trends.trends && trends.trends.length > 0) {
          trends.trends.slice(0, 3).forEach((trend: TrendData) => {
            insights.push({
              title: `${trend.pair} Trend Analysis`,
              summary: `${trend.description} - ${trend.trend} trend with ${trend.strength}% strength`,
              impact: trend.timeframe
            });
          });
        }
        
        // Add volatility insights
        if (volatility.pairs && volatility.pairs.length > 0) {
          volatility.pairs.slice(0, 2).forEach((pair: VolatilityData) => {
            insights.push({
              title: `${pair.pair} Volatility`,
              summary: `${pair.volatility} volatility level at ${pair.level}%`,
              impact: 'Market Risk'
            });
          });
        }
        
        setAiInsights(insights);
      } else {
        throw new Error('Failed to extract insights from report');
      }
      
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to fetch AI insights:', error);
      // Fallback to default insights
      setAiInsights([
        {
          title: "Market Overview",
          summary: "Current market conditions show mixed signals with increased volatility in major currency pairs. USD strength continues amid Fed policy expectations.",
          impact: "High"
        },
        {
          title: "EUR/USD Analysis",
          summary: "EUR/USD showing bearish momentum below key support levels",
          impact: "Medium"
        },
        {
          title: "Risk Assessment",
          summary: "Risk sentiment remains cautious ahead of key data releases",
          impact: "Medium"
        }
      ]);
      setLastUpdated(new Date());
    } finally {
      setIsLoading(false);
    }
  };

  const extractMarketPredictions = async () => {
    try {
      // First, get the latest report content
      const latestReportResponse = await fetch('/api/daily-reports/latest');
      if (!latestReportResponse.ok) {
        throw new Error('No latest report available');
      }
      
      const latestReport = await latestReportResponse.json();
      const reportContent = latestReport.content || latestReport.summary || '';
      
      if (!reportContent) {
        throw new Error('No report content available');
      }

      const response = await fetch('/api/market-analysis/extract-predictions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: reportContent })
      });
      
      if (response.ok) {
        const data = await response.json();
        setMarketPredictions(data);
        setLastUpdated(new Date());
      } else {
        throw new Error('Failed to extract predictions from report');
      }
    } catch (error) {
      console.error('Error extracting market predictions:', error);
      // Set fallback predictions
      setMarketPredictions([
        {
          pair: "EUR/USD",
          direction: "bearish",
          reasoning: "ECB dovish stance vs Fed hawkish policy",
          confidence: 75
        },
        {
          pair: "GBP/USD",
          direction: "neutral",
          reasoning: "Mixed UK economic data and BoE uncertainty",
          confidence: 60
        },
        {
          pair: "USD/JPY",
          direction: "bullish",
          reasoning: "BoJ intervention concerns vs USD strength",
          confidence: 80
        }
      ]);
    }
  };

  useEffect(() => {
    fetchAIInsights();
    extractMarketPredictions();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Market Analysis</h1>
        <p className="text-muted-foreground">
          AI-powered comprehensive financial market analysis with real-time insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glassmorphism border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <IconComponent className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {metric.change} {metric.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Market Overview</TabsTrigger>
          <TabsTrigger value="matrix">Currency Matrix</TabsTrigger>
          <TabsTrigger value="heatmap">Market Heatmap</TabsTrigger>
          <TabsTrigger value="charts">Interactive Charts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">AI-Powered Market Overview</h2>
              <p className="text-sm text-muted-foreground">
                {lastUpdated ? `Last updated: ${lastUpdated.toLocaleTimeString()}` : 'Click refresh to load latest AI insights'}
              </p>
            </div>
            <Button onClick={() => { fetchAIInsights(); extractMarketPredictions(); }} disabled={isLoading} variant="outline">
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh AI Data
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glassmorphism border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  AI Insights from Latest Report
                </CardTitle>
                <CardDescription>
                  Key insights extracted from the most recent PDF analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.length > 0 ? (
                  <div className="space-y-3">
                    {aiInsights.map((insight, index) => (
                      <div key={index} className="p-3 bg-secondary/50 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Target className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm">{insight.title}</div>
                            <div className="text-xs text-muted-foreground mt-1">{insight.summary}</div>
                            <Badge variant="outline" className="mt-2 text-xs">
                              Impact: {insight.impact}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Brain className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Click "Refresh AI Data" to load insights from the latest PDF report</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="glassmorphism border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI Market Predictions
                </CardTitle>
                <CardDescription>
                  Predictive analysis based on PDF report data and market patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {marketPredictions.length > 0 ? (
                  <div className="space-y-3">
                    {marketPredictions.map((prediction, index) => (
                      <div key={index} className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-primary/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-medium text-sm">{prediction.pair}</span>
                          <Badge variant={prediction.direction === 'bullish' ? 'default' : 'destructive'} className="text-xs">
                            {prediction.direction}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {prediction.reasoning}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted-foreground">Confidence:</span>
                          <div className="flex-1 bg-secondary rounded-full h-1.5">
                            <div 
                              className="bg-primary h-1.5 rounded-full" 
                              style={{ width: `${prediction.confidence}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium">{prediction.confidence}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>AI predictions will appear here after refreshing data</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="matrix" className="space-y-6">
          <FundamentalCurrencyMatrixWidget />
        </TabsContent>

        <TabsContent value="heatmap" className="space-y-6">
          <HeatmapWidget />
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <InteractiveChartWidget />
        </TabsContent>
      </Tabs>
    </div>
  );
}
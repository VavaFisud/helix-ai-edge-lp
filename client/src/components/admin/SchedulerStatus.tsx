import React, { useState, useEffect } from 'react';
import { Clock, Play, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface SchedulerInfo {
  status: string;
  schedule: {
    aiPDFGeneration?: string;
    pdfUploadAndNotify?: string;
    dailyReports: string;
    notifications: string;
    cleanup: string;
  };
  features?: {
    geminiAI?: string;
    pdfGeneration?: string;
    autoUpload?: string;
  };
  timezone: string;
  message: string;
}

export function SchedulerStatus() {
  const [schedulerInfo, setSchedulerInfo] = useState<SchedulerInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [testing, setTesting] = useState({ 
    reports: false, 
    notifications: false, 
    aiPDF: false, 
    pdfUpload: false,
    keyInsights: false,
    currencyMatrix: false,
    marketTrends: false,
    volatilityAnalysis: false,
    marketSentiment: false,
    tradingOpportunities: false,
    riskAssessment: false
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchSchedulerStatus();
  }, []);

  const fetchSchedulerStatus = async () => {
    try {
      const response = await fetch('/api/scheduler/status');
      if (response.ok) {
        const data = await response.json();
        setSchedulerInfo(data);
      }
    } catch (error) {
      console.error('Failed to fetch scheduler status:', error);
    }
  };

  const testDailyReport = async () => {
    setTesting(prev => ({ ...prev, reports: true }));
    try {
      const response = await fetch('/api/scheduler/test-daily-report', {
        method: 'POST'
      });
      
      if (response.ok) {
        toast({
          title: "Test Successful",
          description: "Test daily report has been generated successfully.",
        });
      } else {
        throw new Error('Test failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate test report.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, reports: false }));
    }
  };

  const testDailyNotifications = async () => {
    setTesting(prev => ({ ...prev, notifications: true }));
    try {
      const response = await fetch('/api/scheduler/test-notifications', {
        method: 'POST'
      });
      
      if (response.ok) {
        toast({
          title: "Test Successful",
          description: "Test notifications have been sent successfully.",
        });
      } else {
        throw new Error('Test failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send test notifications.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, notifications: false }));
    }
  };

  const testAIPDFReport = async () => {
    setTesting(prev => ({ ...prev, aiPDF: true }));
    try {
      const response = await fetch('/api/scheduler/test-ai-pdf-report', {
        method: 'POST'
      });
      
      if (response.ok) {
        toast({
          title: "Test Successful",
          description: "AI PDF report has been generated successfully.",
        });
      } else {
        throw new Error('Test failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate AI PDF report test.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, aiPDF: false }));
    }
  };

  const testPDFUpload = async () => {
    setTesting(prev => ({ ...prev, pdfUpload: true }));
    try {
      const response = await fetch('/api/scheduler/test-pdf-upload', {
        method: 'POST'
      });
      
      if (response.ok) {
        toast({
          title: "Test Successful",
          description: "PDF upload test has been executed successfully.",
        });
      } else {
        throw new Error('Test failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to execute PDF upload test.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, pdfUpload: false }));
    }
  };

  const testKeyInsights = async () => {
    setTesting(prev => ({ ...prev, keyInsights: true }));
    try {
      const testContent = "EUR/USD continues to show strength against the dollar amid ECB policy expectations. The pair has broken above key resistance levels at 1.0850, with momentum indicators suggesting further upside potential. Market participants are closely watching upcoming inflation data from the Eurozone, which could influence the ECB's next policy decision. Technical analysis shows a bullish flag pattern formation, targeting the 1.0900 level in the near term.";
      
      const response = await fetch('/api/daily-reports/extract-insights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: testContent })
      });
      
      if (response.ok) {
        const insights = await response.json();
        toast({
          title: "Test Successful",
          description: `Key insights extracted successfully: ${insights.length} insights generated.`,
        });
      } else {
        throw new Error('Test failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to extract key insights from test content.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, keyInsights: false }));
    }
  };

  const testCurrencyMatrix = async () => {
    setTesting(prev => ({ ...prev, currencyMatrix: true }));
    try {
      const testContent = "The Federal Reserve maintains a hawkish stance with potential rate hikes ahead, supporting USD strength. ECB signals dovish policy continuation amid eurozone growth concerns, weighing on EUR. Bank of Japan keeps ultra-loose monetary policy, keeping JPY under pressure. Bank of England shows mixed signals on rates amid UK inflation data. Swiss National Bank maintains neutral stance. Bank of Canada hints at potential pause in rate cycle. RBA shows hawkish bias on inflation concerns. RBNZ maintains aggressive tightening cycle.";
      
      const response = await fetch('/api/daily-reports/extract-currency-matrix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: testContent })
      });
      
      if (response.ok) {
        const matrixData = await response.json();
        const currencyCount = Object.keys(matrixData).length;
        toast({
          title: "Test Successful",
          description: `Currency matrix data extracted successfully: ${currencyCount} currencies analyzed.`,
        });
      } else {
        throw new Error('Test failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to extract currency matrix data from test content.",
        variant: "destructive",
      });
    } finally {
       setTesting(prev => ({ ...prev, currencyMatrix: false }));
     }
   };

  const testMarketTrends = async () => {
    setTesting(prev => ({ ...prev, marketTrends: true }));
    try {
      const response = await fetch('/api/scheduler/test-market-trends', {
        method: 'POST'
      });
      
      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Test Successful",
          description: "Market trends analysis completed successfully.",
        });
      } else {
        throw new Error('Failed to test market trends');
      }
    } catch (error) {
      toast({
        title: "Test Failed",
        description: "Failed to test market trends analysis.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, marketTrends: false }));
    }
  };

  const testVolatilityAnalysis = async () => {
    setTesting(prev => ({ ...prev, volatilityAnalysis: true }));
    try {
      const response = await fetch('/api/scheduler/test-volatility-analysis', {
        method: 'POST'
      });
      
      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Test Successful",
          description: "Volatility analysis completed successfully.",
        });
      } else {
        throw new Error('Failed to test volatility analysis');
      }
    } catch (error) {
      toast({
        title: "Test Failed",
        description: "Failed to test volatility analysis.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, volatilityAnalysis: false }));
    }
  };

  const testMarketSentiment = async () => {
    setTesting(prev => ({ ...prev, marketSentiment: true }));
    try {
      const response = await fetch('/api/scheduler/test-market-sentiment', {
        method: 'POST'
      });
      
      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Test Successful",
          description: "Market sentiment analysis completed successfully.",
        });
      } else {
        throw new Error('Failed to test market sentiment');
      }
    } catch (error) {
      toast({
        title: "Test Failed",
        description: "Failed to test market sentiment analysis.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, marketSentiment: false }));
    }
  };

  const testTradingOpportunities = async () => {
    setTesting(prev => ({ ...prev, tradingOpportunities: true }));
    try {
      const response = await fetch('/api/scheduler/test-trading-opportunities', {
        method: 'POST'
      });
      
      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Test Successful",
          description: "Trading opportunities analysis completed successfully.",
        });
      } else {
        throw new Error('Failed to test trading opportunities');
      }
    } catch (error) {
      toast({
        title: "Test Failed",
        description: "Failed to test trading opportunities analysis.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, tradingOpportunities: false }));
    }
  };

  const testRiskAssessment = async () => {
    setTesting(prev => ({ ...prev, riskAssessment: true }));
    try {
      const response = await fetch('/api/scheduler/test-risk-assessment', {
        method: 'POST'
      });
      
      if (response.ok) {
        const result = await response.json();
        toast({
          title: "Test Successful",
          description: "Risk assessment analysis completed successfully.",
        });
      } else {
        throw new Error('Failed to test risk assessment');
      }
    } catch (error) {
      toast({
        title: "Test Failed",
        description: "Failed to test risk assessment analysis.",
        variant: "destructive",
      });
    } finally {
      setTesting(prev => ({ ...prev, riskAssessment: false }));
    }
  };

  if (!schedulerInfo) {
    return (
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Scheduler Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <RefreshCw className="w-6 h-6 animate-spin text-slate-400" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-slate-100 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Statut du Planificateur
          <Badge 
            variant={schedulerInfo.status === 'active' ? 'default' : 'destructive'}
            className="ml-auto"
          >
            {schedulerInfo.status === 'active' ? (
              <><CheckCircle className="w-3 h-3 mr-1" /> Active</>
            ) : (
              <><AlertCircle className="w-3 h-3 mr-1" /> Inactive</>
            )}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-slate-300 text-sm mb-4">{schedulerInfo.message}</p>
          
          <div className="space-y-3">
            <h4 className="text-slate-200 font-medium">Scheduled Times:</h4>
            
            <div className="grid gap-2 text-sm">
              {schedulerInfo.schedule.aiPDFGeneration && (
                <div className="flex justify-between items-center p-2 bg-emerald-900/30 border border-emerald-700/50 rounded">
                  <span className="text-emerald-300">🤖 AI PDF Generation:</span>
                  <span className="text-emerald-100 font-mono">{schedulerInfo.schedule.aiPDFGeneration}</span>
                </div>
              )}
              
              {schedulerInfo.schedule.pdfUploadAndNotify && (
                <div className="flex justify-between items-center p-2 bg-blue-900/30 border border-blue-700/50 rounded">
                  <span className="text-blue-300">📤 PDF Upload & Notification:</span>
                  <span className="text-blue-100 font-mono">{schedulerInfo.schedule.pdfUploadAndNotify}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                <span className="text-slate-300">Daily Reports:</span>
                <span className="text-slate-100 font-mono">{schedulerInfo.schedule.dailyReports}</span>
              </div>
              
              <div className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                <span className="text-slate-300">Notifications:</span>
                <span className="text-slate-100 font-mono">{schedulerInfo.schedule.notifications}</span>
              </div>
              
              <div className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                <span className="text-slate-300">Cleanup:</span>
                <span className="text-slate-100 font-mono">{schedulerInfo.schedule.cleanup}</span>
              </div>
            </div>
          </div>
        </div>

        {schedulerInfo.features && (
          <div className="border-t border-slate-700 pt-4">
            <h4 className="text-slate-200 font-medium mb-3">AI Features:</h4>
            
            <div className="grid gap-2 text-sm">
              {schedulerInfo.features.geminiAI && (
                <div className="flex justify-between items-center p-2 bg-purple-900/30 border border-purple-700/50 rounded">
                  <span className="text-purple-300">🧠 Google Gemini :</span>
                  <span className="text-purple-100 text-xs">{schedulerInfo.features.geminiAI}</span>
                </div>
              )}
              
              {schedulerInfo.features.pdfGeneration && (
                <div className="flex justify-between items-center p-2 bg-orange-900/30 border border-orange-700/50 rounded">
                  <span className="text-orange-300">📄 PDF Generation:</span>
                  <span className="text-orange-100 text-xs">{schedulerInfo.features.pdfGeneration}</span>
                </div>
              )}
              
              {schedulerInfo.features.autoUpload && (
                <div className="flex justify-between items-center p-2 bg-cyan-900/30 border border-cyan-700/50 rounded">
                  <span className="text-cyan-300">☁️ Auto Upload:</span>
                  <span className="text-cyan-100 text-xs">{schedulerInfo.features.autoUpload}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="border-t border-slate-700 pt-4">
          <h4 className="text-slate-200 font-medium mb-3">Manual Tests:</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <Button
              onClick={testAIPDFReport}
              disabled={testing.aiPDF}
              variant="outline"
              size="sm"
              className="border-emerald-600 text-emerald-300 hover:bg-emerald-900/30"
            >
              {testing.aiPDF ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              🤖 Test AI PDF
            </Button>
            
            <Button
              onClick={testPDFUpload}
              disabled={testing.pdfUpload}
              variant="outline"
              size="sm"
              className="border-blue-600 text-blue-300 hover:bg-blue-900/30"
            >
              {testing.pdfUpload ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              📤 Test Upload
            </Button>
            
            <Button
              onClick={testKeyInsights}
              disabled={testing.keyInsights}
              variant="outline"
              size="sm"
              className="border-purple-600 text-purple-300 hover:bg-purple-900/30"
            >
              {testing.keyInsights ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              🔍 Test Key Insights
            </Button>
            
            <Button
              onClick={testCurrencyMatrix}
              disabled={testing.currencyMatrix}
              variant="outline"
              size="sm"
              className="border-orange-600 text-orange-300 hover:bg-orange-900/30"
            >
              {testing.currencyMatrix ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              💱 Test Currency Matrix
            </Button>
            
            <Button
              onClick={testMarketTrends}
              disabled={testing.marketTrends}
              variant="outline"
              size="sm"
              className="border-green-600 text-green-300 hover:bg-green-900/30"
            >
              {testing.marketTrends ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              📈 Test Market Trends
            </Button>
            
            <Button
              onClick={testVolatilityAnalysis}
              disabled={testing.volatilityAnalysis}
              variant="outline"
              size="sm"
              className="border-red-600 text-red-300 hover:bg-red-900/30"
            >
              {testing.volatilityAnalysis ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              📊 Test Volatility
            </Button>
            
            <Button
              onClick={testMarketSentiment}
              disabled={testing.marketSentiment}
              variant="outline"
              size="sm"
              className="border-yellow-600 text-yellow-300 hover:bg-yellow-900/30"
            >
              {testing.marketSentiment ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              😊 Test Sentiment
            </Button>
            
            <Button
              onClick={testTradingOpportunities}
              disabled={testing.tradingOpportunities}
              variant="outline"
              size="sm"
              className="border-cyan-600 text-cyan-300 hover:bg-cyan-900/30"
            >
              {testing.tradingOpportunities ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              💰 Test Opportunities
            </Button>
            
            <Button
              onClick={testRiskAssessment}
              disabled={testing.riskAssessment}
              variant="outline"
              size="sm"
              className="border-pink-600 text-pink-300 hover:bg-pink-900/30"
            >
              {testing.riskAssessment ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              ⚠️ Test Risk Assessment
            </Button>
            
            <Button
              onClick={testDailyReport}
              disabled={testing.reports}
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              {testing.reports ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              Test Report
            </Button>
            
            <Button
              onClick={testDailyNotifications}
              disabled={testing.notifications}
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              {testing.notifications ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              Test Notifications
            </Button>
            
            <Button
              onClick={fetchSchedulerStatus}
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 sm:col-span-2 lg:col-span-1"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
        
        <div className="text-xs text-slate-400 bg-slate-700/30 p-3 rounded space-y-2">
          <div>
            <strong>📅 Schedule:</strong> The scheduler operates in UTC. EST time (7:00-7:30 AM) corresponds to 12:00-12:30 UTC in winter.
          </div>
          <div>
            <strong>🤖 AI:</strong> PDF reports are automatically generated via Google Gemini with Helix Terminal branding.
          </div>
          <div>
            <strong>⚠️ Configuration:</strong> Make sure the Google Gemini API key is configured in environment variables.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
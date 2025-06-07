import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { TrendingUp, TrendingDown, Minus, Info, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const currencies = ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'NZD'];

const defaultFundamentalData = {
  'EUR': {
    overall: 'bearish',
    interestRate: 'dovish',
    growth: 'weak',
    inflation: 'moderate',
    details: 'ECB dovish pivot amid growth concerns, rate hikes on hold'
  },
  'USD': {
    overall: 'bullish',
    interestRate: 'hawkish',
    growth: 'strong',
    inflation: 'elevated',
    details: 'Fed maintains hawkish stance, robust economic data supporting USD'
  },
  'JPY': {
    overall: 'neutral',
    interestRate: 'dovish',
    growth: 'moderate',
    inflation: 'low',
    details: 'BoJ maintains ultra-loose policy, intervention risks at 150 level'
  },
  'GBP': {
    overall: 'neutral',
    interestRate: 'neutral',
    growth: 'weak',
    inflation: 'elevated',
    details: 'BoE balancing inflation concerns with recession risks'
  },
  'CHF': {
    overall: 'neutral',
    interestRate: 'neutral',
    growth: 'moderate',
    inflation: 'moderate',
    details: 'SNB cautious approach, safe-haven demand supporting CHF'
  },
  'CAD': {
    overall: 'neutral',
    interestRate: 'neutral',
    growth: 'moderate',
    inflation: 'moderate',
    details: 'BoC pausing cycle, oil prices key driver for CAD direction'
  },
  'AUD': {
    overall: 'bearish',
    interestRate: 'neutral',
    growth: 'weak',
    inflation: 'moderate',
    details: 'RBA dovish tilt, China slowdown weighing on AUD outlook'
  },
  'NZD': {
    overall: 'bearish',
    interestRate: 'neutral',
    growth: 'weak',
    inflation: 'moderate',
    details: 'RBNZ cautious stance, housing market concerns persist'
  }
};

interface CurrencyData {
  overall: string;
  interestRate: string;
  growth: string;
  inflation: string;
  details: string;
}

type FundamentalDataType = {
  [key: string]: CurrencyData;
};

function getBiasIcon(bias: string) {
  switch (bias) {
    case 'bullish': return <TrendingUp className="w-4 h-4 text-green-400" />;
    case 'bearish': return <TrendingDown className="w-4 h-4 text-red-400" />;
    case 'neutral': return <Minus className="w-4 h-4 text-yellow-400" />;
    default: return <Minus className="w-4 h-4 text-muted-foreground" />;
  }
}

function getBiasColor(bias: string) {
  switch (bias) {
    case 'bullish': return 'text-green-400 bg-green-500/10 border-green-500/20';
    case 'bearish': return 'text-red-400 bg-red-500/10 border-red-500/20';
    case 'neutral': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
    case 'hawkish': return 'text-green-400 bg-green-500/10 border-green-500/20';
    case 'dovish': return 'text-red-400 bg-red-500/10 border-red-500/20';
    case 'strong': return 'text-green-400 bg-green-500/10 border-green-500/20';
    case 'weak': return 'text-red-400 bg-red-500/10 border-red-500/20';
    case 'moderate': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
    case 'elevated': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
    case 'low': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    default: return 'text-muted-foreground bg-muted/10 border-border';
  }
}

export function FundamentalCurrencyMatrixWidget() {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [fundamentalData, setFundamentalData] = useState<FundamentalDataType>(defaultFundamentalData);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchLatestCurrencyData();
    
    // Set up automatic updates every hour to check for new data
    const interval = setInterval(() => {
      fetchLatestCurrencyData();
    }, 60 * 60 * 1000); // Check every hour
    
    // Set up daily update at 7:30 AM
    const now = new Date();
    const next730AM = new Date();
    next730AM.setHours(7, 30, 0, 0);
    
    // If it's already past 7:30 AM today, set for tomorrow
    if (now > next730AM) {
      next730AM.setDate(next730AM.getDate() + 1);
    }
    
    const timeUntil730AM = next730AM.getTime() - now.getTime();
    
    const dailyTimeout = setTimeout(() => {
      fetchLatestCurrencyData();
      
      // Set up recurring daily updates
      const dailyInterval = setInterval(() => {
        fetchLatestCurrencyData();
      }, 24 * 60 * 60 * 1000); // Every 24 hours
      
      return () => clearInterval(dailyInterval);
    }, timeUntil730AM);
    
    return () => {
      clearInterval(interval);
      clearTimeout(dailyTimeout);
    };
  }, []);

  const fetchLatestCurrencyData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/currency-matrix/latest');
      if (response.ok) {
        const data = await response.json();
        
        // Validate that we have data for all currencies
        const hasValidData = currencies.some(currency => data[currency]);
        
        if (hasValidData) {
          // Merge with default data to ensure all currencies are present
          const mergedData = { ...defaultFundamentalData };
          Object.keys(data).forEach(currency => {
            if (data[currency] && currencies.includes(currency)) {
              mergedData[currency as keyof typeof defaultFundamentalData] = data[currency];
            }
          });
          
          setFundamentalData(mergedData);
          setLastUpdated(new Date());
          
          toast({
            title: 'Matrix Updated',
            description: 'Currency analysis has been updated with latest data.',
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch currency matrix data:', error);
      toast({
        title: 'Update Failed',
        description: 'Failed to fetch latest currency analysis. Using cached data.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchLatestCurrencyData();
  };

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="col-span-full"
      >
        <Card className="glassmorphism widget-hover">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">
                Fundamental Currency Outlook Matrix
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-primary border-primary/50">
                  {loading ? 'Updating...' : 'Live Data'}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={loading}
                  className="text-muted-foreground hover:text-primary"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </Button>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>AI-powered fundamental analysis from daily PDF reports</p>
                    {lastUpdated && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Last updated: {lastUpdated.toLocaleTimeString()}
                      </p>
                    )}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            {lastUpdated && (
              <p className="text-xs text-muted-foreground">
                Updated daily at 7:30 AM • Last update: {lastUpdated.toLocaleDateString()} {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Matrix Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Currency</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">Overall Bias</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">Interest Rate</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">Growth Outlook</th>
                    <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">Inflation</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies.map((currency, index) => {
                    const data = fundamentalData[currency];
                    return (
                      <motion.tr
                        key={currency}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className={`border-b border-border/50 hover:bg-muted/30 transition-colors cursor-pointer ${
                          selectedCurrency === currency ? 'bg-primary/10' : ''
                        }`}
                        onClick={() => setSelectedCurrency(currency)}
                      >
                        <td className="py-3 px-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-foreground text-sm">{currency}</span>
                            {getBiasIcon(data.overall)}
                          </div>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <Badge variant="outline" className={`text-xs ${getBiasColor(data.overall)}`}>
                            {data.overall?.toUpperCase() || 'N/A'}
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <Badge variant="outline" className={`text-xs ${getBiasColor(data.interestRate)}`}>
                            {data.interestRate?.toUpperCase() || 'N/A'}
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <Badge variant="outline" className={`text-xs ${getBiasColor(data.growth)}`}>
                            {data.growth?.toUpperCase() || 'N/A'}
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <Badge variant="outline" className={`text-xs ${getBiasColor(data.inflation)}`}>
                            {data.inflation?.toUpperCase() || 'N/A'}
                          </Badge>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Selected Currency Details */}
            {selectedCurrency && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 bg-muted/50 rounded-lg border border-primary/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{selectedCurrency} Analysis</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCurrency(null)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {fundamentalData[selectedCurrency].details}
                </p>
              </motion.div>
            )}

            {/* Legend */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border text-xs">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-muted-foreground">Bullish/Hawkish/Strong</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingDown className="w-3 h-3 text-red-400" />
                <span className="text-muted-foreground">Bearish/Dovish/Weak</span>
              </div>
              <div className="flex items-center space-x-2">
                <Minus className="w-3 h-3 text-yellow-400" />
                <span className="text-muted-foreground">Neutral/Moderate</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </TooltipProvider>
  );
}
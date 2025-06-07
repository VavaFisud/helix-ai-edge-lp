import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';

export default function MarketAnalysis() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Analyse de Marché</h1>
        <p className="text-muted-foreground">
          Analyse complète des marchés financiers avec des insights en temps réel
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glassmorphism border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tendance Générale</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+2.4%</div>
            <p className="text-xs text-muted-foreground">
              +0.3% par rapport à hier
            </p>
          </CardContent>
        </Card>

        <Card className="glassmorphism border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volume</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.4B</div>
            <p className="text-xs text-muted-foreground">
              +12% par rapport à la moyenne
            </p>
          </CardContent>
        </Card>

        <Card className="glassmorphism border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volatilité</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">18.2%</div>
            <p className="text-xs text-muted-foreground">
              Niveau modéré
            </p>
          </CardContent>
        </Card>

        <Card className="glassmorphism border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sentiment</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Haussier</div>
            <p className="text-xs text-muted-foreground">
              72% des indicateurs positifs
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glassmorphism border-primary/20">
          <CardHeader>
            <CardTitle>Principales Devises</CardTitle>
            <CardDescription>
              Performance des paires de devises majeures
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-green-500">EUR</span>
                </div>
                <span className="font-medium">EUR/USD</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-500">+0.85%</div>
                <div className="text-sm text-muted-foreground">1.0892</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-500">GBP</span>
                </div>
                <span className="font-medium">GBP/USD</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-500">+0.42%</div>
                <div className="text-sm text-muted-foreground">1.2654</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-red-500">JPY</span>
                </div>
                <span className="font-medium">USD/JPY</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-red-500">-0.23%</div>
                <div className="text-sm text-muted-foreground">149.82</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glassmorphism border-primary/20">
          <CardHeader>
            <CardTitle>Événements Clés</CardTitle>
            <CardDescription>
              Événements économiques importants aujourd'hui
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <div className="font-medium">14:30 - Données NFP (USA)</div>
                <div className="text-sm text-muted-foreground">Impact élevé sur USD</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <div className="font-medium">16:00 - Décision BCE</div>
                <div className="text-sm text-muted-foreground">Impact modéré sur EUR</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <div className="font-medium">18:00 - Discours Powell</div>
                <div className="text-sm text-muted-foreground">Impact faible sur USD</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
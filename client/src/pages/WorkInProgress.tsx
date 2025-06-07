import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, Clock, Zap } from 'lucide-react';

export default function WorkInProgress() {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <Construction className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Work in Progress</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This section is currently under development. Our teams are actively working 
            to bring you revolutionary features.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Card className="glassmorphism border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Advanced Intelligence</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Cutting-edge AI algorithms for ultra-precise market analysis and real-time predictions.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="glassmorphism border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Real Time</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Real-time market data with ultra-low latency for instant decision making.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="glassmorphism border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Construction className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Intuitive Interface</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Revolutionary user interface designed to maximize your trading efficiency.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
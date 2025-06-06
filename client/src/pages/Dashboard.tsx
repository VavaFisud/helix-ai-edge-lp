import React from 'react';
import { DailyFundamentalReportWidget } from '@/components/widgets/DailyFundamentalReportWidget';
import { FundamentalCurrencyMatrixWidget } from '@/components/widgets/FundamentalCurrencyMatrixWidget';
import { HeatmapWidget } from '@/components/widgets/HeatmapWidget';
import { GhostTradingWidget } from '@/components/widgets/GhostTradingWidget';
import { CentralBankWidget } from '@/components/widgets/CentralBankWidget';
import { MarketPsychologyWidget } from '@/components/widgets/MarketPsychologyWidget';
import { InteractiveChartWidget } from '@/components/widgets/InteractiveChartWidget';
import { WatchlistWidget } from '@/components/widgets/WatchlistWidget';
import { EconomicCalendarWidget } from '@/components/widgets/EconomicCalendarWidget';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* SECTION 1: ABSOLUTE TOP PRIORITY - Daily Fundamental Report */}
      <div className="grid grid-cols-1 gap-6">
        <DailyFundamentalReportWidget />
      </div>

      {/* SECTION 2: Fundamental Currency Outlook Matrix */}
      <div className="grid grid-cols-1 gap-6">
        <FundamentalCurrencyMatrixWidget />
      </div>
      
      {/* SECTION 3: Supporting Insights - Forex Heatmap */}
      <div className="grid grid-cols-1 gap-6">
        <HeatmapWidget />
      </div>
      
      {/* SECTION 4: Activity & Sentiment Monitors */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GhostTradingWidget />
        <CentralBankWidget />
        <MarketPsychologyWidget />
      </div>
      
      {/* SECTION 5: Standard Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <InteractiveChartWidget />
        <div className="space-y-6">
          <WatchlistWidget />
          <EconomicCalendarWidget />
        </div>
      </div>
    </div>
  );
}

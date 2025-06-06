import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsx("div", { className: "grid grid-cols-1 gap-6", children: _jsx(DailyFundamentalReportWidget, {}) }), _jsx("div", { className: "grid grid-cols-1 gap-6", children: _jsx(FundamentalCurrencyMatrixWidget, {}) }), _jsx("div", { className: "grid grid-cols-1 gap-6", children: _jsx(HeatmapWidget, {}) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx(GhostTradingWidget, {}), _jsx(CentralBankWidget, {}), _jsx(MarketPsychologyWidget, {})] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6", children: [_jsx(InteractiveChartWidget, {}), _jsxs("div", { className: "space-y-6", children: [_jsx(WatchlistWidget, {}), _jsx(EconomicCalendarWidget, {})] })] })] }));
}

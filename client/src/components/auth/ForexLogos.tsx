import React from 'react';

const ForexLogos: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
      <img
        src="/logos/tradingview-logo.svg"
        alt="TradingView"
        className="h-6 opacity-70 hover:opacity-100 transition-opacity"
      />
      <img
        src="/logos/metatrader-logo.svg"
        alt="MetaTrader"
        className="h-6 opacity-70 hover:opacity-100 transition-opacity"
      />
      <img
        src="/logos/fxcm-logo.svg"
        alt="FXCM"
        className="h-6 opacity-70 hover:opacity-100 transition-opacity"
      />
      <img
        src="/logos/oanda-logo.svg"
        alt="Oanda"
        className="h-6 opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  );
};

export default ForexLogos;
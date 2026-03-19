import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function CandlestickDashboard() {
  const [series] = useState([{
    data: [
      { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
      { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
      { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
      { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
      { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
      { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
      { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
      { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
      { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
      { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
      { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
      { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
      { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
      { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
      { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },
      { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
      { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
      { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
      { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
      { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
    ]
  }]);

  const [options] = useState({
    chart: {
      type: 'candlestick',
      background: 'transparent',
      toolbar: { show: false },
      animations: { enabled: true }
    },
    theme: { mode: 'dark' },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#34d399', // Emerald 400
          downward: '#ef4444' // Red 500
        },
        wick: { useFillColor: true }
      }
    },
    xaxis: {
      type: 'datetime',
      labels: { style: { colors: '#9ca3af' } },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { style: { colors: '#9ca3af' } }
    },
    grid: {
      borderColor: '#374151',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: 'dark',
      y: { formatter: (val) => `$${val.toFixed(2)}` }
    }
  });

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5 relative z-10 w-full flex justify-center overflow-hidden">
      <div className="absolute inset-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
      
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Live Market Predictions <span className="text-lime-400">.</span></h2>
            <p className="text-gray-400 font-medium">Visualizing real-time trading sentiment vs action price.</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-4 bg-white/5 p-2 rounded-lg border border-white/10">
            <button className="px-4 py-1.5 text-xs font-semibold rounded bg-lime-400 text-black">1H</button>
            <button className="px-4 py-1.5 text-xs font-semibold rounded text-gray-400 hover:text-white transition-colors">4H</button>
            <button className="px-4 py-1.5 text-xs font-semibold rounded text-gray-400 hover:text-white transition-colors">1D</button>
            <button className="px-4 py-1.5 text-xs font-semibold rounded text-gray-400 hover:text-white transition-colors">1W</button>
          </div>
        </div>

        <div className="w-full bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
          {/* Subtle glow behind the chart */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-lime-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-lime-500/10 transition-colors duration-1000"></div>
          
          <div className="relative z-10 w-full" style={{ minHeight: '400px' }}>
            {typeof window !== 'undefined' && Chart && (
              <Chart options={options} series={series} type="candlestick" height={400} width="100%" />
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between border-t border-white/10 pt-4 mt-4 relative z-10">
            <div className="flex items-center space-x-6 text-sm">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">AI Confidence</span>
                  <span className="text-white font-bold text-lg">94.8%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Vol Index</span>
                  <span className="text-white font-bold text-lg">High</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Predicted Trend</span>
                  <span className="text-lime-400 font-bold text-lg flex items-center gap-1">
                    BULLISH
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

const stats = [
  { label: 'Tracked Symbols', value: '10' },
  { label: 'Bullish Signals', value: '9' },
  { label: 'Bearish Signals', value: '1' },
  { label: 'Avg Confidence', value: '57%' },
  { label: 'Avg Expected Move', value: '0.06%' },
];

const topMovers = [
  { id: 1, symbol: 'HINDUNILVR.NS', price: '₹372.83', change: '3.48%', dir: 'UP', conf: '58%', isPos: true, vol: '2.4M', vwap: '₹370.10' },
  { id: 2, symbol: 'ICICIBANK.NS', price: '₹292.43', change: '3.26%', dir: 'UP', conf: '58%', isPos: true, vol: '14.1M', vwap: '₹289.50' },
  { id: 3, symbol: 'SBIN.NS', price: '₹241.69', change: '-3.13%', dir: 'DOWN', conf: '58%', isPos: false, vol: '18.3M', vwap: '₹245.20' },
  { id: 4, symbol: 'INFY.NS', price: '₹375.09', change: '3.04%', dir: 'UP', conf: '58%', isPos: true, vol: '6.2M', vwap: '₹371.80' },
  { id: 5, symbol: 'RELIANCE.NS', price: '₹376.65', change: '2.91%', dir: 'UP', conf: '57%', isPos: true, vol: '4.8M', vwap: '₹374.00' },
  { id: 6, symbol: 'ITC.NS', price: '₹155.78', change: '2.43%', dir: 'UP', conf: '56%', isPos: true, vol: '11.5M', vwap: '₹153.90' }
];

const baseSectors = [
  { name: 'Consumer', value: '2.95%', isPos: true, width: 85 },
  { name: 'Banking', value: '-0.66%', isPos: false, width: 15 },
  { name: 'IT Services', value: '0.94%', isPos: true, width: 30 },
  { name: 'Energy', value: '2.91%', isPos: true, width: 80 },
  { name: 'Telecom', value: '-0.27%', isPos: false, width: 10 },
  { name: 'Infrastructure', value: '0.07%', isPos: true, width: 5 }
];

export default function LiveMarketSnapshot() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [timeframe, setTimeframe] = useState('1D');
  
  // Scramble sector widths to simulate different timeframes
  const sectors = baseSectors.map(s => {
    let multiplier = timeframe === '1W' ? 1.5 : timeframe === '1M' ? 0.5 : 1;
    let newWidth = Math.min(100, Math.max(5, s.width * multiplier + (Math.random() * 20 - 10)));
    return { ...s, width: `${newWidth}%` };
  });

  return (
    <section className="py-12 px-6 bg-[#0a0a0a] w-full flex justify-center selection:bg-red-500/30">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Live Market Snapshot</h2>
          <span className="text-xs text-gray-500 mt-2 md:mt-0">Last update: {new Date().toLocaleDateString()}, {new Date().toLocaleTimeString()}</span>
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#120a0a] border border-[#2a1111] rounded-xl p-4 flex flex-col justify-between h-24 hover:border-red-500/30 transition-colors">
              <span className="text-gray-400 text-xs font-medium">{stat.label}</span>
              <span className="text-white text-2xl font-bold">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Main Dashboard Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Top Movers Table */}
          <div className="lg:col-span-2 bg-[#120a0a] border border-[#2a1111] rounded-xl p-6 relative">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-red-200 font-bold text-sm tracking-wide">Top Movers</h3>
                {/* Pulsing indicator */}
                <div className="w-6 h-6 rounded-full border border-red-500/30 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                </div>
             </div>

             <div className="w-full overflow-x-auto">
               <table className="w-full text-left text-sm whitespace-nowrap">
                 <thead>
                   <tr className="text-white border-b border-[#2a1111] pb-2 text-xs font-bold font-inter tracking-wider">
                     <th className="pb-3 pr-4">Symbol</th>
                     <th className="pb-3 px-4">Price</th>
                     <th className="pb-3 px-4">Change</th>
                     <th className="pb-3 px-4">Direction</th>
                     <th className="pb-3 px-4 text-right">Confidence</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-[#2a1111]/50">
                   {topMovers.map((mover) => (
                     <React.Fragment key={mover.id}>
                       <tr 
                         onClick={() => setExpandedRow(expandedRow === mover.id ? null : mover.id)}
                         className="group hover:bg-[#1a0f0f] transition-colors cursor-pointer"
                       >
                         <td className="py-3 pr-4 font-bold text-red-100 flex items-center gap-2">
                           <span className={`w-1.5 h-1.5 rounded-full ${mover.isPos ? 'bg-emerald-400' : 'bg-red-500'}`}></span>
                           {mover.symbol}
                         </td>
                         <td className="py-3 px-4 text-gray-300">{mover.price}</td>
                         <td className={`py-3 px-4 font-bold ${mover.isPos ? 'text-emerald-400' : 'text-red-500'}`}>{mover.change}</td>
                         <td className="py-3 px-4 text-gray-300">{mover.dir}</td>
                         <td className="py-3 px-4 text-right text-gray-300">{mover.conf}</td>
                       </tr>
                       {expandedRow === mover.id && (
                         <tr className="bg-[#160d0d]">
                           <td colSpan="5" className="p-4 border-l-2 border-red-500/50">
                             <div className="flex items-center gap-8 text-xs text-gray-400">
                               <div><span className="uppercase tracking-wider opacity-60 block">Day Volume</span><span className="text-white font-bold text-sm">{mover.vol}</span></div>
                               <div><span className="uppercase tracking-wider opacity-60 block">VWAP</span><span className="text-white font-bold text-sm">{mover.vwap}</span></div>
                               <div><span className="uppercase tracking-wider opacity-60 block">Action</span><button className="mt-1 bg-red-500/20 text-red-300 hover:bg-red-500/40 px-3 py-1 rounded transition-colors">Trade Setup</button></div>
                             </div>
                           </td>
                         </tr>
                       )}
                     </React.Fragment>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>

          {/* Sector Momentum */}
          <div className="lg:col-span-1 bg-[#120a0a] border border-[#2a1111] rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-red-200 font-bold text-sm tracking-wide">Sector Momentum</h3>
              <div className="flex bg-[#1a0f0f] rounded-lg p-1 border border-[#2a1111]">
                {['1D', '1W', '1M'].map(t => (
                  <button 
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`text-[10px] font-bold px-2 py-1 rounded ${timeframe === t ? 'bg-[#2a1111] text-white' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-5">
              {sectors.map((sector, i) => (
                <div key={i} className="flex flex-col group">
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{sector.name}</span>
                    <span className={`font-bold ${sector.isPos ? 'text-emerald-400' : 'text-red-500'}`}>{sector.value}</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#2a1111] rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${sector.isPos ? 'bg-emerald-400' : 'bg-red-500'}`}
                      style={{ width: sector.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

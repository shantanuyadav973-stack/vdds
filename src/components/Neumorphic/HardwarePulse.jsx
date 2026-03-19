import React, { useState } from 'react';

const initialStats = [
  { label: 'CPU Cluster Load', val: 78, colorFrom: 'from-indigo-500', colorTo: 'to-fuchsia-500', shadow: 'rgba(99, 102, 241, 0.5)' },
  { label: 'Memory Allocation', val: 92, colorFrom: 'from-rose-500', colorTo: 'to-orange-500', shadow: 'rgba(244, 63, 94, 0.5)' },
  { label: 'Network Bandwidth', val: 45, colorFrom: 'from-emerald-400', colorTo: 'to-cyan-400', shadow: 'rgba(52, 211, 153, 0.5)' }
];

export function HardwarePulse() {
  const [stats, setStats] = useState(initialStats);
  const [isScanning, setIsScanning] = useState(false);

  const runDiagnostic = () => {
    if (isScanning) return;
    setIsScanning(true);
    
    // Simulate scan delay
    setTimeout(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        val: Math.floor(Math.random() * 40) + 40 // Random between 40-80
      })));
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="nm-flat rounded-3xl p-6 flex flex-col h-full relative overflow-hidden">
      {isScanning && (
        <div className="absolute inset-0 bg-indigo-500/5 animate-pulse rounded-3xl pointer-events-none"></div>
      )}
      <div className="flex items-center justify-between mb-8 relative z-10">
         <h3 className="font-general font-semibold text-[var(--color-nm-text)]">Hardware Pulse</h3>
         <button 
           onClick={runDiagnostic}
           disabled={isScanning}
           className="flex items-center space-x-2 nm-inset px-3 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
         >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isScanning ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isScanning ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isScanning ? 'text-amber-500' : 'text-emerald-500'}`}>
              {isScanning ? 'Scanning...' : 'Run Diagnostics'}
            </span>
         </button>
      </div>

      <div className="space-y-8 flex-1 flex flex-col justify-center relative z-10">
         {stats.map((stat, i) => (
           <div key={i} className="flex flex-col">
             <div className="flex justify-between items-center mb-2">
               <span className="text-sm font-medium text-[var(--color-nm-text)] opacity-80">{stat.label}</span>
               <span className="text-sm font-bold text-[var(--color-nm-text)]">
                 {isScanning ? '--' : stat.val}%
               </span>
             </div>
             
             {/* Progress Track (Inset) */}
             <div className="w-full h-3 nm-inset rounded-full p-0.5 relative overflow-hidden bg-white/5">
                 {/* Progress Fill (Animated Gradient + Glow + Shimmer) */}
                 <div 
                   className={`h-full rounded-full bg-gradient-to-r ${stat.colorFrom} ${stat.colorTo} relative overflow-hidden transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1)`}
                   style={{ width: isScanning ? '5%' : `${stat.val}%`, filter: `drop-shadow(0 0 6px ${stat.shadow})` }}
                 >
                    {/* Wave Shimmer */}
                    <div className="absolute top-0 bottom-0 left-0 w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-waveShimmer"></div>
                 </div>
             </div>
           </div>
         ))}
      </div>
    </div>
  );
}

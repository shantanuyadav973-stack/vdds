import React, { useState, useEffect } from 'react';
import { cn } from '../../utils';
import { Activity, Users, DollarSign, Database, TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';

const statsData = [
  { id: 1, label: 'Active Sessions', value: 24892, icon: Users, color: 'text-indigo-500', trend: '+14%', isPos: true, points: "0,40 20,35 40,45 60,20 80,30 100,10" },
  { id: 2, label: 'Revenue Stream', value: 840.5, icon: DollarSign, color: 'text-emerald-500', trend: '+22%', isPos: true, prefix: '$', suffix: 'k', points: "0,50 20,40 40,20 60,30 80,10 100,5" },
  { id: 3, label: 'System Load', value: 42, icon: Activity, color: 'text-rose-500', trend: '-5%', isPos: false, suffix: '%', points: "0,10 20,15 40,10 60,30 80,45 100,50" },
  { id: 4, label: 'Queries / Sec', value: 12450, icon: Database, color: 'text-amber-500', trend: '+8%', isPos: true, points: "0,30 20,20 40,40 60,25 80,15 100,10" },
];

function AnimatedCounter({ target, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        setIsDone(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span className={`text-[30px] font-bold font-general tracking-tight inline-block ${isDone ? 'animate-counter-pulse' : ''}`}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export function StatsGrid() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {statsData.map((stat, i) => {
        const isExpanded = expandedId === stat.id;
        return (
          <div 
            key={stat.id} 
            onClick={() => setExpandedId(isExpanded ? null : stat.id)}
            className={`nm-flat-hover rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 cursor-pointer animate-slide-bounce ${isExpanded ? 'h-64' : 'h-48'}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex justify-between items-start">
              <div className={cn("w-12 h-12 nm-inset rounded-2xl flex items-center justify-center", stat.color)}>
                <stat.icon className="w-6 h-6 animate-float-icon" />
              </div>
              
              <div className="flex items-center space-x-1 font-bold text-sm bg-black/5 dark:bg-white/5 px-2 py-1 rounded-lg">
                 {stat.isPos ? <TrendingUp className="w-3 h-3 text-emerald-500" /> : <TrendingDown className="w-3 h-3 text-rose-500" />}
                 <span className={stat.isPos ? "text-emerald-500" : "text-rose-500"}>{stat.trend}</span>
              </div>
            </div>

            <div className={`flex flex-col transition-transform duration-300 ${isExpanded ? '-translate-y-2' : ''}`}>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-[var(--color-nm-text)] opacity-70 mb-1">{stat.label}</h3>
                <ChevronDown className={`w-4 h-4 text-[var(--color-nm-text)] opacity-30 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </div>
              <div className="text-[var(--color-nm-text)]">
                 <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
            </div>

            {/* Expandable Chart Area */}
            <div className={`absolute bottom-6 left-6 right-6 h-12 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
               <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                 <polyline 
                   points={stat.points}
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="2" 
                   className={cn("stroke-current", stat.color)}
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                   vectorEffect="non-scaling-stroke"
                 />
                 <circle cx="100" cy={stat.points.split(' ').pop().split(',')[1]} r="3" className={cn("fill-current", stat.color)} />
               </svg>
            </div>

            {/* Hover Slider Trick */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>
        )
      })}
    </div>
  );
}

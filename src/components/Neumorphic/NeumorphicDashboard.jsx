import React, { useEffect, useState } from 'react';
import { Home, LineChart, Terminal, Settings, LogOut, Bell, Search, Moon, Sun, ChevronRight, Activity as ActivityIcon, Newspaper, ShieldCheck, Target, TrendingDown, TrendingUp } from 'lucide-react';
import { StatsGrid } from './StatsGrid';
import { TerminalWidget } from './TerminalWidget';
import { HardwarePulse } from './HardwarePulse';
import { RippleButton } from './RippleButton';
import { NewsCenter } from './NewsCenter';
import LiveMarketSnapshot from '../NewsPredictor/LiveMarketSnapshot';
import { cn } from '../../utils';

const predictionTrades = [
  { symbol: 'PT-1042', direction: 'UP', confidence: 94, expectedMove: '+12.4%', horizon: '24h', sector: 'Cardiology', reason: 'Three consecutive high readings and missed medication logs.' },
  { symbol: 'PT-0876', direction: 'UP', confidence: 88, expectedMove: '+8.1%', horizon: '24h', sector: 'Cardiology', reason: 'High morning variability after dosage adjustment.' },
  { symbol: 'PT-2231', direction: 'DOWN', confidence: 91, expectedMove: '-5.2%', horizon: '24h', sector: 'Cardiology', reason: 'Improving after seven-day remote coaching plan.' },
  { symbol: 'PT-3120', direction: 'UP', confidence: 96, expectedMove: '+9.8%', horizon: '24h', sector: 'Cardiology', reason: 'Late-night spikes align with poor sleep reports.' },
  { symbol: 'PT-0914', direction: 'DOWN', confidence: 89, expectedMove: '-4.7%', horizon: '24h', sector: 'Cardiology', reason: 'Home readings normalizing after sodium intake intervention.' },
  { symbol: 'PT-4478', direction: 'DOWN', confidence: 92, expectedMove: '-3.1%', horizon: '24h', sector: 'Cardiology', reason: 'At-home and clinic readings are now aligned.' },
  { symbol: 'PT-5512', direction: 'UP', confidence: 85, expectedMove: '+6.5%', horizon: '12h', sector: 'Cardiology', reason: 'Stress correlation detected from recent HR variability.' },
  { symbol: 'PT-6390', direction: 'DOWN', confidence: 87, expectedMove: '-4.2%', horizon: '24h', sector: 'Cardiology', reason: 'Evening ACE inhibitor dosage update shows positive effect.' },
  { symbol: 'PT-8821', direction: 'UP', confidence: 91, expectedMove: '+10.1%', horizon: '6h', sector: 'Cardiology', reason: 'Telemetry gap combined with historical nighttime non-adherence.' },
  { symbol: 'PT-7104', direction: 'DOWN', confidence: 86, expectedMove: '-2.5%', horizon: '24h', sector: 'Cardiology', reason: 'Consistent morning readings indicate stabilization.' },
  { symbol: 'PT-1198', direction: 'UP', confidence: 84, expectedMove: '+7.3%', horizon: '12h', sector: 'Cardiology', reason: 'White coat hypertension suspected based on recent clinic visit.' },
  { symbol: 'PT-3356', direction: 'DOWN', confidence: 90, expectedMove: '-6.8%', horizon: '48h', sector: 'Cardiology', reason: 'Significant weight loss correlating with reduced resting HR.' },
  { symbol: 'PT-9943', direction: 'UP', confidence: 95, expectedMove: '+14.2%', horizon: '4h', sector: 'Cardiology', reason: 'Critical threshold crossed. Acute intervention recommended.' },
  { symbol: 'PT-2055', direction: 'DOWN', confidence: 83, expectedMove: '-1.9%', horizon: '24h', sector: 'Cardiology', reason: 'Slight improvement noted after dietary changes.' },
  { symbol: 'PT-4812', direction: 'UP', confidence: 88, expectedMove: '+5.6%', horizon: '24h', sector: 'Cardiology', reason: 'Irregular sleep patterns causing morning BP volatility.' }
];

const overviewHighlights = [
  {
    title: 'Model Accuracy',
    detail: '92.4% precision in predicting critical escalation events.',
    accent: 'from-emerald-500/25 via-green-500/10 to-transparent',
  },
  {
    title: 'Patient Adherence',
    detail: '88% of monitored patients actively syncing devices daily.',
    accent: 'from-blue-500/20 via-sky-500/10 to-transparent',
  },
  {
    title: 'Urgent Interventions',
    detail: '14 critical alerts generated in the last 24 hours requiring review.',
    accent: 'from-indigo-500/20 via-purple-500/10 to-transparent',
  },
];

export default function NeumorphicDashboard({ initialTab = 'Overview' }) {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className={cn(
      "min-h-screen font-satoshi transition-colors duration-500 flex selection:bg-indigo-500/30",
      isDark ? "dark-neumorphic bg-[#1e2030] text-[#e2e8f0]" : "bg-[#e0e5ec] text-[#4a5568]"
    )}>
      <Sidebar isDark={isDark} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header isDark={isDark} setIsDark={setIsDark} activeTab={activeTab} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 custom-scrollbar relative">
          {activeTab === 'Overview' && <OverviewPanel />}

          {activeTab === 'News Center' && (
            <NewsCenter isDark={isDark} />
          )}

          {activeTab === 'Patients' && (
            <PredictionsPanel />
          )}

          {activeTab === 'Cohort' && (
            <PortfolioPanel />
          )}

          {activeTab === 'Alerts' && (
            <AlertsPanel />
          )}

          {activeTab !== 'Overview' && activeTab !== 'News Center' && activeTab !== 'Patients' && activeTab !== 'Cohort' && activeTab !== 'Alerts' && (
            <div className="h-full flex flex-col items-center justify-center opacity-50 space-y-4 animate-fade-up">
              <Newspaper className="w-16 h-16" />
              <h2 className="text-2xl font-general font-bold">{activeTab} Module</h2>
              <p>This module is currently under development or awaiting specific widget integration.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function OverviewPanel() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-up pb-12">
      <section className="nm-flat rounded-[32px] p-6 md:p-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.15),transparent_38%)]"></div>
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] opacity-60 mb-3 text-[#ff6b2b] font-bold">Clinical Operations</p>
            <h1 className="font-general font-bold text-4xl md:text-5xl tracking-tight leading-tight text-[var(--color-nm-text)]">
              Blood Pressure Analyzer Command Center
            </h1>
            <p className="mt-4 text-base md:text-lg opacity-80 leading-relaxed font-medium">
              Remote hypertension monitoring, cohort prioritization, and intervention timing in a single administrative surface.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full xl:max-w-3xl">
            {overviewHighlights.map((item) => (
              <div key={item.title} className="nm-inset rounded-3xl p-5 relative overflow-hidden group hover:nm-flat-hover transition-all">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10">
                  <h3 className="font-general font-bold text-lg mb-2 text-[var(--color-nm-text)]">{item.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed text-[var(--color-nm-text)] font-medium">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsGrid />

      <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.9fr] gap-8">
        <section className="nm-flat rounded-[32px] overflow-hidden">
          <LiveMarketSnapshot />
        </section>

        <div className="space-y-8">
          <section className="nm-flat rounded-[32px] p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2">Signal Feed</p>
                <h3 className="font-general font-semibold text-2xl tracking-tight">Analyzer Activity</h3>
              </div>
              <RippleButton className="px-5 py-2 rounded-xl text-sm font-bold text-indigo-500 hover:text-indigo-400">
                Refresh
              </RippleButton>
            </div>
            <div className="space-y-4">
              <ActivityItem icon={Target} title="Escalation threshold crossed" time="Just Now" desc="Patient 1042 triggered urgent review after three consecutive high readings." color="text-rose-500" delay={0.05} />
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
              <ActivityItem icon={LineChart} title="Medication adjustment recorded" time="14 mins ago" desc="Clinician updated evening ACE inhibitor dosage for Patient 0876." color="text-indigo-500" delay={0.1} />
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
              <ActivityItem icon={ActivityIcon} title="Stress correlation detected" time="22 mins ago" desc="Risk engine linked elevated pulse pressure to reported stress events." color="text-amber-500" delay={0.15} />
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8">
            <section className="nm-flat rounded-[32px] p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] opacity-50 mb-2 text-[#ff6b2b] font-bold">Upcoming</p>
                  <h3 className="font-general font-bold text-2xl tracking-tight text-[var(--color-nm-text)]">Key Actions</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="nm-inset rounded-xl p-4 flex items-center justify-between">
                  <span className="font-bold text-sm text-[var(--color-nm-text)]">Nurse outreach window</span>
                  <span className="text-xs font-bold text-indigo-500 bg-indigo-500/10 px-2 py-1 rounded">Today, 4:00 PM</span>
                </div>
                <div className="nm-inset rounded-xl p-4 flex items-center justify-between">
                  <span className="font-bold text-sm text-[var(--color-nm-text)]">Provider case review</span>
                  <span className="text-xs font-bold text-rose-500 bg-rose-500/10 px-2 py-1 rounded">Tomorrow, 9:30 AM</span>
                </div>
                <div className="nm-inset rounded-xl p-4 flex items-center justify-between">
                  <span className="font-bold text-sm text-[var(--color-nm-text)]">Weekly cohort export</span>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">Friday, 6:00 PM</span>
                </div>
              </div>
            </section>
            
            <TerminalWidget />
            <HardwarePulse />
          </div>
        </div>
      </div>
    </div>
  );
}


function PortfolioPanel() {
  const [items, setItems] = useState(predictionTrades.slice(0, 30));

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const dragIndex = e.dataTransfer.getData('index');
    if (dragIndex === '') return;
    const newItems = [...items];
    const dragItem = newItems[dragIndex];
    newItems.splice(dragIndex, 1);
    newItems.splice(index, 0, dragItem);
    setItems(newItems);
  };

  return (
    <div className="max-w-4xl space-y-8 animate-fade-up pb-10">
      <div>
        <h1 className="font-general font-bold text-3xl tracking-tight text-[#ff7a59] dark:text-[#ff8a6f] mb-8">
          Care Queue Prioritization
        </h1>
        
        <section className="nm-flat rounded-[28px] p-6 lg:p-8">
          <h2 className="font-general font-bold text-lg mb-6 text-[var(--color-nm-text)]">
            Drag to reprioritize follow-up tasks
          </h2>

          <div className="space-y-3">
            {items.map((trade, index) => (
              <div
                key={trade.symbol}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                className="nm-inset rounded-xl p-4 flex items-center justify-between cursor-move hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-black/5 dark:hover:border-white/10"
                style={{ cursor: 'grab' }}
              >
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-[var(--color-nm-text)]">{trade.symbol}</span>
                  <span className="text-xs opacity-50 text-[var(--color-nm-text)]">{trade.reason}</span>
                </div>
                <div className="text-xs font-bold px-2 py-1 nm-inset rounded text-[var(--color-nm-text)]">{trade.expectedMove} Trend</div>
              </div>
            ))}
          </div>
          
          <p className="mt-6 text-xs text-[var(--color-nm-text)] opacity-50">
            Queue order controls the clinician handoff order on the next review cycle.
          </p>
        </section>
      </div>
    </div>
  );
}
const mockAlerts = [
  { id: 1, type: 'critical', symbol: 'PT-1042', message: 'Systolic average crossed 165 mmHg over the last 45 minutes.', time: '2 mins ago' },
  { id: 2, type: 'warning', symbol: 'PT-0876', message: 'Missed two scheduled readings and device battery dropped below 15%.', time: '11 mins ago' },
  { id: 3, type: 'info', symbol: 'PT-3120', message: 'Lifestyle journal indicates poor sleep quality linked with evening spikes.', time: '26 mins ago' },
  { id: 4, type: 'success', symbol: 'PT-2231', message: 'Seven-day average improved by 8 mmHg after care-plan revision.', time: '1 hour ago' },
  { id: 5, type: 'critical', symbol: 'PT-4450', message: 'No telemetry received from home hub for 9 hours while risk score remains elevated.', time: '3 hours ago' },
  { id: 6, type: 'info', symbol: 'System', message: 'Weekly patient cohort export ready for provider review.', time: '4 hours ago' }
];

function AlertsPanel() {
  return (
    <div className="max-w-4xl space-y-8 animate-fade-up pb-10">
      <div>
        <h1 className="font-general font-bold text-3xl tracking-tight text-[#ff7a59] dark:text-[#ff8a6f] mb-8">
          System Alerts
        </h1>
        
        <section className="nm-flat rounded-[28px] p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-general font-bold text-lg text-[var(--color-nm-text)]">
              Active Notifications
            </h2>
            <button className="text-sm text-[#ff6b2b] hover:underline font-medium transition-all">Mark all as read</button>
          </div>

          <div className="space-y-4">
            {mockAlerts.map((alert) => (
              <div
                key={alert.id}
                className="nm-inset rounded-xl p-5 flex items-start gap-4 transition-colors hover:bg-black/5 dark:hover:bg-white/5 border border-transparent hover:border-black/5 dark:hover:border-white/10"
              >
                <div className={`w-2 h-2 mt-2 rounded-full shrink-0 ${
                  alert.type === 'critical' ? 'bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.6)]' :
                  alert.type === 'warning' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' :
                  alert.type === 'success' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' :
                  'bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.6)]'
                }`} />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-sm text-[var(--color-nm-text)]">{alert.symbol}</span>
                    <span className="text-[11px] font-medium opacity-50 text-[var(--color-nm-text)]">{alert.time}</span>
                  </div>
                  <p className="text-sm text-[var(--color-nm-text)] opacity-80 leading-relaxed">
                    {alert.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ActivityItem({ icon: Icon, title, desc, time, color, delay }) {
  return (
     <div className="flex items-start space-x-4 opacity-0 animate-slide-bounce" style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}>
        <div className="w-10 h-10 nm-inset rounded-full flex items-center justify-center shrink-0 mt-1" style={{ color: 'var(--color-nm-text)' }}>
           <Icon className={cn("w-4 h-4", color)} />
        </div>
        <div className="flex-1 min-w-0">
           <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-semibold text-sm truncate text-[var(--color-nm-text)]">{title}</h4>
              <span className="text-xs opacity-50 shrink-0 ml-4 text-[var(--color-nm-text)]">{time}</span>
           </div>
           <p className="text-sm opacity-70 line-clamp-2 text-[var(--color-nm-text)]">{desc}</p>
        </div>
     </div>
  );
}

function Sidebar({ isDark, activeTab, setActiveTab }) {
  const menuGroups = [
    {
      title: 'MAIN MENU',
      items: [
        { label: 'Overview' },
        { label: 'Predictions' },
        { label: 'News Center' },
        { label: 'Portfolio' },
      ]
    },
    {
      title: 'CUSTOMERS',
      items: [
        { label: 'Watchlists' },
        { label: 'Alerts' },
      ]
    },
    {
      title: 'BUSINESS',
      items: [
        { label: 'Revenue Signals' },
        { label: 'Reports' },
      ]
    }
  ];

  return (
    <aside className="w-[288px] h-screen hidden lg:flex flex-col border-r border-black/5 dark:border-white/5 py-8 px-6 transition-all z-20 overflow-y-auto custom-scrollbar">
      <div className="nm-flat rounded-2xl flex items-center space-x-3 mb-10 p-4">
        <div className="w-8 h-8 nm-inset rounded-lg flex items-center justify-center text-indigo-500 font-bold text-lg bg-transparent">
          A
        </div>
        <div>
           <h1 className="font-general font-bold text-[15px] tracking-tight leading-none text-[var(--color-nm-text)]">Apex Analytics</h1>
           <span className="text-[11px] opacity-60 text-[var(--color-nm-text)]">Market Intelligence</span>
        </div>
      </div>

      <nav className="flex-1 space-y-8">
        {menuGroups.map((group, groupIdx) => (
          <div key={groupIdx}>
            <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-3 px-2 text-[var(--color-nm-text)]">{group.title}</h3>
            <div className="space-y-1">
              {group.items.map((item, i) => {
                const isActive = activeTab === item.label;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveTab(item.label)}
                    className={cn(
                      "w-full flex items-center px-4 py-2.5 rounded-xl font-medium text-[13px] transition-all duration-300 group relative overflow-hidden",
                      isActive 
                        ? "nm-inset text-indigo-500" 
                        : "text-[var(--color-nm-text)] bg-transparent opacity-60 hover:opacity-100 hover:translate-x-1"
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-8 pt-6 flex flex-col gap-4">
        <div className="nm-flat rounded-2xl p-4 flex items-center space-x-4">
           <div className="w-10 h-10 nm-inset rounded-full flex items-center justify-center font-bold text-[10px] bg-[var(--color-nm-bg)] text-[var(--color-nm-text)]">
             SS
           </div>
           <div className="flex flex-col text-left">
             <h4 className="font-bold text-sm text-[var(--color-nm-text)]">Shantanu</h4>
             <span className="text-[11px] opacity-60 text-[var(--color-nm-text)]">Lead Analyst</span>
           </div>
        </div>
        <button className="w-full font-bold text-[11px] uppercase tracking-wider text-[#ff6b2b] py-3 rounded-xl hover:bg-[#ff6b2b]/10 transition-colors border border-[#ff6b2b]/20">
          PRO PLAN
        </button>
      </div>
    </aside>
  );
}

function Header({ isDark, setIsDark, activeTab }) {
  return (
    <header className="sticky top-4 h-[72px] mx-8 mt-4 nm-flat rounded-3xl flex items-center justify-between px-6 z-50 shrink-0">
      <div className="flex items-center space-x-2 text-[13px] font-medium opacity-80">
        <span className="text-[var(--color-nm-text)] opacity-60">Dashboard</span>
        <ChevronRight className="w-3 h-3 text-[var(--color-nm-text)] opacity-40" />
        <span className="text-indigo-500">{activeTab}</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex nm-inset rounded-full px-4 py-2 w-[288px] items-center space-x-3">
          <Search className="w-4 h-4 opacity-50" />
          <input 
            type="text" 
            placeholder="Search commands..." 
            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-[var(--color-nm-text)]/50"
          />
        </div>

        <button 
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 nm-button rounded-full flex items-center justify-center text-[var(--color-nm-text)]"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button className="w-10 h-10 nm-button rounded-full flex items-center justify-center text-[var(--color-nm-text)] relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full animate-glow-pulse"></span>
        </button>

        <div className="w-10 h-10 rounded-full nm-inset p-1 cursor-pointer">
           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>
    </header>
  );
}

function PredictionsPanel() {
  const totalTrades = predictionTrades.length;
  const upTrades = predictionTrades.filter((trade) => trade.direction === 'UP').length;
  const downTrades = totalTrades - upTrades;
  const averageConfidence = Math.round(
    predictionTrades.reduce((sum, trade) => sum + trade.confidence, 0) / totalTrades
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-up pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard icon={LineChart} label="Active Trade Signals" value={String(totalTrades)} accent="text-indigo-500" detail="Expanded intraday book across large-cap sectors." />
        <MetricCard icon={TrendingUp} label="Bullish Setups" value={String(upTrades)} accent="text-emerald-500" detail="Long bias remains dominant across banks, autos, and IT." />
        <MetricCard icon={TrendingDown} label="Bearish Setups" value={String(downTrades)} accent="text-rose-500" detail="Selective shorts remain concentrated in laggards." />
        <MetricCard icon={ShieldCheck} label="Average Confidence" value={`${averageConfidence}%`} accent="text-amber-500" detail="Signals filtered for directional alignment and flow quality." />
      </div>

      <section className="nm-flat rounded-[28px] p-6 md:p-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] opacity-50 mb-2">Signal Engine</p>
            <h2 className="font-general font-semibold text-3xl tracking-tight">All Predictions</h2>
            <p className="opacity-70 mt-2 max-w-2xl">
              Expanded dashboard coverage with 50 trade ideas, each scored for direction, confidence, and expected move.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="nm-inset rounded-2xl px-4 py-3">
              <span className="opacity-60 mr-2">Top conviction</span>
              <span className="font-semibold">ADANIENT.NS</span>
            </div>
            <div className="nm-inset rounded-2xl px-4 py-3">
              <span className="opacity-60 mr-2">Best sector breadth</span>
              <span className="font-semibold">Banking</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-sm">
            <thead>
              <tr className="border-b border-black/8 dark:border-white/8 text-left">
                <th className="py-3 pr-4 font-semibold opacity-60">Symbol</th>
                <th className="py-3 pr-4 font-semibold opacity-60">Direction</th>
                <th className="py-3 pr-4 font-semibold opacity-60">Confidence</th>
                <th className="py-3 pr-4 font-semibold opacity-60">Expected Move</th>
                <th className="py-3 pr-4 font-semibold opacity-60">Horizon</th>
                <th className="py-3 pr-4 font-semibold opacity-60">Sector</th>
                <th className="py-3 font-semibold opacity-60">Reason</th>
              </tr>
            </thead>
            <tbody>
              {predictionTrades.map((trade) => {
                const isUp = trade.direction === 'UP';

                return (
                  <tr key={trade.symbol} className="border-b border-black/6 dark:border-white/6 last:border-b-0">
                    <td className="py-4 pr-4 font-semibold">{trade.symbol}</td>
                    <td className={`py-4 pr-4 font-semibold ${isUp ? 'text-emerald-500' : 'text-rose-500'}`}>{trade.direction}</td>
                    <td className="py-4 pr-4">{trade.confidence}%</td>
                    <td className={`py-4 pr-4 font-medium ${isUp ? 'text-emerald-500' : 'text-rose-500'}`}>{trade.expectedMove}</td>
                    <td className="py-4 pr-4">{trade.horizon}</td>
                    <td className="py-4 pr-4">{trade.sector}</td>
                    <td className="py-4 opacity-75">{trade.reason}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, detail, accent }) {
  return (
    <div className="nm-flat-hover rounded-3xl p-6 min-h-[180px] flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className={cn("w-12 h-12 nm-inset rounded-2xl flex items-center justify-center", accent)}>
          <Icon className="w-5 h-5" />
        </div>
        <Target className="w-4 h-4 opacity-35" />
      </div>
      <div>
        <p className="text-sm opacity-60 mb-2">{label}</p>
        <p className="font-general font-semibold text-3xl tracking-tight mb-2">{value}</p>
        <p className="text-sm opacity-70 leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}







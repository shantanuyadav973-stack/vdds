import React from 'react';
import { cn } from '../../utils';
import { ChevronRight, ExternalLink } from 'lucide-react';

const newsData = [
  {
    source: "MarketWire India",
    date: "8/3/2026, 11:30:00 pm",
    title: "Nifty IT gains as global demand outlook stays stable",
    desc: "Robust order books and steady deal pipelines in the top IT firms provide confidence to investors despite macroeconomic headwinds in the US.",
    sentiment: "0.00",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Energy India",
    date: "8/3/2026, 11:15:00 pm",
    title: "Reliance supports index after strength in energy segment",
    desc: "A surge in refining margins and upcoming retail expansion plans drive Reliance Industries higher, providing crucial support to the Nifty 50.",
    sentiment: "0.00",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Finance Daily India",
    date: "8/3/2026, 11:00:00 pm",
    title: "RBI policy commentary keeps banks in focus",
    desc: "The central bank's hawkish tone on inflation management suggests interest rates will remain elevated, impacting net interest margins for major lenders.",
    sentiment: "-0.45",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    color: "text-rose-500",
    bg: "bg-rose-500"
  },
  {
    source: "Telco Watch",
    date: "8/3/2026, 10:45:00 pm",
    title: "Telecom stocks see buying interest on subscriber growth",
    desc: "Bharti Airtel and Jio report better-than-expected ARPU (Average Revenue Per User) metrics following the recent tariff hikes.",
    sentiment: "0.33",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Street Journal India",
    date: "8/3/2026, 10:30:00 pm",
    title: "FMCG names steady as rural demand expectations improve",
    desc: "Predictions of a normal monsoon season revive hopes for a recovery in rural consumption, boosting volume growth expectations for FMCG giants.",
    sentiment: "0.00",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Auto News Network",
    date: "8/3/2026, 10:00:00 pm",
    title: "Auto sales show mixed trends; EV segment continues aggressive growth",
    desc: "While entry-level passenger vehicles struggle, premium SUVs and electric two-wheelers register strong double-digit growth year-over-year.",
    sentiment: "0.15",
    image: "https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Global Markets Review",
    date: "8/3/2026, 09:30:00 pm",
    title: "FIIs remain net sellers amidst geopolitical uncertainties",
    desc: "Foreign institutional investors continued to pull out funds for the third consecutive session, putting pressure on large-cap equities.",
    sentiment: "-0.60",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    color: "text-rose-500",
    bg: "bg-rose-500"
  },
  {
    source: "Pharma Updates",
    date: "8/3/2026, 09:00:00 pm",
    title: "Sun Pharma receives US FDA approval for generic drug",
    desc: "The major pharmaceutical company secured final approval from the US Food and Drug Administration to market a generic version of a critical cardiovascular drug.",
    sentiment: "0.85",
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Real Estate Times",
    date: "8/3/2026, 08:15:00 pm",
    title: "Housing demand in tier-1 cities hits multi-year high",
    desc: "Despite higher borrowing costs, premium real estate sales in Mumbai, NCR, and Bengaluru broke volume records in the latest quarter.",
    sentiment: "0.70",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Metal & Mining Daily",
    date: "8/3/2026, 07:45:00 pm",
    title: "Steel stocks slump following weak Chinese data",
    desc: "Concerns over lagging infrastructure demand in China sent domestic metal stocks tumbling by more than 2% in afternoon trade.",
    sentiment: "-0.50",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800",
    color: "text-rose-500",
    bg: "bg-rose-500"
  },
  {
    source: "Fintech Insider",
    date: "8/3/2026, 07:00:00 pm",
    title: "New fintech regulations announced to boost digital payments security",
    desc: "The government issued new compliance frameworks for digital payment aggregators to curb rising instances of cyber fraud.",
    sentiment: "0.20",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Aviation Week India",
    date: "8/3/2026, 06:30:00 pm",
    title: "Airlines report highest ever domestic passenger traffic",
    desc: "The civil aviation sector experienced record-breaking passenger volumes during the holiday season, though elevated jet fuel prices remain a margin concern.",
    sentiment: "0.40",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Retail India",
    date: "8/3/2026, 05:45:00 pm",
    title: "E-commerce festive sales projected to cross $10 Billion",
    desc: "Major e-tailers are gearing up for the upcoming festive season, expecting a 15% year-over-year surge in gross merchandise value.",
    sentiment: "0.90",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  },
  {
    source: "Energy India",
    date: "8/3/2026, 05:00:00 pm",
    title: "Renewable energy capacity addition falls short of Q2 target",
    desc: "Supply chain disruptions and delayed approvals led to a slight miss in the quarterly target for solar and wind capacity additions.",
    sentiment: "-0.25",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    color: "text-rose-500",
    bg: "bg-rose-500"
  },
  {
    source: "MarketWire India",
    date: "8/3/2026, 04:15:00 pm",
    title: "Midcap and Smallcap indices hit fresh all-time highs",
    desc: "Retail investor enthusiasm continues unabated, driving the broader market indices to record levels despite stretched valuations.",
    sentiment: "0.75",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    color: "text-emerald-500",
    bg: "bg-emerald-500"
  }
];

export function NewsCenter({ isDark }) {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-up">
      <div className="flex items-center space-x-2 text-sm font-medium opacity-60 mb-6 px-2">
        <span>Dashboard</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[var(--color-nm-text)] opacity-100 font-bold">News</span>
      </div>

      <div className="flex items-center justify-between px-2 mb-8">
        <h2 className="text-2xl font-general font-semibold tracking-tight">News Sentiment Timeline</h2>
      </div>

      <div className="space-y-6">
        {newsData.map((news, idx) => (
          <div 
            key={idx} 
            className="nm-flat rounded-3xl p-6 transition-all duration-300 hover:nm-inset flex flex-col md:flex-row gap-6"
          >
            {/* Image Container */}
            <div className="w-full md:w-48 h-32 md:h-auto shrink-0 rounded-2xl overflow-hidden nm-inset relative pointer-events-none">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover filter brightness-75 transition-transform duration-500 hover:scale-105 hover:brightness-100 pointer-events-auto"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl" />
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs tracking-widest uppercase opacity-50 font-semibold">{news.source}</span>
                  <span className="text-xs opacity-50 font-mono">{news.date}</span>
                </div>
                
                <h3 className="text-lg font-bold font-general tracking-tight mb-2 opacity-90">{news.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-4">{news.desc}</p>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-nm-sh)]/20">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium opacity-60">Sentiment:</span>
                  <span className={cn("text-sm font-mono font-bold", news.color)}>{news.sentiment}</span>
                  <div className="flex items-center h-full ml-4">
                     <span className="relative flex h-2 w-2 mr-2">
                        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", news.bg)}></span>
                        <span className={cn("relative inline-flex rounded-full h-2 w-2", news.bg)}></span>
                     </span>
                  </div>
                </div>

                <button className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold opacity-70 hover:opacity-100 nm-button transition-all">
                  <span>Read More</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

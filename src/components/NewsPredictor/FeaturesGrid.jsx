import React from 'react';
import { Clock, ShieldAlert, BarChart3, PieChart, Hash, FolderTree, Cpu, BellRing } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: 'REAL TIME',
    description: 'Avoid delayed alerts. Our ultra-fast tech powers instant decision execution.'
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-indigo-400" />,
    title: 'SPAM FILTER',
    description: 'Carefully curated sources ensure you focus on market-moving events.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    title: 'FLOAT FILTER',
    description: 'Track penny stocks effectively. Find low float microcaps dynamically.'
  },
  {
    icon: <PieChart className="w-6 h-6 text-emerald-400" />,
    title: 'MARKET CAP FILTER',
    description: 'Filter within your comfort zone. Find news on specific cap limits.'
  },
  {
    icon: <Hash className="w-6 h-6 text-purple-400" />,
    title: 'KEYWORDS FILTER',
    description: 'Tailor the pulse with fine-tune keyword alerts for isolated analyses.'
  },
  {
    icon: <FolderTree className="w-6 h-6 text-pink-400" />,
    title: 'CATEGORIES',
    description: 'Easy-to-use filter logic per sector breaking caps via internal tags.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    title: 'AI ANALYSIS',
    description: 'Get immediate insights right in the feed, parsed natively by LLMs.'
  },
  {
    icon: <BellRing className="w-6 h-6 text-red-400" />,
    title: 'NOTIFICATIONS',
    description: 'Stay updated through web, audio, and discord notifications seamlessly.'
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-[#020202] w-full flex justify-center relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-indigo-900/50 to-transparent"></div>

      <div className="max-w-7xl w-full flex flex-col items-center z-10">
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Features of the Real-Time Stock Market News Feed
          </h2>
          <p className="text-gray-400">
            Immerse yourself in our cutting-edge real-time stock market news feed and stay ahead of the curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-l border-[#1a1a2e]">
          {features.map((feat, idx) => (
             <div 
               key={idx} 
               className="relative p-8 border-b border-r border-[#1a1a2e] group bg-[#08080c] hover:bg-[#0c0c16] transition-all duration-300"
             >
               {/* Hover Glow Effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-blue-500/0 group-hover:from-blue-900/20 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>
               
               <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                 <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                 </div>
                 <h3 className="text-gray-300 font-bold tracking-wider text-sm">{feat.title}</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
                 <button className="text-xs text-blue-500 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mt-2">
                   Learn More <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                 </button>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

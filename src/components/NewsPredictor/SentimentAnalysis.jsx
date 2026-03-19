import React from 'react';
import { Target, TrendingUp, BarChart2, Share2 } from 'lucide-react';

export default function SentimentAnalysis() {
  return (
    <section className="py-24 px-6 bg-[#050808] w-full flex justify-center relative font-satoshi overflow-hidden">
      {/* Deep forest green / emerald ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-emerald-900/20 rounded-t-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl w-full flex flex-col items-center z-10">
        
        {/* Header Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
               <div className="flex items-center gap-2 mb-4">
                   <div className="w-1 h-4 bg-emerald-500"></div>
                   <span className="text-emerald-500 font-bold tracking-widest text-sm uppercase">Products</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                 News Sentiment <br className="hidden md:block"/> Analysis
               </h2>
               <p className="text-xl text-gray-300 mb-6 font-medium">
                 Empowering Traders with Cutting-Edge Market Insights
               </p>
               <p className="text-gray-500 leading-relaxed mb-8">
                 InciteAI News Sentiment Analysis delivers a comprehensive view of market moods by analyzing news sentiment across major, trusted financial news sources. It offers actionable insights and enhanced broker services.
               </p>
               <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-colors">
                 Discover more
               </button>
            </div>
            
            {/* Visual Gauge Concept */}
            <div className="relative w-full aspect-square md:aspect-video flex flex-col items-center justify-center">
                <div className="relative w-64 h-32 overflow-hidden mb-6">
                    {/* Semicircle Gauge track */}
                    <div className="absolute top-0 left-0 w-64 h-64 border-[12px] border-[#111827] rounded-full"></div>
                    {/* Gauge indicator - Green Side */}
                    <div className="absolute top-0 left-0 w-64 h-64 border-[12px] border-emerald-500 rounded-full border-b-transparent border-l-transparent -rotate-45" style={{clipPath: 'polygon(50% 50%, 100% 0, 100% 50%)'}}></div>
                    
                    {/* Needle */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-white origin-bottom rotate-[65deg] shadow-[0_0_15px_white]"></div>
                    <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black"></div>
                </div>
                
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-widest mb-1">Score</span>
                    <span className="text-5xl font-bold text-white mb-2">76</span>
                    <span className="text-emerald-400 font-medium">↑ Very positive</span>
                </div>

                <div className="absolute bottom-0 w-full flex justify-between text-xs text-gray-600 px-8">
                   <span>Very negative</span>
                   <span>Neutral</span>
                   <span>Very positive</span>
                </div>
            </div>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="w-full bg-white rounded-xl shadow-2xl p-2 md:p-6 mb-24 relative transform perspective-1000 rotateX-5 hover:rotate-x-0 transition-transform duration-700">
             {/* Fake Browser Headers */}
             <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-4">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                 <div className="ml-4 bg-gray-100 px-4 py-1.5 rounded-md text-xs text-gray-500 flex-1 max-w-sm flex items-center gap-2">
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                     Search instrument names or tickers...
                 </div>
             </div>
             
             {/* Mockup Content */}
             <div className="w-full h-[400px] rounded-lg overflow-hidden bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-90 border border-gray-100 relative">
                 <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                 {/* Pseudo UI Elements overlaying the image */}
                 <div className="absolute inset-0 p-8 grid grid-cols-12 gap-6">
                    <div className="col-span-4 bg-white rounded-xl shadow-md p-4">
                        <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>
                        {[1,2,3,4,5,6].map(i => (
                            <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50">
                                <span className="font-bold text-gray-800 text-sm">TSLA <span className="text-gray-400 font-normal">Tesla Inc.</span></span>
                                <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded">↗ Very positive</span>
                            </div>
                        ))}
                    </div>
                    <div className="col-span-8 flex flex-col gap-6">
                        <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between border-t-4 border-emerald-400">
                             <h3 className="text-xl font-bold text-gray-800">HPQ - Hewlett Packard</h3>
                             <div className="flex gap-4 text-center">
                                 <div><span className="block text-2xl font-black text-gray-800">15</span><span className="text-xs text-gray-400 uppercase">Negative</span></div>
                                 <div className="w-px bg-gray-200"></div>
                                 <div><span className="block text-2xl font-black text-emerald-500">24</span><span className="text-xs text-gray-400 uppercase">Positive</span></div>
                             </div>
                        </div>
                        <div className="flex-1 bg-white rounded-xl shadow-md p-6 relative">
                             <div className="absolute bottom-4 left-6 right-6 h-32 flex items-end gap-2">
                                 {Array.from({length: 20}).map((_, i) => (
                                     <div key={i} className="flex-1 bg-emerald-400/20 rounded-t" style={{height: `${Math.random() * 100}%`}}></div>
                                 ))}
                             </div>
                             {/* Line chart svg overlay mock */}
                             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <path d="M0 150 Q 50 100, 100 120 T 200 80 T 300 100 T 400 40 T 500 60 T 600 20 L 600 200 L 0 200 Z" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" strokeWidth="2" transform="translate(24, 60) scale(0.9, 0.5)"/>
                             </svg>
                        </div>
                    </div>
                 </div>
             </div>
             
             {/* Annotation Labels */}
             <div className="absolute top-1/4 -right-12 md:-right-32 text-emerald-500 text-xs font-bold hidden md:flex items-center gap-2 max-w-[200px] text-right">
                The three components that compose the sentiment score <div className="w-16 h-px bg-emerald-500"></div>
             </div>
             <div className="absolute bottom-1/4 -right-12 md:-right-32 text-emerald-500 text-xs font-bold hidden md:flex items-center gap-2 max-w-[200px] text-right">
                Historical Sentiment Volume <div className="w-16 h-px bg-emerald-500"></div>
             </div>
        </div>

        {/* Features Sub-grid */}
        <div className="w-full">
            <h3 className="text-2xl font-bold text-white mb-10 max-w-sm">Key Features & <br/>Benefits for Traders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                   <Target className="w-6 h-6 text-emerald-400 mb-4" />
                   <h4 className="text-white font-bold mb-2">In-Depth Companies and Stock News Sentiment</h4>
                   <p className="text-sm text-gray-400 leading-relaxed">Gain a comprehensive and unbiased view of the market mood on your favourite stocks with aggregated analysis from the major reputable sources.</p>
                </div>
                <div>
                   <TrendingUp className="w-6 h-6 text-emerald-400 mb-4" />
                   <h4 className="text-white font-bold mb-2">Sentiment Highlights</h4>
                   <p className="text-sm text-gray-400 leading-relaxed">Identify potential high-impact market movements quickly with prominently displayed extreme sentiments.</p>
                </div>
                <div>
                   <BarChart2 className="w-6 h-6 text-emerald-400 mb-4" />
                   <h4 className="text-white font-bold mb-2">Customizable Layouts</h4>
                   <p className="text-sm text-gray-400 leading-relaxed">Choose your preferred view from Full, Grid, or Tab options for a personalized visual experience.</p>
                </div>
                <div>
                   <Share2 className="w-6 h-6 text-emerald-400 mb-4" />
                   <h4 className="text-white font-bold mb-2">Share Insights on Socials</h4>
                   <p className="text-sm text-gray-400 leading-relaxed">Stay connected and share your market insights easily on platforms like X, Facebook, and LinkedIn.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}

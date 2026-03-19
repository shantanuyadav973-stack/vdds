import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden w-full">
      {/* Dynamic Background Cursor Glow */}
      <div 
        className="absolute w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x / 5 - 400}px, ${mousePosition.y / 5 - 400}px)`,
          left: '50%',
          top: '50%',
        }}
      ></div>

      <div className="z-10 flex flex-col items-center w-full max-w-6xl relative">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-3 bg-red-950/40 border-t border-b border-red-500/30 text-red-500 rounded-full px-5 py-2 mb-10 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,1)]"></span>
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">AI Market Signal Engine</span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,1)]"></span>
        </div>

        {/* Main Headings */}
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter max-w-5xl leading-[1.1] mb-8 font-satoshi relative">
          <span className="absolute -inset-2 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-2xl"></span>
          Indian Market News Analyzer <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">with Real-Time Impact</span> and <br className="hidden md:block"/>
          <span className="relative">
             Prediction Intelligence
             <svg className="absolute w-full h-4 -bottom-2 md:-bottom-4 left-0 text-red-500/50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 15 100 5" fill="transparent" stroke="currentColor" strokeWidth="2" />
             </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed font-medium">
          India-focused signal engine powered by <span className="text-red-400">GPT-4o-mini</span>, NSE/BSE-oriented financial feeds, and a <span className="text-white">15-minute autonomous prediction cycle</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-24 cursor-pointer">
            <button className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] flex items-center gap-2">
                Initialize Engine
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </button>
            <button className="px-8 py-4 bg-[#120a0a] border border-red-500/30 hover:bg-red-950/40 text-red-300 font-bold rounded-lg transition-colors flex items-center gap-2">
                View Documentation
            </button>
        </div>

        {/* Marquee Ticker */}
        <div className="w-full relative group">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-[#0a0000] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-[#0a0000] to-transparent z-10"></div>
          
          <div className="w-full border-y border-red-500/20 bg-red-950/10 backdrop-blur-md relative overflow-hidden py-4">
            <div className="flex whitespace-nowrap animate-marquee hover:pause cursor-default">
              {[1, 2, 3].map((i) => (
                <span key={i} className="flex items-center text-red-400 font-medium text-sm tracking-widest px-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3 animate-ping"></span>
                  Energy segment | RBI policy commentary keeps banks in focus 
                  <span className="mx-4 text-red-500/50">///</span>
                  Telecom stocks see buying interest on subscriber growth
                  <span className="mx-4 text-red-500/50">///</span>
                  FMCG names steady as rural demand expectations improve
                  <span className="mx-4 text-red-500/50">///</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

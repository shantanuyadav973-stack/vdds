import React from 'react';

const partners = [
  "MOODY'S", "S&P GLOBAL", "REFINITIV", "DOW JONES", 
  "BLOOMBERG", "Interactive Brokers", "Alpha Vantage", "Polygon.io"
];

export default function ClientTicker() {
  return (
    <section className="py-12 bg-[#050505] border-y border-white/5 overflow-hidden w-full relative">
      {/* Gradient masks for smooth fading edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

      <div className="flex flex-col items-center mb-8">
        <h3 className="text-gray-400 text-sm md:text-base font-medium tracking-widest uppercase">
          Our Clients and Worldwide <span className="text-blue-400 font-bold">Financial Partners</span>
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden group">
        <div className="animate-loop-scroll flex whitespace-nowrap group-hover:pause">
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[200px] md:min-w-[250px] px-8 py-4 mx-4 
                         bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl
                         transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 group-hover:scale-105"
            >
              <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tailwind specific animation for looping, requires updating tailwind.config.js if not present, but using standard CSS logic */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loop-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-loop-scroll {
          animation: loop-scroll 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}

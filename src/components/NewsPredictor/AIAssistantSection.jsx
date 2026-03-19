import React from 'react';
import { Sparkles, BrainCircuit, Activity } from 'lucide-react';

export default function AIAssistantSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0c] w-full flex justify-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Content - Holographic Representation */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
            {/* Pulsing rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite] absolute"></div>
                <div className="w-[80%] h-[80%] border border-indigo-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse] absolute"></div>
                <div className="w-[60%] h-[60%] border-2 border-dashed border-cyan-500/40 rounded-full animate-[spin_20s_linear_infinite] absolute"></div>
            </div>

            {/* Core AI Avatar */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-600 via-indigo-900 to-black rounded-full overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.3)] flex items-center justify-center border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* AI Face Abstract */}
                <BrainCircuit className="w-32 h-32 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] relative z-20" />
            </div>

            {/* Floating Data Points */}
            <div className="absolute top-[20%] right-[10%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    <div>
                        <p className="text-white text-sm font-bold">Latency</p>
                        <p className="text-emerald-400 text-xs">0.4ms</p>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-[20%] left-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <div>
                        <p className="text-white text-sm font-bold">Accuracy</p>
                        <p className="text-blue-400 text-xs">96.8%</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Content - Text Context */}
        <div className="flex flex-col space-y-8">
          <div>
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Next-Gen Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Rhea-AI?</span>
            </h2>
            <p className="text-xl text-gray-400 mt-2 font-light italic">Revolutionary Artificial Intelligence</p>
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed">
              Rhea is more than just an algorithm; she is your <strong className="text-white">personal quant</strong>, scanning a myriad of news sources to enhance your trading decisions.
            </p>
            <p className="leading-relaxed">
              She has the unique ability to act fast, <strong className="text-white">analyze deep impacts</strong>, and synthesize insights at human sentiment vectors so you don't trade blindly.
            </p>
            <p className="leading-relaxed">
              Rhea cross-checks news to streamline the insights. She calculates your probabilistic edge in current market regimes, securing you an unrivaled advantage.
            </p>
          </div>

          <div className="pt-6">
            <button className="px-8 py-4 bg-transparent border-2 border-blue-500/50 hover:border-blue-400 text-white rounded-full font-bold tracking-wide transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:bg-blue-900/20 w-fit flex items-center gap-3">
              VIEW HER IN ACTION
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

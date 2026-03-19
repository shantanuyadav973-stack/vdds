import React from 'react';

const tools = [
  { name: 'Python', role: 'Data Analysis' },
  { name: 'C++', role: 'Execution' },
  { name: 'PyTorch', role: 'Deep Learning' },
  { name: 'Pandas', role: 'Data Manipulation' },
  { name: 'KDB+', role: 'Time Series DB' },
  { name: 'AWS', role: 'Infrastructure' },
  { name: 'Rust', role: 'Systems' },
  { name: 'Docker', role: 'Containerization' },
];

export default function MasterTools() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111] border-t border-white/5 w-full flex justify-center">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
          Master the Tools of the Trade
        </h2>
        <p className="text-gray-400 font-medium mb-16 max-w-2xl mx-auto">
          We teach the exact technology stack heavily relied upon by top quantitative firms globally.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="bg-[#151515] border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center space-y-3 hover:bg-[#1a1a1a] hover:border-lime-500/30 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-lime-400 transition-colors">
                {/* Fallback geometric generic icon representing tool */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h4 className="text-white font-bold">{tool.name}</h4>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{tool.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

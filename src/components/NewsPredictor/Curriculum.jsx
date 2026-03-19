import React from 'react';

const curriculum = [
  {
    week: 'WEEK 1-4',
    title: 'Advanced Market Microstructure',
    description: 'Understand order books, matching engines, and latency arbitrage.',
    points: ['L3 Data Parsing', 'Tick-Level Simulation', 'Exchange Latency Topography']
  },
  {
    week: 'WEEK 5-8',
    title: 'Stochastic Calculus & Options Pricing',
    description: 'Deep dive into Black-Scholes, Greeks, and volatility surface modeling.',
    points: ['Ito\'s Lemma', 'Monte Carlo Methods', 'Implied Volatility Tracking']
  },
  {
    week: 'WEEK 9-12',
    title: 'Machine Learning for Signal Generation',
    description: 'Extract alpha from alternative data sources using modern neural architectures.',
    points: ['Transformer Sentiment Analysis', 'LSTM for Time Series', 'Ensemble Tree Models']
  },
  {
    week: 'WEEK 13-16',
    title: 'High-Frequency Execution Systems',
    description: 'Build robust, zero-allocation C++ engines bridging strategy to exchange.',
    points: ['Kernel Bypass Networking', 'FPGA Basics', 'Risk Management Systems']
  }
];

export default function Curriculum() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5 w-full flex justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2 text-center">
          Rigorous Curriculum <span className="text-lime-400">.</span>
        </h2>
        <p className="text-gray-400 font-medium mb-16 text-center">A step-by-step roadmap to mastery.</p>

        <div className="space-y-6">
          {curriculum.map((module, i) => (
            <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#151515] hover:border-white/10 transition-all group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="md:w-1/3">
                  <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">{module.week}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{module.title}</h3>
                </div>
                
                <div className="md:w-2/3 border-l-0 md:border-l border-white/10 md:pl-8">
                  <p className="text-gray-400 mb-6">{module.description}</p>
                  <ul className="space-y-3">
                     {module.points.map((point, j) => (
                       <li key={j} className="flex items-center space-x-3 text-sm text-gray-300">
                         <svg className="w-5 h-5 text-lime-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                         <span>{point}</span>
                       </li>
                     ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

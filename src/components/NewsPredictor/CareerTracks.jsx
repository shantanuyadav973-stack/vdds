import React from 'react';

const tracks = [
  {
    title: 'Quantitative Development Track',
    description: 'Master the C++ and Rust architectures required for microsecond execution latency.',
    stats: { weeks: 12, projects: 8, guarantee: 'Placement' },
    active: true
  },
  {
    title: 'Machine Learning Infrastructure',
    description: 'Build petabyte-scale data pipelines and deploy transformer models for sentiment parsing.',
    stats: { weeks: 16, projects: 12, guarantee: 'Placement' },
    active: false
  },
  {
    title: 'Algorithmic Trading Strategies',
    description: 'Translate mathematical edge into automated systems using Python and Pandas.',
    stats: { weeks: 10, projects: 5, guarantee: 'Support' },
    active: false
  }
];

export default function CareerTracks() {
  return (
    <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/5 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
          Specialized paths for elite execution engineering
        </h2>
        <p className="text-gray-400 font-medium mb-12">Select your specialization based on your quantitative background.</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Active Track Focus */}
          <div className="lg:col-span-8 bg-[#151515] border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-lime-500/10 transition-colors"></div>
            
            <span className="text-lime-400 text-xs font-bold uppercase tracking-widest mb-4 inline-block">Popular Track</span>
            <h3 className="text-4xl font-bold text-white mb-6 pr-12">{tracks[0].title}</h3>
            <p className="text-gray-400 text-lg mb-10 max-w-lg">{tracks[0].description}</p>
            
            <div className="flex space-x-12 mb-10 pb-10 border-b border-white/10">
              <div>
                <span className="block text-3xl font-bold text-white mb-1">{tracks[0].stats.weeks}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Weeks</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">{tracks[0].stats.projects}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white mb-1">{tracks[0].stats.guarantee}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Guarantee</span>
              </div>
            </div>

            <button className="bg-white text-black px-6 py-3 rounded text-sm font-bold hover:bg-lime-400 transition-colors flex items-center space-x-2">
              <span>View Full Syllabus</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>

          {/* Sidelist Tracks */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {tracks.slice(1).map((track, i) => (
              <div key={i} className="bg-[#111] hover:bg-[#1a1a1a] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all cursor-pointer flex flex-col h-full justify-center">
                <h4 className="text-xl font-bold text-white mb-3">{track.title}</h4>
                <p className="text-sm text-gray-400 mb-6 flex-grow">{track.description}</p>
                <div className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-wider space-x-4">
                  <span>{track.stats.weeks} Weeks</span>
                  <span>&bull;</span>
                  <span>{track.stats.projects} Projects</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

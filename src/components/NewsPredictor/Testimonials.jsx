import React from 'react';

const testimonials = [
  {
    name: 'Michael T.',
    role: 'Quant Researcher, Citadel',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    quote: 'The market microstructure modules and the low-latency C++ tracks are exactly what top-tier firms are looking for. It bridged the gap between theoretical knowledge and production engineering.'
  },
  {
    name: 'Sarah K.',
    role: 'Alpha Developer, Two Sigma',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    quote: 'NewsPredictor gave me the intuition to process alternative data streams using their transformer pipelines. My team\'s Sharpe ratio improved significantly after integrating these models.'
  },
  {
    name: 'James Y.',
    role: 'HFT Engineer, Jump Trading',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    quote: 'I came in knowing machine learning, but zero high-frequency architecture. The Kernel Bypass and FPGA modules were eye-opening and immediately applicable to my day-to-day.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2 text-center">
          Trusted by Elite Engineers
        </h2>
        <p className="text-gray-400 font-medium mb-16 text-center">Join thousands of quants predicting the future.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#111] border border-white/5 p-8 rounded-2xl relative group hover:border-white/10 transition-colors">
              <svg className="w-8 h-8 text-lime-500/20 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-opacity opacity-80 group-hover:opacity-100 border border-white/10">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

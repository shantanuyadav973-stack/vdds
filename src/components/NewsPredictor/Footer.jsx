import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-12 px-6 border-t border-white/10 flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white font-bold text-xl tracking-tight mb-4">
              <div className="w-8 h-8 rounded bg-lime-400 flex items-center justify-center text-black">
                NP
              </div>
              <span>NewsPredictor</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              AI-driven quantitative analytics and algorithmic execution infrastructure for modern hedge funds and prop shops.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Signals API</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Market Sentiment</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Options Pricing</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Backtesting Engine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-4">Get the latest quantitative methodologies delivered to your inbox.</p>
            <div className="flex relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-[#111] border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
               />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-lime-400 hover:bg-lime-500 text-black text-sm font-bold rounded transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} NewsPredictor Platform. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

export default function Navbar({ onExploreDashboard, onNewsClick, onPredictionsClick, onPortfolioClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 text-white font-general font-bold text-xl tracking-tight">
        <div className="w-8 h-8 rounded bg-lime-400 flex items-center justify-center text-black font-satoshi">
          NP
        </div>
        <span>Market Pulse AI</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">Features</a>
        {onNewsClick ? (
           <button onClick={onNewsClick} className="hover:text-white transition-colors text-left">News</button>
        ) : (
           <a href="#" className="hover:text-white transition-colors">News</a>
        )}
        {onPredictionsClick ? (
           <button onClick={onPredictionsClick} className="hover:text-white transition-colors text-left">Predictions</button>
        ) : (
           <a href="#" className="hover:text-white transition-colors">Predictions</a>
        )}
        {onPortfolioClick ? (
           <button onClick={onPortfolioClick} className="hover:text-white transition-colors text-left">Portfolio</button>
        ) : (
           <a href="#" className="hover:text-white transition-colors">Portfolio</a>
        )}
        
        {onExploreDashboard && (
           <button 
              onClick={onExploreDashboard} 
              className="text-lime-400 font-bold hover:text-lime-300 transition-colors border-b-2 border-lime-400 pb-1 -mb-1"
           >
              Explore Dashboard
           </button>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        <a href="#" className="text-sm font-medium text-white hover:text-lime-400 transition-colors">Log In</a>
        <button className="bg-lime-400 hover:bg-lime-500 text-black px-5 py-2 rounded font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(163,230,53,0.3)]">
          Start Predicting
        </button>
      </div>
    </nav>
  );
}

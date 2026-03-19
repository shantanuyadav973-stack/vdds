import React from 'react';
import Navbar from './components/NewsPredictor/Navbar';
import Hero from './components/NewsPredictor/Hero';
import CandlestickDashboard from './components/NewsPredictor/CandlestickDashboard';
import ClientTicker from './components/NewsPredictor/ClientTicker';
import AIAssistantSection from './components/NewsPredictor/AIAssistantSection';
import FeaturesGrid from './components/NewsPredictor/FeaturesGrid';
import SentimentAnalysis from './components/NewsPredictor/SentimentAnalysis';
import PricingTiers from './components/NewsPredictor/PricingTiers';
import ContactFAQ from './components/NewsPredictor/ContactFAQ';
import Footer from './components/NewsPredictor/Footer';

export default function NewsPredictorPage({ onExploreDashboard, onNewsClick, onPredictionsClick, onPortfolioClick }) {
  return (
    <div className="min-h-screen bg-black font-satoshi text-gray-200 selection:bg-[#ef233c] selection:text-white relative overflow-x-hidden">
      
      {/* Global Red Noir Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] to-black"></div>
          <div className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent stars-1 animate-animStar-50s"></div>
          <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent stars-2 animate-animStar-80s"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <Navbar
          onExploreDashboard={onExploreDashboard}
          onNewsClick={onNewsClick}
          onPredictionsClick={onPredictionsClick}
          onPortfolioClick={onPortfolioClick}
        />
        
        <main>
          <Hero />
          <CandlestickDashboard />
          <ClientTicker />
          <AIAssistantSection />
          <FeaturesGrid />
          <SentimentAnalysis />
          <PricingTiers />
          <ContactFAQ />
        </main>
      
        <Footer />
      </div>
    </div>
  );
}

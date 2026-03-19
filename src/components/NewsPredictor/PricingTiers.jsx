import React from 'react';
import { Check, Shield } from 'lucide-react';

const tiers = [
  {
    name: 'FREE',
    price: '$0.00',
    period: '/ mo',
    color: 'from-gray-400 to-gray-600',
    borderColor: 'border-gray-500',
    shadowColor: 'shadow-gray-500/20',
    textColor: 'text-gray-300',
    iconColor: 'text-gray-400',
    features: [
      { name: 'DELAY', value: '1 MIN', active: true },
      { name: 'API', value: 'YES', active: true },
      { name: 'FILTERING', value: 'DISABLED', active: false },
      { name: 'SENTIMENT', value: 'DISABLED', active: false },
      { name: 'SUPPORT', value: 'DISABLED', active: false },
    ]
  },
  {
    name: 'SILVER',
    price: '$19.99',
    period: '/ mo',
    color: 'from-slate-300 to-slate-500',
    borderColor: 'border-slate-400',
    shadowColor: 'shadow-slate-400/20',
    textColor: 'text-slate-300',
    iconColor: 'text-slate-400',
    features: [
      { name: 'DELAY', value: '30 SEC', active: true },
      { name: 'API', value: 'NO', active: false },
      { name: 'FILTERING', value: 'LIMITED', active: true },
      { name: 'SENTIMENT', value: 'LIMITED', active: true },
      { name: 'SUPPORT', value: 'DISABLED', active: false },
    ]
  },
  {
    name: 'GOLD',
    price: '$59.99',
    period: '/ mo',
    color: 'from-yellow-400 to-yellow-600',
    borderColor: 'border-yellow-500',
    shadowColor: 'shadow-yellow-500/20',
    textColor: 'text-yellow-400',
    iconColor: 'text-yellow-500',
    isPopular: true,
    features: [
      { name: 'DELAY', value: 'REAL TIME', active: true },
      { name: 'API', value: 'NO', active: false },
      { name: 'FILTERING', value: 'UNLIMITED', active: true },
      { name: 'SENTIMENT', value: 'LIMITED', active: true },
      { name: 'SUPPORT', value: 'DISABLED', active: false },
    ]
  },
  {
    name: 'PLATINUM',
    price: '$89.99',
    period: '/ mo',
    color: 'from-cyan-400 to-cyan-600',
    borderColor: 'border-cyan-500',
    shadowColor: 'shadow-cyan-500/20',
    textColor: 'text-cyan-400',
    iconColor: 'text-cyan-400',
    features: [
      { name: 'DELAY', value: 'REAL TIME', active: true },
      { name: 'API', value: 'YES', active: true },
      { name: 'FILTERING', value: 'UNLIMITED', active: true },
      { name: 'SENTIMENT', value: 'EXTENDED', active: true },
      { name: 'SUPPORT', value: 'AVAILABLE', active: true },
    ]
  }
];

export default function PricingTiers() {
  return (
    <section className="py-24 px-6 bg-[#0a0514] w-full flex justify-center relative font-satoshi overflow-hidden selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(30,15,60,0.5),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl w-full flex flex-col items-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-widest text-center uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Membership Tier</span>
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl">
          Select the plan that best fits your trading style and ambitions.
        </p>

        {/* Toggle (Visual Only) */}
        <div className="flex bg-[#120a24] p-1 rounded-full border border-white/10 mb-16 relative">
             <button className="px-8 py-2 rounded-full bg-blue-600 text-white font-bold text-sm">Pay Monthly</button>
             <button className="px-8 py-2 rounded-full text-gray-400 font-bold text-sm hover:text-white transition-colors relative">
                 Pay Annually
                 <span className="absolute -top-3 -right-3 bg-red-500 text-[10px] px-2 py-0.5 rounded text-white font-black animate-pulse shadow-[0_0_10px_red]">SAVE 20%</span>
             </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col items-center bg-[#0d071a] rounded-2xl p-8 border hover:-translate-y-2 transition-transform duration-300
                         ${tier.isPopular ? 'border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.15)] z-10 scale-105' : 'border-white/10'}`}
            >
              {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">
                      Most Popular
                  </div>
              )}

              {/* Top Accent Line */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-b-full bg-gradient-to-r ${tier.color} shadow-[0_0_10px_currentColor] ${tier.textColor}`}></div>

              {/* Shield Icon styling */}
              <div className="mb-6 relative">
                 <Shield className={`w-12 h-12 ${tier.iconColor} drop-shadow-[0_0_15px_currentColor]`} strokeWidth={1.5} />
                 <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} blur-xl opacity-20`}></div>
              </div>

              <h3 className={`text-xl font-bold mb-2 tracking-widest ${tier.textColor}`}>{tier.name}</h3>
              
              <div className="flex items-end justify-center mb-8 h-16">
                 <span className="text-4xl md:text-5xl font-bold text-white leading-none">{tier.price}</span>
                 <span className="text-gray-500 text-sm ml-1 mb-1">{tier.period}</span>
              </div>

              <div className="w-full space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex flex-col items-center justify-center py-2 border-b border-white/5 last:border-0">
                     <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">{feature.name}</span>
                     <div className="flex items-center gap-1.5">
                        {feature.active ? (
                            <Check className={`w-4 h-4 ${tier.iconColor}`} />
                        ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                        )}
                        <span className={`text-sm font-bold ${feature.active ? 'text-white' : 'text-gray-600'}`}>{feature.value}</span>
                     </div>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-white hover:bg-gray-200 text-black font-black uppercase tracking-widest rounded-lg transition-colors mt-auto">
                Subscribe
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-12 text-center">
            * Crypto data feeds strictly cover 30 major pairs on default. Custom feeds require API Platinum access.
        </p>

      </div>
    </section>
  );
}

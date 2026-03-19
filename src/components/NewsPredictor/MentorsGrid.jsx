import React, { useState, useEffect } from 'react';

// Using simple inline SVGs to represent logos cleanly as a fallback
const LogoHexagon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const LogoLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

const LogoBox = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const LogoInfinity = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
  </svg>
);

const LogoTriangle = () => (
   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
     <path d="M11.16 2.593a1.5 1.5 0 0 1 2.68 0l8.608 17.215A1.5 1.5 0 0 1 21.107 22H3.893a1.5 1.5 0 0 1-1.34-2.192l8.607-17.215Z" />
   </svg>
);

const LogoCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);


const companySets = [
  [
    { name: 'Reliance', role: 'Conglomerate', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png', fallback: <LogoHexagon /> },
    { name: 'TCS', role: 'IT Services', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/512px-Tata_Consultancy_Services_Logo.svg.png', fallback: <LogoLayers /> },
    { name: 'HDFC Bank', role: 'Banking & Finance', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/512px-HDFC_Bank_Logo.svg.png', fallback: <LogoBox /> },
    { name: 'ICICI Bank', role: 'Banking & Finance', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/512px-ICICI_Bank_Logo.svg.png', fallback: <LogoInfinity /> },
    { name: 'Bharti Airtel', role: 'Telecommunications', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Airtel_logo.svg/512px-Airtel_logo.svg.png', fallback: <LogoTriangle /> },
    { name: 'SBI', role: 'Banking & Finance', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/512px-SBI-logo.svg.png', fallback: <LogoCircle /> }
  ],
  [
    { name: 'Infosys', role: 'IT Services', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/512px-Infosys_logo.svg.png', fallback: <LogoBox /> },
    { name: 'ITC', role: 'Consumer Goods', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/512px-ITC_Limited_Logo.svg.png', fallback: <LogoHexagon /> },
    { name: 'HUL', role: 'Consumer Goods', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Hindustan_Unilever_Logo.svg/512px-Hindustan_Unilever_Logo.svg.png', fallback: <LogoLayers /> },
    { name: 'Larsen & Toubro', role: 'Infrastructure', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Larsen_%26_Toubro_logo.svg/512px-Larsen_%26_Toubro_logo.svg.png', fallback: <LogoCircle /> },
    { name: 'Bajaj Finance', role: 'Financial Services', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bajaj_Finserv_Logo.svg/512px-Bajaj_Finserv_Logo.svg.png', fallback: <LogoTriangle /> },
    { name: 'Kotak Mahindra', role: 'Banking & Finance', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kotak_Mahindra_Bank_logo.svg/512px-Kotak_Mahindra_Bank_logo.svg.png', fallback: <LogoInfinity /> }
  ]
];

const CompanyLogo = ({ company }) => {
  const [imgErrorLevel, setImgErrorLevel] = useState(0);

  return (
    <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 border border-white/10 bg-[#120a0a] flex items-center justify-center relative transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] text-white/40 group-hover:text-white p-6 bg-white/5">
      {imgErrorLevel === 0 && (
        <img 
          src={company.imgSrc} 
          alt={`${company.name} logo`} 
          className="w-full h-full object-contain filter transition-all duration-500 opacity-80 group-hover:opacity-100"
          onError={() => setImgErrorLevel(2)} // jump straight to SVG fallback
        />
      )}
      {imgErrorLevel === 2 && (
        company.fallback
      )}
      {/* Subtle sweeping highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent flex items-center justify-center via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
    </div>
  );
};

export default function MentorsGrid() {
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveSetIndex(prev => (prev + 1) % companySets.length);
        setIsFading(false);
      }, 500); // 500ms fade transition
    }, 5000); // changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSet = companySets[activeSetIndex];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5 w-full flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-general text-white tracking-tight mb-4">
            Alumni Ecosystem & Industry Partners
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto">
            Our ecosystem connects with the architects of modern algorithmic trading and high-frequency infrastructure.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {currentSet.map((company, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              <CompanyLogo company={company} />
              <h3 className="text-white font-bold text-sm text-center">{company.name}</h3>
              <p className="text-gray-500 text-xs text-center uppercase tracking-widest mt-1">{company.role}</p>
            </div>
          ))}
        </div>
        
        {/* Progress indicators for sets */}
        <div className="flex justify-center mt-12 space-x-2">
            {companySets.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeSetIndex ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}

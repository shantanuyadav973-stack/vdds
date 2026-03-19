import React, { useEffect, useRef } from 'react';

const useReveal = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return ref;
};

const RevealText = ({ text, delayOffset = 0, className = "" }) => {
  return (
    <div className={`overflow-hidden flex ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="reveal-transition reveal-hidden inline-block"
          style={{ transitionDelay: `${delayOffset + index * 0.05}s` }}
          ref={(el) => {
             // We do a simple observer per letter for the staggered effect
             if(el) {
                const observer = new IntersectionObserver(([e]) => {
                  if(e.isIntersecting) {
                    el.classList.remove('reveal-hidden');
                    el.classList.add('reveal-visible');
                  }
                }, { threshold: 0.1 });
                observer.observe(el);
             }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

export default function LandingPage() {
  const heroRef = useReveal();
  const gridRef = useReveal();
  const footerRef = React.useRef(null);
  const [isFooterVisible, setIsFooterVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Change color when footer is 10% visible
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen bg-[var(--color-cream)] text-[var(--color-forest)] overflow-x-hidden selection:bg-[var(--color-sage)] selection:text-[var(--color-forest)]">
      
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 noise-bg" style={{ opacity: 0.04 }}></div>

      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-40 px-8 flex justify-between items-center transition-all duration-500">
        <div className={`font-anton text-2xl uppercase tracking-tighter drop-shadow-sm transition-colors duration-500 ${isFooterVisible ? 'text-[var(--color-cream)]' : 'text-[var(--color-forest)]'}`}>
          -Forestry
        </div>
        
        <div className={`hidden md:flex backdrop-blur-[20px] rounded-full px-8 py-3 space-x-8 border shadow-sm transition-colors duration-500 ${isFooterVisible ? 'bg-white/5 border-white/20' : 'bg-[#ffffff1a] border-[var(--color-forest)]/10'}`}>
          {['Shop', 'Process', 'Journal', 'About'].map((item) => (
            <a key={item} href="#" className={`font-inter font-bold text-[10px] uppercase tracking-[0.2em] transition-colors ${isFooterVisible ? 'text-[var(--color-cream)] hover:text-[var(--color-sage)]' : 'text-[var(--color-forest)] hover:text-white'}`}>
              {item}
            </a>
          ))}
        </div>

        <button className={`rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg hover:scale-105 transition-all duration-500 ${isFooterVisible ? 'bg-[var(--color-cream)] text-[var(--color-forest)]' : 'bg-white text-[var(--color-forest)]'}`}>
          <span className="font-inter font-bold text-[10px] uppercase tracking-[0.2em]">Cart</span>
          <span className="bg-[var(--color-forest)] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[var(--color-sage)] flex flex-col justify-end p-8 pb-12 pt-32 overflow-hidden rounded-b-[5rem]">
        {/* Floating Images */}
        <div className="absolute top-1/4 left-[15%] w-64 aspect-square animate-float z-10 hidden md:block" style={{ animationDelay: '0s' }}>
          <img src="https://images.unsplash.com/photo-1615486511484-92e172054fb1?auto=format&fit=crop&q=80&w=800" alt="Organic setup" className="w-full h-full object-cover rounded-[3rem] shadow-[var(--drop-shadow-floating)]" />
        </div>
        <div className="absolute top-1/3 right-[10%] w-72 aspect-[4/5] animate-float z-10 hidden md:block" style={{ animationDelay: '2s' }}>
          <img src="https://images.unsplash.com/photo-1605264317192-35805db3a8cf?auto=format&fit=crop&q=80&w=800" alt="Ingredients" className="w-full h-full object-cover rounded-[3rem] shadow-[var(--drop-shadow-floating)]" />
        </div>

        <div className="flex-1 flex items-center justify-center z-20">
             <RevealText text="BOTANICA" className="font-anton text-[23vw] leading-[0.75] tracking-[-0.05em] text-[var(--color-forest)] select-none uppercase" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-20 mt-12 w-full max-w-7xl mx-auto px-4" ref={heroRef}>
          <p className="font-inter font-normal text-lg md:text-xl max-w-md reveal-hidden reveal-transition">
            A curated selection of high-end organic materials, ethically sourced and masterfully processed for the modern connoisseur.
          </p>
          <div className="flex flex-col md:items-end justify-end space-y-2 reveal-hidden reveal-transition" style={{ transitionDelay: '0.2s'}}>
            <span className="font-inter font-bold text-[10px] uppercase tracking-[0.4em]">Origin: Kyoto, Japan</span>
            <span className="font-inter font-bold text-[10px] uppercase tracking-[0.4em]">Harvest: Spring 2026</span>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-[var(--color-olive)] rounded-t-[5rem] -mt-10 relative z-10 pt-32 pb-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto" ref={gridRef}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-hidden reveal-transition">
             <h2 className="font-anton text-[15vw] md:text-[12vw] leading-[0.8] tracking-[-0.03em] uppercase max-w-4xl">
               New Arrivals
             </h2>
             <button className="mt-8 md:mt-0 w-32 h-32 rounded-full border border-[var(--color-forest)] flex items-center justify-center font-inter font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[var(--color-forest)] hover:text-[var(--color-olive)] transition-colors duration-500">
               View All
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800", title: "Matcha Grade A", price: "$45" },
              { id: 2, img: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=800", title: "Ceramic Vessel", price: "$120" },
              { id: 3, img: "https://images.unsplash.com/photo-1615486171448-4fdcbab4551f?auto=format&fit=crop&q=80&w=800", title: "Bamboo Whisk", price: "$32" }
            ].map((product, i) => (
              <div key={product.id} className="group relative overflow-hidden rounded-[2.5rem] bg-[var(--color-cream)] reveal-hidden reveal-transition" style={{ transitionDelay: `${i * 0.15 + 0.2}s` }}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
                
                {/* Blur Reveal Button Overlay */}
                <div className="absolute inset-0 bg-[rgba(1,71,46,0.3)] backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 p-4">
                  <button className="bg-white text-[var(--color-forest)] font-inter font-bold text-[10px] uppercase tracking-widest px-8 py-4 rounded-full w-full max-w-xs transform translate-y-8 group-hover:-translate-y-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    Quick Add
                  </button>
                </div>
                
                <div className="absolute top-6 left-6 right-6 flex justify-between pointer-events-none text-white mix-blend-difference">
                   <span className="font-inter font-bold text-xs uppercase tracking-widest">{product.title}</span>
                   <span className="font-inter text-xs">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-[var(--color-forest)] text-[var(--color-sage)] pt-32 pb-12 px-8 md:px-12 rounded-t-[5rem] -mt-10 overflow-hidden relative z-20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            <div className="col-span-1 md:col-span-6 flex flex-col justify-between">
               <div>
                 <h3 className="font-anton text-[8vw] md:text-[5vw] leading-[0.8] tracking-[-0.02em] uppercase text-[var(--color-cream)] mb-8">
                   Join The Inner Circle
                 </h3>
                 <div className="relative max-w-md">
                   <input type="email" placeholder="ENTER YOUR EMAIL" className="w-full bg-transparent border-b border-[var(--color-sage)]/30 py-4 font-inter font-bold text-[12px] uppercase tracking-[0.2em] focus:outline-none focus:border-[var(--color-sage)] transition-colors placeholder:text-[var(--color-sage)]/50" />
                   <button className="absolute right-0 top-1/2 -translate-y-1/2 font-inter font-bold text-[10px] uppercase tracking-[0.2em] hover:text-[var(--color-cream)] transition-colors">
                     Submit
                   </button>
                 </div>
               </div>
            </div>
            
            <div className="col-span-1 md:col-span-6 grid grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col space-y-6">
                {['Shop All', 'New Arrivals', 'Best Sellers', 'Gift Cards'].map(link => (
                  <a key={link} href="#" className="font-inter font-bold text-[11px] uppercase tracking-[0.2em] hover:text-[var(--color-cream)] transition-colors">{link}</a>
                ))}
              </div>
              <div className="flex flex-col space-y-6">
                {['Our Story', 'Sustainability', 'Journal', 'Contact'].map(link => (
                  <a key={link} href="#" className="font-inter font-bold text-[11px] uppercase tracking-[0.2em] hover:text-[var(--color-cream)] transition-colors">{link}</a>
                ))}
              </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-[var(--color-sage)]/20 flex flex-col md:flex-row justify-between items-center opacity-30 font-inter text-[10px] uppercase tracking-widest">
            <p>&copy; 2026 BOTANICA LTD. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
               <a href="#">Privacy</a>
               <a href="#">Terms</a>
            </div>
         </div>
      </footer>
    </div>
  );
}

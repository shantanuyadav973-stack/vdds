import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Mail, MessageSquare } from 'lucide-react';

const faqs = [
  { q: "How fast is the news feed?", a: "Our proprietary AI engine processes and pushes news within 30-50 milliseconds of publication, making it one of the fastest retail feeds available." },
  { q: "Can I use the API for algorithmic trading?", a: "Yes, our Platinum tier includes full REST and WebSocket API access, allowing seamless integration with Python, Node, and C++ algorithmic frameworks." },
  { q: "Which markets do you cover?", a: "We cover US Equities (NYSE, NASDAQ), major global forex pairs, top 50 cryptocurrencies, and high-volume commodities." },
  { q: "Is there a free trial for premium tiers?", a: "We offer a 7-day risk-free trial for the Silver and Gold tiers. You can cancel anytime before the trial ends without being charged." }
];

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-24 px-6 bg-[#000000] w-full flex justify-center border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 z-10">
        
        {/* FAQ Section */}
        <div>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20">
             <HelpCircle className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-widest">
            Have <span className="text-blue-400">Questions?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Find answers about our features, pricing, subscription tiers, or API access right here.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-xl transition-colors duration-300 overflow-hidden ${openFaq === idx ? 'border-blue-500/50 bg-blue-900/10' : 'border-white/10 bg-[#0a0a0c] hover:border-white/20'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 rounded-r-xl">
             <p className="text-white font-medium">Still have questions?</p>
             <p className="text-sm text-gray-400 mt-1">Our support team is available 24/7 to help you out.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#050508] border border-white/10 rounded-2xl p-8 shadow-2xl relative">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px]"></div>
           
           <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
             <Mail className="w-6 h-6 text-blue-400" />
             Leave us a Message
           </h3>

           <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                   <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1">First Name</label>
                   <input type="text" className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-1">
                   <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1">Last Name</label>
                   <input type="text" className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1">
                 <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1">Email Address</label>
                 <input type="email" className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-1">
                 <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1">Subject</label>
                 <select className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>API Documentation</option>
                 </select>
              </div>

              <div className="space-y-1">
                 <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1">Message</label>
                 <textarea rows="4" className="w-full bg-[#0a0a0c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                 <MessageSquare className="w-5 h-5" />
                 Send Message
              </button>
           </form>
        </div>

      </div>
    </section>
  );
}

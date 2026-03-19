import React, { useState, useEffect, useRef } from 'react';

const initialLines = [
  { text: '> Initializing neural pathways...', color: 'text-indigo-400' },
  { text: '> Loading market sentiment models: 100%', color: 'text-emerald-400' },
  { text: '> Connection established. Awaiting signals.', color: 'text-emerald-400' },
  { text: '> Type "help" for available commands.', color: 'text-gray-400' }
];

export function TerminalWidget() {
  const [lines, setLines] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < initialLines.length) {
        setLines(prev => [...prev, initialLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (e) => {
    if (e.key === 'Enter' && inputVal.trim()) {
      const cmd = inputVal.trim().toLowerCase();
      setLines(prev => [...prev, { text: `> ${cmd}`, color: 'text-gray-300' }]);
      setInputVal('');
      
      setTimeout(() => {
        let response = { text: `> Command not recognized: ${cmd}`, color: 'text-rose-400' };
        
        switch(cmd) {
          case 'help': 
            response = { text: '> Available commands: status, ping, clear', color: 'text-sky-400' }; 
            break;
          case 'status': 
            response = { text: '> Systems Nominal. Analyzer Active.', color: 'text-emerald-400' }; 
            break;
          case 'ping': 
            response = { text: '> Pong. Latency: 12ms', color: 'text-amber-400' }; 
            break;
          case 'clear':
            setLines([]);
            return;
        }
        
        setLines(prev => [...prev, response]);
      }, 400);
    }
  };

  return (
    <div className="nm-inset rounded-3xl p-6 flex flex-col h-[280px] bg-[#111] dark:bg-black/20 text-white text-[11px] overflow-hidden relative group" style={{ fontFamily: 'var(--font-mono)' }}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10 relative z-10 shrink-0">
         <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
         </div>
         <span className="opacity-50">root@neu-dash:~</span>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 space-y-2 pb-2">
        {lines.filter(Boolean).map((line, i) => (
          <div key={i} className={`animate-terminal-line ${line?.color || 'text-gray-400'}`}>
            {line?.text || ''}
          </div>
        ))}
        
        {/* Input Line */}
        <div className="flex items-center text-gray-400 mt-2">
           <span className="mr-2">{'>'}</span>
           <input
             type="text"
             value={inputVal}
             onChange={e => setInputVal(e.target.value)}
             onKeyDown={handleCommand}
             className="bg-transparent border-none outline-none flex-1 text-gray-300"
             style={{ caretColor: '#9ca3af' }}
             spellCheck="false"
             autoComplete="off"
           />
        </div>
        <div ref={endRef} />
      </div>
      
      {/* Subtle terminal scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50 z-0"></div>
    </div>
  );
}

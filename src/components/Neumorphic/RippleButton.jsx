import React, { useState } from 'react';
import { cn } from '../../utils';

export function RippleButton({ children, className, onClick, ...props }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create new ripple
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    
    if (onClick) onClick(e);

    // Clean up animation after 700ms (matches CSS animation duration)
    setTimeout(() => {
      setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
    }, 700);
  };

  return (
    <button
      onClick={handleClick}
      className={cn("nm-button relative overflow-hidden", className)}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            transformOrigin: 'center center',
            marginLeft: -10,
            marginTop: -10,
          }}
        />
      ))}
    </button>
  );
}

import React from 'react';

export default function Loader() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 noise-bg pointer-events-none"></div>

      {/* Long Fazers Background */}
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Loader Component Container */}
      <div className="relative w-full max-w-2xl h-[400px] flex items-center justify-center">
        <div className="loader-wrapper">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="z-20 text-center mt-8 space-y-4">
        <h1 className="font-space text-4xl font-bold tracking-tighter text-black uppercase animate-pulse">
          Processing Request
        </h1>
        <p className="font-outfit text-gray-400 font-light tracking-widest uppercase text-xs">
          Synchronizing with global neural networks
        </p>

        {/* Progress Bar Mockup */}
        <div className="w-64 h-1 bg-gray-100 rounded-full mx-auto mt-12 overflow-hidden relative">
          <div className="h-full bg-black w-1/3 animate-progress"></div>
        </div>
      </div>

    </div>
  );
}

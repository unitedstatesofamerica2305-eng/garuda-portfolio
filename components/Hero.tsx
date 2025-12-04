import React from 'react';
import Blackhole from './Blackhole';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Canvas */}
      <Blackhole />
      
      {/* Content */}
      <div className="relative z-10 text-center select-none pointer-events-none px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h1 
          className="glitch-text font-display font-black text-white tracking-tighter leading-none"
          style={{ fontSize: 'clamp(3rem, 15vw, 9rem)' }}
          data-text="GARUDA"
        >
          GARUDA
        </h1>
        <p className="font-mono text-hacker-red mt-4 md:mt-6 tracking-[0.2em] opacity-80 break-words text-center"
           style={{ fontSize: 'clamp(0.75rem, 2vw, 1.5rem)' }}
        >
          SYSTEM_BREACH_DETECTED
        </p>
      </div>

      {/* Decorative Overlays */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] md:text-xs text-gray-500 hidden sm:block">
        <div className="flex flex-col space-y-1">
          <span>COORDS: 45.923, -12.002</span>
          <span>STATUS: UNSTABLE</span>
          <span>ENCRYPTION: AES-256-GCM</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden sm:block">
         <div className="w-16 h-16 md:w-24 md:h-24 border border-hacker-red/30 rounded-full animate-spin-slow border-t-hacker-red border-l-transparent"></div>
      </div>
      
      {/* Mobile only decorative element */}
      <div className="absolute bottom-8 left-0 w-full text-center sm:hidden pointer-events-none">
         <span className="text-hacker-red/50 text-[10px] font-mono animate-pulse">SCROLL_TO_INITIATE</span>
      </div>
    </section>
  );
};

export default Hero;
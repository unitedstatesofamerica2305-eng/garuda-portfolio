import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,1)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 max-w-4xl text-center">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 glitch-text" data-text="ESTABLISH_UPLINK">
            ESTABLISH_UPLINK
          </h2>
          <p className="font-mono text-hacker-red text-xs md:text-base tracking-widest mt-2 md:mt-4">
             // DIRECT ENCRYPTED LINE
          </p>
        </div>

        <div className="relative group w-full max-w-md mx-auto px-2">
            {/* Animated Glow Behind Button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-hacker-red to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <a 
              href="https://t.me/RICH_FLEXY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center justify-center space-x-3 md:space-x-4 bg-black border border-hacker-red px-4 py-6 md:px-10 md:py-8 rounded-sm hover:bg-hacker-red/10 transition-all duration-300 w-full"
            >
               {/* Telegram Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-hacker-red transition-colors shrink-0">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.48-.94-2.4-1.55-1.06-.7-.37-1.09.23-1.72.15-.16 2.8-2.57 2.85-2.78.01-.03.01-.13-.06-.18-.07-.05-.17-.03-.24-.02-.11.02-1.87 1.18-5.28 3.46-.5.34-.95.5-1.35.49-.45-.01-1.3-.25-1.94-.46-.78-.26-1.4-.39-1.35-.82.03-.22.33-.45.91-.69 3.55-1.54 5.92-2.56 7.09-3.05 3.37-1.39 4.07-1.63 4.53-1.63.1 0 .32.02.47.14.12.1.15.23.17.33.02.16.02.33.01.48z"/>
               </svg>
               
               <div className="flex flex-col items-start overflow-hidden min-w-0">
                   <span className="text-base md:text-2xl font-display font-bold text-white tracking-widest group-hover:glitch-text truncate w-full text-left" data-text="MESSAGE_GARUDA">
                       MESSAGE_FLEXER
                   </span>
                   <span className="text-[10px] md:text-xs font-mono text-hacker-red animate-pulse truncate w-full text-left">
                       /// CLICK_TO_CONNECT ///
                   </span>
               </div>
            </a>
        </div>

        <div className="mt-8 md:mt-12 font-mono text-gray-500 text-[10px] md:text-sm max-w-md mx-auto px-4">
          <p>
            <span className="text-hacker-red">NOTE:</span> Use this channel for business inquiries and secure communication only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-hacker-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="border-l-4 border-hacker-red pl-4 md:pl-6 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
            ABOUT_ME
          </h2>
          <p className="text-hacker-red font-mono text-xs md:text-sm tracking-widest">
            // IDENTITY VERIFIED
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
          <div className="font-mono text-gray-300 space-y-4 md:space-y-6 leading-relaxed text-base md:text-lg">
            <p>
              I am a <span className="text-hacker-red font-bold">Security Researcher</span> and <span className="text-white">Full Stack Developer</span> obsessed with the digital abyss. My work bridges the gap between secure architecture and creative destruction.
            </p>
            <p>
              Specializing in <span className="text-white bg-hacker-red/10 px-1">Ethical Hacking</span>, I uncover vulnerabilities before they can be exploited, while building robust, high-performance web applications using modern stacks like React and Java.
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-4 border-t border-gray-800 pt-4">
              > Current Status: <span className="text-green-500 animate-pulse">ONLINE</span><br/>
              > Objective: SECURE_THE_FUTURE
            </p>
          </div>

          <div className="relative group mt-4 md:mt-0 w-full max-w-sm mx-auto md:max-w-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-hacker-red to-purple-900 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-6 md:p-8 bg-black border border-gray-800 rounded-lg transform transition-all duration-300 md:group-hover:translate-x-1 md:group-hover:-translate-y-1">
               <div className="flex flex-col space-y-4 font-mono text-xs md:text-sm">
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                     <span className="text-gray-500">ROLE</span>
                     <span className="text-hacker-red">CYBER_OPERATIVE</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                     <span className="text-gray-500">LOCATION</span>
                     <span className="text-white">ENCRYPTED_NODE_04</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-2">
                     <span className="text-gray-500">EXP_LEVEL</span>
                     <span className="text-white">SENIOR</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-gray-500">FACTION</span>
                     <span className="text-hacker-red">WHITE_HAT</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
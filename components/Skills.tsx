import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'ETHICAL HACKING', level: 95 },
  { name: 'TYPESCRIPT / JS', level: 90 },
  { name: 'JAVA / SPRING', level: 85 },
  { name: 'REACT / NEXT.JS', level: 90 },
  { name: 'SSL BYPASSING', level: 80 },
  { name: 'NETWORK SECURITY', level: 85 },
  { name: 'LINUX ADMIN', level: 88 },
  { name: 'PYTHON SCRIPTING', level: 82 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 glitch-text" data-text="SKILL_SET">
            SKILL_SET
          </h2>
          <div className="h-1 w-16 md:w-24 bg-hacker-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 border border-gray-800 p-5 md:p-6 overflow-hidden hover:border-hacker-red transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-2 opacity-50 font-mono text-xs text-hacker-red">
                0{index + 1}
              </div>
              
              <h3 className="font-mono text-lg md:text-xl text-white font-bold mb-4 md:group-hover:skew-x-6 transition-transform duration-300">
                {skill.name}
              </h3>

              <div className="w-full bg-gray-800 h-2 mt-4 relative overflow-hidden">
                <div 
                  className="bg-hacker-red h-full absolute top-0 left-0 transition-all duration-1000 ease-out group-hover:animate-pulse"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="absolute inset-0 bg-hacker-red/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>
              
              {/* Glitch Overlay on Hover (Desktop only mainly) */}
              <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#ff0033_3px)] pointer-events-none mix-blend-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
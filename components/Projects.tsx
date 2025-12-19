import React from 'react';
import { Project } from '../types';

const projectData: Project[] = [
  {
    id: 1,
    title: "AADHAR TO FAMILY",
    description: "Fetch detail of family member by anybody aadhar number.",
    tags: ["ENCRYPTED", "FREE TO USE", "UNETHICAL"],
    link: "#"
  },
  {
    id: 2,
    title: "NUMBER INFO",
    description: "get some detail of number (DETAIL MAY CONTAIN WRONG INFORMATION IF YOU GET DM ME )",
    tags: ["ENCRYPTED", "FREE TO USE", "UNETHICAL"],
    link: "https://num-info-by-soulflex.vercel.app/"
  },
  {
    id: 3,
    title: "BANK_FIREWALL",
    description: "Simulation of a banking network defense system. Monitor traffic anomalies and block DDOS attacks.",
    tags: ["Java", "Spring", "Redis"],
    link: "#"
  },
   {
    id: 4,
    title: "GHOST_SHELL",
    description: "A lightweight reverse shell manager for authorized penetration testing environments.",
    tags: ["C++", "Networking", "Shell"],
    link: "#"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-hacker-dark relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 border-b border-gray-800 pb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">PROJECTS</h2>
            <p className="font-mono text-gray-500 mt-2 text-sm">// DECLASSIFIED FILES</p>
          </div>
          <div className="text-hacker-red font-mono text-xs animate-pulse">
            Syncing...
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectData.map((project) => (
            <a 
              href={project.link} 
              key={project.id}
              className="group relative block bg-black border border-gray-800 p-6 md:p-8 transition-all duration-500 hover:border-hacker-red hover:shadow-[0_0_20px_rgba(255,0,51,0.2)] overflow-hidden rounded-sm"
            >
              {/* Holographic Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-hacker-red transition-all duration-300 group-hover:w-full group-hover:h-full opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-hacker-red transition-all duration-300 group-hover:w-full group-hover:h-full opacity-50"></div>

              {/* Content Container - Shrinks on Hover (Desktop) */}
              <div className="relative z-10 transition-transform duration-500 md:group-hover:scale-95 md:group-hover:opacity-90">
                 <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-hacker-red transition-colors break-words max-w-[80%]">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] md:text-xs text-gray-600 border border-gray-800 px-2 py-1 rounded shrink-0">
                      ID_{project.id}
                    </span>
                 </div>
                 
                 <p className="font-mono text-gray-400 mb-6 text-sm leading-relaxed">
                   {project.description}
                 </p>

                 <div className="flex flex-wrap gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] md:text-xs font-mono text-hacker-red bg-hacker-red/10 px-2 py-1 rounded">
                       #{tag}
                     </span>
                   ))}
                 </div>
              </div>

              {/* Blackhole Pull Effect Overlay (Desktop) */}
              <div className="hidden md:block absolute inset-0 bg-radial-gradient from-transparent to-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

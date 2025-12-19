React, { useState, useEffect, useRef } from 'react';
import { TerminalLine } from '../types';

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const initialLines: TerminalLine[] = [
    { text: "Initializing FLEXEGARUDAl v2.4...", type: 'system' },
    { text: "Scanning vulnerabilities...", type: 'system' },
    { text: "Fetching portfolio data...", type: 'system' },
    { text: "Access Granted.", type: 'system' },
    { text: "Welcome, User. Type 'help' to view commands.", type: 'system' },
  ];

  useEffect(() => {
    let delay = 0;
    initialLines.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, delay);
      delay += 800;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: TerminalLine[] = [];

    switch (trimmed) {
      case 'help':
        response = [
          { text: "Available commands:", type: 'system' },
          { text: "- about: Display user info", type: 'system' },
          { text: "- contact: Show contact details", type: 'system' },
          { text: "- clear: Clear terminal", type: 'system' },
          { text: "- whoami: ???", type: 'system' },
        ];
        break;
      case 'about':
        response = [{ text: "FLEXER // Ethical Hacker & Full Stack Dev based in Cyberspace.", type: 'output' }];
        break;
      case 'contact':
        response = [{ text: "Email: SOON | Encrypted Line: 404-NOT-FOUND", type: 'output' }];
        break;
      case 'clear':
        setLines([]);
        return;
      case 'whoami':
         response = [{ text: "You are the observer. I am the architect.", type: 'output' }];
         break;
      default:
        response = [{ text: `Command not found: ${trimmed}`, type: 'error' }];
    }

    setLines(prev => [...prev, { text: `> ${cmd}`, type: 'input' }, ...response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <section id="terminal" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-display font-bold text-white mb-8 border-l-4 border-hacker-red pl-4">
          INTERACTIVE_SHELL
        </h2>

        <div className="w-full max-w-4xl mx-auto bg-[#0c0c0c] border border-gray-800 rounded-lg shadow-2xl overflow-hidden font-mono text-sm md:text-base">
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2 border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-500 textext-xlio/span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-96 overflow-y-auto font-mono">
            {lines.map((line, idx) => (
              <div key={idx} className={`mb-1 ${
                line.type === 'error' ? 'text-red-500' : 
                line.type === 'input' ? 'text-white' : 'text-green-500'
              }`}>
                {line.type === 'system' && <span className="text-blue-400 mr-2">[SYS]</span>}
                {line.text}
              </div>
            ))}
            
            <div className="flex items-center text-white mt-2">
              <span className="text-hacker-red mr-2">{'>'}</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none flex-1 text-white font-mono placeholder-gray-700"
                placeholder="Type 'help'..."
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;

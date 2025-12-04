import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono ${
        scrolled
          ? 'bg-black/90 backdrop-blur-sm border-b border-hacker-red/50 py-3 shadow-[0_0_15px_rgba(255,0,51,0.3)]'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className={`text-xl md:text-2xl font-bold font-display tracking-widest text-hacker-red transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-80'}`}>
           GARUDA<span className="animate-pulse">_</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative group text-gray-400 hover:text-hacker-red transition-colors duration-300 text-sm tracking-widest py-2"
            >
              <span className="inline-block transition-transform duration-300 group-hover:scale-0 group-hover:opacity-0">
                {link.name}
              </span>
              <span className="absolute inset-0 flex items-center justify-center scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 font-bold text-hacker-red drop-shadow-[0_0_5px_rgba(255,0,51,0.8)]">
                &lt;{link.name}/&gt;
              </span>
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-hacker-red focus:outline-none z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-all duration-300 transform ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} z-40`}
      >
        <div className="scanlines absolute inset-0 opacity-30 pointer-events-none"></div>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-gray-300 hover:text-hacker-red text-3xl tracking-widest font-bold font-display transition-colors relative z-10 py-2 w-full text-center active:scale-95"
          >
            {link.name}
          </a>
        ))}
        
        {/* Mobile menu decoration */}
        <div className="absolute bottom-10 text-hacker-red/50 text-xs font-mono">
            SECURE_CONNECTION_ESTABLISHED
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
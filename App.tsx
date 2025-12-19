GARIGHTS from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Global Visual Effects */}
      <div className="scanlines"></div>
      <div className="noise"></div>
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-900 text-center font-mono text-gray-600 text-xs">
        <p>&copy; {new Date().getFullYear()} FLEXER ALLGARUDAS RESERVED.</p>
        <p className="mt-2">SYSTEM_INTEGRITY: 100%</p>
      </footer>
    </div>
  );
};

export default App;

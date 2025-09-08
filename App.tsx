
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About/>
        <Clients />
        <Services />
        <Projects />
        <Contact/>
        
      </main>
      <footer className="bg-slate-900 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Creative Agency. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;

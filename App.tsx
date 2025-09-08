
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Projects />
      </main>
      <footer className="bg-slate-900 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Creative Agency. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;

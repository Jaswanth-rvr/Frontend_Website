
import React, { useState, useEffect, useRef } from 'react';
import type { ClientLogo } from '../types';

// Placeholder logos as SVG components
const LogoQuantum: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 30" {...props}><text x="50" y="20" fontFamily="Arial, sans-serif" fontSize="14" fill="currentColor" textAnchor="middle">QUANTUM</text></svg>
);
const LogoStellar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 30" {...props}><text x="50" y="20" fontFamily="Georgia, serif" fontStyle="italic" fontSize="16" fill="currentColor" textAnchor="middle">Stellar</text></svg>
);
const LogoApex: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 30" {...props}><text x="50" y="20" fontFamily="Verdana, sans-serif" fontWeight="bold" fontSize="18" fill="currentColor" textAnchor="middle">APEX</text></svg>
);
const LogoNexus: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 30" {...props}><text x="50" y="20" fontFamily="Courier New, monospace" fontSize="14" fill="currentColor" textAnchor="middle">NEXUS</text></svg>
);
const LogoZenith: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 30" {...props}><text x="50" y="20" fontFamily="Tahoma, sans-serif" letterSpacing="2" fontSize="12" fill="currentColor" textAnchor="middle">ZENITH</text></svg>
);
const LogoFusion: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 30" {...props}><text x="50" y="20" fontFamily="Impact, sans-serif" fontSize="20" fill="currentColor" textAnchor="middle">Fusion</text></svg>
);

const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Quantum', logo: LogoQuantum },
  { name: 'Stellar', logo: LogoStellar },
  { name: 'Apex', logo: LogoApex },
  { name: 'Nexus', logo: LogoNexus },
  { name: 'Zenith', logo: LogoZenith },
  { name: 'Fusion', logo: LogoFusion },
];

const Clients: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="clients" ref={sectionRef} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-gray-400 text-sm font-bold tracking-widest uppercase mb-12">
          Trusted by the world's leading companies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {CLIENT_LOGOS.map((client, index) => {
            const LogoComponent = client.logo;
            return (
              <div
                key={client.name}
                className="flex justify-center transition-all duration-500 ease-in-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <LogoComponent className="h-8 text-gray-400 hover:text-white transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;

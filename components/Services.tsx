
import React, { useState, useEffect, useRef } from 'react';
import type { Service } from '../types';

// Icons
const BrushIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
);
const CodeIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
);
const MegaphoneIcon: React.FC<{className?: string}> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.5" /></svg>
);

const SERVICES_DATA: Service[] = [
    { icon: BrushIcon, title: "UI/UX Design", description: "Crafting intuitive and beautiful user interfaces that captivate and engage your audience." },
    { icon: CodeIcon, title: "Web Development", description: "Building responsive, high-performance websites and applications with modern technologies." },
    { icon: MegaphoneIcon, title: "Digital Strategy", description: "Developing data-driven marketing strategies to accelerate growth and brand visibility." }
];

const ServiceCard: React.FC<{ service: Service; isVisible: boolean; delay: number }> = ({ service, isVisible, delay }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div 
      className="bg-slate-800 p-8 rounded-lg shadow-lg transition-all duration-500 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500/20 text-indigo-400 mb-6">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};


const Services: React.FC = () => {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Our Services</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">We provide a wide range of creative and technical services.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
                <ServiceCard key={service.title} service={service} isVisible={isVisible} delay={index * 150} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

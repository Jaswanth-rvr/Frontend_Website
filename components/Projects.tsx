
import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';

const PROJECTS_DATA: Project[] = [
    { image: "/assets/quantum.jpg", category: "Branding", title: "Quantum Dynamics Rebrand" },
    { image: "/assets/steller.jpg", category: "Web App", title: "Stellar E-commerce Platform" },
    { image: "/assets/mobile.jpg", category: "Mobile App", title: "Apex Fitness Companion" }
];

const ProjectCard: React.FC<{ project: Project; isVisible: boolean; delay: number }> = ({ project, isVisible, delay }) => {
    const { image, category, title } = project;
    return (
        <div 
            className="group rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-out"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${delay}ms`
            }}
        >
            <div className="relative">
                <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <div className="p-6 bg-slate-800">
                <p className="text-sm text-indigo-400 font-semibold mb-1">{category}</p>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
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
        <section id="projects" ref={sectionRef} className="py-24 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Featured Projects</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">A glimpse into our portfolio of successful collaborations.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectCard key={project.title} project={project} isVisible={isVisible} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
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
        <section id="about" ref={sectionRef} className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 transition-all duration-700 ease-out" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">About Our Agency</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">Innovating at the intersection of creativity and technology.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div 
                        className="transition-all duration-700 ease-out"
                        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)', transitionDelay: '200ms' }}
                    >
                        <img src="/assets/about.jpg" alt="Our Team" className="rounded-lg shadow-2xl" />
                    </div>
                    <div 
                        className="transition-all duration-700 ease-out"
                        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(30px)', transitionDelay: '400ms' }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            We are a collective of designers, developers, and strategists passionate about building exceptional digital experiences. Our approach is rooted in a deep understanding of user behavior, combined with the technical expertise to bring ambitious ideas to life. We believe in collaboration, transparency, and pushing the boundaries of what's possible.
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li><span className="font-semibold text-white">User-Centricity:</span> Placing the user at the heart of every decision.</li>
                            <li><span className="font-semibold text-white">Innovation:</span> Constantly exploring new tools and techniques.</li>
                            <li><span className="font-semibold text-white">Integrity:</span> Building lasting relationships based on trust.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


import React, { useState, useEffect, useRef } from 'react';

// Icons
const MailIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const PhoneIcon: React.FC<{className?: string}> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);

const Contact: React.FC = () => {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Thank you for your message!");
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 transition-all duration-700 ease-out" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">Have a project in mind? We'd love to hear from you.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-slate-900 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div 
                        className="transition-all duration-700 ease-out"
                        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-20px)', transitionDelay: '200ms' }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-4 text-gray-300">
                           <p className="flex items-center">
                                <MailIcon className="h-5 w-5 mr-3 text-indigo-400" />
                                <a href="mailto:hello@agency.com" className="hover:text-white">hello@agency.com</a>
                            </p>
                            <p className="flex items-center">
                                <PhoneIcon className="h-5 w-5 mr-3 text-indigo-400" />
                                <span>+1 (234) 567-890</span>
                            </p>
                        </div>
                         <p className="mt-6 text-gray-400">
                            123 Creative Lane<br />
                            Design District, DC 45678<br />
                            United States
                        </p>
                    </div>
                     <form 
                        onSubmit={handleSubmit} 
                        className="space-y-6 transition-all duration-700 ease-out"
                        style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(20px)', transitionDelay: '400ms' }}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input type="text" name="name" id="name" required className="w-full bg-slate-700 border-slate-600 rounded-md py-2 px-4 text-white focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input type="email" name="email" id="email" required className="w-full bg-slate-700 border-slate-600 rounded-md py-2 px-4 text-white focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea name="message" id="message" rows={4} required className="w-full bg-slate-700 border-slate-600 rounded-md py-2 px-4 text-white focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

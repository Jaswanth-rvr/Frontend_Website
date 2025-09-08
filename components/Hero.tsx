
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const headlineWords = ["Design", "Transform", "Accelerate"];
  const [animatedElements, setAnimatedElements] = useState({ words: [false, false, false], sub: false });

  useEffect(() => {
    const wordTimer1 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, words: [true, prev.words[1], prev.words[2]] })), 200);
    const wordTimer2 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, words: [prev.words[0], true, prev.words[2]] })), 500);
    const wordTimer3 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, words: [prev.words[0], prev.words[1], true] })), 800);
    const subTimer = setTimeout(() => setAnimatedElements(prev => ({ ...prev, sub: true })), 1100);

    return () => {
      clearTimeout(wordTimer1);
      clearTimeout(wordTimer2);
      clearTimeout(wordTimer3);
      clearTimeout(subTimer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/30 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white space-y-2 md:space-y-0">
                {headlineWords.map((word, index) => (
                    <span key={index} className="block md:inline-block md:mx-4 transition-all duration-700" style={{ opacity: animatedElements.words[index] ? 1 : 0, transform: animatedElements.words[index] ? 'translateY(0)' : 'translateY(30px)' }}>
                        {word}
                    </span>
                ))}
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 transition-all duration-700" style={{ opacity: animatedElements.sub ? 1 : 0, transform: animatedElements.sub ? 'translateY(0)' : 'translateY(20px)' }}>
                Redefining user experiences through Behavioral Science & AI
            </p>
        </div>
    </section>
  );
};

export default Hero;

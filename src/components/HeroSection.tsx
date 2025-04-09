import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Rada Sai Mourya
        </h1>
        <h2 className="text-2xl md:text-3xl text-accent mb-8 animate-fadeIn">
          Full Stack Engineer
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fadeIn">
          Crafting digital experiences with modern web technologies
        </p>
        <div className="flex justify-center gap-4 animate-fadeIn">
          <a 
            href="https://www.linkedin.com/in/radamourya7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View My Work
          </a>
          <a 
            href="mailto:radamourya7@gmail.com" 
            className="btn glass"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
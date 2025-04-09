import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="text-center w-full max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 animate-on-scroll float">
          Rada Sai Mourya
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-accent mb-6 sm:mb-8 animate-on-scroll">
          Full Stack Engineer
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4 animate-on-scroll">
          Crafting digital experiences with modern web technologies
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-on-scroll">
          <a 
            href="https://www.linkedin.com/in/radamourya7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto hover:scale-105 transition-transform duration-300"
          >
            View My Work
          </a>
          <a 
            href="mailto:radamourya7@gmail.com" 
            className="btn glass w-full sm:w-auto hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
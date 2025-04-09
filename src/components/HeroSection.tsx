import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/IMG_8039.PNG';
    
    img.onload = () => {
      console.log('Image loaded successfully');
      setImageLoaded(true);
    };
    
    img.onerror = (error) => {
      console.error('Error loading image:', error);
      setImageError(true);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">Adam</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              A passionate software developer building modern web applications
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`md:w-1/2 flex justify-center transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {imageError ? (
              <div className="text-red-500 text-center">
                <p>Failed to load profile image</p>
                <p className="text-sm">Please check the image path and file name</p>
              </div>
            ) : (
              <img
                src="/IMG_8039.PNG"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg"
                loading="eager"
                onError={(e) => {
                  console.error('Image error:', e);
                  setImageError(true);
                }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
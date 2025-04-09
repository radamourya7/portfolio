import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Animations: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  // Custom cursor animation
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;
    if (!cursor || !cursorFollower) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        gsap.to([cursor, cursorFollower], {
          scale: 1.5,
          backgroundColor: '#ffffff',
          duration: 0.3,
        });
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        gsap.to([cursor, cursorFollower], {
          scale: 1,
          backgroundColor: 'transparent',
          duration: 0.3,
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
  }, []);

  // Floating animation for elements with class 'float'
  useEffect(() => {
    const floatElements = document.querySelectorAll('.float');
    
    floatElements.forEach((element) => {
      gsap.to(element, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 rounded-full border-2 border-white pointer-events-none z-50 mix-blend-difference"
      />
      <div
        ref={cursorFollowerRef}
        className="fixed w-8 h-8 rounded-full border-2 border-white pointer-events-none z-50 mix-blend-difference"
      />
    </>
  );
};

export default Animations; 
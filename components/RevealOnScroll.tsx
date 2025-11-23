import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = "", 
  threshold = 0.1, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect immediately after revealing to free resources
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      // Performance optimizations:
      // 1. transition-opacity and transition-transform are cheaper than transition-all
      // 2. will-change-transform hints the browser to create a new layer
      className={`transition-opacity transition-transform duration-1000 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
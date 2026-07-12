import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on how far down the user has scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12
        bg-[#E6E6FA] text-brand-dark
        rounded-full border-[3px] border-brand-dark
        shadow-[4px_4px_0px_#1c1c1c]
        flex items-center justify-center
        cursor-pointer
        hover:shadow-[2px_2px_0px_#1c1c1c]
        hover:translate-x-[2px] hover:translate-y-[2px]
        active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
        transition-all duration-200 ease-out
        ${isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={3} />
    </button>
  );
}
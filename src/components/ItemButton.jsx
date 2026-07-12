import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

// Added onClick to the destructured props
export default function IconButton({ text = "Lorem ipsum", onClick }) {
  return (
    <button 
      onClick={onClick} // Pass the navigation handler here
      className="
        /* Layout & Dimensions */
        flex items-center justify-between gap-2
        min-w-[100px] h-[58px] pl-4 pr-2 
        
        /* Styling */
        bg-brand-white text-brand-dark font-bold rounded-lg uppercase tracking-wider
        
        /* Interactions */
        hover:bg-brand-white active:scale-98 transition-all duration-200
        group cursor-pointer
        cursor-pointer
      "
    >
      {/* Button Text */}
      <span className="text-sm tracking-wide">{text}</span>
      
      {/* Inner Icon Square */}
      <div 
        className="
          flex items-center justify-center
          w-[42px] h-[42px] flex-shrink-0
          bg-brand-light text-brand-dark rounded-lg
          
          /* Hover State (Transitions to Yellow) */
          group-hover:bg-brand-yellow
          overflow-hidden
          
          /* Smooth transition for background, scale, and colors */
          transition-all duration-500 ease-in-out
        "
      >
        <ArrowUpRight className="w-5 h-5 stroke-[2.5] group-hover:animate-arrow-portal" />
      </div>
    </button>
  );
}